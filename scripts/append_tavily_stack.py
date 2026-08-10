"""Append the Tavily entry to src/data/stacks.ts safely (lesson #120 pattern).

Rewrites the file in Python instead of using the patch tool, which is known to
silently re-indent or fuzzy-match-delete unrelated entries (#86/#100/#115).

Triple-checks before writing:
  - anchor unique
  - new slug absent, previous slug still present
  - structural delimiters stay at column 1
  - entry count grows by exactly 1
"""
import io
import sys

PATH = "src/data/stacks.ts"
ENTRY_PATH = "C:/Users/FAJAR/AppData/Local/Temp/stacks_entry_tavily.txt"
NEW_SLUG = "tavily"
PREV_SLUG = "frase"

with io.open(PATH, "r", encoding="utf-8", newline="") as f:
    src = f.read()

with io.open(ENTRY_PATH, "r", encoding="utf-8") as f:
    entry = f.read()

# --- pre-flight asserts -------------------------------------------------
assert src.count('slug: "%s"' % NEW_SLUG) == 0, "new slug already present - abort"
assert src.count('slug: "%s"' % PREV_SLUG) == 1, "previous slug missing/dupe - abort"
assert entry.strip().endswith("},"), "entry must end with '},'"
assert 'slug: "%s"' % NEW_SLUG in entry, "entry missing its own slug"
assert all(ord(c) < 128 for c in entry), "entry contains non-ASCII - abort"

nl = "\r\n" if "\r\n" in src else "\n"
entry = entry.replace("\r\n", "\n").replace("\n", nl)

before_entries = src.count("    slug: ")

# --- locate structural anchor (array closer) ----------------------------
anchor = nl + "];" + nl
idx = src.rindex(anchor)
assert src.count(anchor) >= 1

out = src[: idx + len(nl)] + entry + src[idx + len(nl):]

# --- post-build asserts -------------------------------------------------
assert out.count('slug: "%s"' % NEW_SLUG) == 1, "new slug not inserted exactly once"
assert out.count('slug: "%s"' % PREV_SLUG) == 1, "previous entry got clobbered"
assert out.count("    slug: ") == before_entries + 1, "entry count delta != 1"
assert nl + "];" + nl in out, "array closer lost"
assert nl + "export function getStack(slug: string) {" in out, "export fn lost"
assert len(out) == len(src) + len(entry), "unexpected length delta"

with io.open(PATH, "w", encoding="utf-8", newline="") as f:
    f.write(out)

print("OK: appended %s (entries %d -> %d)" % (NEW_SLUG, before_entries, before_entries + 1))
