import gsap from "gsap";
import { playMicroClick } from "./audio.js";

export function initCustomCursor() {
  if (window.innerWidth <= 992) return;

  const cursor = document.getElementById("cursor");
  const cursorDot = document.getElementById("cursor-dot");
  const scrollProgressEl = document.getElementById("scroll-progress");
  const circumference = 207;

  if (!cursor || !cursorDot || !scrollProgressEl) return;

  gsap.set(cursor, { xPercent: -50, yPercent: -50 });

  let mouseX = 0,
    mouseY = 0;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  gsap.ticker.add(() => {
    gsap.to(cursor, { x: mouseX, y: mouseY, duration: 0.12, ease: "power2.out", overwrite: "auto" });
  });

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = scrollTop / (docHeight || 1);
    const drawLength = circumference - scrollPercent * circumference;
    scrollProgressEl.style.strokeDashoffset = drawLength;
  });

  document.querySelectorAll("a, button, input, textarea, .lang-btn, .sound-toggle, .showcase-item").forEach((interactiveEl) => {
    interactiveEl.addEventListener("mouseenter", () => {
      gsap.to(cursorDot, { scale: 3.5, duration: 0.3 });
      playMicroClick(1000, 0.015, "sine", 0.02);
    });
    interactiveEl.addEventListener("mouseleave", () => {
      gsap.to(cursorDot, { scale: 1, duration: 0.3 });
    });
    interactiveEl.addEventListener("click", () => {
      playMicroClick(650, 0.05, "triangle", 0.04);
    });
  });
}

export function initMagneticElements() {
  if (window.innerWidth <= 992) return;

  document.querySelectorAll(".magnetic").forEach((elem) => {
    elem.addEventListener("mousemove", function (e) {
      const rect = this.getBoundingClientRect();
      const strength = this.dataset.strength || 30;
      const deltaX = (e.clientX - (rect.left + rect.width / 2)) * (strength / rect.width);
      const deltaY = (e.clientY - (rect.top + rect.height / 2)) * (strength / rect.height);
      gsap.to(this, { x: deltaX, y: deltaY, duration: 0.5, ease: "power2.out" });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to(this, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.3)" });
    });
  });
}
