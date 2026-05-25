// --- КОНФИГУРАЦИЯ TELEGRAM БОТА ---
// Заполните эти данные для приема заявок от клиентов прямо в ваш Telegram.
// Инструкция по получению токена бота и Chat ID находится в планах и ответах ассистента.
const TELEGRAM_BOT_TOKEN = "8853068851:AAG1lknyjVVGipFwVFfH7zOQYyWrvzQExvs";
const TELEGRAM_CHAT_ID = "YOUR_CHAT_ID_HERE";

// --- СЛОВАРЬ ПЕРЕВОДОВ (EN / UA / ES) ---
const translations = {
    en: {
        "nav-about": "About",
        "nav-projects": "Projects",
        "nav-videos": "Videos",
        "nav-animation": "Animation",
        "nav-motion": "Motion",
        "nav-contact": "Contact",
        "hero-t1": "Bespoke",
        "hero-t2": "Conceptual",
        "hero-t3": "Design.",
        "hero-sub": "Architecture of premium visual worlds and digital experiences for brands that dictate their own rules.",
        "about-title": "Philosophy<br>of Dominance",
        "about-text": "We don't just draw pictures. We design visual codes of superiority. <strong>MS Design</strong> creates elite design that transmits unattainable status, causing awe and desire in the audience. Every detail is a strategic step towards the absolute leadership of the brand in its niche.",
        "project-cat-1": "Branding",
        "project-cat-2": "Fashion Book",
        "project-cat-3": "UI/UX Art",
        "project-cat-4": "Packaging",
        "videos-title": "Videos",
        "videos-desc": "Cinematic storytelling that captures the essence of luxury brands. High-end production with meticulous attention to every frame.",
        "animation-title": "Animation",
        "animation-desc": "Fluid visual narratives that bring ideas to life. From UI micro-interactions to full-scale animated experiences.",
        "motion-title": "Motion",
        "motion-desc": "Dynamic motion graphics that transform static visuals into captivating kinetic experiences. Titles, transitions, and visual effects.",
        "contact-title": "Let's discuss<br>your project",
        "contact-label-name": "Name",
        "contact-label-conn": "Contact (Email / TG / Phone)",
        "contact-label-msg": "Project details / Message",
        "contact-btn": "Send Request",
        "contact-sending": "Sending...",
        "success-title": "Thank you!",
        "success-desc": "Your message has been sent successfully. We will get in touch with you shortly.",
        "success-back": "Close",
        "cta-title": "Let's create a<br>cult project",
        "footer-copy": "© 2026 MS DESIGN. Shaping the future of visuals.",
        "footer-right": "Designed for Excellence.",
        "back-to-top": "Back to top",
        "error-send": "Error sending. Please try again or contact us directly."
    },
    ua: {
        "nav-about": "Про нас",
        "nav-projects": "Проекти",
        "nav-videos": "Відео",
        "nav-animation": "Анімація",
        "nav-motion": "Моушн",
        "nav-contact": "Контакти",
        "hero-t1": "Елітний",
        "hero-t2": "Концепт",
        "hero-t3": "Дизайн.",
        "hero-sub": "Архітектура преміальних візуальних світів та цифрового досвіду для брендів, які диктують власні правила.",
        "about-title": "Філософія<br>Домінування",
        "about-text": "Ми не просто малюємо картинки. Ми проектуємо візуальні коди переваги. <strong>MS Design</strong> створює елітарний дизайн, який транслює недосяжний статус, викликаючи в аудиторії трепет та бажання володіти. Кожна деталь — це стратегічний крок до абсолютного лідерства бренду в його ніші.",
        "project-cat-1": "Брендинг",
        "project-cat-2": "Дизайн Книг",
        "project-cat-3": "UI/UX Арт",
        "project-cat-4": "Упаковка",
        "videos-title": "Відео",
        "videos-desc": "Кінематографічний сторітелінг, що передає сутність люксових брендів. Преміальне виробництво з увагою до кожного кадру.",
        "animation-title": "Анімація",
        "animation-desc": "Плавні візуальні наративи, що оживляють ідеї. Від мікро-взаємодій інтерфейсу до масштабних анімаційних проектів.",
        "motion-title": "Моушн",
        "motion-desc": "Динамічна моушн-графіка, що перетворює статичні візуали на захоплюючі кінетичні переживання. Тайтли, переходи, візуальні ефекти.",
        "contact-title": "Обговорімо<br>ваш проект",
        "contact-label-name": "Ваше Ім'я",
        "contact-label-conn": "Зв'язок (Email / TG / Телефон)",
        "contact-label-msg": "Про проект / Побажання",
        "contact-btn": "Надіслати",
        "contact-sending": "Надсилання...",
        "success-title": "Дякуємо!",
        "success-desc": "Ваше повідомлення успішно надіслано. Ми зв'яжемося з вами найближчим часом.",
        "success-back": "Закрити",
        "cta-title": "Давайте створимо<br>культовий проект",
        "footer-copy": "© 2026 MS DESIGN. Створюємо майбутнє візуалу.",
        "footer-right": "Створено для досконалості.",
        "back-to-top": "Вгору",
        "error-send": "Помилка відправки. Спробуйте пізніше або зв'яжіться напряму."
    },
    es: {
        "nav-about": "Sobre mí",
        "nav-projects": "Proyectos",
        "nav-videos": "Vídeos",
        "nav-animation": "Animación",
        "nav-motion": "Movimiento",
        "nav-contact": "Contacto",
        "hero-t1": "Exclusivo",
        "hero-t2": "Concepto",
        "hero-t3": "Diseño.",
        "hero-sub": "Arquitectura de mundos visuales premium y experiencias digitales para marcas que dictan sus propias reglas.",
        "about-title": "Filosofía de<br>Dominación",
        "about-text": "No solo dibujamos imágenes. Diseñamos códigos visuales de superioridad. <strong>MS Design</strong> crea un diseño de élite que transmite un estatus inalcanzable, provocando asombro y deseo en la audiencia. Cada detalle es un paso estratégico hacia el liderazgo absoluto de la marca en su nicho.",
        "project-cat-1": "Identidad",
        "project-cat-2": "Editorial",
        "project-cat-3": "Arte UI/UX",
        "project-cat-4": "Embalaje",
        "videos-title": "Vídeos",
        "videos-desc": "Narrativa cinematográfica que captura la esencia de las marcas de lujo. Producción de alta gama con atención meticulosa a cada fotograma.",
        "animation-title": "Animación",
        "animation-desc": "Narrativas visuales fluidas que dan vida a las ideas. Desde micro-interacciones UI hasta experiencias animadas a gran escala.",
        "motion-title": "Movimiento",
        "motion-desc": "Gráficos en movimiento dinámicos que transforman los visuales estáticos en experiencias cinéticas cautivadoras. Títulos, transiciones y efectos visuales.",
        "contact-title": "Hablemos de<br>tu proyecto",
        "contact-label-name": "Nombre",
        "contact-label-conn": "Contacto (Email / TG / Teléfono)",
        "contact-label-msg": "Detalles del proyecto",
        "contact-btn": "Enviar Solicitud",
        "contact-sending": "Enviando...",
        "success-title": "¡Gracias!",
        "success-desc": "Tu mensaje ha sido enviado con éxito. Nos pondremos en contacto contigo a la brevedad.",
        "success-back": "Cerrar",
        "cta-title": "Creemos un<br>proyecto de culto",
        "footer-copy": "© 2026 MS DESIGN. Dando forma al futuro visual.",
        "footer-right": "Diseñado para la excelencia.",
        "back-to-top": "Volver arriba",
        "error-send": "Error al enviar. Inténtelo de nuevo o contáctenos directamente."
    }
};

