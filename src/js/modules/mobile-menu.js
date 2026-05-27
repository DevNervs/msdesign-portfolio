export function initMobileMenu() {
  const burgerBtn = document.getElementById("burger-btn");
  const navContainer = document.getElementById("nav-container");
  const navLinks = document.querySelectorAll("nav a");

  if (!burgerBtn || !navContainer) return;

  burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("active");
    navContainer.classList.toggle("active");

    if (navContainer.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      burgerBtn.classList.remove("active");
      navContainer.classList.remove("active");
      document.body.style.overflow = "";
    });
  });
}
