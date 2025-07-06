// Sleek animated blobs for hero background

window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("hero-bg-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let width, height, dpr;

  function resize() {
    dpr = window.devicePixelRatio || 1;
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
  }

  window.addEventListener("resize", resize);
  resize();

  // Blob config
  const blobs = [
    {
      x: 180,
      y: 120,
      r: 90,
      color: "rgba(30, 255, 79, 0.18)",
      dx: 0.5,
      dy: 0.3,
    },
    {
      x: 420,
      y: 200,
      r: 70,
      color: "rgba(0, 251, 167, 0.14)",
      dx: -0.4,
      dy: 0.2,
    },
    {
      x: 320,
      y: 260,
      r: 60,
      color: "rgba(30, 255, 150, 0.12)",
      dx: 0.3,
      dy: -0.3,
    },
  ];

  function animate() {
    ctx.clearRect(0, 0, width, height);
    blobs.forEach((blob) => {
      ctx.beginPath();
      ctx.arc(blob.x, blob.y, blob.r, 0, 2 * Math.PI);
      ctx.fillStyle = blob.color;
      ctx.filter = "blur(16px)";
      ctx.fill();
      ctx.filter = "none";

      // Animate
      blob.x += blob.dx;
      blob.y += blob.dy;
      // Bounce off edges
      if (blob.x - blob.r < 0 || blob.x + blob.r > width) blob.dx *= -1;
      if (blob.y - blob.r < 0 || blob.y + blob.r > height) blob.dy *= -1;
    });
    requestAnimationFrame(animate);
  }

  animate();
});

function createSectionBlobs(canvasId, blobsConfig) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let width, height, dpr;

  function resize() {
    dpr = window.devicePixelRatio || 1;
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
  }

  window.addEventListener("resize", resize);
  resize();

  function animate() {
    ctx.clearRect(0, 0, width, height);
    blobsConfig.forEach((blob) => {
      ctx.beginPath();
      ctx.arc(blob.x, blob.y, blob.r, 0, 2 * Math.PI);
      ctx.fillStyle = blob.color;
      ctx.filter = "blur(18px)";
      ctx.fill();
      ctx.filter = "none";

      // Animate
      blob.x += blob.dx;
      blob.y += blob.dy;
      if (blob.x - blob.r < 0 || blob.x + blob.r > width) blob.dx *= -1;
      if (blob.y - blob.r < 0 || blob.y + blob.r > height) blob.dy *= -1;
    });
    requestAnimationFrame(animate);
  }
  animate();
}

// About Joga AI section blobs
createSectionBlobs("about-joga-canvas", [
  {
    x: 120,
    y: 100,
    r: 70,
    color: "rgba(30, 255, 143, 0.13)",
    dx: 0.3,
    dy: 0.2,
  },
  { x: 400, y: 180, r: 60, color: "rgba(0,198,251,0.10)", dx: -0.2, dy: 0.15 },
]);

// Our Story section blobs
createSectionBlobs("about-story-canvas", [
  {
    x: 200,
    y: 120,
    r: 80,
    color: "rgba(30, 255, 105, 0.1)",
    dx: 0.2,
    dy: 0.18,
  },
  {
    x: 500,
    y: 200,
    r: 60,
    color: "rgba(0, 251, 125, 0.09)",
    dx: -0.18,
    dy: 0.13,
  },
]);
