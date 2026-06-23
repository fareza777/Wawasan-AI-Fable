import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("robots blocks admin and private utility routes", () => {
  const source = readFileSync("src/app/robots.ts", "utf8");

  assert.ok(source.includes('disallow: ["/admin"'));
  assert.ok(source.includes('"/api/"'));
  assert.ok(source.includes('"/koleksi"'));
  assert.ok(source.includes('"/contoh-plat"'));
});

test("sitemap includes weekly archives and feed", () => {
  const source = readFileSync("src/app/sitemap.ts", "utf8");

  assert.ok(source.includes("weekly-sitemap"));
  assert.ok(source.includes('"/feed.xml"'));
  assert.ok(source.includes("weeklyArchives"));
});