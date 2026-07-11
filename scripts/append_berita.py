import sys
from pathlib import Path

src_path = Path("E:/agents/hermes-agent/work/wawasan-ai/Wawasan-AI-Fable/src/data/berita.ts")
tmp_path = Path("C:/Users/FAJAR/AppData/Local/Temp/berita_entry.txt")

new_entry = tmp_path.read_text(encoding="utf-8")
text = src_path.read_text(encoding="utf-8")

marker = "];\nexport function getArtikel(slug: string) {"
assert marker in text, "anchor not found in berita.ts"
before, after = text.split(marker, 1)

assert new_entry.rstrip().endswith("},"), "new_entry must end with closing '  },'"

if before.endswith("\n"):
    combined_before = before + new_entry
else:
    combined_before = before + "\n" + new_entry

result = combined_before + marker + after
src_path.write_text(result, encoding="utf-8")

assert "];\nexport function getArtikel" in result, "marker lost!"
print("OK: appended")
print("Line count:", result.count("\n"))
