import gsap from "gsap";
import { getCurrentLang, getTranslation } from "./i18n.js";

const WORKER_URL = "https://msdesign-telegram-proxy.YOUR_SUBDOMAIN.workers.dev";

export function initContactForm() {
  const contactForm = document.getElementById("contact-form");
  const formSubmitBtn = document.getElementById("form-submit-btn");
  const successWrapper = document.getElementById("form-success-wrapper");
  const closeSuccessBtn = document.getElementById("close-success-btn");

  if (!contactForm || !formSubmitBtn || !successWrapper) return;

  // Auto-resize textarea
  const textarea = document.getElementById("client-message");
  if (textarea) {
    textarea.addEventListener("input", function () {
      this.style.height = "auto";
      this.style.height = Math.min(this.scrollHeight, 300) + "px";
    });
  }

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("client-name").value.trim();
    const contact = document.getElementById("client-contact").value.trim();
    const message = document.getElementById("client-message").value.trim();

    if (!name || !contact) return;

    // Validate contact field
    if (!isValidContact(contact)) {
      showToast(getTranslation("error-send"), "error");
      return;
    }

    const originalBtnText = formSubmitBtn.innerHTML;
    formSubmitBtn.disabled = true;
    formSubmitBtn.innerText = getTranslation("contact-sending");

    try {
      const response = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact, message }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Request failed");
      }

      gsap.set(successWrapper, { display: "flex", opacity: 0 });
      gsap.to(successWrapper, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => {
          contactForm.reset();
          document.querySelectorAll(".form-input").forEach((input) => input.blur());
          if (textarea) textarea.style.height = "";
        },
      });
    } catch (err) {
      console.error(err);
      showToast(getTranslation("error-send"), "error");
    } finally {
      formSubmitBtn.disabled = false;
      formSubmitBtn.innerHTML = originalBtnText;
    }
  });

  if (closeSuccessBtn) {
    closeSuccessBtn.addEventListener("click", () => {
      gsap.to(successWrapper, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => (successWrapper.style.display = "none"),
      });
    });
  }
}

function isValidContact(value) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[+]?[\d\s\-()]{7,}$/;
  const tgRegex = /^@[\w]{4,}$/;
  return emailRegex.test(value) || phoneRegex.test(value) || tgRegex.test(value);
}

function showToast(message, type = "info") {
  const existing = document.querySelector(".toast-notification");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.className = `toast-notification toast-${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  gsap.fromTo(toast, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });

  setTimeout(() => {
    gsap.to(toast, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => toast.remove(),
    });
  }, 4000);
}
