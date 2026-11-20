import { searchIndex } from "@/lib/searchIndex";

// Built once at build time and served as a static file. The search modal fetches
// it lazily on first open, so the full content index is not shipped in page JS
// and not bundled into the server Worker's client-component (SSR) layer.
export const dynamic = "force-static";

export function GET() {
  return Response.json(searchIndex);
}
