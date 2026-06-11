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
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const g = ctx.createRadialGradient(size * 0.45, size * 0.4, 8, size / 2, size / 2, size / 2);
  g.addColorStop(0, "#fffef0");
  g.addColorStop(0.35, "#fde047");
  g.addColorStop(0.7, "#f59e0b");
  g.addColorStop(1, "#ea580c");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  noise(ctx, size, size, 20);

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
