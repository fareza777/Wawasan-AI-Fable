// Penyimpanan sisi-klien (localStorage) untuk bookmark & profil lokal.
// Perubahan disiarkan lewat custom event agar semua komponen ikut ter-update.

export type ContentType = "repo" | "model" | "stack" | "berita";

export type BookmarkItem = {
  type: ContentType;
  slug: string;
};

export type Profile = {
  name: string;
  joinedAt: string;
};

const BOOKMARK_KEY = "wawasanai:bookmarks";
const PROFILE_KEY = "wawasanai:profile";
export const STORAGE_EVENT = "wawasanai:update";

function emit() {
  window.dispatchEvent(new Event(STORAGE_EVENT));
}

export function getBookmarks(): BookmarkItem[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(BOOKMARK_KEY) ?? "[]");
  } catch {
    return [];
  }
}

export function isBookmarked(type: ContentType, slug: string): boolean {
  return getBookmarks().some((b) => b.type === type && b.slug === slug);
}

export function toggleBookmark(type: ContentType, slug: string): boolean {
  const items = getBookmarks();
  const idx = items.findIndex((b) => b.type === type && b.slug === slug);
  if (idx >= 0) {
    items.splice(idx, 1);
  } else {
    items.push({ type, slug });
  }
  localStorage.setItem(BOOKMARK_KEY, JSON.stringify(items));
  emit();
  return idx < 0;
}

export function getProfile(): Profile | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(PROFILE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function saveProfile(name: string) {
  localStorage.setItem(
    PROFILE_KEY,
    JSON.stringify({ name: name.trim(), joinedAt: new Date().toISOString() })
  );
  emit();
}

export function clearProfile() {
  localStorage.removeItem(PROFILE_KEY);
  emit();
}
