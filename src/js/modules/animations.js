import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export function initHeroAnimation() {
  const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.5 } });
  tl.to(".hero-title", { opacity: 1, y: 0, scale: 1 }).to(".hero-subtitle", { opacity: 1, y: 0 }, "-=1");
}

export function initScrollAnimations(lenis) {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    document.querySelectorAll(".gs-reveal, .text-reveal-mask").forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
      if (el.classList.contains("text-reveal-mask")) el.classList.add("revealed");
    });
    return;
  }

  // Header scroll state
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (header) header.classList.toggle("scrolled", window.scrollY > 50);
  });

  // 3D tilt on desktop
  if (window.innerWidth > 992) {
    document.querySelectorAll("[data-tilt]").forEach((card) => {
      const glow = card.querySelector(".showcase-glow");

      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const xc = rect.width / 2;
        const yc = rect.height / 2;
        const angleX = -(y - yc) / (rect.height / 8);
        const angleY = (x - xc) / (rect.width / 8);

        if (glow) {
          glow.style.setProperty("--mouse-x", `${(x / rect.width) * 100}%`);
          glow.style.setProperty("--mouse-y", `${(y / rect.height) * 100}%`);
        }

        gsap.to(card, {
          rotationX: angleX,
          rotationY: angleY,
          transformPerspective: 800,
          ease: "power2.out",
          duration: 0.5,
          overwrite: "auto",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, { rotationX: 0, rotationY: 0, ease: "power3.out", duration: 0.8, overwrite: "auto" });
      });
    });

    // Velocity skew
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
            onUpdate: () => skewSetter(proxy.skew),
          });
        }
      },
    });
  }

  // Parallax images
  document.querySelectorAll(".par-container").forEach((container) => {
    const image = container.querySelector(".par-image");
    if (image) {
      gsap.to(image, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: { trigger: container, start: "top bottom", end: "bottom top", scrub: true },
      });
    }
  });

  // Reveal blocks
  document.querySelectorAll(".gs-reveal").forEach((elem) => {
    if (elem.classList.contains("text-reveal-mask")) return;
    gsap.from(elem, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: { trigger: elem, start: "top 85%", toggleActions: "play none none none" },
    });
  });

  // Text mask reveals
  document.querySelectorAll(".text-reveal-mask").forEach((elem) => {
    ScrollTrigger.create({
      trigger: elem,
      start: "top 88%",
      once: true,
      onEnter: () => elem.classList.add("revealed"),
    });
  });

  // Side progress bar
  if (lenis && window.innerWidth > 992) {
    const fillLine = document.querySelector(".progress-line-fill");
    lenis.on("scroll", (e) => {
      const scrollPercent = e.scroll / (e.limit || 1);
      if (fillLine) fillLine.style.height = `${scrollPercent * 100}%`;
    });
  }

  // Nav dots sync
  if (window.innerWidth > 992) {
    document.querySelectorAll(".nav-dot").forEach((dot) => {
      const targetId = dot.getAttribute("data-target");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        ScrollTrigger.create({
          trigger: targetSection,
          start: "top 45%",
          end: "bottom 45%",
          onEnter: () => setActiveDot(dot),
          onEnterBack: () => setActiveDot(dot),
        });
      }

      dot.addEventListener("click", function (e) {
        e.preventDefault();
        if (lenis) {
          lenis.scrollTo(targetId, { duration: 1.5, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
        } else {
          gsap.to(window, { scrollTo: { y: targetId }, duration: 1.5, ease: "power4.inOut" });
        }
      });
    });
  }

  // Nav links smooth scroll
  document.querySelectorAll(".js-nav-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (lenis) {
        lenis.scrollTo(targetId, { duration: 1.5, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
      } else {
        gsap.to(window, { scrollTo: { y: targetId, offsetY: 0 }, duration: 1.5, ease: "power4.inOut" });
      }
    });
  });

  // Back to top
  document.querySelectorAll(".back-to-top").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.5, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
      } else {
        gsap.to(window, { scrollTo: { y: 0 }, duration: 1.5, ease: "power4.inOut" });
      }
    });
  });

  // Animated stat counters
  document.querySelectorAll(".stat-number").forEach((num) => {
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
          onUpdate: function () {
            num.textContent = Math.floor(this.targets()[0].val);
          },
        });
      },
    });
  });
}

function setActiveDot(activeDot) {
  document.querySelectorAll(".nav-dot").forEach((dot) => dot.classList.remove("active"));
  activeDot.classList.add("active");
}
