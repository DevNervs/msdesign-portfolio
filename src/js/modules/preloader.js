import gsap from "gsap";

export function initPreloader(onComplete) {
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
          if (onComplete) onComplete();
        },
      });
    }
  }

  let loadProgress = { val: 0 };
  const counterEl = document.getElementById("counter");
  const preloaderEl = document.getElementById("preloader");
  const preloaderBg = document.getElementById("preloader-bg");

  if (counterEl && preloaderEl && preloaderBg) {
    gsap.to(loadProgress, {
      val: 100,
      duration: 2.0,
      ease: "power2.inOut",
      onUpdate: function () {
        counterEl.innerText = Math.floor(loadProgress.val) + "%";
        gsap.set(preloaderBg, { scaleY: loadProgress.val / 100 });
      },
      onComplete: function () {
        gsap.to(counterEl, { opacity: 0, duration: 0.4 });
        unlockSite();
      },
    });
  } else {
    unlockSite();
  }
}