// Инициализация библиотек GSAP
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// --- ИНТЕРАКТИВНЫЙ GRADIENT MESH ФОН ---
(function initBackgroundCanvas() {
    const canvas = document.getElementById("bg-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width, height;
    let scrollProgress = 0;
    let mouseX = 0.5, mouseY = 0.5;
    let time = 0;

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    window.addEventListener("scroll", () => {
        const docHeight = document.body.offsetHeight - window.innerHeight;
        scrollProgress = docHeight > 0 ? window.scrollY / docHeight : 0;
    });

    if (window.innerWidth > 992) {
        window.addEventListener("mousemove", (e) => {
            mouseX = e.clientX / width;
            mouseY = e.clientY / height;
        });
    }

    // Палитры для каждой зоны скролла (RGB значения — яркие, насыщенные)
    const palettes = [
        // Hero (0-20%): красные/бордовые подсветки
        { orbs: [[200, 20, 20], [150, 0, 40], [120, 30, 50]] },
        // About (20-40%): изумрудные/бирюзовые
        { orbs: [[10, 180, 140], [30, 220, 160], [5, 130, 100]] },
        // Portfolio (40-70%): глубокие синие/индиго
        { orbs: [[40, 30, 220], [150, 20, 180], [20, 60, 200]] },
        // Contact (70-90%): фиолетовые/пурпурные
        { orbs: [[180, 20, 220], [100, 10, 160], [220, 40, 180]] },
        // Footer (90-100%): обратно к красному
        { orbs: [[200, 20, 20], [150, 10, 30], [100, 20, 20]] }
    ];

    function lerpColor(a, b, t) {
        return [
            a[0] + (b[0] - a[0]) * t,
            a[1] + (b[1] - a[1]) * t,
            a[2] + (b[2] - a[2]) * t
        ];
    }

    function getCurrentPalette() {
        const zones = palettes.length - 1;
        const rawIndex = scrollProgress * zones;
        const index = Math.min(Math.floor(rawIndex), zones - 1);
        const t = rawIndex - index;
        const from = palettes[index];
        const to = palettes[Math.min(index + 1, zones)];
        return {
            orbs: from.orbs.map((c, i) => lerpColor(c, to.orbs[i], t))
        };
    }

    // Описание орбов (градиентных пятен)
    const orbs = [
        { x: 0.15, y: 0.25, radius: 0.55, speedX: 0.4, speedY: 0.25, phaseX: 0, phaseY: 0.5 },
        { x: 0.75, y: 0.55, radius: 0.5, speedX: 0.25, speedY: 0.4, phaseX: 1.5, phaseY: 1.0 },
        { x: 0.5, y: 0.8, radius: 0.45, speedX: 0.3, speedY: 0.2, phaseX: 3.0, phaseY: 2.0 }
    ];

    function drawFrame() {
        time += 0.003;
        ctx.clearRect(0, 0, width, height);

        const palette = getCurrentPalette();

        orbs.forEach((orb, i) => {
            // Плавное движение по синусоиде + реакция на мышь
            const offsetX = Math.sin(time * orb.speedX + orb.phaseX) * 0.15;
            const offsetY = Math.cos(time * orb.speedY + orb.phaseY) * 0.12;
            
            // Лёгкое притяжение к курсору на десктопе
            const mouseInfluence = window.innerWidth > 992 ? 0.08 : 0;
            const cx = (orb.x + offsetX + (mouseX - 0.5) * mouseInfluence) * width;
            const cy = (orb.y + offsetY + (mouseY - 0.5) * mouseInfluence) * height;
            const r = orb.radius * Math.max(width, height);

            const color = palette.orbs[i];
            const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
            gradient.addColorStop(0, `rgba(${Math.round(color[0])}, ${Math.round(color[1])}, ${Math.round(color[2])}, 0.85)`);
            gradient.addColorStop(0.4, `rgba(${Math.round(color[0])}, ${Math.round(color[1])}, ${Math.round(color[2])}, 0.3)`);
            gradient.addColorStop(0.7, `rgba(${Math.round(color[0] * 0.5)}, ${Math.round(color[1] * 0.5)}, ${Math.round(color[2] * 0.5)}, 0.1)`);
            gradient.addColorStop(1, `rgba(0, 0, 0, 0)`);

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);
        });

        requestAnimationFrame(drawFrame);
    }

    drawFrame();
})();


