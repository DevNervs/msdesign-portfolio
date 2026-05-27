import gsap from "gsap";

export function initVideoModal(lenis) {
  const videoModal = document.getElementById("video-modal");
  const modalVideo = document.getElementById("modal-video-element");
  const closeBtn = document.getElementById("video-modal-close");

  if (!videoModal || !modalVideo || !closeBtn) return;

  const container = videoModal.querySelector(".video-modal-container");

  modalVideo.addEventListener("loadedmetadata", () => {
    const vw = modalVideo.videoWidth;
    const vh = modalVideo.videoHeight;
    if (!container || !vw || !vh) return;

    container.style.aspectRatio = `${vw} / ${vh}`;

    if (vh > vw) {
      container.style.width = "auto";
      container.style.maxWidth = "90vw";
      container.style.height = "85dvh";
      container.style.maxHeight = "85dvh";
    } else {
      container.style.height = "auto";
      container.style.maxHeight = "85dvh";
      container.style.width = "90vw";
      container.style.maxWidth = "1200px";
    }
  });

  document.querySelectorAll(".showcase-item").forEach((item) => {
    const videoEl = item.querySelector(".showcase-video");
    if (!videoEl) return;

    item.addEventListener("click", (e) => {
      e.preventDefault();
      const src = videoEl.getAttribute("src") || videoEl.getAttribute("data-src");
      modalVideo.src = src;

      videoModal.style.display = "flex";
      videoModal.classList.add("active");
      document.body.classList.add("video-modal-open");

      gsap.to(videoModal, { opacity: 1, duration: 0.4, ease: "power2.out" });
      modalVideo.play();
      if (lenis) lenis.stop();

      const customCursor = document.getElementById("cursor");
      if (customCursor) gsap.to(customCursor, { opacity: 0, duration: 0.3 });

      history.pushState({ videoModalOpen: true }, "");
    });
  });

  const directCloseModal = () => {
    document.body.classList.remove("video-modal-open");
    videoModal.classList.remove("active");

    gsap.to(videoModal, {
      opacity: 0,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        videoModal.style.display = "none";
        modalVideo.pause();
        modalVideo.src = "";
        if (container) {
          container.style.aspectRatio = "";
          container.style.width = "";
          container.style.maxWidth = "";
          container.style.height = "";
          container.style.maxHeight = "";
        }
        if (lenis) lenis.start();
      },
    });

    const customCursor = document.getElementById("cursor");
    if (customCursor) gsap.to(customCursor, { opacity: 1, duration: 0.3 });
  };

  const closeModal = () => {
    if (history.state && history.state.videoModalOpen) {
      history.back();
    } else {
      directCloseModal();
    }
  };

  window.addEventListener("popstate", () => {
    if (videoModal.classList.contains("active")) directCloseModal();
  });

  closeBtn.addEventListener("click", closeModal);
  videoModal.querySelector(".video-modal-bg").addEventListener("click", closeModal);
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && videoModal.classList.contains("active")) closeModal();
  });
}
