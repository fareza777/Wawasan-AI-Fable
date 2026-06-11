import * as THREE from "three";

type PlanetKind = "rocky" | "ocean" | "forest" | "gas" | "mars" | "lava";

function noise(ctx: CanvasRenderingContext2D, w: number, h: number, amount: number) {
  const img = ctx.getImageData(0, 0, w, h);
  for (let i = 0; i < img.data.length; i += 4) {
    const n = (Math.random() - 0.5) * amount;
    img.data[i] = Math.min(255, Math.max(0, img.data[i] + n));
    img.data[i + 1] = Math.min(255, Math.max(0, img.data[i + 1] + n));
    img.data[i + 2] = Math.min(255, Math.max(0, img.data[i + 2] + n));
  }
  ctx.putImageData(img, 0, 0);
}

function bands(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  colors: string[],
  soft = false,
) {
  colors.forEach((c, i) => {
    const y = (i / colors.length) * h;
    const bh = h / colors.length + (soft ? 12 : 0);
    const g = ctx.createLinearGradient(0, y, 0, y + bh);
    g.addColorStop(0, c);
    g.addColorStop(1, colors[Math.min(i + 1, colors.length - 1)] ?? c);
    ctx.fillStyle = g;
    ctx.fillRect(0, y, w, bh);
  });
}

export function createPlanetTexture(kind: PlanetKind): THREE.CanvasTexture {
  const w = 512;
  const h = 256;
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d")!;

  switch (kind) {
    case "rocky":
      bands(ctx, w, h, ["#a8a29e", "#78716c", "#57534e", "#a8a29e"], true);
      noise(ctx, w, h, 38);
      break;
    case "ocean":
      bands(ctx, w, h, ["#1d4ed8", "#2563eb", "#38bdf8", "#0ea5e9", "#1e3a8a"], true);
      ctx.fillStyle = "rgba(34,197,94,0.35)";
      ctx.beginPath();
      ctx.ellipse(140, 120, 48, 32, 0.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "rgba(34,197,94,0.28)";
      ctx.beginPath();
      ctx.ellipse(360, 150, 36, 22, -0.3, 0, Math.PI * 2);
      ctx.fill();
      noise(ctx, w, h, 18);
      break;
    case "forest":
      bands(ctx, w, h, ["#047857", "#059669", "#10b981", "#065f46"], true);
      noise(ctx, w, h, 22);
      break;
    case "gas":
      bands(
        ctx,
        w,
        h,
        ["#ddd6fe", "#a78bfa", "#7c3aed", "#5b21b6", "#c4b5fd", "#8b5cf6"],
        true,
      );
      noise(ctx, w, h, 12);
      break;
    case "mars":
      bands(ctx, w, h, ["#fda4af", "#e11d48", "#be123c", "#9f1239"], true);
      noise(ctx, w, h, 28);
      break;
    case "lava":
      bands(ctx, w, h, ["#fdba74", "#ea580c", "#c2410c", "#9a3412", "#f97316"], true);
      noise(ctx, w, h, 24);
      break;
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function createSunTexture(): THREE.CanvasTexture {
  const size = 512;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;

  const base = ctx.createRadialGradient(
    size * 0.44,
    size * 0.42,
    6,
    size / 2,
    size / 2,
    size / 2,
  );
  base.addColorStop(0, "#fff7ed");
  base.addColorStop(0.18, "#fdba74");
  base.addColorStop(0.45, "#f97316");
  base.addColorStop(0.72, "#ea580c");
  base.addColorStop(1, "#c2410c");
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, size, size);

  for (let i = 0; i < 14; i++) {
    const y = (i / 14) * size;
    const bh = size / 14 + 6;
    const band = ctx.createLinearGradient(0, y, 0, y + bh);
    const warm = i % 2 === 0 ? "#fb923c" : "#ea580c";
    const deep = i % 2 === 0 ? "#c2410c" : "#9a3412";
    band.addColorStop(0, warm);
    band.addColorStop(1, deep);
    ctx.globalAlpha = 0.22;
    ctx.fillStyle = band;
    ctx.fillRect(0, y, size, bh);
  }
  ctx.globalAlpha = 1;

  for (let i = 0; i < 6; i++) {
    const x = 40 + Math.random() * (size - 80);
    const y = 40 + Math.random() * (size - 80);
    const r = 18 + Math.random() * 42;
    const spot = ctx.createRadialGradient(x, y, 0, x, y, r);
    spot.addColorStop(0, "rgba(255, 237, 213, 0.55)");
    spot.addColorStop(0.5, "rgba(234, 88, 12, 0.35)");
    spot.addColorStop(1, "rgba(154, 52, 18, 0)");
    ctx.fillStyle = spot;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  noise(ctx, size, size, 28);

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
