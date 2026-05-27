import gsap from "gsap";

const translations = {
  en: {
    "nav-about": "About",
    "nav-animation": "Animation",
    "nav-motion": "Motion",
    "nav-contact": "Contact",
    "hero-t1": "<span class='serif-italic'>Bespoke</span>",
    "hero-t2": "Conceptual",
    "hero-t3": "Design.",
    "hero-sub": "Architecture of premium visual worlds and digital experiences for brands that dictate their own rules.",
    "about-title": "Philosophy<br>of <span class='serif-italic'>Dominance</span>",
    "about-text": "We don't just draw pictures. We design visual codes of superiority. <strong>MS Design</strong> creates elite design that transmits unattainable status, causing awe and desire in the audience. Every detail is a strategic step towards the absolute leadership of the brand in its niche.",
    "stat-years": "Years of Excellence",
    "stat-projects": "Projects Delivered",
    "stat-clients": "Happy Clients",
    "animation-title": "Animation",
    "animation-desc": "Fluid visual narratives that bring ideas to life. From UI micro-interactions to full-scale animated experiences.",
    "motion-title": "Motion",
    "motion-desc": "Dynamic motion graphics that transform static visuals into captivating kinetic experiences. Titles, transitions, and visual effects.",
    "contact-title": "Let's discuss<br>your <span class='serif-italic'>project</span>",
    "contact-label-name": "Name",
    "contact-label-conn": "Contact (Email / TG / Phone)",
    "contact-label-msg": "Project details / Message",
    "contact-btn": "Send Request",
    "contact-sending": "Sending...",
    "success-title": "Thank you!",
    "success-desc": "Your message has been sent successfully. We will get in touch with you shortly.",
    "success-back": "Close",
    "cta-title": "Let's create a<br><span class='serif-italic'>cult project</span>",
    "footer-copy": "\u00a9 2026 MS DESIGN. Shaping the future of visuals.",
    "footer-right": "Designed for Excellence.",
    "back-to-top": "Back to top",
    "error-send": "Error sending. Please try again or contact us directly.",
  },
  ua: {
    "nav-about": "\u041f\u0440\u043e \u043d\u0430\u0441",
    "nav-animation": "\u0410\u043d\u0456\u043c\u0430\u0446\u0456\u044f",
    "nav-motion": "\u041c\u043e\u0443\u0448\u043d",
    "nav-contact": "\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438",
    "hero-t1": "<span class='serif-italic'>\u0415\u043b\u0456\u0442\u043d\u0438\u0439</span>",
    "hero-t2": "\u041a\u043e\u043d\u0446\u0435\u043f\u0442",
    "hero-t3": "\u0414\u0438\u0437\u0430\u0439\u043d.",
    "hero-sub": "\u0410\u0440\u0445\u0456\u0442\u0435\u043a\u0442\u0443\u0440\u0430 \u043f\u0440\u0435\u043c\u0456\u0430\u043b\u044c\u043d\u0438\u0445 \u0432\u0456\u0437\u0443\u0430\u043b\u044c\u043d\u0438\u0445 \u0441\u0432\u0456\u0442\u0456\u0432 \u0442\u0430 \u0446\u0438\u0444\u0440\u043e\u0432\u043e\u0433\u043e \u0434\u043e\u0441\u0432\u0456\u0434\u0443 \u0434\u043b\u044f \u0431\u0440\u0435\u043d\u0434\u0456\u0432, \u044f\u043a\u0456 \u0434\u0438\u043a\u0442\u0443\u044e\u0442\u044c \u0432\u043b\u0430\u0441\u043d\u0456 \u043f\u0440\u0430\u0432\u0438\u043b\u0430.",
    "about-title": "\u0424\u0456\u043b\u043e\u0441\u043e\u0444\u0456\u044f<br><span class='serif-italic'>\u0414\u043e\u043c\u0456\u043d\u0443\u0432\u0430\u043d\u043d\u044f</span>",
    "about-text": "\u041c\u0438 \u043d\u0435 \u043f\u0440\u043e\u0441\u0442\u043e \u043c\u0430\u043b\u044e\u0454\u043c\u043e \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438. \u041c\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u0443\u0454\u043c\u043e \u0432\u0456\u0437\u0443\u0430\u043b\u044c\u043d\u0456 \u043a\u043e\u0434\u0438 \u043f\u0435\u0440\u0435\u0432\u0430\u0433\u0438. <strong>MS Design</strong> \u0441\u0442\u0432\u043e\u0440\u044e\u0454 \u0435\u043b\u0456\u0442\u0430\u0440\u043d\u0438\u0439 \u0434\u0438\u0437\u0430\u0439\u043d, \u044f\u043a\u0438\u0439 \u0442\u0440\u0430\u043d\u0441\u043b\u044e\u0454 \u043d\u0435\u0434\u043e\u0441\u044f\u0436\u043d\u0438\u0439 \u0441\u0442\u0430\u0442\u0443\u0441, \u0432\u0438\u043a\u043b\u0438\u043a\u0430\u044e\u0447\u0438 \u0432 \u0430\u0443\u0434\u0438\u0442\u043e\u0440\u0456\u0457 \u0442\u0440\u0435\u043f\u0435\u0442 \u0442\u0430 \u0431\u0430\u0436\u0430\u043d\u043d\u044f \u0432\u043e\u043b\u043e\u0434\u0456\u0442\u0438. \u041a\u043e\u0436\u043d\u0430 \u0434\u0435\u0442\u0430\u043b\u044c \u2014 \u0446\u0435 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0456\u0447\u043d\u0438\u0439 \u043a\u0440\u043e\u043a \u0434\u043e \u0430\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u043e\u0433\u043e \u043b\u0456\u0434\u0435\u0440\u0441\u0442\u0432\u0430 \u0431\u0440\u0435\u043d\u0434\u0443 \u0432 \u0439\u043e\u0433\u043e \u043d\u0456\u0448\u0456.",
    "stat-years": "\u0420\u043e\u043a\u0456\u0432 \u0414\u043e\u0441\u0432\u0456\u0434\u0443",
    "stat-projects": "\u041f\u0440\u043e\u0435\u043a\u0442\u0456\u0432 \u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043e",
    "stat-clients": "\u0417\u0430\u0434\u043e\u0432\u043e\u043b\u0435\u043d\u0438\u0445 \u041a\u043b\u0456\u0454\u043d\u0442\u0456\u0432",
    "animation-title": "\u0410\u043d\u0456\u043c\u0430\u0446\u0456\u044f",
    "animation-desc": "\u041f\u043b\u0430\u0432\u043d\u0456 \u0432\u0456\u0437\u0443\u0430\u043b\u044c\u043d\u0456 \u043d\u0430\u0440\u0430\u0442\u0438\u0432\u0438, \u0449\u043e \u043e\u0436\u0438\u0432\u043b\u044e\u044e\u0442\u044c \u0456\u0434\u0435\u0457. \u0412\u0456\u0434 \u043c\u0456\u043a\u0440\u043e-\u0432\u0437\u0430\u0454\u043c\u043e\u0434\u0456\u0439 \u0456\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0443 \u0434\u043e \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u043d\u0438\u0445 \u0430\u043d\u0456\u043c\u0430\u0446\u0456\u0439\u043d\u0438\u0445 \u043f\u0440\u043e\u0435\u043a\u0442\u0456\u0432.",
    "motion-title": "\u041c\u043e\u0443\u0448\u043d",
    "motion-desc": "\u0414\u0438\u043d\u0430\u043c\u0456\u0447\u043d\u0430 \u043c\u043e\u0443\u0448\u043d-\u0433\u0440\u0430\u0444\u0456\u043a\u0430, \u0449\u043e \u043f\u0435\u0440\u0435\u0442\u0432\u043e\u0440\u044e\u0454 \u0441\u0442\u0430\u0442\u0438\u0447\u043d\u0456 \u0432\u0456\u0437\u0443\u0430\u043b\u0438 \u043d\u0430 \u0437\u0430\u0445\u043e\u043f\u043b\u044e\u044e\u0447\u0456 \u043a\u0456\u043d\u0435\u0442\u0438\u0447\u043d\u0456 \u043f\u0435\u0440\u0435\u0436\u0438\u0432\u0430\u043d\u043d\u044f. \u0422\u0430\u0439\u0442\u043b\u0438, \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0438, \u0432\u0456\u0437\u0443\u0430\u043b\u044c\u043d\u0456 \u0435\u0444\u0435\u043a\u0442\u0438.",
    "contact-title": "\u041e\u0431\u0433\u043e\u0432\u043e\u0440\u0456\u043c\u043e<br>\u0432\u0430\u0448 <span class='serif-italic'>\u043f\u0440\u043e\u0435\u043a\u0442</span>",
    "contact-label-name": "\u0412\u0430\u0448\u0435 \u0406\u043c'\u044f",
    "contact-label-conn": "\u0417\u0432'\u044f\u0437\u043e\u043a (Email / TG / \u0422\u0435\u043b\u0435\u0444\u043e\u043d)",
    "contact-label-msg": "\u041f\u0440\u043e \u043f\u0440\u043e\u0435\u043a\u0442 / \u041f\u043e\u0431\u0430\u0436\u0430\u043d\u043d\u044f",
    "contact-btn": "\u041d\u0430\u0434\u0456\u0441\u043b\u0430\u0442\u0438",
    "contact-sending": "\u041d\u0430\u0434\u0441\u0438\u043b\u0430\u043d\u043d\u044f...",
    "success-title": "\u0414\u044f\u043a\u0443\u0454\u043c\u043e!",
    "success-desc": "\u0412\u0430\u0448\u0435 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f \u0443\u0441\u043f\u0456\u0448\u043d\u043e \u043d\u0430\u0434\u0456\u0441\u043b\u0430\u043d\u043e. \u041c\u0438 \u0437\u0432'\u044f\u0436\u0435\u043c\u043e\u0441\u044f \u0437 \u0432\u0430\u043c\u0438 \u043d\u0430\u0439\u0431\u043b\u0438\u0436\u0447\u0438\u043c \u0447\u0430\u0441\u043e\u043c.",
    "success-back": "\u0417\u0430\u043a\u0440\u0438\u0442\u0438",
    "cta-title": "\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u0441\u0442\u0432\u043e\u0440\u0438\u043c\u043e<br><span class='serif-italic'>\u043a\u0443\u043b\u044c\u0442\u043e\u0432\u0438\u0439 \u043f\u0440\u043e\u0435\u043a\u0442</span>",
    "footer-copy": "\u00a9 2026 MS DESIGN. \u0421\u0442\u0432\u043e\u0440\u044e\u0454\u043c\u043e \u043c\u0430\u0439\u0431\u0443\u0442\u043d\u0454 \u0432\u0456\u0437\u0443\u0430\u043b\u0443.",
    "footer-right": "\u0421\u0442\u0432\u043e\u0440\u0435\u043d\u043e \u0434\u043b\u044f \u0434\u043e\u0441\u043a\u043e\u043d\u0430\u043b\u043e\u0441\u0442\u0456.",
    "back-to-top": "\u0412\u0433\u043e\u0440\u0443",
    "error-send": "\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u043a\u0438. \u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u0456\u0437\u043d\u0456\u0448\u0435 \u0430\u0431\u043e \u0437\u0432'\u044f\u0436\u0456\u0442\u044c\u0441\u044f \u043d\u0430\u043f\u0440\u044f\u043c\u0443.",
  },
  es: {
    "nav-about": "Nosotros",
    "nav-animation": "Animaci\u00f3n",
    "nav-motion": "Movimiento",
    "nav-contact": "Contacto",
    "hero-t1": "<span class='serif-italic'>Exclusivo</span>",
    "hero-t2": "Concepto",
    "hero-t3": "Dise\u00f1o.",
    "hero-sub": "Arquitectura de mundos visuales premium y experiencias digitales para marcas que dictan sus propias reglas.",
    "about-title": "Filosof\u00eda de<br><span class='serif-italic'>Dominaci\u00f3n</span>",
    "about-text": "No solo dibujamos im\u00e1genes. Dise\u00f1amos c\u00f3digos visuales de superioridad. <strong>MS Design</strong> crea un dise\u00f1o de \u00e9lite que transmite un estatus inalcanzable, provocando asombro y deseo en la audiencia. Cada detalle es un paso estrat\u00e9gico hacia el liderazgo absoluto de la marca en su nicho.",
    "stat-years": "A\u00f1os de Excelencia",
    "stat-projects": "Proyectos Entregados",
    "stat-clients": "Clientes Satisfechos",
    "animation-title": "Animaci\u00f3n",
    "animation-desc": "Narrativas visuales fluidas que dan vida a las ideas. Desde micro-interacciones UI hasta experiencias animadas a gran escala.",
    "motion-title": "Movimiento",
    "motion-desc": "Gr\u00e1ficos en movimiento din\u00e1micos que transforman los visuales est\u00e1ticos en experiencias cin\u00e9ticas cautivadoras. T\u00edtulos, transiciones y efectos visuales.",
    "contact-title": "Hablemos de<br>tu <span class='serif-italic'>proyecto</span>",
    "contact-label-name": "Nombre",
    "contact-label-conn": "Contacto (Email / TG / Tel\u00e9fono)",
    "contact-label-msg": "Detalles del proyecto",
    "contact-btn": "Enviar Solicitud",
    "contact-sending": "Enviando...",
    "success-title": "\u00a1Gracias!",
    "success-desc": "Tu mensaje ha sido enviado con \u00e9xito. Nos pondremos en contacto contigo a la brevedad.",
    "success-back": "Cerrar",
    "cta-title": "Creemos un<br>proyecto de culto",
    "footer-copy": "\u00a9 2026 MS DESIGN. Dando forma al futuro visual.",
    "footer-right": "Dise\u00f1ado para la excelencia.",
    "back-to-top": "Volver arriba",
    "error-send": "Error al enviar. Int\u00e9ntelo de nuevo o cont\u00e1ctenos directamente.",
  },
};

