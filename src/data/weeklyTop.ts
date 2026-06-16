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
  "elder-plinius/CL4R1T4S": {
    description:
      "Kumpulan system prompt 'yang bocor' dari 24 vendor AI besar (ChatGPT, Claude, Gemini, Grok, Perplexity, Cursor, Lovable, Replit) — demi transparansi dan observabilitas sistem AI.",
    highlights: [
      "Repositori publik terbesar yang mengumpulkan system prompt dari 24 vendor AI frontier — OpenAI, Anthropic, Google, Meta, xAI, Mistral, Moonshot, dan banyak lagi.",
      "Menjawab pertanyaan mendasar: 'siapa sebenarnya yang sedang saya ajak bicara saat chat dengan AI?' — prompt yang tidak terlihat membentuk kepribadian, batasan, dan framing etis dari model.",
      "Mencakup coding agent juga: Cursor, Devin, Cline, Windsurf, Replit, Bolt, Lovable, Vercel v0, Manus — berguna untuk engineer yang ingin tahu instruksi sistem yang dipakai tool mereka sendiri.",
      "Dipakai komunitas AI red-teaming dan prompt engineering untuk memahami refusal pattern dan perilaku model — dikelola Pliny the Prompter, kontroversial tapi berpengaruh besar di niche-nya.",
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
  "GoogleCloudPlatform/knowledge-catalog": {
    description:
      "Repositori resmi Google untuk Knowledge Catalog (sebelumnya Dataplex) — knowledge graph data enterprise yang kasih agen AI konteks dan semantik bisnis saat querying BigQuery.",
    highlights: [
      "Knowledge Catalog (sebelumnya Dataplex Universal Catalog) adalah lapisan governance dan akses data AI-centric di BigQuery — mengelola metadata teknis dan bisnis lintas data terstruktur maupun tidak terstruktur.",
      "Membangun dynamic knowledge graph yang memberi agen AI konteks nyata: bukan cuma nama tabel, tapi juga lineage, kebijakan akses, dan istilah bisnis yang relevan dengan query.",
      "Repositori ini berisi tools, agen referensi, dan sample untuk context management, enrichment, dan retrieval — titik masuk resmi bagi engineer yang mau integrasikan AI agent dengan data lake Google Cloud.",
      "Apache 2.0 dan dikelola langsung tim Google Cloud — relevan untuk UMKM sampai enterprise yang pakai BigQuery dan ingin AI agent-nya 'paham' data internal tanpa harus fine-tune model.",
    ],
  },
  "Paca-AI/paca": {
    description:
      "Alternatif open-source untuk Jira/Trello/ClickUp yang menempatkan agen AI sebagai anggota tim Scrum setara manusia — self-hosted, gratis, dan bisa dikustomisasi lewat plugin WASM.",
    highlights: [
      "Platform project management self-hosted (Apache 2.0) di mana agen AI dan manusia berkolaborasi di board yang sama — bukan chatbot tempelan, melainkan 'rekan satu tim' di sprint planning dan backlog refinement.",
      "Siklus kerja P-A-C-A (Plan-Act-Check-Adapt) dirancang khusus untuk tim campuran: BDD spec ditulis bareng AI, QA agent memverifikasi, dan board mencerminkan progres nyata antara manusia dan mesin.",
      "Sistem plugin berbasis WebAssembly (WASM) — tulis di Go, Rust, atau AssemblyScript, lalu pasang lewat marketplace internal tanpa sentuh core; cocok untuk studio dan agency yang butuh workflow custom.",
      "Dilengkapi MCP server resmi (@paca-ai/paca-mcp) sehingga Claude Desktop atau coding agent apapun bisa baca-tulis task, sprint, dan dokumen langsung dari workspace Paca lewat protokol standar.",
    ],
  },
  "microsoft/SkillOpt": {
    description:
      "Riset Microsoft yang memperlakukan 'skill' agen AI (prompt + workflow) sebagai objek yang bisa di-optimasi seperti model — meningkatkan akurasi agent pada benchmark +15-19% tanpa fine-tune LLM.",
    highlights: [
      "Memperlakukan dokumen skill natural-language sebagai 'trainable state' dari agen yang frozen — bedanya dengan prompt engineering manual: di sini skill-nya dipelajari lewat rollouts dan reflection, bukan ditulis tangan.",
      "Optimizer model mengusulkan bounded edits (add/delete/replace) ke skill, lalu validation gate di held-out batch yang menentukan apakah kandidat baru diterima — disiplin DL diterapkan ke ruang teks.",
      "Punya plugin siap pakai untuk Claude Code dan Codex: `/improve` di Claude Code memberikan gain +15-19 poin pada Codex agentic loop dan Claude Code benchmark (ALFWorld, dst).",
      "Open source (MIT) dari Microsoft Research — relevan untuk tim yang mau dorong akurasi agen tanpa menyentuh bobot model, hanya mempertajam prompt-nya lewat data.",
    ],
  },
  "omnigent-ai/omnigent": {
    description:
      "Meta-harness open-source dari Databricks yang menyatukan Claude Code, Codex, Pi, dan agen custom di bawah satu orkestrator — dengan policy guardrail, cost meter, dan kolaborasi live multi-device.",
    highlights: [
      "Layer common di atas harness yang sudah ada (Claude Code, Codex, Pi, OpenAI Agents SDK, Claude Agents SDK) — tim bisa swap atau mix harness tanpa rewrite, dan policy enforcement konsisten lintas semuanya.",
      "Polly orchestrator memecah task jadi sub-task untuk beberapa agen yang jalan paralel; session cost meter live, plus policy toggle seperti 'cost budget pause di $3' dan 'block git push setelah npm install' sampai user approve.",
      "Bisa di-deploy di server dengan stable URL, sehingga sesi coding agent reachable dari laptop, HP, atau tim lain secara real-time — fokus ke kolaborasi, bukan cuma eksekusi.",
      "Open source (Apache 2.0) dari tim AI Databricks, dibangun bareng Neon — alternatif governance-friendly untuk ad-hoc harness yang berkembang tanpa kontrol.",
    ],
  },
  "shadcn/improve": {
    description:
      "Skill agen AI dari shadcn (kreator shadcn/ui) yang pakai model paling mampu untuk audit codebase dan menulis rencana implementasi — lalu menyerahkannya ke model murah untuk eksekusi.",
    highlights: [
      "Skill dengan format Agent Skills universal — bekerja di Claude Code, Codex, atau agen apapun yang dukung standar; cukup `/improve` dan agen termahal akan mengaudit codebase end-to-end.",
      "Audit fans out ke subagents paralel untuk 9 kategori: correctness, security, performance, test coverage, tech debt, dependencies, DX, docs, direction — setiap finding punya evidence file:line, impact, effort, confidence.",
      "Output-nya bukan patch langsung, melainkan file plan markdown di folder `plans/` — ditulis untuk 'executor paling lemah' sehingga model murah bisa menjalankan dengan drift check otomatis via git commit stamp.",
      "Pemisahan 'advisor pintar + executor murah' adalah pattern operasional yang sedang naik — relevan untuk founder dan tech lead yang ingin workflow engineering lebih disiplin tanpa membayar GPT-5 untuk setiap refactor.",
    ],
  },
  "Panniantong/Agent-Reach": {
    description:
      "CLI 'mata' untuk AI agent — baca dan cari di 12+ platform (X, Reddit, YouTube, GitHub, Bilibili, XiaoHongShu, LinkedIn, RSS, web) lewat satu perintah, tanpa bayar API key.",
    highlights: [
      "Satu CLI yang menyatukan pembacaan 12+ platform: Twitter/X, Reddit, YouTube, GitHub, Bilibili, XiaoHongShu, Instagram, LinkedIn, Boss直聘, RSS, dan sembarang URL web (via Jina/Exa).",
      "Filosofi 'zero API fees' — pakai cookie login + scraper open source (twitter-cli, rdt-cli, xhs-cli, bili-cli, yt-dlp) jadi agent tidak butuh subscription Twitter API, Reddit API, atau Apify.",
      "Dibuat untuk dipasang ke coding agent (Claude Code, OpenClaw, Cursor, Windsurf) lewat SKILL.md — agent cukup `agent-reach search-twitter \"query\"` atau `agent-reach read <url>` dari terminal.",
      "Dilengkapi `agent-reach doctor` untuk self-diagnosis channel, dan `agent-reach install --env=auto` yang menarik dependency yang dibutuhkan secara otomatis — plug-and-play untuk workflow riset agentik.",
    ],
  },
  "tamnd/kage": {
    description:
      "Tool Go untuk 'mengarsipkan' situs web jadi HTML statis siap baca offline — jalankan headless Chrome, snapshot DOM manusia, buang semua JavaScript, simpan CSS/gambar/font ke lokal.",
    highlights: [
      "Mirror website ke folder lokal berisi file .html polos — buka langsung dari disk, kirim ke teman, atau simpan ke ZIM; tidak ada spinner atau blank screen enam bulan kemudian.",
      "Menggunakan headless Chrome asli untuk merender halaman, lalu menghapus seluruh JavaScript dan menurunkan aset (CSS, gambar, font) ke path lokal — DOM yang dilihat manusia, bukan DOM yang dilihat crawler.",
      "Punya mode `kage pack` yang mengubah mirror jadi satu file ZIM, binary viewer mandiri, atau double-click app — sekali simpan, bisa dibuka di mana pun tanpa install apa pun.",
      "Berguna untuk AI/RAG engineer yang butuh korpus dokumentasi offline, jurnalis yang ingin snapshot artikel investigasi, atau siapa saja yang muak dengan 'Save As' browser yang tidak benar-benar menyimpan halaman.",
    ],
  },
  "agentscope-ai/QwenPaw": {
    description:
      "Asisten AI personal open-source dari tim AgentScope Alibaba — deploy lokal atau cloud, terhubung ke multi-channel chat (DingTalk, Feishu, WeChat, Discord, Telegram), dan extensible lewat sistem 'skill'.",
    highlights: [
      "Arsitektur 'skill-based' jadi fitur utamanya: agent menentukan apa yang bisa dia lakukan lewat skill (scheduling, PDF/Office processing, news digest, custom skill) — tanpa lock-in, plugin share lewat AgentScope Platform marketplace.",
      "Multi-agent collaboration: bisa spawn banyak agent independen masing-masing dengan role sendiri, lalu aktifkan skill kolaborasi agar mereka tackle task kompleks bareng-bareng — pattern 'supervisor + worker' yang lagi tren.",
      "Dukungan multi-channel out-of-the-box — satu QwenPaw bisa sekaligus nyala di DingTalk, Feishu, WeChat, Discord, Telegram; cocok untuk tim distributed yang chat di platform berbeda.",
      "Memory-evolving & local-first: agent belajar dari interaksi dan reflect pengalaman, sementara data memory tetap di mesin/cloud milik sendiri (no third-party hosting) — menjawab kekhawatiran privasi AI asisten pribadi.",
    ],
  },
};

// Helper: lookup dengan fallback ke template-generated highlights
export function getWeeklyTopEntry(fullName: string): WeeklyTopEntry | undefined {
  return WEEKLY_TOP[fullName];
}
