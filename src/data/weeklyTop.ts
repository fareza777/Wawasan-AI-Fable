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
  "headroomlabs-ai/headroom": {
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
  "Kilo-Org/kilocode": {
    description:
      "Platform agentik engineering open-source all-in-one — coding agent untuk VS Code, JetBrains, dan CLI yang support 500+ model AI (Claude, GPT, Gemini) tanpa lock-in vendor.",
    highlights: [
      "Coding agent open-source yang support 500+ model AI (Claude Sonnet, GPT, Gemini, dll) lewat satu antarmuka — tidak terkunci ke vendor tertentu, tinggal switch model sesuai task dan budget.",
      "Tersedia di tiga permukaan sekaligus: extension VS Code, plugin JetBrains, dan CLI standalone — agent yang 'menemani di mana pun kamu kerja', bukan salah satu saja.",
      "Fitur lengkap agentik: inline autocomplete, browser automation, refactor otomatis, custom mode (planning/coding/debugging), sampai code review otomatis untuk pull request lewat cloud workflow.",
      "Berguna untuk developer yang ingin kontrol penuh atas tool AI coding-nya — tidak mau bergantung ke Copilot atau Cursor saja, atau butuh workflow agentik yang bisa di-host sendiri dan dikustomisasi.",
    ],
  },
  "DeusData/codebase-memory-mcp": {
    description:
      "Mesin code intelligence tercepat untuk AI coding agent — index repo jadi knowledge graph via tree-sitter dalam milidetik, Linux kernel (28M LOC) selesai 3 menit, ships sebagai single static binary.",
    highlights: [
      "MCP server yang meng-index codebase jadi knowledge graph persisten (fungsi, kelas, call chain, HTTP route, cross-service link) pakai tree-sitter + Hybrid LSP — repo rata-rata selesai dalam milidetik, Linux kernel 28M LOC hanya 3 menit.",
      "Dukungan 158 bahasa via tree-sitter, plus semantic type resolution untuk Python, TypeScript, Go, Rust, Java, C++, dan 6 bahasa lain — bukan text search, tapi pemahaman struktur kode yang bisa di-query lewat Cypher on the fly.",
      "Hemat 99% token dibanding pendekatan file-reading mentah — agent cuma query 'di mana fungsi X dipanggil dan apa caller-nya' daripada harus baca satu-satu file, mempercepat iterasi coding agentik secara drastis.",
      "Ships sebagai satu static binary (macOS/Linux/Windows) dengan auto-install ke Claude Code, Codex CLI, ChatGPT, Cursor, dan lain-lain — plug-and-play, zero dependency, plus UI visualisasi graph-nya sendiri.",
    ],
  },
  "github/spec-kit": {
    description:
      "Toolkit spec-driven development resmi dari GitHub — bikin spec, plan, dan task lebih dulu sebelum coding, biar coding agent (Copilot, Claude Code, Gemini CLI) implement dari brief yang jelas, bukan dari vibe-coding.",
    highlights: [
      "Toolkit open-source dari GitHub yang memperkenalkan workflow 'Specify → Plan → Tasks → Implement' — coding agent tidak lagi menebak dari prompt pendek, tapi dari dokumen PRD + technical plan + task breakdown yang sudah disusun manusia.",
      "Bisa dipasang ke coding agent populer (GitHub Copilot, Claude Code, Gemini CLI) lewat perintah `/speckit.specify`, `/speckit.plan`, `/speckit.tasks` — workflow spec-driven jadi format standar lintas IDE dan CLI, bukan kebiasaan satu tool saja.",
      "Mengatasi masalah klasik 'looks right but doesn't work' — dengan spec yang eksplisit, output agent lebih jarang meleset karena brief-nya jelas, traceability keputusan ada di dokumen, dan perubahan di-spec dulu sebelum kode.",
      "Cocok untuk tim engineering yang ingin scale pemakaian coding agent — bukan hanya demo one-shot, tapi workflow reproducible yang bisa di-review, di-share, dan di-onboard-kan ke developer baru dengan kurva belajar landai.",
    ],
  },
  "OpenCut-app/OpenCut": {
    description:
      "Editor video open-source alternatif CapCut untuk web, desktop, dan mobile — dibangun ulang dengan Rust core, arsitektur plugin-first, dan MCP server untuk AI agent.",
    highlights: [
      "Alternatif CapCut yang sepenuhnya open-source (MIT) dan gratis — target ambisius: 'satu codebase untuk web, desktop, dan mobile' lewat Rust core lintas platform.",
      "Sedang ditulis ulang dari nol dengan Editor API dan arsitektur plugin-first — pihak ketiga bisa bikin plugin resmi (transisi, efek, encoder) yang jalan mulus lintas platform.",
      "Roadmap mencakup MCP server, headless mode untuk otomatisasi rendering batch, dan scripting tab di dalam editor — dirancang supaya AI agent bisa akses timeline lewat protokol standar.",
      "Relevan untuk content creator dan tim video yang bosan lock-in CapCut/Premiere — ada backing sponsor (fal.ai) sehingga sustainability-nya bukan pertanyaan, dan 57k+ bintang di GitHub dalam setahun.",
    ],
  },
  "google-research/timesfm": {
    description:
      "Time-series foundation model open-source dari Google Research — pretrained untuk forecasting deret waktu apa pun, dengan checkpoint di Hugging Face dan integrasi BigQuery ML.",
    highlights: [
      "Foundation model dari Google Research khusus time-series forecasting (TimesFM = Time Series Foundation Model) — pendekatan decoder-only, ICML 2024, dan sudah sampai versi 2.5 di Juni 2026.",
      "Cara pakainya sangat praktis: 'feed' data deret waktu (sales, sensor, trafik, saham) → dapat prediksi multi-step tanpa harus training model dari awal — 'pretrained untuk forecasting, bukan dilatih ulang per use case'.",
      "Sudah dipakai di produk Google internal: BigQuery ML (forecasting via SQL), Google Sheets (forecast di spreadsheet bisnis), dan Vertex Model Garden (endpoint agentik untuk panggil dari workflow apa pun).",
      "Dilengkapi Hugging Face checkpoint, dokumentasi finetuning dengan PEFT/LoRA, dan AGENTS.md + SKILL.md — coding agent yang butuh kemampuan forecasting deret waktu bisa langsung pakai lewat protokol standar.",
    ],
  },
  "EpicGames/lore": {
    description:
      "Sistem version control generasi baru buatan Epic Games — content-addressed, Merkle tree, dioptimasi untuk file biner besar (game asset, film, model ML) dengan SDK multi-bahasa.",
    highlights: [
      "VCS open-source dari Epic Games (MIT) yang dirancang khusus untuk aset biner besar — beda dari Git yang struggle sama file besar, Lore pakai content-addressed storage, Merkle tree, dan chunking untuk deduplication.",
      "Sparse on-demand hydration: workspace tidak perlu download semua aset di awal, cukup fetch chunk yang sedang dibuka — krusial untuk repo game/film/model ML yang ukurannya ratusan GB.",
      "Server-side architecture dengan caching dan locking yang scalable — tim besar (developer game, studio VFX) bisa kolaborasi tanpa bottleneck, plus 'free branching' yang ringan seperti di Git tapi untuk binary.",
      "SDK resmi untuk C/C++, C#, Rust, Go, Python, JavaScript — sama persis stack yang dipakai tim Unreal dan tool AI modern, sehingga integrasi ke pipeline yang sudah ada relatif mulus.",
    ],
  },
  "Waishnav/devspace": {
    description:
      "Server MCP self-hosted yang bikin ChatGPT bisa baca, edit, dan jalankan kode di project lokal kamu langsung — tanpa upload source ke server pihak ketiga.",
    highlights: [
      "Server MCP self-hosted yang membuka akses ChatGPT ke file, terminal, dan tooling lokal — install via 'npm install -g @waishnav/devspace', expose lewat tunnel (Cloudflare/ngrok/Tailscale), dan ChatGPT langsung punya kemampuan coding agentik ala Codex.",
      "Cocok untuk user ChatGPT Plus/Pro yang mau pakai GPT-5 untuk planning + handover ke coding agent di project lokal, tanpa harus copy-paste file atau nge-share codebase ke cloud orang lain.",
      "Owner password approval page saat client pertama kali konek, plus konfigurasi folder mana yang boleh diakses — setiap aksi (read/edit/run) lewat DevSpace tetap bisa diinspeksi, jadi 'kontrol' tetap di tangan developer.",
      "Pendekatan 'one tunnel, one project' yang ringan: default endpoint lokal di 127.0.0.1:7676, dokumentasi lengkap untuk setup, security model, dan troubleshooting — bukan platform SaaS, melainkan tool developer yang portable.",
    ],
  },
  "yaojingang/yao-meta-skill": {
    description:
      "Framework 'Skill OS' untuk authoring, evaluasi, dan tata kelola agent skill yang reusable — Skill IR, target compiler multi-platform, Output Eval Lab, dan Review Studio untuk release gate.",
    highlights: [
      "Skill OS 2.0: bukan cuma bikin SKILL.md, tapi govern full lifecycle — semantic contract (Skill IR), target compiler untuk OpenAI/Claude/Agent Skills/VS Code, Output Eval Lab, release governance, dan SkillOps telemetry untuk iterasi.",
      "Membungkus workflow yang berulang jadi paket skill yang portable lintas platform — masukkan runbook, transcript, atau prompt set, dapat 'lean entrypoint' dengan intent, trigger, input/output, dan boundary yang jelas.",
      "Review Studio 2.0 sebagai gate rilis: satu halaman HTML yang menggabungkan intent check, output eval, context cost, runtime probe, trust signal, dan adoption drift — reviewer tinggal lihat ringkasan, bukan baca source dari nol.",
      "Dilengkapi Output Eval Lab (assertion grading + execution/timing/token evidence + blind A/B review), world-class evidence ledger, dan claim guard yang menahan 'public claim' sebelum evidence lengkap — fokus ke engineering rigor, bukan hype.",
    ],
  },
  "StarTrail-org/PixelRAG": {
    description:
      "Pendekatan RAG baru yang render halaman web jadi screenshot tile, lalu embed pakai Qwen3-VL LoRA — tabel, chart, dan layout tetap utuh, tidak hilang saat diparse jadi teks.",
    highlights: [
      "PixelRAG menggantikan parsing-to-text yang sering kehilangan tabel dan chart dengan render-to-image, lalu retrieve tile yang tepat — angka di tabel tetap terbaca langsung dari gambar.",
      "Embedder Qwen3-VL di-LoRA fine-tune khusus untuk screenshot halaman web, sehingga ruang vektornya paham konten visual, bukan hanya teks di sekitarnya.",
      "Pakai CLI `pixelshot` (Playwright/CDP, tanpa backend) untuk capture, lalu pipeline `pixelrag chunk → embed → build-index` sampai serve FAISS lewat FastAPI — bisa di-render di CPU atau GPU.",
      "Cocok untuk knowledge base internal yang penuh dashboard, spreadsheet, dan laporan visual — use case yang selama ini jadi titik lemah RAG teks tradisional.",
    ],
  },
  "calesthio/OpenMontage": {
    description:
      "Sistem produksi video agentik open-source pertama — 12 pipeline, 52 tool, dan 500+ skill yang mengubah AI coding assistant jadi studio produksi video dari riset sampai render akhir.",
    highlights: [
      "Pipeline terstruktur mengikuti alur produksi nyata: research → proposal → script → scene_plan → assets → edit → compose, dengan director skill per stage yang mengajar agen cara eksekusi tahapannya.",
      "12 pipeline siap pakai (explainer, talking head, screen demo, trailer sinematik, animasi, podcast, localization, documentary montage, dll) + 52 tool untuk video/image/TTS/music/subtitle/enhancement.",
      "Web research jadi tahap kelas satu: agen jalankan 15-25+ pencarian YouTube, Reddit, HN, news, dan sumber akademik sebelum nulis script — output grounded, bukan halusinasi.",
      "Bisa bikin video 'real footage' dari stok gratis dan arsip terbuka (bukan animasi still image) serta render via Remotion; contoh kasus nyata seperti trailer 'SIGNAL FROM TOMORROW' dan short 'THE LAST BANANA' biaya total <$2.",
    ],
  },
  "Forsy-AI/agent-apprenticeship": {
    description:
      "Ekosistem terbuka di mana agen AI saling bertukar 'pengalaman kerja' lewat workflow loop, lesson yang bisa dipakai ulang, dan sinyal training yang dikumpulkan dari kerja dunia nyata.",
    highlights: [
      "Framework `npx agent-apprenticeship init` yang membungkus long-horizon task jadi workflow loop antara apprentice agent dan mentor agent — bisa model-assisted, expert-led, atau hybrid.",
      "Seed dataset awal sudah termasuk 500+ task dunia nyata, 495 lesson reusable, 1000+ execution trace, dan 1000+ episode rollout — fondasi training signal yang langsung bisa dipakai.",
      "Kompatibel dengan agen yang banyak dipakai: Codex, Cursor, Claude Code, OpenClaw, OpenCode, Hermes Agent — mentor loop bisa di-swap ke OpenAI/Anthropic/Gemini/OpenRouter.",
      "Setiap task yang selesai lewat Agent Apprenticeship bisa diestimasi nilai ekonominya (khususnya domain khusus), jadi 'pekerjaan agen' punya metrik nilai — bukan cuma selesai/tidak.",
    ],
  },
  "iptv-org/iptv": {
    description:
      "Daftar publik 100+ ribu channel TV live dari seluruh dunia yang dikurasi komunitas — tinggal salin URL M3U ke VLC, Kodi, atau player IPTV apa pun, gratis.",
    highlights: [
      "Repositori IPTV publik terbesar di GitHub: lebih dari 100 ribu channel dari 200+ negara, dikurasi komunitas dan diperbarui otomatis lewat GitHub Actions.",
      "Salin satu URL playlist M3U ke VLC, Kodi, IINA, atau player IPTV mana pun — tidak perlu install aplikasi tambahan, tidak perlu sign-up, tidak perlu langganan.",
      "Dilengkapi EPG (Electronic Program Guide) terpisah, database metadata channel, API publik, dan daftar Awesome IPTV player — bukan cuma playlist, tapi ekosistem lengkap untuk nonton TV live legal.",
      "Cocok untuk pengguna yang ingin akses channel berita, olahraga, dan hiburan gratis via internet, atau untuk developer IPTV player yang butuh sumber playlist terverifikasi.",
    ],
  },
  "palmier-io/palmier-pro": {
    description:
      "Editor video open-source untuk macOS Apple Silicon yang 'dibangun untuk AI' — Claude Code, Codex, atau Cursor bisa edit timeline lewat MCP server bawaan, bukan cuma nonton hasil render.",
    highlights: [
      "Editor video native Swift dari Palmier Inc (Y Combinator S24) yang dirancang dari awal dengan AI workflow sebagai warga kelas satu — bukan bolt-on, melainkan MCP server lokal di port 19789 yang diekspos sejak app dibuka.",
      "Claude Code, Codex, atau Cursor bisa menambah, memotong, dan menyusun clip di timeline lewat protokol MCP standar — `claude mcp add --transport http palmier-pro http://127.0.0.1:19789/mcp` langsung nyala, agen AI menjadi editor video yang bisa berkolaborasi.",
      "Generator AI bawaan untuk Seedance, Kling, Nano Banana Pro langsung di timeline — video dan image di-generate, di-drag, dan di-compose di tempat yang sama tanpa harus bolak-balik ke tool lain.",
      "100% open source (GPLv3) untuk editor dan MCP server-nya; butuh macOS 26 Tahoe di Apple Silicon, dan fitur generative AI-nya subscription-based — relevan untuk tim content creator yang ingin AI agent jadi co-editor, bukan cuma generator.",
    ],
  },
  "tw93/Pake": {
    description:
      "CLI Rust + Tauri yang membungkus halaman web apa pun jadi aplikasi desktop native — jauh lebih ringan dari Electron (20x lebih kecil), cocok untuk bikin wrapper ChatGPT, WhatsApp Web, atau dashboard internal.",
    highlights: [
      "Web-to-desktop converter open-source dari developer Tw93: satu perintah `pake <url>` langsung menghasilkan installer native untuk macOS, Windows, dan Linux — pakai WebView OS (WKWebView/WebView2/WebKitGTK), bukan Chromium embed.",
      "Bedanya dari Electron: bundle 20x lebih kecil, start-up nyaris instan, dan konsumsi RAM ratusan megabyte lebih hemat — karena tidak embed Chromium, melainkan WebView yang sudah ada di OS.",
      "Kustomisasi lengkap lewat CLI: judul, ikon, lebar minimum, full-screen mode, dan JavaScript injection untuk tweak tampilan — WebView yang dibungkus tetap ngerasa native, bukan wrapper yang kaku.",
      "Cocok untuk developer yang ingin bikin 'aplikasi wrapper' untuk ChatGPT, WhatsApp Web, Linear, atau dashboard internal tanpa setup native project — 50+ ribu bintang di GitHub jadi bukti komunitas sudah adopsi sebagai standar.",
    ],
  },
  "bytedance/deer-flow": {
    description:
      "Harness SuperAgent open-source dari ByteDance yang riset, kode, dan bikin konten dalam satu workflow multi-agen — pakai sandbox, memori, sub-agen, dan skill ekstensibel untuk task yang makan menit sampai jam.",
    highlights: [
      "DeerFlow 2.0 (Deep Exploration and Efficient Research Flow) ditulis ulang dari nol oleh ByteDance dan sempat rebut #1 GitHub Trending pada 28 Februari 2026 — di atas pondasi LangChain, LangGraph, dan protokol MCP standar.",
      "Orkestrasi multi-agen: satu prompt bisa dipecah ke sub-agen riset, coding, dan content creation yang jalan paralel di sandbox terisolasi, lalu hasilnya di-sintesis jadi laporan, podcast, atau slide — output podcast termasuk built-in.",
      "Coding Plan dari ByteDance Volcengine merekomendasikan Doubao-Seed-2.0-Code, DeepSeek v3.2, dan Kimi 2.5 sebagai LLM backend — bisa juga pakai OpenAI/Anthropic; setup satu baris lewat CLI atau web UI.",
      "100% open source (MIT) Python + Node.js; pakai InfoQuest dari BytePlus untuk web search, dukung skill ekstensibel untuk domain khusus (finance, akademis, dsb) — relevan untuk tim riset, jurnalis data, dan konsultan yang mau otomatisasi deep research.",
    ],
  },
  "jamiepine/voicebox": {
    description:
      "Studio voice AI open-source yang jalan lokal — clone suara, dikte global ke aplikasi mana pun, dan bikin agen AI (Claude Code, Cursor) bicara lewat suara cloned lewat MCP server bawaan.",
    highlights: [
      "Voicebox v0.5 menyatukan voice cloning (Qwen3-TTS, Whisper), multi-track timeline editor, dan push-to-talk global yang auto-paste transkrip ke field aplikasi manapun — 30+ ribu bintang GitHub dan GUI native untuk macOS/Windows.",
      "Mendukung hampir semua akselerator GPU: MLX (Metal) 4-5x lebih cepat di Apple Silicon, PyTorch CUDA di NVIDIA, ROCm di AMD, DirectML universal di Windows, IPEX di Intel Arc, sampai CPU fallback — auto-detect saat instalasi.",
      "REST API lokal di port 17493 (`/generate`, `/speak`, `/transcribe`) plus MCP server HTTP yang langsung plug ke Claude Code, Cursor, Windsurf, Cline lewat `claude mcp add voicebox --transport http` — agen bisa 'bicara' dengan suara cloned yang konsisten antar-task.",
      "Semua pemrosesan 100% lokal (privasi penuh, tidak ada data ke cloud), engine preset Qwen CustomVoice dan Kokoro mendukung bahasa selain Inggris; relevan untuk creator, podcaster, dan developer yang mau kasih 'suara khas' ke agen AI mereka sendiri.",
    ],
  },
  "ZhuLinsen/daily_stock_analysis": {
    description:
      "Sistem analisis saham multi-pasar bertenaga LLM untuk saham A/HK/US/JP/Korea — kumpulkan data pasar real-time, news, dan dashboard keputusan yang auto-push tiap pagi ke WeCom, Feishu, Telegram, Discord, Slack, atau email.",
    highlights: [
      "Repo Python open-source (MIT) yang fokus ke investor ritel Asia: tiap pagi sistem menarik data multi-sumber, menjalankan analisis teknikal + fundamental lewat LLM, dan menghasilkan 'dashboard keputusan' siap baca — bukan sekadar notifikasi harga.",
      "Pipeline analisis end-to-end: kutipan real-time + berita dari banyak sumber → ringkasan via LLM (DeepSeek, GPT, atau model lokal) → output visual dengan indikator teknikal dan sinyal beli/jaga/jual yang bisa dikonfigurasi per-watchlist.",
      "Auto-push gratis via GitHub Actions — zero biaya operasional (cukup modal LLM API opsional); mendukung notifikasi ke banyak channel sekaligus, dan tiap watchlist saham bisa punya prompt analisa yang berbeda.",
      "44+ ribu bintang GitHub dengan komunitas CN aktif; relevan untuk trader ritel Indonesia yang juga pantau saham regional, atau developer yang ingin bangun pipeline riset pasar otomatis — kustomisasi prompt LLM jadi kunci untuk gaya analisa masing-masing.",
    ],
  },
  "mukul975/Anthropic-Cybersecurity-Skills": {
    description:
      "Pustaka 754 skill cybersecurity untuk AI agent yang dipetakan ke 5 framework industri (MITRE ATT&CK, NIST CSF 2.0, MITRE ATLAS, D3FEND, NIST AI RMF) — langsung pasang ke Claude Code, Codex, Cursor, atau Gemini CLI.",
    highlights: [
      "Pustaka cybersecurity skill terbuka terbesar untuk AI agent: 754 skill terstruktur, 26 domain keamanan, mengikuti standar agentskills.io — sekali pasang, AI agent langsung punya 'naluri' analis keamanan senior.",
      "Satu-satunya pustaka skill yang memetakan setiap skill ke 5 framework sekaligus (MITRE ATT&CK, NIST CSF 2.0, MITRE ATLAS, D3FEND, NIST AI RMF) — auditor dan compliance officer bisa cross-check coverage tanpa kerja manual tambahan.",
      "Mendukung 20+ platform AI agent: Claude Code, GitHub Copilot, Codex CLI, Cursor, Gemini CLI, OpenClaw, Hermes Agent, dan lain-lain — workflow yang sama, tidak perlu rewrite per tool.",
      "Apache 2.0 dan community-driven (bukan project resmi Anthropic PBC) — 17 ribu bintang GitHub, 2 ribu fork, dipakai sebagai referensi oleh index skill seperti agentskillsindex.com; relevan untuk security engineer, blue team, dan tim DevSecOps yang ingin scale investigasi lewat agentik AI.",
    ],
  },
  "Stirling-Tools/Stirling-PDF": {
    description:
      "Aplikasi PDF open-source #1 di GitHub (80+ ribu bintang) — edit, tanda tangani, redact, konversi, dan otomasi PDF via desktop app, web UI, atau self-hosted server dengan API privat.",
    highlights: [
      "Aplikasi PDF open-source terlengkap di GitHub (80+ ribu bintang) dengan 50+ tool: edit, merge, split, sign, redact, convert, OCR, compress — semua di satu platform yang bisa dijalankan sebagai desktop app, web UI, atau self-hosted server dengan API privat.",
      "Pendekatan 'PDF tanpa cloud': dokumen tidak pernah dikirim ke server pihak ketiga — deployment lokal (Docker satu baris) atau on-prem enterprise dengan SSO, audit trail, dan API REST ke hampir semua tool.",
      "Workflow otomasi tanpa kode di UI + REST API untuk integrasi ke pipeline yang sudah ada — tim yang memproses jutaan PDF per bulan bisa scripting pipeline tanpa harus beli Adobe Acrobat atau Foxit.",
      "Antarmuka sudah diterjemahkan ke 40+ bahasa (termasuk Indonesia) dan dilisensikan open-core (MIT untuk versi komunitas) — relevan untuk admin, legal team, dan tim operasional perusahaan Indonesia yang butuh kontrol penuh atas dokumen sensitif.",
    ],
  },
  "topoteretes/cognee": {
    description:
      "Mesin knowledge open-source (19k+ bintang) yang kasih agen AI memori jangka panjang lewat knowledge graph self-hosted — bukan vector DB biasa, melainkan memory layer yang belajar dari waktu ke waktu.",
    highlights: [
      "Menggabungkan vector search, graph database, dan pendekatan cognitive science jadi satu 'knowledge engine' — agen AI bisa meng-ingest data dari format apa pun lalu query dengan makna yang mempertimbangkan relasi, bukan hanya kemiripan teks.",
      "ECL pipeline (Extract → Cognify → Load) membangun knowledge graph dari interaksi dan dokumen agen — memory-nya persistent lintas session, sehingga agen 'ingat' konteks sebelumnya tanpa harus di-prompt ulang.",
      "Mendukung multi-modal (teks, gambar, audio) dan punya MCP server resmi untuk dipasang ke Claude Code, Cursor, dan coding agent lain — 'memory layer' universal yang plug ke workflow agentik apa pun.",
      "Apache 2.0, bisa di-deploy lokal, Modal, Railway, Fly.io, Render, atau Daytona — relevan untuk tim yang ingin agen AI-nya punya ingatan jangka panjang tanpa lock-in ke SaaS proprietary atau fine-tune model.",
    ],
  },
  "JCodesMore/ai-website-cloner-template": {
    description:
      "Template Next.js 16 (MIT) yang mengubah URL situs mana pun menjadi codebase modern lewat satu perintah `/clone-website` — didukung Claude Code, Codex, Cursor, Windsurf, dan 12 coding agent lain.",
    highlights: [
      "Pipeline 5 fase (Reconnaissance → Foundation → Component Specs → Parallel Build → Assembly & QA) yang dispatch builder agent paralel lewat git worktree — setiap section situs dibangun terpisah lalu di-merge.",
      "Output bersih: Next.js 16 + React 19 + TypeScript strict, Tailwind v4 dengan design token oklch yang diekstrak dari situs asli, plus komponen shadcn/ui siap pakai — bukan scrap statis HTML.",
      "Bisa dipakai untuk migrasi platform (WordPress/Webflow/Squarespace ke Next.js), rekonstruksi source code yang hilang, atau eksplorasi desain situs produksi untuk pembelajaran — README-nya eksplisit melarang phishing dan pelanggaran ToS.",
      "Mendukung 13 coding agent: Claude Code (direkomendasikan dengan Opus 4.7), Codex CLI, OpenCode, Copilot, Cursor, Windsurf, Gemini CLI, Cline, Roo Code, Continue, Amazon Q, Augment, dan Aider — workflow yang sama lintas tool pilihan developer.",
    ],
  },
  "zhaoxuya520/reverse-skill": {
    description:
      "Skill router pack (PowerShell + multi-platform) yang mengubah AI coding agent jadi asisten reverse engineering, authorized pentest, dan CTF — mendukung Claude Code, Kiro, Cursor, Cline, Windsurf, dan Codex.",
    highlights: [
      "Mendeklarasikan AI agent sebagai 'security-task skill router': agent meng-klasifikasi task, masuk ke workflow yang tepat (APK reverse, IDA Pro, JS reverse, radare2, pentest, firmware, EDR bypass, LLM security), lalu panggil tool asli untuk eksekusi.",
      "Toolchain di-bootstrap on-demand — tersedia modul untuk jadx, Frida, radare2, pwntools, EMBA, Firmadyne, AFL++, Hashcat, Nuclei, Nmap, SQLMap, FFUF, dan lain-lain; agent tahu tool mana yang ada di mesin dan auto-install yang kurang.",
      "Knowledge base 'self-evolving' lewat field-journal dan precedent library — setiap workflow authorized yang selesai dicatat sebagai referensi untuk task berikutnya, sehingga pengalaman terakumulasi lintas proyek.",
      "Multi-platform scripts (Windows PowerShell, Linux/macOS Bash, Kali) plus routing table dan AI Agent Bootstrap Flow yang mendeteksi OS dan menyuntikkan RULES.md — relevan untuk security researcher, blue team, dan kontestan CTF yang ingin otomatisasi workflow lewat Claude Code atau Cursor.",
    ],
  },
  "baidu/Unlimited-OCR": {
    description:
      "Model OCR open-source 3B parameter dari Baidu (rilis 22 Juni 2026) yang mem-parse PDF dan dokumen multi-halaman dalam satu kali jalan — tidak perlu split-stitch manual, jalan lokal di GPU consumer.",
    highlights: [
      "Model 3B parameter (MIT-licensed) yang memproses sampai 40 halaman PDF dalam satu forward pass lewat konteks 32K dan KV-cache konstan — tabel yang melintasi halaman, footnote, dan layout tetap terjaga utuh.",
      "Output terstruktur: tabel jadi HTML, equation jadi LaTeX, layout dengan bounding box dan reading order natural — siap dipakai pipeline downstream tanpa post-processing ribet.",
      "Arsitektur modern: vision encoder SAM + CLIP DeepEncoder, text decoder DeepSeek-V2 MoE, dan Reference Sliding Window Attention sebagai inovasi utama — dua mode 'gundam' (cepat) dan 'base' (fidelity tinggi) untuk dokumen padat.",
      "Jalan lokal via HuggingFace Transformers, vLLM, SGLang, Ollama, MLX (Apple Silicon), atau GGUF quantization — dokumen tidak pernah dikirim ke cloud, relevan untuk legal, finance, dan riset yang memproses data sensitif.",
    ],
  },
  "googleworkspace/cli": {
    description:
      "CLI resmi dari tim Google Workspace (gws, ditulis Rust) yang menyatukan Drive, Gmail, Calendar, Sheets, Docs, Chat, dan Admin dalam satu perintah — auto-generate dari Discovery Service, plus 40+ skill untuk AI agent.",
    highlights: [
      "Satu binary Rust yang mengakses semua API Google Workspace (Drive, Gmail, Calendar, Sheets, Docs, Chat, Admin SDK) lewat command line terstruktur — bukan wrapper, melainkan klien yang membaca Google Discovery Service saat runtime.",
      "Permukaan perintah selalu up-to-date: setiap endpoint API baru Google otomatis muncul tanpa update manual — CLI tradisional harus tunggu rilis baru untuk fitur baru.",
      "Output JSON terstruktur, auto-pagination, --dry-run preview, dan 40+ 'skill' bawaan yang bisa dipasang ke Claude Code, Cursor, atau agen AI lain untuk otomasi workflow Workspace.",
      "OAuth interaktif atau service account, kredensial terenkripsi AES-256-GCM di OS keyring, mendukung multi-account via env var untuk headless/scripted environment — relevan untuk tim yang mau scripting Workspace tanpa boilerplate SDK.",
    ],
  },
  "shanraisshan/claude-code-best-practice": {
    description:
      "Ensiklopedia Claude Code terlengkap di GitHub — petakan setiap primitif (agents, commands, skills, hooks, MCP, memory) dengan best practice + contoh implementasi, plus 80+ tips dari engineer Anthropic dan Karpathy.",
    highlights: [
      "Single-repo encyclopedia Claude Code: setiap primitif (agents, commands, skills, hooks, MCP servers, memory, settings, status line, plugins) dipasangkan dengan writeup best practice dan file implementasi runnable yang tinggal di-copy.",
      "80+ tips field-tested dari Boris Cherny (pencipta Claude Code), Thariq (Anthropic), Cat Wu, dan Andrej Karpathy — bukan opini netizen, melainkan pattern yang dipakai orang yang membangun Claude Code itu sendiri.",
      "Tiga layer di atas primitif: orchestration workflow Command → Agent → Skill, tabel kurasi 10 framework Claude Code populer (Superpowers, Spec Kit, gstack, BMAD-METHOD, OpenSpec), dan tips section yang terus di-update tiap rilis CLI baru.",
      "MIT-licensed, update tiap rilis Claude Code (badge di README menunjukkan versi CLI yang dilacak) — relevan untuk developer Indonesia yang sudah pakai Claude Code harian dan ingin naik level dari 'bisa dipakai' ke 'produksi-grade'.",
    ],
  },
};

// Helper: lookup dengan fallback ke template-generated highlights
export function getWeeklyTopEntry(fullName: string): WeeklyTopEntry | undefined {
  return WEEKLY_TOP[fullName];
}