document.addEventListener("DOMContentLoaded", () => {
    // --- ПРЕДОХРАНИТЕЛЬ ПРЕЛОАДЕРА (Отказоустойчивость) ---
    // Если GSAP зависнет или не загрузится, принудительно разблокируем сайт через 3.5 секунды
    let preloaderCompleted = false;
    const fallbackTimeout = setTimeout(() => {
        if (!preloaderCompleted) {
            console.warn("Preloader fallback activated.");
            unlockSite();
        }
    }, 3500);

    function unlockSite() {
        preloaderCompleted = true;
        clearTimeout(fallbackTimeout);
        document.body.style.overflowY = "auto";
        const preloader = document.getElementById("preloader");
        if (preloader) {
            gsap.to(preloader, {
                yPercent: -100,
                duration: 1.0,
                ease: "power4.inOut",
                onComplete: () => {
                    preloader.style.display = "none";
                    initHeroAnimation();
                }
            });
        }
    }

    // --- ЛОГИКА ПРЕЛОАДЕРА ---
    let loadProgress = { val: 0 };
    const counterEl = document.getElementById('counter');
    const preloaderEl = document.getElementById('preloader');
    const preloaderBg = document.getElementById('preloader-bg');

    if (counterEl && preloaderEl && preloaderBg) {
        gsap.to(loadProgress, {
            val: 100,
            duration: 2.0,
            ease: "power2.inOut",
            onUpdate: function() {
                counterEl.innerText = Math.floor(loadProgress.val) + "%";
                gsap.set(preloaderBg, { scaleY: loadProgress.val / 100 });
            },
            onComplete: function() {
                gsap.to(counterEl, { opacity: 0, duration: 0.4 });
                unlockSite();
            }
        });
    } else {
        unlockSite();
    }

    // --- МУЛЬТИЯЗЫЧНОСТЬ (Логика смены языков) ---
    let storedLang = localStorage.getItem("selectedLang");
    let currentLang = (storedLang && translations[storedLang]) ? storedLang : "en";
    
    function applyLanguage(lang, animate = false) {
        if (!translations[lang]) lang = "en";
        currentLang = lang;
        localStorage.setItem("selectedLang", lang);

        // Обновляем статус кнопок переключателя
        document.querySelectorAll(".lang-btn").forEach(btn => {
            if (btn.dataset.lang === lang) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
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
            // Разделяем элементы на видимые и скрытые
            const visible = [];
            const hidden = [];
            elements.forEach(el => {
                const style = window.getComputedStyle(el);
                if (parseFloat(style.opacity) > 0 && style.display !== "none") {
                    visible.push(el);
                } else {
                    hidden.push(el);
                }
            });

            // Скрытым элементам просто меняем текст без анимации
            hidden.forEach(el => setTextContent(el, el.dataset.i18n));

            // Видимые элементы анимируем через timeline
            if (visible.length > 0) {
                const tl = gsap.timeline();
                tl.to(visible, {
                    opacity: 0,
                    duration: 0.25,
                    ease: "power2.in"
                });
                tl.call(() => {
                    visible.forEach(el => setTextContent(el, el.dataset.i18n));
                    updateScrambleTexts();
                });
                tl.to(visible, {
                    opacity: 1,
                    duration: 0.35,
                    ease: "power2.out"
                });
            } else {
                elements.forEach(el => setTextContent(el, el.dataset.i18n));
                updateScrambleTexts();
            }
        } else {
            elements.forEach(el => setTextContent(el, el.dataset.i18n));
            updateScrambleTexts();
        }
    }

    // Слушатели событий на кнопки смены языка
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const selected = e.target.dataset.lang;
            if (selected !== currentLang) {
                applyLanguage(selected, true);
            }
        });
    });

    // Инициализация языка при загрузке
    applyLanguage(currentLang, false);


    // --- ИСПРАВЛЕННЫЙ SCRAMBLE ЭФФЕКТ ---
    // Текст считывается динамически (поддержка мультиязычности)
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*";
    
    // Функция обновления scramble-текстов при смене языка
    function updateScrambleTexts() {
        document.querySelectorAll('.scramble').forEach(el => {
            el._scrambleOriginal = el.innerText;
        });
    }

    document.querySelectorAll('.scramble').forEach(el => {
        el._scrambleOriginal = el.innerText;
        
        el.addEventListener('mouseenter', () => {
            if (el.scrambleInterval) {
                clearInterval(el.scrambleInterval);
            }

            const targetText = el._scrambleOriginal;
            let iterations = 0;
            
            el.scrambleInterval = setInterval(() => {
                el.innerText = targetText.split("")
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

        el.addEventListener('mouseleave', () => {
            if (el.scrambleInterval) {
                clearInterval(el.scrambleInterval);
                el.scrambleInterval = null;
            }
            el.innerText = el._scrambleOriginal;
        });
    });


    // --- МОБИЛЬНОЕ МЕНЮ (БУРГЕР) ---
    const burgerBtn = document.getElementById("burger-btn");
    const navContainer = document.getElementById("nav-container");
    const navLinks = document.querySelectorAll("nav a");

    if (burgerBtn && navContainer) {
        burgerBtn.addEventListener("click", () => {
            burgerBtn.classList.toggle("active");
            navContainer.classList.toggle("active");
            
            // Если открыли мобильное меню — блокируем скролл на мобилке
            if (navContainer.classList.contains("active")) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "";
            }
        });

        // Закрываем меню при клике на ссылки
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                burgerBtn.classList.remove("active");
                navContainer.classList.remove("active");
                document.body.style.overflow = "";
            });
        });
    }


    // --- ЛОГИКА КУРСОРОВ И ТРОТТЛИНГ ---
    if (window.innerWidth > 992) {
        const cursor = document.getElementById('cursor');
        const cursorDot = document.getElementById('cursor-dot');
        const scrollProgress = document.getElementById('scroll-progress');
        const circumference = 207;

        if (cursor && cursorDot && scrollProgress) {
            gsap.set(cursor, { xPercent: -50, yPercent: -50 });

            let mouseX = 0, mouseY = 0;
            
            // Использование requestAnimationFrame для троттлинга перемещения курсора
            window.addEventListener('mousemove', e => {
                mouseX = e.clientX;
                mouseY = e.clientY;
            });

            gsap.ticker.add(() => {
                gsap.to(cursor, { x: mouseX, y: mouseY, duration: 0.15, ease: "power2.out", overwrite: "auto" });
            });

            window.addEventListener('scroll', () => {
                const scrollTop = window.scrollY;
                const docHeight = document.body.offsetHeight - window.innerHeight;
                const scrollPercent = scrollTop / (docHeight || 1);
                const drawLength = circumference - (scrollPercent * circumference);
                scrollProgress.style.strokeDashoffset = drawLength;
            });

            // Наведение на ссылки и кнопки для увеличения курсора
            document.querySelectorAll('a, button, input, textarea, .lang-btn').forEach(interactiveEl => {
                interactiveEl.addEventListener('mouseenter', () => gsap.to(cursorDot, { scale: 4, duration: 0.3 }));
                interactiveEl.addEventListener('mouseleave', () => gsap.to(cursorDot, { scale: 1, duration: 0.3 }));
            });
        }
    }


    // --- ВВОДНАЯ АНИМАЦИЯ ---
    function initHeroAnimation() {
        const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.5 } });
        tl.to('.hero-title', { opacity: 1, y: 0, scale: 1 })
          .to('.hero-subtitle', { opacity: 1, y: 0 }, "-=1");
    }


    // --- ПЛАВНЫЕ ПЕРЕХОДЫ И СКРОЛЛ-АНИМАЦИИ ---

    // Наклон карточек при скролле (Только для ПК)
    if (window.innerWidth > 992) {
        let proxy = { skew: 0 },
            skewSetter = gsap.quickSetter(".project-img-wrapper", "skewY", "deg"),
            clamp = gsap.utils.clamp(-8, 8);

        ScrollTrigger.create({
            onUpdate: (self) => {
                let skew = clamp(self.getVelocity() / -500);
                if (Math.abs(skew) > Math.abs(proxy.skew)) {
                    proxy.skew = skew;
                    gsap.to(proxy, { 
                        skew: 0, 
                        duration: 0.8, 
                        ease: "power3.out", 
                        overwrite: "auto", 
                        onUpdate: () => skewSetter(proxy.skew) 
                    });
                }
            }
        });
    }

    // Параллакс картинок
    document.querySelectorAll('.par-container').forEach(container => {
        const image = container.querySelector('.par-image');
        if (image) {
            gsap.to(image, { 
                yPercent: 15, 
                ease: "none", 
                scrollTrigger: { 
                    trigger: container, 
                    start: "top bottom", 
                    end: "bottom top", 
                    scrub: true 
                }
            });
        }
    });

    // Появление блоков
    document.querySelectorAll('.gs-reveal').forEach(elem => {
        gsap.from(elem, { 
            y: 50, 
            opacity: 0, 
            duration: 1, 
            ease: "power3.out", 
            scrollTrigger: { 
                trigger: elem, 
                start: "top 85%", 
                toggleActions: "play none none none" 
            }
        });
    });

    // Магнитные кнопки (Только для ПК с троттлингом)
    if (window.innerWidth > 992) {
        document.querySelectorAll('.magnetic').forEach(elem => {
            elem.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const strength = this.dataset.strength || 30;
                const deltaX = (e.clientX - (rect.left + rect.width / 2)) * strength / rect.width;
                const deltaY = (e.clientY - (rect.top + rect.height / 2)) * strength / rect.height;
                gsap.to(this, { x: deltaX, y: deltaY, duration: 0.5, ease: "power2.out" });
            });
            elem.addEventListener('mouseleave', function() { 
                gsap.to(this, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.3)" }); 
            });
        });
    }

    // Плавный скролл ссылок
    document.querySelectorAll('.js-nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            gsap.to(window, { 
                scrollTo: { y: targetId, offsetY: 0 }, 
                duration: 1.5, 
                ease: "power4.inOut" 
            });
        });
    });

    // Кнопка "Вернуться наверх"
    document.querySelectorAll('.back-to-top').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            gsap.to(window, { 
                scrollTo: { y: 0 }, 
                duration: 1.5, 
                ease: "power4.inOut" 
            });
        });
    });


    // --- ИНТЕГРАЦИЯ ОТПРАВКИ ФОРМЫ В TELEGRAM ---
    const contactForm = document.getElementById("contact-form");
    const formSubmitBtn = document.getElementById("form-submit-btn");
    const successWrapper = document.getElementById("form-success-wrapper");
    const closeSuccessBtn = document.getElementById("close-success-btn");

    if (contactForm && formSubmitBtn && successWrapper) {
        contactForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            // Валидация и сбор данных
            const name = document.getElementById("client-name").value.trim();
            const contact = document.getElementById("client-contact").value.trim();
            const message = document.getElementById("client-message").value.trim();

            if (!name || !contact) {
                return;
            }

            // Переводим кнопку в режим загрузки
            const originalBtnText = formSubmitBtn.innerHTML;
            formSubmitBtn.disabled = true;
            formSubmitBtn.innerText = translations[currentLang]["contact-sending"] || "Sending...";

            // Составляем сообщение для Telegram
            const textMessage = `<b>📩 Новая заявка MS Design</b>\n\n` +
                                `<b>👤 Имя:</b> ${name}\n` +
                                `<b>📞 Контакт:</b> ${contact}\n` +
                                `<b>📝 Описание проекта:</b>\n${message || '—'}`;

            try {
                // Если константы токена не дефолтные, отправляем в бота
                if (TELEGRAM_BOT_TOKEN !== "YOUR_BOT_TOKEN_HERE" && TELEGRAM_CHAT_ID !== "YOUR_CHAT_ID_HERE") {
                    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            chat_id: TELEGRAM_CHAT_ID,
                            text: textMessage,
                            parse_mode: "HTML"
                        })
                    });

                    if (!response.ok) {
                        throw new Error("Telegram API request failed.");
                    }
                } else {
                    // Имитация отправки для режима тестирования (локально)
                    console.log("Telegram Bot credentials are not set. Logging data:");
                    console.log(textMessage);
                    await new Promise(resolve => setTimeout(resolve, 1200)); // Имитация задержки сети
                }

                // Успешная отправка: показываем оверлей успеха с помощью GSAP
                gsap.set(successWrapper, { display: "flex", opacity: 0 });
                gsap.to(successWrapper, { 
                    opacity: 1, 
                    duration: 0.5, 
                    ease: "power2.out",
                    onComplete: () => {
                        contactForm.reset();
                        // Сбрасываем плавающие лейблы обратно
                        document.querySelectorAll(".form-input").forEach(input => {
                            input.blur();
                        });
                    }
                });
            } catch (err) {
                console.error(err);
                alert(translations[currentLang]["error-send"] || "Error sending message.");
            } finally {
                // Возвращаем кнопку в исходное состояние
                formSubmitBtn.disabled = false;
                formSubmitBtn.innerHTML = originalBtnText;
            }
        });

        // Закрытие оверлея успеха
        if (closeSuccessBtn) {
            closeSuccessBtn.addEventListener("click", () => {
                gsap.to(successWrapper, {
                    opacity: 0,
                    duration: 0.4,
                    ease: "power2.in",
                    onComplete: () => {
                        successWrapper.style.display = "none";
                    }
                });
            });
        }
    }
});
