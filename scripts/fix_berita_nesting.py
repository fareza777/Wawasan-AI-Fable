"""One-shot repair: a failed Berita cron patch left the Diskominfo Jateng entry
nested INSIDE the previous (Sandisk) entry -- the previous object was never closed.

Line 2877: '    ],'   <- closes body array of Sandisk entry
Line 2878: '  {'      <- new entry opens WITHOUT '  },' closing Sandisk

Insert exactly one '  },' between them. Idempotent + asserts before write.
"""
import io
import sys

PATH = "src/data/berita.ts"

with io.open(PATH, "r", encoding="utf-8", newline="") as f:
    src = f.read()

BAD = '    ],\n  {\n    slug: "tingkatkan-efisiensi-layanan-birokrasi-diskominfo-jateng-dorong-opd-maksimalkan-ai",'
GOOD = '    ],\n  },\n  {\n    slug: "tingkatkan-efisiensi-layanan-birokrasi-diskominfo-jateng-dorong-opd-maksimalkan-ai",'

if GOOD in src:
    print("ALREADY FIXED - no change")
    sys.exit(0)

count = src.count(BAD)
assert count == 1, "expected exactly 1 broken boundary, found %d" % count

out = src.replace(BAD, GOOD, 1)

# structural sanity
assert out.count('slug: "tingkatkan-efisiensi-layanan-birokrasi') == 1
assert "\n];\nexport function getArtikel" in out
assert len(out) == len(src) + len("  },\n")

with io.open(PATH, "w", encoding="utf-8", newline="") as f:
    f.write(out)

print("FIXED: inserted closing '  }," + "' for Sandisk entry")