let currentLang = "en";

export function getCurrentLang() {
  return currentLang;
}

export function getTranslation(key) {
  return translations[currentLang]?.[key] || translations.en[key] || key;
}

export function initI18n() {
  let storedLang = localStorage.getItem("selectedLang");
  currentLang = storedLang && translations[storedLang] ? storedLang : "en";

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const selected = e.target.dataset.lang;
      if (selected !== currentLang) {
        applyLanguage(selected, true);
      }
    });
  });

  applyLanguage(currentLang, false);
}

function applyLanguage(lang, animate = false) {
  if (!translations[lang]) lang = "en";
  currentLang = lang;
  localStorage.setItem("selectedLang", lang);

  document.documentElement.lang = lang === "ua" ? "uk" : lang;

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  const elements = document.querySelectorAll("[data-i18n]");

  function setTextContent(el, key) {
    if (!translations[lang][key]) return;
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      el.placeholder = " ";
    } else {
      el.innerHTML = translations[lang][key];
    }
  }

  if (animate && elements.length > 0) {
    const visible = [];
    const hidden = [];
    elements.forEach((el) => {
      const style = window.getComputedStyle(el);
      if (parseFloat(style.opacity) > 0 && style.display !== "none") {
        visible.push(el);
      } else {
        hidden.push(el);
      }
    });

    hidden.forEach((el) => setTextContent(el, el.dataset.i18n));

    if (visible.length > 0) {
      const tl = gsap.timeline();
      tl.to(visible, { opacity: 0, duration: 0.25, ease: "power2.in" });
      tl.call(() => {
        visible.forEach((el) => setTextContent(el, el.dataset.i18n));
        updateScrambleTexts();
      });
      tl.to(visible, { opacity: 1, duration: 0.35, ease: "power2.out" });
    } else {
      elements.forEach((el) => setTextContent(el, el.dataset.i18n));
      updateScrambleTexts();
    }
  } else {
    elements.forEach((el) => setTextContent(el, el.dataset.i18n));
    updateScrambleTexts();
  }
}

function updateScrambleTexts() {
  document.querySelectorAll(".scramble").forEach((el) => {
    el._scrambleOriginal = el.innerText;
  });
}

export function initScrambleEffect() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*";

  document.querySelectorAll(".scramble").forEach((el) => {
    el._scrambleOriginal = el.innerText;

    el.addEventListener("mouseenter", () => {
      if (el.scrambleInterval) clearInterval(el.scrambleInterval);

      const targetText = el._scrambleOriginal;
      let iterations = 0;

      el.scrambleInterval = setInterval(() => {
        el.innerText = targetText
          .split("")
          .map((letter, index) => {
            if (index < iterations) return targetText[index];
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("");

        if (iterations >= targetText.length) {
          clearInterval(el.scrambleInterval);
          el.scrambleInterval = null;
        }
        iterations += 1 / 3;
      }, 30);
    });

    el.addEventListener("mouseleave", () => {
      if (el.scrambleInterval) {
        clearInterval(el.scrambleInterval);
        el.scrambleInterval = null;
      }
      el.innerText = el._scrambleOriginal;
    });
  });
}
