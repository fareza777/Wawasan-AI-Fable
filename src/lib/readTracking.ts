const READ_KEY = "wawasanai:read";
const VISIT_KEY = "wawasanai:lastVisit";
export const READ_EVENT = "wawasanai:read-update";

function emit() {
  window.dispatchEvent(new Event(READ_EVENT));
}

export function markAsRead(type: string, slug: string) {
  if (typeof window === "undefined") return;
  const items = getReadItems();
  if (!items.some((i) => i.type === type && i.slug === slug)) {
    items.push({ type, slug, at: new Date().toISOString() });
    localStorage.setItem(READ_KEY, JSON.stringify(items));
    emit();
  }
}

export function getReadItems(): { type: string; slug: string; at: string }[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(READ_KEY) ?? "[]");
  } catch {
    return [];
  }
}

export function isRead(type: string, slug: string) {
  return getReadItems().some((i) => i.type === type && i.slug === slug);
}

export function recordVisit() {
  if (typeof window === "undefined") return;
  localStorage.setItem(VISIT_KEY, new Date().toISOString());
}

export function getLastVisit(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(VISIT_KEY);
}
