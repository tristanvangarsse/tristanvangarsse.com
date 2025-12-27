window.addEventListener("DOMContentLoaded", async () => {
  const textElement = document.getElementById("move-in-letters");
  if (!textElement) return;

  // ---- SETTINGS ----
  const LETTER_RATE_MS = 2;     // one letter every X ms
  const IN_DURATION_MS = 2000;    // duration of move+fade for each letter
  const OFFSET_X = 200;
  const OFFSET_Y = 0;
  const EASING = "cubic-bezier(0.2, 0.8, 0.2, 1)";

  // Wait for fonts
  if (document.fonts?.ready) {
    try { await document.fonts.ready; } catch (_) {}
  }

  const rawText = textElement.textContent;
  textElement.textContent = "";
  textElement.style.fontFamily =
    '"Inter", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif';

  const lines = rawText
    .split("|")
    .map(l => l.replace(/[\n\r\t]/g, "").trim());

  const totalLetters =
    rawText.replace(/\*\*/g, "").replace(/[\n\r\t|]/g, "").length || 1;

  const spans = [];
  let globalIndex = 0;

  // Build spans (START INVISIBLE + OFFSET)
  lines.forEach((line) => {
    const lineDiv = document.createElement("div");
    const segments = line.split(/\*\*(.*?)\*\*/);

    segments.forEach((segment, segmentIndex) => {
      const isHighlighted = segmentIndex % 2 === 1;

      for (const ch of segment) {
        const span = document.createElement("span");
        span.textContent = ch;
        span.style.display = "inline-block";
        span.style.fontFamily = "inherit";
        span.style.willChange = "transform, opacity";

        if (isHighlighted) span.classList.add("highlight");

        // Final opacity (your gradient, last letter can be 0)
        const progress = globalIndex / Math.max(1, totalLetters - 1);
        const t = 1 - Math.pow(1 - progress, 2.5);
        const finalOpacity = Math.max(0, 1 - t);

        // Start state: invisible + offset from top-right
        span.style.opacity = "0";
        span.style.transform = `translate(${OFFSET_X}px, ${OFFSET_Y}px)`;

        // Store final opacity
        span.dataset.finalOpacity = String(finalOpacity);

        // Baseline weight
        span.style.setProperty("font-weight", "100", "important");
        span.style.setProperty("font-variation-settings", '"wght" 100', "important");

        lineDiv.appendChild(span);
        spans.push(span);
        globalIndex++;
      }
    });

    textElement.appendChild(lineDiv);
  });

  // Show container (letters still invisible)
  textElement.style.visibility = "visible";

  // Reveal one by one (ONCE): move + fade in to final opacity
  let i = 0;
  const timer = setInterval(() => {
    if (i >= spans.length) {
      clearInterval(timer);
      return;
    }

    const span = spans[i];
    const targetOpacity = parseFloat(span.dataset.finalOpacity || "1");

    span.animate(
      [
        { transform: `translate(${OFFSET_X}px, ${OFFSET_Y}px)`, opacity: 0 },
        { transform: "translate(0px, 0px)", opacity: targetOpacity }
      ],
      {
        duration: IN_DURATION_MS,
        easing: EASING,
        fill: "forwards"
      }
    );

    i++;
  }, LETTER_RATE_MS);

  // ---- Optional: weight pulse (same value for everyone) ----
  const weights = [
    420, 450, 480, 510, 540, 570, 600, 630, 660, 690, 720, 750, 780, 810, 840, 870, 900, 870, 840, 810, 780, 750, 720, 690, 660, 630, 600, 570, 540, 510, 480, 450, 420, 390, 360, 330, 300, 270, 240, 210, 200, 230, 260, 290, 300, 330, 360, 390 
  ];

  let tick = 0;
  function applyWeights() {
    const w = weights[tick % weights.length];
    tick++;
    for (const s of spans) {
      s.style.setProperty("font-weight", String(w), "important");
      s.style.setProperty("font-variation-settings", `"wght" ${w}`, "important");
    }
  }

  applyWeights();
  setInterval(applyWeights, 10000);
});