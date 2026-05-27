import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Lenis from "lenis";

import { initBackgroundCanvas } from "./modules/background.js";
import { initPreloader } from "./modules/preloader.js";
import { initI18n, initScrambleEffect } from "./modules/i18n.js";
import { initCustomCursor, initMagneticElements } from "./modules/cursor.js";
import { initSoundToggle } from "./modules/audio.js";
import { initHeroAnimation, initScrollAnimations } from "./modules/animations.js";
import { initContactForm } from "./modules/form.js";
import { initVideoModal } from "./modules/video-modal.js";
import { initMobileMenu } from "./modules/mobile-menu.js";
import "../css/style.css";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Background canvas runs immediately (outside DOMContentLoaded)
initBackgroundCanvas();

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll (desktop only)
  let lenis = null;
  if (window.innerWidth > 992) {
    lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1.0,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.lagSmoothing(0);
  }

  // Initialize all modules
  initPreloader(() => initHeroAnimation());
  initI18n();
  initScrambleEffect();
  initMobileMenu();
  initCustomCursor();
  initMagneticElements();
  initSoundToggle();
  initScrollAnimations(lenis);
  initContactForm();
  initVideoModal(lenis);

  // Lazy-load video when it enters viewport
  initLazyVideo();
});

function initLazyVideo() {
  const videos = document.querySelectorAll(".showcase-video[data-src]");
  if (!videos.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const video = entry.target;
          video.src = video.dataset.src;
          video.removeAttribute("data-src");
          observer.unobserve(video);
        }
      });
    },
    { rootMargin: "200px" }
  );

  videos.forEach((video) => observer.observe(video));
}
