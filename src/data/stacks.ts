import { Review } from "@/lib/types";

export const stacks: Review[] = [
  {
    slug: "claude-code",
    name: "Claude Code",
    tagline: "Agen coding di terminal yang mengubah cara kerja developer",
    tags: ["CLI", "Agentic Coding", "Anthropic"],
    score: 9.5,
    scores: [
      { label: "Kemampuan Agentic", value: 9.8 },
      { label: "Kualitas Kode", value: 9.5 },
      { label: "Pengalaman Pengguna", value: 9.0 },
      { label: "Ekosistem & Integrasi", value: 9.2 },
      { label: "Harga", value: 8.0 },
    ],
    summary:
      "Claude Code bukan autocomplete — ia agen yang membaca seluruh codebase, merencanakan, mengedit banyak file, menjalankan tes, dan memperbaiki kesalahannya sendiri. Tool yang paling mengubah cara saya bekerja.",
    pros: [
      "Mengerjakan tugas utuh end-to-end, bukan sekadar saran baris kode",
      "Paham konteks repo besar: konvensi, struktur, riwayat git",
      "MCP dan hooks membuatnya bisa disambungkan ke apa saja",
      "Tersedia di terminal, IDE, desktop, dan web — mengikuti gaya kerjamu",
    ],
    cons: [
      "Langganan/biaya API untuk pemakaian intensif tidak murah",
      "Butuh keterampilan menulis instruksi yang jelas untuk hasil maksimal",
      "Godaan 'terima semua perubahan tanpa review' adalah jebakan nyata",
    ],
    verdict:
      "Standar emas agentic coding saat ini. Situs Wawasan AI yang sedang kamu baca ini pun dibangun bersama Claude Code.",
    body: [
      "Pergeseran dari 'autocomplete pintar' ke 'agen yang diberi tugas' adalah lompatan terbesar di dunia developer tools beberapa tahun terakhir, dan Claude Code adalah contoh terbaiknya. Alur kerjanya berbeda secara fundamental: kamu mendeskripsikan hasil yang diinginkan, agen yang menyusun rencana, menyentuh file-file yang relevan, menjalankan build dan tes, lalu melaporkan hasilnya.",
      "Yang membuatnya menonjol dibanding pesaing adalah keandalan pada tugas panjang. Refactor lintas puluhan file, migrasi dependensi, menulis fitur lengkap dengan tesnya — Claude Code bisa dilepas mengerjakan itu sementara kamu fokus ke hal lain. Fitur seperti CLAUDE.md (memori proyek), custom commands, dan MCP server membuatnya makin menyatu dengan workflow tim.",
      "Untuk pengguna Indonesia, catatan utamanya adalah biaya berbasis dolar. Saran saya: mulai dari paket yang ada, ukur nilai per jam kerja yang dihemat — bagi yang produktif, hitungannya hampir selalu masuk. Dan pelajari cara memberi instruksi yang baik; perbedaan hasil antara instruksi asal-asalan dan instruksi terstruktur itu dramatis.",
    ],
    link: "https://claude.com/claude-code",
    linkLabel: "Situs Resmi",
    date: "2026-06-05",
    featured: true,
  },
  {
    slug: "cursor",
    name: "Cursor",
    tagline: "IDE AI-first yang paling banyak dipakai di dunia",
    tags: ["IDE", "AI Editor", "VS Code Fork"],
    score: 9.0,
    scores: [
      { label: "Kemampuan Agentic", value: 8.8 },
      { label: "Kualitas Kode", value: 8.8 },
      { label: "Pengalaman Pengguna", value: 9.5 },
      { label: "Ekosistem & Integrasi", value: 9.0 },
      { label: "Harga", value: 8.5 },
    ],
    summary:
      "Fork VS Code yang dirancang ulang total untuk era AI: Tab completion yang terasa membaca pikiran, mode agent untuk tugas besar, dan pengalaman visual yang paling halus di kelasnya.",
    pros: [
      "Tab completion terbaik di industri — prediksi multi-baris yang sering tepat",
      "Transisi mulus dari VS Code: ekstensi dan keybinding langsung jalan",
      "Bisa memilih model (Claude, GPT, Gemini, model in-house) sesuai tugas",
      "Mode agent dengan kontrol visual yang nyaman untuk review perubahan",
    ],
    cons: [
      "Sistem harga berbasis kuota yang beberapa kali berubah dan membingungkan",
      "Untuk tugas agentic super panjang masih kalah tahan napas dari CLI agent",
      "Berat di mesin dengan RAM terbatas",
    ],
    verdict:
      "Pintu masuk terbaik ke AI coding untuk mayoritas developer. Kombinasi favorit banyak orang: Cursor untuk editing interaktif, CLI agent untuk tugas besar.",
    body: [
      "Cursor adalah produk yang membuat jutaan developer pertama kali merasakan 'AI yang benar-benar membantu'. Fitur Tab-nya melegenda: ia memprediksi bukan hanya baris berikutnya tapi seluruh niat perubahanmu — rename variabel di satu tempat, dan ia menawarkan perubahan konsisten di seluruh file.",
      "Sebagai fork VS Code, biaya perpindahannya nyaris nol. Semua ekstensi, tema, dan kebiasaan lama tetap jalan, sementara kemampuan AI-nya hadir di setiap sudut: chat dengan konteks codebase, edit inline, dan mode agent untuk tugas multi-file.",
      "Untuk developer Indonesia yang baru mulai dengan AI coding, rekomendasi saya tetap: coba Cursor dulu. Kurva belajarnya paling landai, hasilnya langsung terasa, dan tier gratisnya cukup untuk merasakan nilainya sebelum berlangganan.",
    ],
    link: "https://cursor.com",
    linkLabel: "Situs Resmi",
    date: "2026-05-30",
    featured: true,
  },
  {
    slug: "codex",
    name: "OpenAI Codex",
    tagline: "Agen coding OpenAI: dari CLI sampai delegasi tugas di cloud",
    tags: ["CLI", "Cloud Agent", "OpenAI"],
    score: 8.7,
    scores: [
      { label: "Kemampuan Agentic", value: 8.8 },
      { label: "Kualitas Kode", value: 8.8 },
      { label: "Pengalaman Pengguna", value: 8.5 },
      { label: "Ekosistem & Integrasi", value: 8.5 },
      { label: "Harga", value: 8.5 },
    ],
    summary:
      "Jawaban OpenAI untuk agentic coding: CLI open-source plus agen cloud yang bisa mengerjakan banyak tugas paralel di sandbox-nya sendiri, terintegrasi rapat dengan ChatGPT dan GitHub.",
    pros: [
      "Mode cloud: delegasikan beberapa tugas sekaligus, masing-masing di sandbox",
      "Termasuk dalam langganan ChatGPT — nilai tambah bagi yang sudah berlangganan",
      "CLI-nya open-source dan berkembang cepat",
      "Integrasi GitHub yang mulus untuk review dan PR otomatis",
    ],
    cons: [
      "Pengalaman terminal-nya belum sematang pesaing terdekat",
      "Hasil di codebase besar dan berantakan lebih fluktuatif",
      "Fitur tersebar antara CLI, web, dan IDE — kadang membingungkan",
    ],
    verdict:
      "Pilihan natural bagi pelanggan ChatGPT. Model delegasi paralel di cloud-nya adalah cara kerja yang patut dicoba — rasanya seperti punya beberapa junior dev sekaligus.",
    body: [
      "Codex menarik karena visinya sedikit berbeda: alih-alih satu agen yang menemanimu di terminal, OpenAI mendorong model 'delegasi' — lempar beberapa tugas ke agen-agen cloud yang bekerja paralel di sandbox masing-masing, lalu review hasilnya sebagai pull request.",
      "Untuk tim yang sudah hidup di ekosistem ChatGPT dan GitHub, alurnya terasa alami: tulis tugas dari mana saja (termasuk ponsel!), biarkan agen bekerja, dan hasil review-able muncul di repo. Pola kerja asinkron seperti ini cocok untuk backlog berisi tugas-tugas kecil yang menumpuk.",
      "Dalam pengujian saya, kualitas kodenya kompetitif, meski untuk sesi interaktif panjang di terminal saya masih lebih nyaman dengan Claude Code. Posisi Codex paling kuat justru sebagai 'pasukan tugas kecil': perbaikan bug minor, penambahan tes, update dependensi — delegasikan dan lupakan.",
    ],
    link: "https://openai.com/codex",
    linkLabel: "Situs Resmi",
    date: "2026-05-22",
  },
  {
    slug: "windsurf",
    name: "Windsurf",
    tagline: "IDE agentic dengan pengalaman 'flow' yang paling mulus",
    tags: ["IDE", "AI Editor", "Agentic"],
    score: 8.5,
    scores: [
      { label: "Kemampuan Agentic", value: 8.5 },
      { label: "Kualitas Kode", value: 8.5 },
      { label: "Pengalaman Pengguna", value: 9.0 },
      { label: "Ekosistem & Integrasi", value: 8.0 },
      { label: "Harga", value: 8.5 },
    ],
    summary:
      "IDE AI dengan filosofi 'Cascade': agen yang terus memahami konteks kerjamu secara real-time. Pengalamannya sangat halus, meski perjalanan korporatnya penuh drama akuisisi.",
    pros: [
      "Cascade: agen yang mengikuti alur kerjamu, bukan menunggu perintah",
      "Pemahaman konteks otomatis yang sering terasa 'paham duluan'",
      "Tier gratis yang layak untuk pemakaian ringan",
    ],
    cons: [
      "Drama akuisisi sempat mengguncang kepercayaan pengguna",
      "Komunitas dan ekosistem lebih kecil dari Cursor",
      "Akses ke model frontier tertentu sempat terganggu",
    ],
    verdict:
      "Alternatif Cursor yang serius dengan beberapa ide UX terbaik di industri. Layak dicoba — apalagi tier gratisnya — meski pertimbangkan stabilitas jangka panjang produknya.",
    body: [
      "Windsurf memperkenalkan istilah yang kini dipakai semua orang: 'agentic IDE'. Fitur andalannya, Cascade, memantau apa yang sedang kamu kerjakan dan menjaga pemahaman konteks secara berkelanjutan — sehingga saat kamu meminta sesuatu, ia sudah tahu file mana yang relevan tanpa perlu dijelaskan.",
      "Pengalaman penggunaannya termasuk yang paling halus: preview perubahan yang jernih, alur approve/reject yang nyaman, dan integrasi terminal yang baik. Beberapa pola UX-nya kemudian ditiru pesaing — tanda inovasinya nyata.",
      "Sisi gelapnya ada di luar produk: saga akuisisi yang berlarut-larut membuat banyak pengguna bertanya-tanya soal masa depannya. Saran pragmatis saya: nikmati produknya (terutama tier gratisnya yang murah hati), tapi jangan bangun ketergantungan workflow yang dalam sebelum arah perusahaannya jelas.",
    ],
    link: "https://windsurf.com",
    linkLabel: "Situs Resmi",
    date: "2026-05-15",
  },
  {
    slug: "cline",
    name: "Cline",
    tagline: "Agen coding open-source di VS Code — bawa model sendiri",
    tags: ["Open Source", "VS Code", "BYOK"],
    score: 8.6,
    scores: [
      { label: "Kemampuan Agentic", value: 8.5 },
      { label: "Kualitas Kode", value: 8.5 },
      { label: "Pengalaman Pengguna", value: 8.3 },
      { label: "Ekosistem & Integrasi", value: 8.5 },
      { label: "Harga", value: 9.5 },
    ],
    summary:
      "Ekstensi VS Code open-source dengan kemampuan agentic penuh: edit multi-file, eksekusi terminal, browser. Bayar hanya token API yang kamu pakai — atau gratis total dengan model lokal.",
    pros: [
      "Open-source penuh — transparan dan bisa diaudit",
      "Bring-your-own-key: pakai model apa pun, termasuk lokal via Ollama",
      "Tanpa langganan — bayar hanya pemakaian API",
      "Setiap aksi minta persetujuan — kontrol penuh di tanganmu",
    ],
    cons: [
      "Pengalaman tergantung penuh pada model yang kamu pilih",
      "Konsumsi token bisa boros tanpa pengaturan yang baik",
      "Perlu lebih banyak konfigurasi dibanding produk komersial",
    ],
    verdict:
      "Jalur paling hemat menuju agentic coding, dan satu-satunya yang bisa 100% lokal. Untuk pelajar dan developer Indonesia yang sensitif biaya, mulai dari sini.",
    body: [
      "Cline membuktikan bahwa agentic coding tidak harus terkunci di produk berbayar. Sebagai ekstensi VS Code open-source, ia menawarkan kemampuan yang sama secara konsep dengan tool komersial: membaca codebase, mengedit banyak file, menjalankan perintah terminal, bahkan mengoperasikan browser untuk verifikasi.",
      "Model bisnisnya — atau tepatnya ketiadaannya — adalah daya tarik utama: kamu memasukkan API key sendiri dan hanya membayar token yang dipakai. Dikombinasikan dengan model murah seperti DeepSeek atau model lokal via Ollama, biaya per bulan bisa ditekan drastis dibanding langganan tetap.",
      "Untuk konteks Indonesia, kombinasi Cline + Qwen Coder lokal adalah setup 'nol rupiah per bulan' yang nyata untuk belajar agentic coding. Hasilnya tentu tidak setara model frontier, tapi sebagai tangga belajar — dari gratis-lokal menuju berbayar-frontier — ini jalur yang sangat masuk akal.",
    ],
    link: "https://github.com/cline/cline",
    linkLabel: "Lihat di GitHub",
    date: "2026-05-08",
  },
];

export function getStack(slug: string) {
  return stacks.find((s) => s.slug === slug);
}
