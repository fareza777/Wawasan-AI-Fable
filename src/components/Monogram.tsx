// Monogram deterministik: warna diturunkan dari nama, konsisten di seluruh situs.
export default function Monogram({
  name,
  size = "md",
}: {
  name: string;
  size?: "md" | "lg";
}) {
  let h = 0;
  for (const c of name) h = (h * 31 + c.charCodeAt(0)) % 360;
  const dim = size === "lg" ? "h-12 w-12 text-xl" : "h-9 w-9 text-sm";

  return (
    <span
      aria-hidden
      className={`${dim} flex shrink-0 items-center justify-center rounded-xl font-mono font-bold`}
      style={{
        background: `linear-gradient(135deg, hsl(${h} 70% 50% / 0.22), hsl(${(h + 50) % 360} 70% 50% / 0.12))`,
        border: `1px solid hsl(${h} 60% 55% / 0.35)`,
        color: `hsl(${h} 80% 70%)`,
      }}
    >
      {name.charAt(0).toUpperCase()}
    </span>
  );
}
