let isAudioMuted = false;
let audioCtx = null;

export function playMicroClick(frequency = 800, duration = 0.04, type = "sine", volume = 0.03) {
  if (isAudioMuted) return;
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === "suspended") {
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
    // Silently fail on audio issues
  }
}

export function initSoundToggle() {
  const soundToggle = document.getElementById("sound-toggle");
  if (!soundToggle) return;

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
