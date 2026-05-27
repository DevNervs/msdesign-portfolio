const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

const RATE_LIMIT_WINDOW = 60_000;
const RATE_LIMIT_MAX = 5;
const ipRequests = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const record = ipRequests.get(ip);

  if (!record || now - record.windowStart > RATE_LIMIT_WINDOW) {
    ipRequests.set(ip, { windowStart: now, count: 1 });
    return false;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return true;
  }

  record.count++;
  return false;
}

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
      });
    }

    const clientIP = request.headers.get("CF-Connecting-IP") || "unknown";
    if (isRateLimited(clientIP)) {
      return new Response(
        JSON.stringify({ error: "Too many requests. Try again later." }),
        {
          status: 429,
          headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
        }
      );
    }

    try {
      const { name, contact, message } = await request.json();

      if (!name || !contact) {
        return new Response(
          JSON.stringify({ error: "Name and contact are required." }),
          {
            status: 400,
            headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
          }
        );
      }

      const textMessage =
        `<b>📩 Новая заявка MS Design</b>\n\n` +
        `<b>👤 Имя:</b> ${escapeHtml(name)}\n` +
        `<b>📞 Контакт:</b> ${escapeHtml(contact)}\n` +
        `<b>📝 Описание проекта:</b>\n${escapeHtml(message || "—")}`;

      const telegramResponse = await fetch(
        `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: env.TELEGRAM_CHAT_ID,
            text: textMessage,
            parse_mode: "HTML",
          }),
        }
      );

      if (!telegramResponse.ok) {
        const err = await telegramResponse.text();
        console.error("Telegram API error:", err);
        return new Response(
          JSON.stringify({ error: "Failed to send message." }),
          {
            status: 502,
            headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
          }
        );
      }

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
      });
    } catch (e) {
      console.error("Worker error:", e);
      return new Response(
        JSON.stringify({ error: "Internal server error." }),
        {
          status: 500,
          headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
        }
      );
    }
  },
};

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
