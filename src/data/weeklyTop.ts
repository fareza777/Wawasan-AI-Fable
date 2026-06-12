// src/data/weeklyTop.ts
// Hand-curated narasi "Fungsi & kegunaan" + deskripsi singkat untuk Top Weekly Repo.
// Sumber repo otomatis dari Trendshift API; deskripsi & highlights di sini ditulis manual
// dengan nada editorial Wawasan AI — bukan generic template.
// Update rutin: tiap minggu cek repo baru, tulis narasi yang menjelaskan
// fungsi & kegunaan yang benar (bukan terjemahan mentah dari deskripsi GitHub).

export type WeeklyTopEntry = {
  /** Narasi pendek 1-2 kalimat yang muncul di kartu list. Bahasa Indonesia, tone Wawasan AI. */
  description: string;
  /** Bullet "Fungsi & kegunaan" yang muncul saat user klik expand. */
  highlights: string[];
};

export const WEEKLY_TOP: Record<string, WeeklyTopEntry> = {
  "mvanhorn/last30days-skill": {
    description:
      "Skill agen AI yang riset topik apapun dengan menyatukan sumber Reddit, X, YouTube, Hacker News, Polymarket, dan web jadi satu ringkasan yang ditautkan ke aslinya.",
    highlights: [
      "Riset topik apapun dengan menggabungkan sumber dari Reddit, X (Twitter), YouTube, Hacker News, Polymarket, dan web umum sekaligus.",
      "Menghasilkan ringkasan yang 'ter-grounded' — setiap klaim ditautkan ke sumber aslinya, bukan halusinasi model.",
      "Skill untuk agen AI (Claude, OpenClaw, dll) yang bisa langsung dipasang, bukan aplikasi mandiri — fleksibel dipasang ke workflow apa pun.",
      "Cocok untuk analis, jurnalis, dan siapa saja yang butuh 'apa yang sedang dibicarakan orang' tentang topik tertentu dalam 30 hari terakhir.",
    ],
  },
  "addyosmani/agent-skills": {
    description:
      "Kumpulan skill engineering kelas produksi dari Addy Osmani (Chrome Lead di Google) untuk dipasang ke Claude Code, Cursor, atau agen coding AI lain.",
    highlights: [
      "Kumpulan skill engineering kelas produksi untuk agen coding AI — best practice yang biasa dipakai engineer senior, dikurasi jadi prompt siap pakai.",
      "Dikelola oleh Addy Osmani (Engineering Lead Chrome di Google) — bobot otoritasnya tinggi untuk standar kualitas.",
      "Fokus pada alur kerja engineering nyata: code review, refactoring, testing, performance, accessibility, dan seterusnya.",
      "Bisa dipasang ke Claude Code, Cursor, atau agen coding lain yang mendukung sistem skill — sekali pasang, dipakai berkali-kali.",
    ],
  },
  "apple/container": {
    description:
      "Tool resmi Apple untuk menjalankan container Linux di Mac dengan Swift, dioptimasi untuk Apple Silicon — bukan wrapper Docker.",
    highlights: [
      "Tool resmi Apple untuk menjalankan container Linux di Mac, dibangun pakai Swift dan dioptimasi untuk Apple Silicon.",
      "Bedanya dari Docker Desktop: pakai lightweight virtual machine per container, bukan emulasi x86 — start cepat, native performance.",
      "Cocok untuk developer iOS/macOS yang butuh environment Linux tanpa kehilangan performa Apple Silicon.",
      "Open source dan dikelola langsung Apple — bukan wrapper, melainkan implementasi container dari nol dengan pendekatan Apple.",
    ],
  },
  "phuryn/pm-skills": {
    description:
      "Marketplace 100+ skill agentic khusus product management — dari ideation sampai strategi, eksekusi, peluncuran, dan growth.",
    highlights: [
      "Marketplace berisi 100+ skill agentic khusus product management — dari penemuan ide sampai strategi, eksekusi, peluncuran, dan growth.",
      "Setiap skill dirancang untuk dipasang ke agen AI (Claude, Cursor, dll) yang membantu pekerjaan PM: menulis PRD, prioritization, planning sprint, dll.",
      "Alternatif dari 'PM prompt pack' di ChatGPT — versi yang lebih terstruktur dan bisa dikustomisasi per workflow tim PM.",
      "Berguna untuk founder, PM, dan siapa saja yang perlu asisten AI khusus product management.",
    ],
  },
  "XiaomiMiMo/MiMo-Code": {
    description:
      "Model AI kecil dari Xiaomi (MiMo) yang dirancang khusus untuk coding dan tool-use agentik — performa setara frontier dengan biaya inference rendah.",
    highlights: [
      "Model AI kecil dari Xiaomi (MiMo = Mini Language Model) yang dirancang khusus untuk tugas coding dan tool-use agentik.",
      "Pendekatan Xiaomi berbeda dari model frontier besar: ukuran lebih kecil, biaya inference rendah, tapi performa setara untuk task coding tertentu.",
      "Model terbuka (open weights) — bisa dijalankan lokal atau di-host sendiri untuk menjaga privasi kode.",
      "Berguna untuk developer yang ingin menurunkan biaya API coding agent tanpa mengorbankan kualitas pada task-task umum.",
    ],
  },
  "RyanCodrai/turbovec": {
    description:
      "Vector index berbasis TurboQuant, ditulis Rust dengan Python bindings — alternatif ringan dan cepat untuk FAISS, Qdrant, atau Pinecone.",
    highlights: [
      "Vector database / index yang dibangun di atas TurboQuant, ditulis dalam Rust dengan Python bindings — fokus pada kecepatan dan efisiensi memori.",
      "Dirancang untuk workload RAG (Retrieval-Augmented Generation): pencarian nearest-neighbor cepat untuk embedding model AI.",
      "Rust core berarti sangat cepat dan aman memori — alternatif dari FAISS, Qdrant, atau Pinecone untuk use case tertentu.",
      "Cocok untuk engineer yang membangun sistem RAG skala besar dan perlu vector index yang ringan dan self-hostable.",
    ],
  },
  "mattpocock/skills": {
    description:
      "Kumpulan skill engineering TypeScript/AI dari direktori .claude Matt Pocock — teruji harian untuk coding agent, bukan teori.",
    highlights: [
      "Kumpulan skill yang diambil langsung dari direktori .claude Matt Pocock — engineer TypeScript/AI yang dikenal di komunitas.",
      "Skill engineering praktis yang sudah teruji harian oleh Matt sendiri untuk coding agent-nya — bukan teori, melainkan hasil pemakaian nyata.",
      "Fokus pada alur TypeScript dan AI tooling — debugging, refactoring, dokumentasi, dan workflow spesifik komunitas JS/TS.",
      "Bisa dipasang ke Claude Code atau agen AI lain — bermanfaat untuk developer yang ingin workflow coding-nya distandardkan.",
    ],
  },
  "chopratejas/headroom": {
    description:
      "Kompresor output tool, log, dan chunk RAG sebelum sampai ke LLM — hemat 60-95% token dengan jawaban tetap sama.",
    highlights: [
      "Memampatkan output tool, log, file, dan chunk RAG sebelum sampai ke LLM — klaim penghematan 60-95% token dengan jawaban tetap sama.",
      "Bekerja sebagai library Python, proxy, atau MCP server — fleksibel dipasang di titik mana pun dalam alur AI.",
      "Sangat berguna untuk agen yang sering memanggil tool dengan output besar (misal `cat` file 5000 baris) — biaya API turun drastis.",
      "Salah satu masalah klasik LLM agent: konteks penuh karena output terlalu panjang; headroom memecahkan ini dengan kompresi cerdas.",
    ],
  },
  "msitarzewski/agency-agents": {
    description:
      "Koleksi 100+ persona agen AI siap pakai dengan karakter dan deliverable spesifik — frontend wizard, reality checker, dan lain-lain.",
    highlights: [
      "Kumpulan 'persona' agen AI siap pakai yang masing-masing punya karakter, proses, dan deliverable spesifik — frontend wizard, Reddit community ninja, whimsy injector, reality checker, dll.",
      "Konsep 'AI agency in a box': setiap agen bisa diperlakukan sebagai anggota tim virtual dengan keahlian jelas.",
      "Cocok untuk eksplorasi workflow agentic — melihat berbagai kepribadian dan pendekatan agen sebelum membangun yang custom.",
      "Berguna untuk demo, eksperimen, atau siapa yang ingin merasakan sensasi 'punya tim agency digital' sebelum investasi lebih serius.",
    ],
  },
  "Leonxlnx/taste-skill": {
    description:
      "Skill prompt engineering untuk menyaring output AI yang generik dan steril — bikin hasil AI punya karakter dan tidak terasa template.",
    highlights: [
      "Skill untuk agen AI yang berfungsi sebagai 'penyaring rasa' — mencegah AI menghasilkan output yang membosankan dan generik.",
      "Masalah yang diselesaikan: output AI sering terlalu 'aman' dan steril; taste-skill menambahkan filter untuk membuat output lebih hidup, punya karakter, dan tidak terasa seperti template.",
      "Berguna untuk content creator, copywriter, atau siapa saja yang hasil AI-nya terasa 'AI banget' — solusi praktis tanpa fine-tuning model.",
      "Pendekatan berbasis prompt engineering — ringan, cepat dipasang, tidak butuh GPU atau model tambahan.",
    ],
  },
  "kenn-io/agentsview": {
    description:
      "Analitik session coding agent yang berjalan lokal-first, mendukung 20+ agen termasuk Claude Code dan Codex — sekaligus pengganti ccusage 100x lebih cepat.",
    highlights: [
      "Session intelligence dan analitik local-first untuk 20+ coding agent (Claude Code, Codex, Gemini CLI, dan lain-lain) — data tidak pernah keluar dari mesin.",
      "Klaim 100x lebih cepat dari ccusage — pakai untuk tracking biaya token dan penggunaan API coding agent secara real-time.",
      "Berbasis Go — ringan, single binary, dan support banyak agent lewat format log masing-masing (per-agent parser).",
      "Berguna untuk developer yang pakai banyak coding agent paralel dan perlu dashboard terpusat untuk monitor produktivitas + biaya.",
    ],
  },
  "NVIDIA/SkillSpector": {
    description:
      "Security scanner resmi NVIDIA untuk AI agent skill — deteksi vulnerability, pola berbahaya, dan supply chain attack sebelum skill dipasang ke Claude Code atau Codex.",
    highlights: [
      "Security scanner khusus AI agent skill (Claude Code, Codex CLI, Gemini CLI) — menjawab 'aman gak skill ini kalau saya pasang?'.",
      "Riset NVIDIA menunjukkan 26.1% skill punya vulnerability dan 5.2% indikasi malicious intent — SkillSpector otomatis memindai 64 pola di 16 kategori (prompt injection, data exfiltration, privilege escalation, dll).",
      "Risk scoring 0-100 dengan label severity dan rekomendasi — bukan cuma flag, tapi juga kasih tahu langkah mitigasi yang harus diambil.",
      "Bisa dipasang di CI/CD pipeline atau dipakai auditor untuk scan repo skill sebelum di-merge — official NVIDIA, Apache 2.0.",
    ],
  },
  "obra/superpowers": {
    description:
      "Framework skill agentic + metodologi software development yang battle-tested untuk coding agent — 225k+ bintang, dipasang ke Claude Code, Cursor, dan Codex.",
    highlights: [
      "Framework skill agentic yang kasih coding agent 'proses development nyata' — TDD, code review, refactoring, planning, subagent-driven development, dan seterusnya.",
      "Bukan cuma kumpulan prompt — ini metodologi software development lengkap yang sudah diuji harian oleh komunitas (225k+ bintang).",
      "Cross-platform: bisa dipasang ke Claude Code, Cursor, Codex, dan agen lain yang support skill system — satu skill pool, banyak agen.",
      "Bagian dari 'agent skill economy' yang lagi naik — Meta-orchestrator untuk skill lain, cocok untuk tim yang ingin standardisasi workflow coding agent mereka.",
    ],
  },
  "bannedbook/fanqiang": {
    description:
      "Kumpulan script dan panduan ilmu akses internet lintas batas (翻墙 — 'panjat tembok') — repositori Linux/Android/Windows/iOS/macOS untuk region dengan sensor internet ketat.",
    highlights: [
      "Repositori referensi terlengkap untuk akses internet di region dengan sensor ketat (Tiongkok, Iran, Rusia) — mencakup protokol V2Ray, Shadowsocks, Trojan, dan wireguard.",
      "Mendukung multi-platform: skrip Linux, klien Android, konfigurasi iOS/macOS, dan panduan Windows — ditulis dan diuji oleh komunitas multi-bahasa.",
      "Pendekatan open source dan terdistribusi: tidak ada single point of failure, setiap komponen bisa berdiri sendiri dan di-audit keamanannya.",
      "Berguna untuk pengguna yang tinggal atau bepergian ke region dengan sensor internet, atau untuk sysadmin yang perlu memahami arsitektur censorship circumvention secara teknis.",
    ],
  },
  "tejaswigowda/ffmpeg-webCLI": {
    description:
      "Editor video berbasis browser yang ditenagai ffmpeg.wasm — semua proses di lokal (WebAssembly), tidak ada upload ke server, privasi penuh untuk konten.",
    highlights: [
      "Editor video ringan yang berjalan 100% di browser lewat ffmpeg.wasm (WebAssembly) — tidak ada upload ke server, tidak ada tracking, konten tidak pernah keluar dari perangkat.",
      "Antarmuka command-line yang familiar untuk pengguna ffmpeg/DevOps, dikemas dalam wrapper web yang ramah — bukan GUI drag-and-drop yang membingungkan.",
      "Workflow yang cocok untuk jurnalis, whistleblower, atau siapa pun yang perlu mengedit video sensitif tanpa meninggalkan jejak di server pihak ketiga.",
      "Open source dan self-hostable — bisa di-deploy sebagai static site dan tetap aman karena semua komputasi terjadi di sisi klien.",
    ],
  },
  "DietrichGebert/ponytail": {
    description:
      "Skill CLI yang menyuntikkan pola pikir 'senior dev yang malas' ke AI coding agent — sebelum nulis kode, agent diminta berhenti dan bertanya: 'ini beneran perlu dibuat? library-nya udah ada?'.",
    highlights: [
      "Skill CLI + AGENTS.md untuk coding agent yang berisi prinsip 'lazy senior dev' — selalu cek dulu: perlu dibuat? library sudah ada? bisa satu baris?",
      "Menyediakan tiga perintah utama: `/ponytail-review` (audit diff dan hapus baris yang tidak perlu), `/ponytail ultra` (mode paling malas untuk codebase yang sulit), dan `/ponytail-help`.",
      "Filosofi 'kode terbaik adalah kode yang tidak pernah ditulis' — anti over-engineering untuk AI agent yang sering menambah dependency dan file baru tanpa perlu.",
      "JavaScript-based, open source (lisensi super pendek), tanpa dependency framework — didesain untuk dipasang ke Claude Code, Cursor, atau agen apa pun yang membaca AGENTS.md.",
    ],
  },
  "farion1231/cc-switch": {
    description:
      "Aplikasi desktop cross-platform (Rust) all-in-one untuk mengelola 6+ AI coding CLI sekaligus — Claude Code, Codex, OpenCode, OpenClaw, Gemini CLI, dan Hermes Agent dalam satu jendela.",
    highlights: [
      "Manager terpusat untuk 6+ AI coding CLI (Claude Code, Codex, OpenCode, OpenClaw, Gemini CLI, Hermes Agent) — gonta-ganti provider, API key, dan konfigurasi tanpa edit JSON manual.",
      "Dilengkapi integrasi MCP (Model Context Protocol) sehingga model AI bisa dihubungkan ke aplikasi eksternal dari satu tempat yang sama.",
      "Cross-platform desktop app (Windows/macOS/Linux) berbasis Rust + Tauri — ringan, native feel, dan tidak butuh Docker atau VM tambahan.",
      "99k+ bintang di GitHub menjadikannya salah satu tool paling populer di kalangan developer yang rutin gonta-ganti antara Claude Code, Codex, dan Gemini CLI.",
    ],
  },
};

// Helper: lookup dengan fallback ke template-generated highlights
export function getWeeklyTopEntry(fullName: string): WeeklyTopEntry | undefined {
  return WEEKLY_TOP[fullName];
}
