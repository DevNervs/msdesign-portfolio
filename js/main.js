// --- КОНФИГУРАЦИЯ TELEGRAM БОТА ---
// Заполните эти данные для приема заявок от клиентов прямо в ваш Telegram.
// Инструкция по получению токена бота и Chat ID находится в планах и ответах ассистента.
const TELEGRAM_BOT_TOKEN = ""; // Замаскировано для безопасности каркаса
const TELEGRAM_CHAT_ID = ""; // Укажите ваш Chat ID при продакшн развертывании

// --- СЛОВАРЬ ПЕРЕВОДОВ (EN / UA / ES) ---
const translations = {
    en: {
        "nav-about": "About",
        "nav-videos": "Videos",
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
        "videos-title": "Videos",
        "videos-desc": "Cinematic storytelling that captures the essence of luxury brands. High-end production with meticulous attention to every frame.",
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
        "footer-copy": "© 2026 MS DESIGN. Shaping the future of visuals.",
        "footer-right": "Designed for Excellence.",
        "back-to-top": "Back to top",
        "error-send": "Error sending. Please try again or contact us directly."
    },
    ua: {
        "nav-about": "Про нас",
        "nav-videos": "Відео",
        "nav-animation": "Анімація",
        "nav-motion": "Моушн",
        "nav-contact": "Контакти",
        "hero-t1": "<span class='serif-italic'>Елітний</span>",
        "hero-t2": "Концепт",
        "hero-t3": "Дизайн.",
        "hero-sub": "Архітектура преміальних візуальних світів та цифрового досвіду для брендів, які диктують власні правила.",
        "about-title": "Філософія<br><span class='serif-italic'>Домінування</span>",
        "about-text": "Ми не просто малюємо картинки. Ми проектуємо візуальні коди переваги. <strong>MS Design</strong> створює елітарний дизайн, який транслює недосяжний статус, викликаючи в аудиторії трепет та бажання володіти. Кожна деталь — це стратегічний крок до абсолютного лідерства бренду в його ніші.",
        "stat-years": "Років Досвіду",
        "stat-projects": "Проектів Завершено",
        "stat-clients": "Задоволених Клієнтів",
        "videos-title": "Відео",
        "videos-desc": "Кінематографічний сторітелінг, що передає сутність люксових брендів. Преміальне виробництво з увагою до кожного кадру.",
        "animation-title": "Анімація",
        "animation-desc": "Плавні візуальні наративи, що оживляють ідеї. Від мікро-взаємодій інтерфейсу до масштабних анімаційних проектів.",
        "motion-title": "Моушн",
        "motion-desc": "Динамічна моушн-графіка, що перетворює статичні візуали на захоплюючі кінетичні переживання. Тайтли, переходи, візуальні ефекти.",
        "contact-title": "Обговорімо<br>ваш <span class='serif-italic'>проект</span>",
        "contact-label-name": "Ваше Ім'я",
        "contact-label-conn": "Зв'язок (Email / TG / Телефон)",
        "contact-label-msg": "Про проект / Побажання",
        "contact-btn": "Надіслати",
        "contact-sending": "Надсилання...",
        "success-title": "Дякуємо!",
        "success-desc": "Ваше повідомлення успішно надіслано. Ми зв'яжемося з вами найближчим часом.",
        "success-back": "Закрити",
        "cta-title": "Давайте створимо<br><span class='serif-italic'>культовий проект</span>",
        "footer-copy": "© 2026 MS DESIGN. Створюємо майбутнє візуалу.",
        "footer-right": "Створено для досконалості.",
        "back-to-top": "Вгору",
        "error-send": "Помилка відправки. Спробуйте пізніше або зв'яжіться напряму."
    },
    es: {
        "nav-about": "Nosotros",
        "nav-videos": "Vídeos",
        "nav-animation": "Animación",
        "nav-motion": "Movimiento",
        "nav-contact": "Contacto",
        "hero-t1": "<span class='serif-italic'>Exclusivo</span>",
        "hero-t2": "Concepto",
        "hero-t3": "Diseño.",
        "hero-sub": "Arquitectura de mundos visuales premium y experiencias digitales para marcas que dictan sus propias reglas.",
        "about-title": "Filosofía de<br><span class='serif-italic'>Dominación</span>",
        "about-text": "No solo dibujamos imágenes. Diseñamos códigos visuales de superioridad. <strong>MS Design</strong> crea un diseño de élite que transmite un estatus inalcanzable, provocando asombro y deseo en la audiencia. Cada detalle es un paso estratégico hacia el liderazgo absoluto de la marca en su nicho.",
        "stat-years": "Años de Excelencia",
        "stat-projects": "Proyectos Entregados",
        "stat-clients": "Clientes Satisfechos",
        "videos-title": "Vídeos",
        "videos-desc": "Narrativa cinematográfica que captura la esencia de las marcas de lujo. Producción de alta gama con atención meticulosa a cada fotograma.",
        "animation-title": "Animación",
        "animation-desc": "Narrativas visuales fluidas que dan vida a las ideas. Desde micro-interacciones UI hasta experiencias animadas a gran escala.",
        "motion-title": "Movimiento",
        "motion-desc": "Gráficos en movimiento dinámicos que transforman los visuales estáticos en experiencias cinéticas cautivadoras. Títulos, transiciones y efectos visuales.",
        "contact-title": "Hablemos de<br>tu <span class='serif-italic'>proyecto</span>",
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

    // Симуляция 3D-частиц (космической пыли)
    const particles = [];
    const particleCount = window.innerWidth > 992 ? 120 : 45;
    
    // Создаем частицы с координатами, размером и скоростью
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random(),
            y: Math.random(),
            z: Math.random() * 0.8 + 0.2, // Depth factor for 3D parallax
            size: Math.random() * 1.5 + 0.5,
            speedY: Math.random() * 0.0003 + 0.0001,
            phase: Math.random() * Math.PI * 2
        });
    }

    function drawFrame() {
        time += 0.003;
        ctx.clearRect(0, 0, width, height);

        const palette = getCurrentPalette();

        // 1. РИСУЕМ ГРАДИЕНТНЫЕ ОРБЫ ФОНА
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

        // 2. РИСУЕМ И ОБНОВЛЯЕМ ПАРЯЩИЕ ЧАСТИЦЫ ПЫЛИ
        particles.forEach(p => {
            // Движение вверх + параллакс-отклонение от движения мыши
            const mouseInfluenceX = window.innerWidth > 992 ? (mouseX - 0.5) * 0.05 * p.z : 0;
            const mouseInfluenceY = window.innerWidth > 992 ? (mouseY - 0.5) * 0.05 * p.z : 0;
            
            // Увеличение скорости сдувания вверх в зависимости от скролла
            const scrollInfluenceY = scrollProgress * 0.0025;
            
            p.y -= (p.speedY + scrollInfluenceY) * p.z;
            
            // Легкие синусоидальные покачивания
            const px = (p.x + mouseInfluenceX + Math.sin(time + p.phase) * 0.015) * width;
            const py = (p.y - mouseInfluenceY) * height;
            
            // Если частица вылетает за верхнюю границу экрана, возвращаем ее вниз
            if (p.y < -0.05) {
                p.y = 1.05;
                p.x = Math.random();
            }
            
            // Рисуем пылинку (с мягким затуханием у краев экрана)
            const opacity = (1 - (p.y < 0.15 ? p.y / 0.15 : 0)) * (1 - (p.y > 0.85 ? (p.y - 0.85) / 0.15 : 0)) * 0.35 * p.z;
            ctx.beginPath();
            ctx.arc(px, py, p.size * p.z, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.fill();
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

        // Обновляем lang атрибут HTML для скринридеров и SEO
        document.documentElement.lang = lang === 'ua' ? 'uk' : lang;

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


    // --- ЛОГИКА ШЕЛКОВИСТОГО СКРОЛЛА (LENIS) ---
    let lenis;
    if (window.innerWidth > 992) {
        lenis = new Lenis({
            duration: 1.4,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Luxurious elastic scroll
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1.0,
            smoothTouch: false
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Синхронизация Lenis и ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update);
        // Убран дублирующий вызов lenis.raf через gsap.ticker
        gsap.ticker.lagSmoothing(0);
    }

    // --- ЗВУКОВОЙ ДИЗАЙН (СИНТЕЗ КЛИКОВ ЧЕРЕЗ WEB AUDIO API) ---
    let isAudioMuted = false;
    let audioCtx = null;

    function playMicroClick(frequency = 800, duration = 0.04, type = "sine", volume = 0.03) {
        if (isAudioMuted) return;
        try {
            if (!audioCtx) {
                audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            }
            if (audioCtx.state === 'suspended') {
                audioCtx.resume();
            }
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();

            osc.type = type;
            osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);
            gain.gain.setValueAtTime(volume, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start();
            osc.stop(audioCtx.currentTime + duration);
        } catch (e) {
            console.warn("Audio click playback failed", e);
        }
    }

    // Инициализация Sound Toggle кнопки
    const soundToggle = document.getElementById("sound-toggle");
    if (soundToggle) {
        // Включаем визуальный эквалайзер на старте, так как звук включен по умолчанию
        soundToggle.classList.toggle("playing", !isAudioMuted);
        
        soundToggle.addEventListener("click", () => {
            isAudioMuted = !isAudioMuted;
            soundToggle.classList.toggle("playing", !isAudioMuted);
            if (!isAudioMuted) {
                if (!audioCtx) {
                    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                }
                playMicroClick(500, 0.08, "triangle", 0.05);
            }
        });
    }

    // --- АДАПТИВНЫЙ СКРОЛЛ ХЭДЕРА ---
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (header) {
            header.classList.toggle('scrolled', window.scrollY > 50);
        }
    });

    // --- ИНТЕРАКТИВНЫЙ 3D TILT И СВЕТОВОЙ БЛИК КАРТОЧЕК ---
    if (window.innerWidth > 992) {
        document.querySelectorAll('[data-tilt]').forEach(card => {
            const glow = card.querySelector('.showcase-glow');
            
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                // Расчет углов наклона (-8 до 8 градусов)
                const xc = rect.width / 2;
                const yc = rect.height / 2;
                const angleX = -(y - yc) / (rect.height / 8);
                const angleY = (x - xc) / (rect.width / 8);
                
                // Положение светового блика
                if (glow) {
                    const glowX = (x / rect.width) * 100;
                    const glowY = (y / rect.height) * 100;
                    glow.style.setProperty('--mouse-x', `${glowX}%`);
                    glow.style.setProperty('--mouse-y', `${glowY}%`);
                }
                
                gsap.to(card, {
                    rotationX: angleX,
                    rotationY: angleY,
                    transformPerspective: 800,
                    ease: "power2.out",
                    duration: 0.5,
                    overwrite: "auto"
                });
            });
            
            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    rotationX: 0,
                    rotationY: 0,
                    ease: "power3.out",
                    duration: 0.8,
                    overwrite: "auto"
                });
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
            
            window.addEventListener('mousemove', e => {
                mouseX = e.clientX;
                mouseY = e.clientY;
            });

            gsap.ticker.add(() => {
                gsap.to(cursor, { x: mouseX, y: mouseY, duration: 0.12, ease: "power2.out", overwrite: "auto" });
            });

            window.addEventListener('scroll', () => {
                const scrollTop = window.scrollY;
                const docHeight = document.body.offsetHeight - window.innerHeight;
                const scrollPercent = scrollTop / (docHeight || 1);
                const drawLength = circumference - (scrollPercent * circumference);
                scrollProgress.style.strokeDashoffset = drawLength;
            });

            // Наведение на ссылки и кнопки для увеличения и звукового клика
            document.querySelectorAll('a, button, input, textarea, .lang-btn, .sound-toggle, .showcase-item').forEach(interactiveEl => {
                interactiveEl.addEventListener('mouseenter', () => {
                    gsap.to(cursorDot, { scale: 3.5, duration: 0.3 });
                    playMicroClick(1000, 0.015, "sine", 0.02); // Ультра-премиальный нежный клик при наведении
                });
                interactiveEl.addEventListener('mouseleave', () => {
                    gsap.to(cursorDot, { scale: 1, duration: 0.3 });
                });
                interactiveEl.addEventListener('click', () => {
                    playMicroClick(650, 0.05, "triangle", 0.04); // Тактильный клик при нажатии
                });
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
        // Если это заголовок с маской, не делаем простой сдвиг, чтобы не конфликтовать
        if (elem.classList.contains('text-reveal-mask')) return;
        
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

    // Кинетическое раскрытие заголовков из-под маски
    document.querySelectorAll('.text-reveal-mask').forEach(elem => {
        ScrollTrigger.create({
            trigger: elem,
            start: "top 88%",
            once: true,
            onEnter: () => {
                elem.classList.add('revealed');
            }
        });
    });

    // --- СИНХРОНИЗАЦИЯ БОКОВОГО ТАЙМЛАЙНА СКРОЛЛА ---
    if (lenis && window.innerWidth > 992) {
        const fillLine = document.querySelector('.progress-line-fill');
        lenis.on('scroll', (e) => {
            const scrollPercent = e.scroll / (e.limit || 1);
            if (fillLine) {
                fillLine.style.height = `${scrollPercent * 100}%`;
            }
        });
    }

    // Синхронизация активных точек навигации при скролле
    if (window.innerWidth > 992) {
        document.querySelectorAll('.nav-dot').forEach(dot => {
            const targetId = dot.getAttribute('data-target');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                ScrollTrigger.create({
                    trigger: targetSection,
                    start: "top 45%",
                    end: "bottom 45%",
                    onEnter: () => setActiveDot(dot),
                    onEnterBack: () => setActiveDot(dot)
                });
            }
            
            // Плавный скролл при клике на точку таймлайна
            dot.addEventListener('click', function(e) {
                e.preventDefault();
                if (lenis) {
                    lenis.scrollTo(targetId, {
                        duration: 1.5,
                        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
                    });
                } else {
                    gsap.to(window, { 
                        scrollTo: { y: targetId }, 
                        duration: 1.5, 
                        ease: "power4.inOut" 
                    });
                }
            });
        });

        function setActiveDot(activeDot) {
            document.querySelectorAll('.nav-dot').forEach(dot => dot.classList.remove('active'));
            activeDot.classList.add('active');
        }
    }

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
            if (lenis) {
                lenis.scrollTo(targetId, {
                    duration: 1.5,
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
                });
            } else {
                gsap.to(window, { 
                    scrollTo: { y: targetId, offsetY: 0 }, 
                    duration: 1.5, 
                    ease: "power4.inOut" 
                });
            }
        });
    });

    // Кнопка "Вернуться наверх"
    document.querySelectorAll('.back-to-top').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            if (lenis) {
                lenis.scrollTo(0, {
                    duration: 1.5,
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
                });
            } else {
                gsap.to(window, { 
                    scrollTo: { y: 0 }, 
                    duration: 1.5, 
                    ease: "power4.inOut" 
                });
            }
        });
    });


    // --- АВТОМАТИЧЕСКОЕ МАСШТАБИРОВАНИЕ TEXTAREA ---
    const textarea = document.getElementById('client-message');
    if (textarea) {
        textarea.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = Math.min(this.scrollHeight, 300) + 'px';
        });
    }


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
                // Если константы токена заданы и не являются плейсхолдерами, отправляем в бота
                if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID && TELEGRAM_BOT_TOKEN !== "YOUR_BOT_TOKEN_HERE" && TELEGRAM_CHAT_ID !== "YOUR_CHAT_ID_HERE") {
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

    // АНИМИРОВАННЫЕ СЧЁТЧИКИ СТАТИСТИКИ
    const statNumbers = document.querySelectorAll(".stat-number");
    statNumbers.forEach(num => {
        const target = parseInt(num.getAttribute("data-target"), 10);
        ScrollTrigger.create({
            trigger: num,
            start: "top 85%",
            once: true,
            onEnter: () => {
                gsap.to({ val: 0 }, {
                    val: target,
                    duration: 2,
                    ease: "power2.out",
                    onUpdate: function() {
                        num.textContent = Math.floor(this.targets()[0].val);
                    }
                });
            }
        });
    });

    // --- ИНТЕГРАЦИЯ КИНО-ПЛЕЕРА ДЛЯ ВИДЕОКАРТОЧЕК ---
    const videoModal = document.getElementById("video-modal");
    const modalVideo = document.getElementById("modal-video-element");
    const closeBtn = document.getElementById("video-modal-close");

    if (videoModal && modalVideo && closeBtn) {
        const container = videoModal.querySelector('.video-modal-container');

        // Динамическая адаптация пропорций контейнера под соотношение сторон видео
        modalVideo.addEventListener('loadedmetadata', () => {
            const videoWidth = modalVideo.videoWidth;
            const videoHeight = modalVideo.videoHeight;
            
            if (container && videoWidth && videoHeight) {
                if (videoHeight > videoWidth) {
                    // Вертикальный формат (9:16) — идеальное адаптивное вписывание
                    container.style.aspectRatio = "9 / 16";
                    container.style.width = "90%";
                    container.style.maxWidth = "420px";
                    container.style.height = "auto";
                    container.style.maxHeight = "80vh";
                } else {
                    // Горизонтальный формат (16:9) — стандарт
                    container.style.aspectRatio = "16 / 9";
                    container.style.width = "90%";
                    container.style.maxWidth = "1200px";
                    container.style.height = "auto";
                    container.style.maxHeight = "80vh";
                }
            }
        });

        document.querySelectorAll('.showcase-item').forEach(item => {
            const videoEl = item.querySelector('.showcase-video');
            if (videoEl) {
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    modalVideo.src = videoEl.getAttribute('src');

                    // Определяем ориентацию видео по атрибуту data-orientation
                    const orientation = item.getAttribute('data-orientation') || 'landscape';
                    const modalContainer = videoModal.querySelector('.video-modal-container');
                    if (modalContainer) {
                        modalContainer.classList.remove('portrait', 'landscape');
                        modalContainer.classList.add(orientation);
                    }

                    videoModal.style.display = "flex";
                    // Добавляем класс active для активации pointer-events
                    videoModal.classList.add('active');
                    // Добавляем класс на body для надежного включения системного курсора и блокировки скролла
                    document.body.classList.add('video-modal-open');
                    
                    // Плавное проявление
                    gsap.to(videoModal, { opacity: 1, duration: 0.4, ease: "power2.out" });
                    modalVideo.play();
                    if (typeof lenis !== 'undefined' && lenis) lenis.stop(); // Стопорим скролл
                    
                    // Скрываем кастомный курсор, так как в модалке нужен системный
                    const customCursor = document.getElementById('cursor');
                    if (customCursor) {
                        gsap.to(customCursor, { opacity: 0, duration: 0.3 });
                    }

                    // Добавляем состояние в историю для корректной работы системной кнопки "Назад" на мобильных
                    history.pushState({ videoModalOpen: true }, "");
                });
            }
        });

        const closeModal = () => {
            // Закрытие модалки теперь всегда идет через history.back(), 
            // если открыто состояние истории, чтобы синхронизировать системную кнопку "Назад"
            if (history.state && history.state.videoModalOpen) {
                history.back();
            } else {
                // Если состояния в истории нет (например, при сбое или перезагрузке), закрываем напрямую
                directCloseModal();
            }
        };

        const directCloseModal = () => {
            // Удаляем класс с body для возвращения кастомного курсора и разблокировки скролла
            document.body.classList.remove('video-modal-open');
            // Удаляем класс active
            videoModal.classList.remove('active');

            gsap.to(videoModal, { 
                opacity: 0, 
                duration: 0.4, 
                ease: "power2.in", 
                onComplete: () => {
                    videoModal.style.display = "none";
                    modalVideo.pause();
                    modalVideo.src = "";
                    // Сбрасываем динамические стили контейнера
                    if (container) {
                        container.style.aspectRatio = "";
                        container.style.width = "";
                        container.style.maxWidth = "";
                        container.style.height = "";
                        container.style.maxHeight = "";
                    }
                    if (typeof lenis !== 'undefined' && lenis) lenis.start(); // Запускаем скролл обратно
                }
            });
            
            // Возвращаем кастомный курсор
            const customCursor = document.getElementById('cursor');
            if (customCursor) {
                gsap.to(customCursor, { opacity: 1, duration: 0.3 });
            }
        };

        // Подписываемся на события изменения истории (системная кнопка "Назад" на телефонах)
        window.addEventListener('popstate', (e) => {
            // Если модалка активна, закрываем ее физически
            if (videoModal.classList.contains('active')) {
                directCloseModal();
            }
        });

        closeBtn.addEventListener('click', closeModal);
        videoModal.querySelector('.video-modal-bg').addEventListener('click', closeModal);

        window.addEventListener('keydown', (e) => {
            if (e.key === "Escape" && videoModal.classList.contains('active')) {
                closeModal();
            }
        });
    }
});
