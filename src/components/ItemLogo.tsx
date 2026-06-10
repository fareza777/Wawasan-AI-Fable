import { ContentType } from "@/lib/storage";
import { rubrikStyle } from "@/lib/rubrik";
import { getItemIcon } from "@/lib/itemIcons";

export default function ItemLogo({
  name,
  slug,
  type,
  link,
}: {
  name: string;
  slug: string;
  type: ContentType;
  link?: string;
}) {
  const style = rubrikStyle[type];
  const icon = getItemIcon(slug, link);

  if (icon) {
    return (
      <img
        src={icon}
        alt=""
        className="h-10 w-10 rounded-xl border border-ink-600 bg-ink-800 object-contain p-1.5"
        loading="lazy"
      />
    );
  }

  return (
    <span
      className={`flex h-10 w-10 items-center justify-center rounded-xl border bg-gradient-to-br font-bold ${style.border} ${style.gradient} ${style.accent}`}
    >
      {name.charAt(0).toUpperCase()}
    </span>
  );
}
