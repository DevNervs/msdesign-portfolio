export function initBackgroundCanvas() {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width, height;
  let scrollProgress = 0;
  let mouseX = 0.5,
    mouseY = 0.5;
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

  const palettes = [
    { orbs: [[200, 20, 20], [150, 0, 40], [120, 30, 50]] },
    { orbs: [[10, 180, 140], [30, 220, 160], [5, 130, 100]] },
    { orbs: [[40, 30, 220], [150, 20, 180], [20, 60, 200]] },
    { orbs: [[180, 20, 220], [100, 10, 160], [220, 40, 180]] },
    { orbs: [[200, 20, 20], [150, 10, 30], [100, 20, 20]] },
  ];

  function lerpColor(a, b, t) {
    return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
  }

  function getCurrentPalette() {
    const zones = palettes.length - 1;
    const rawIndex = scrollProgress * zones;
    const index = Math.min(Math.floor(rawIndex), zones - 1);
    const t = rawIndex - index;
    const from = palettes[index];
    const to = palettes[Math.min(index + 1, zones)];
    return {
      orbs: from.orbs.map((c, i) => lerpColor(c, to.orbs[i], t)),
    };
  }

  const orbs = [
    { x: 0.15, y: 0.25, radius: 0.55, speedX: 0.4, speedY: 0.25, phaseX: 0, phaseY: 0.5 },
    { x: 0.75, y: 0.55, radius: 0.5, speedX: 0.25, speedY: 0.4, phaseX: 1.5, phaseY: 1.0 },
    { x: 0.5, y: 0.8, radius: 0.45, speedX: 0.3, speedY: 0.2, phaseX: 3.0, phaseY: 2.0 },
  ];

  const particles = [];
  const cores = navigator.hardwareConcurrency || 4;
  const isMobile = window.innerWidth <= 992;
  const particleCount = isMobile ? Math.min(45, cores * 8) : Math.min(120, cores * 20);

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random(),
      y: Math.random(),
      z: Math.random() * 0.8 + 0.2,
      size: Math.random() * 1.5 + 0.5,
      speedY: Math.random() * 0.0003 + 0.0001,
      phase: Math.random() * Math.PI * 2,
    });
  }

  let lastFrameTime = 0;
  const targetFPS = isMobile ? 30 : 60;
  const frameInterval = 1000 / targetFPS;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function drawFrame(timestamp) {
    if (prefersReducedMotion) return;

    if (timestamp - lastFrameTime < frameInterval) {
      requestAnimationFrame(drawFrame);
      return;
    }
    lastFrameTime = timestamp;

    time += 0.003;
    ctx.clearRect(0, 0, width, height);

    const palette = getCurrentPalette();

    orbs.forEach((orb, i) => {
      const offsetX = Math.sin(time * orb.speedX + orb.phaseX) * 0.15;
      const offsetY = Math.cos(time * orb.speedY + orb.phaseY) * 0.12;

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

    particles.forEach((p) => {
      const mouseInfluenceX = window.innerWidth > 992 ? (mouseX - 0.5) * 0.05 * p.z : 0;
      const mouseInfluenceY = window.innerWidth > 992 ? (mouseY - 0.5) * 0.05 * p.z : 0;
      const scrollInfluenceY = scrollProgress * 0.0025;

      p.y -= (p.speedY + scrollInfluenceY) * p.z;

      const px = (p.x + mouseInfluenceX + Math.sin(time + p.phase) * 0.015) * width;
      const py = (p.y - mouseInfluenceY) * height;

      if (p.y < -0.05) {
        p.y = 1.05;
        p.x = Math.random();
      }

      const opacity =
        (1 - (p.y < 0.15 ? p.y / 0.15 : 0)) *
        (1 - (p.y > 0.85 ? (p.y - 0.85) / 0.15 : 0)) *
        0.35 *
        p.z;
      ctx.beginPath();
      ctx.arc(px, py, p.size * p.z, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.fill();
    });

    requestAnimationFrame(drawFrame);
  }

  requestAnimationFrame(drawFrame);
}
