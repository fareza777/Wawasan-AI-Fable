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
      "Claude Code bukan autocomplete — ia agen yang membaca seluruh codebase, merencanakan, mengedit banyak file, menjalankan tes, dan memperbaiki kesalahannya sendiri. Tool yang paling mengubah cara kerja developer dalam pengujian editorial.",
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
      "Untuk pengguna Indonesia, catatan utamanya adalah biaya berbasis dolar. Saran editorial: mulai dari paket yang ada, ukur nilai per jam kerja yang dihemat — bagi yang produktif, hitungannya hampir selalu masuk. Dan pelajari cara memberi instruksi yang baik; perbedaan hasil antara instruksi asal-asalan dan instruksi terstruktur itu dramatis.",
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
      "Untuk developer Indonesia yang baru mulai dengan AI coding, rekomendasi editorial tetap: coba Cursor dulu. Kurva belajarnya paling landai, hasilnya langsung terasa, dan tier gratisnya cukup untuk merasakan nilainya sebelum berlangganan.",
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
      "Dalam pengujian editorial, kualitas kodenya kompetitif, meski untuk sesi interaktif panjang di terminal tim editorial masih lebih nyaman dengan Claude Code. Posisi Codex paling kuat justru sebagai 'pasukan tugas kecil': perbaikan bug minor, penambahan tes, update dependensi — delegasikan dan lupakan.",
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
      "Sisi gelapnya ada di luar produk: saga akuisisi yang berlarut-larut membuat banyak pengguna bertanya-tanya soal masa depannya. Saran pragmatis editorial: nikmati produknya (terutama tier gratisnya yang murah hati), tapi jangan bangun ketergantungan workflow yang dalam sebelum arah perusahaannya jelas.",
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
  {
    slug: "gemini-cli",
    name: "Gemini CLI",
    tagline: "Agen coding terminal dari Google dengan tier gratis paling royal",
    tags: ["CLI", "Open Source", "Google"],
    score: 8.4,
    scores: [
      { label: "Kemampuan Agentic", value: 8.2 },
      { label: "Kualitas Kode", value: 8.3 },
      { label: "Pengalaman Pengguna", value: 8.0 },
      { label: "Ekosistem & Integrasi", value: 8.5 },
      { label: "Harga", value: 9.7 },
    ],
    summary:
      "Jawaban Google untuk agentic coding di terminal: open-source, ditenagai Gemini dengan jendela konteks raksasa, dan tier gratis yang nyaris tidak masuk akal saking besarnya. Pintu masuk termurah ke dunia CLI agent.",
    pros: [
      "Tier gratis sangat besar — cukup login akun Google, tanpa kartu kredit",
      "Jendela konteks raksasa: muat codebase besar sekaligus",
      "Open-source penuh, berkembang cepat dengan dukungan komunitas",
      "Terhubung ke Google Search untuk grounding informasi terbaru",
    ],
    cons: [
      "Untuk tugas agentic panjang masih kurang tahan napas dibanding Claude Code",
      "Kadang terlalu agresif mengubah kode di luar lingkup permintaan",
      "Kualitas output fluktuatif saat kuota gratis dialihkan ke model yang lebih ringan",
    ],
    verdict:
      "Kalau Cline adalah jalur hemat di IDE, Gemini CLI adalah jalur hemat di terminal. Untuk pelajar dan pegawai sektor publik dengan anggaran terbatas, tidak ada alasan untuk tidak mencobanya.",
    body: [
      "Google masuk ke arena CLI agent dengan senjata yang sulit dilawan: gratis. Cukup login dengan akun Google biasa, dan kamu mendapat jatah pemakaian harian yang untuk kebanyakan orang tidak akan habis. Di negara dengan kurs rupiah-dolar seperti kita, ini bukan fitur kecil — ini penentu apakah seorang mahasiswa bisa belajar agentic coding atau tidak.",
      "Secara kemampuan, Gemini CLI mengikuti pakem yang sama dengan pesaingnya: membaca codebase, merencanakan, mengedit file, menjalankan perintah, dan mendukung MCP untuk integrasi eksternal. Keunggulan khasnya ada di jendela konteks yang sangat besar — untuk tugas seperti 'jelaskan arsitektur repo ini' atau analisis lintas banyak file sekaligus, ia bisa menelan semuanya tanpa perlu strategi pemotongan konteks yang rumit. Integrasi Google Search juga membuatnya jago saat butuh informasi terkini, misalnya API library yang baru berubah.",
      "Dalam pengujian editorial, untuk tugas eksplorasi dan perubahan kecil-menengah hasilnya memuaskan. Yang masih terasa adalah jarak dengan Claude Code di tugas panjang multi-langkah: Gemini CLI lebih sering kehilangan arah, dan kadang menyentuh file yang tidak diminta. Statusnya yang open-source membantu — perbaikan datang cepat, dan komunitasnya aktif menambal kekurangan.",
      "Rekomendasi editorial sederhana: jadikan Gemini CLI tool pertama yang dicoba kalau anggaranmu nol. Belajar pola kerja agentic di sini, dan kalau nanti kebutuhanmu naik kelas, kebiasaan yang terbentuk langsung terbawa ke tool berbayar mana pun.",
    ],
    link: "https://geminicli.com",
    linkLabel: "Situs Resmi",
    date: "2026-04-20",
  },
  {
    slug: "github-copilot",
    name: "GitHub Copilot",
    tagline: "Pelopor AI pair programming yang kini multi-model dan agentic",
    tags: ["IDE", "GitHub", "Multi-Model"],
    score: 8.5,
    scores: [
      { label: "Kemampuan Agentic", value: 8.0 },
      { label: "Kualitas Kode", value: 8.5 },
      { label: "Pengalaman Pengguna", value: 8.8 },
      { label: "Ekosistem & Integrasi", value: 9.3 },
      { label: "Harga", value: 8.3 },
    ],
    summary:
      "Tool yang memulai semuanya. Copilot kini jauh lebih dari autocomplete: bisa memilih model dari beberapa vendor, punya agent mode, dan menyatu paling dalam dengan GitHub — tempat kode kita semua hidup.",
    pros: [
      "Integrasi GitHub terdalam: review PR, isu, dan coding agent di satu ekosistem",
      "Multi-model — bebas memilih otak (Claude, GPT, Gemini) sesuai tugas",
      "Gratis untuk pelajar dan maintainer open-source terverifikasi",
      "Tersedia di hampir semua editor, bukan cuma VS Code",
    ],
    cons: [
      "Agent mode-nya datang belakangan dan masih terasa selangkah di belakang pionir",
      "Pengalaman terbaiknya terkunci di VS Code — di editor lain terasa dikurangi",
      "Banyaknya fitur dan tingkatan paket membuat orientasi awal membingungkan",
    ],
    verdict:
      "Bukan lagi yang tercanggih, tapi yang paling terintegrasi. Kalau hidupmu sudah di GitHub — dan apalagi kalau kamu pelajar yang dapat akses gratis — Copilot adalah pilihan paling tanpa-gesekan.",
    body: [
      "GitHub Copilot adalah produk yang memperkenalkan dunia pada AI pair programming, dan menariknya ia menolak menjadi fosil. Setelah sempat tertinggal dari Cursor dan kawan-kawan, Copilot berbenah besar: kini ia multi-model (kamu bisa memilih Claude, GPT, atau Gemini sebagai otaknya), punya agent mode untuk tugas multi-file, dan bahkan coding agent yang bisa mengerjakan isu GitHub secara mandiri lalu membuka pull request.",
      "Kekuatan sejatinya bukan di kecanggihan agennya, melainkan di posisinya: Copilot hidup di tempat kode kita hidup. Review PR otomatis, saran perbaikan langsung di tab Files Changed, delegasi isu ke agen — semuanya tanpa keluar dari GitHub. Untuk tim yang workflow-nya sudah berpusat di GitHub, gesekan adopsinya nyaris nol, dan itu nilai yang sering diremehkan.",
      "Catatan penting untuk pembaca Indonesia: program GitHub Education memberi Copilot gratis untuk pelajar dan pengajar, dan maintainer open-source populer juga dapat akses cuma-cuma. Bagi mahasiswa, ini cara legal mendapat AI coding kelas berbayar tanpa keluar sedolar pun — manfaatkan sebelum lulus.",
      "Dalam pengujian editorial, autocomplete-nya tetap solid dan chat-nya kompeten, tapi untuk tugas agentic berat tim editorial masih berpaling ke tool spesialis. Posisi Copilot hari ini mirip aplikasi bawaan yang bagus: mungkin bukan yang terbaik di tiap kategori, tapi selalu ada, terintegrasi rapi, dan untuk mayoritas pekerjaan sehari-hari itu sudah cukup.",
    ],
    link: "https://github.com/features/copilot",
    linkLabel: "Situs Resmi",
    date: "2026-04-08",
  },
  {
    slug: "v0",
    name: "v0",
    tagline: "Generator UI dari Vercel: dari prompt jadi antarmuka React siap pakai",
    tags: ["UI Generator", "Next.js", "Vercel"],
    score: 8.2,
    scores: [
      { label: "Kemampuan Agentic", value: 7.6 },
      { label: "Kualitas Kode", value: 8.5 },
      { label: "Pengalaman Pengguna", value: 8.8 },
      { label: "Ekosistem & Integrasi", value: 8.6 },
      { label: "Harga", value: 7.8 },
    ],
    summary:
      "Tulis deskripsi (atau tempel screenshot), dapatkan UI React/Tailwind yang rapi dan bisa langsung dipakai. Untuk ekosistem Next.js, tidak ada yang menghasilkan antarmuka sebagus dan secepat v0.",
    pros: [
      "Kualitas visual output terbaik di kelasnya — modern, rapi, responsif",
      "Kode React + Tailwind + shadcn/ui yang idiomatis dan enak diedit manual",
      "Bisa mulai dari screenshot atau desain Figma, bukan cuma teks",
      "Deploy ke Vercel tinggal sekali klik",
    ],
    cons: [
      "Sangat terpaku pada satu stack — di luar Next.js/React nilainya jatuh",
      "Logika backend dan aplikasi kompleks bukan kekuatannya",
      "Sistem kredit berbasis dolar cepat terkuras untuk iterasi intensif",
    ],
    verdict:
      "Bukan pengganti developer, tapi pemusnah halaman kosong. Untuk pengguna Next.js, v0 adalah cara tercepat dari ide ke UI yang layak ditunjukkan ke klien — gunakan tier gratisnya untuk draft, rapikan sendiri sisanya.",
    body: [
      "v0 lahir dari pemahaman sederhana Vercel: bagian paling melelahkan dari memulai proyek web adalah menatap halaman kosong. Kamu menulis deskripsi — 'dashboard admin dengan sidebar, tabel transaksi, dan grafik bulanan' — dan dalam hitungan detik muncul UI React yang bukan sekadar berfungsi, tapi terlihat seperti dikerjakan desainer. Inilah pembeda utamanya dari generator lain: seleranya bagus.",
      "Rahasianya ada di fokus. v0 tidak mencoba mendukung semua framework; ia all-in pada React, Tailwind, dan shadcn/ui — stack yang kebetulan jadi standar de facto industri saat ini. Hasilnya kode yang idiomatis: komponen terstruktur wajar, kelas Tailwind tertata, dan yang terpenting, mudah diambil alih dan diedit manual. Tim editorial sering memakai v0 hanya untuk draft pertama, lalu menyempurnakannya dengan Claude Code di repo lokal — kombinasi yang sangat produktif.",
      "Kelemahannya adalah cermin dari kekuatannya. Keluar dari ekosistem React, v0 kehilangan relevansi. Untuk logika bisnis rumit, integrasi database serius, atau aplikasi multi-halaman yang dalam, kamu akan menabrak batasnya dan lebih baik pindah ke tool agentic penuh. Sistem kreditnya juga perlu diwaspadai: iterasi bolak-balik mengejar detail kecil bisa menguras kuota lebih cepat dari dugaan — biasakan menulis prompt yang spesifik sejak awal.",
      "Untuk konteks Indonesia: tier gratisnya cukup untuk merasakan nilainya dan menggarap proyek kecil, dan bagi freelancer web, kemampuan menyulap brief klien jadi mockup hidup dalam sehari adalah nilai jual nyata. Anggap v0 sebagai asisten desainer-frontend, bukan sebagai pabrik aplikasi.",
    ],
    link: "https://v0.app",
    linkLabel: "Situs Resmi",
    date: "2026-03-18",
  },
  {
    slug: "bolt-new",
    name: "Bolt.new",
    tagline: "Bangun dan deploy aplikasi full-stack langsung dari browser",
    tags: ["Web Builder", "Full-Stack", "StackBlitz"],
    score: 7.9,
    scores: [
      { label: "Kemampuan Agentic", value: 8.0 },
      { label: "Kualitas Kode", value: 7.5 },
      { label: "Pengalaman Pengguna", value: 8.6 },
      { label: "Ekosistem & Integrasi", value: 8.0 },
      { label: "Harga", value: 7.6 },
    ],
    summary:
      "Dari prompt jadi aplikasi full-stack yang berjalan — semuanya di browser, tanpa instalasi apa pun. Berkat WebContainers milik StackBlitz, Bolt bisa menjalankan, mengetes, dan men-deploy aplikasimu di tempat.",
    pros: [
      "Nol instalasi: laptop kentang dan warnet pun bisa — semua jalan di browser",
      "Full-stack sungguhan: frontend, backend, database, sampai deploy dalam satu alur",
      "AI bisa melihat error runtime dan memperbaikinya sendiri",
      "Dukungan framework lebih luas dari v0 — tidak terkunci di React",
    ],
    cons: [
      "Konsumsi token sangat boros — iterasi panjang cepat menguras kuota",
      "Kualitas kode menurun drastis begitu aplikasi melewati ukuran sedang",
      "Kurang cocok untuk masuk ke codebase besar yang sudah ada",
    ],
    verdict:
      "Mesin prototipe terbaik untuk non-developer dan pemula. Untuk validasi ide dan MVP akhir pekan, Bolt luar biasa; untuk produk jangka panjang, siapkan rencana migrasi keluar.",
    body: [
      "Bolt.new dibangun di atas teknologi yang membuat tim editorial terkesan sejak pertama kali melihatnya: WebContainers, runtime Node.js yang berjalan sepenuhnya di dalam browser. Artinya, AI di Bolt tidak cuma menulis kode — ia menginstal dependensi, menjalankan dev server, melihat error yang muncul, dan memperbaikinya, semua tanpa kamu menginstal apa pun. Untuk konteks Indonesia, ini berarti laptop spek rendah atau bahkan komputer pinjaman pun cukup untuk membangun aplikasi.",
      "Alur kerjanya memabukkan bagi pemula: tulis ide ('aplikasi kasir sederhana untuk warung dengan rekap harian'), tonton aplikasinya terbentuk dan langsung berjalan di preview, minta revisi dengan bahasa sehari-hari, lalu deploy dengan beberapa klik. Integrasi dengan layanan database dan autentikasi populer membuat klaim 'full-stack'-nya bukan omong kosong — kamu benar-benar bisa punya aplikasi hidup dengan data tersimpan dalam satu sesi.",
      "Tapi ada dua jebakan yang harus diketahui sebelum jatuh cinta. Pertama, ekonomi token: Bolt mengirim banyak konteks di tiap iterasi, sehingga sesi coba-coba yang panjang bisa menguras kuota dengan kecepatan mengejutkan — sakit terasa di kurs rupiah. Kedua, kurva kualitas: untuk aplikasi kecil hasilnya mengesankan, tapi begitu proyek membesar, AI mulai kesulitan menjaga konsistensi dan kode mulai kusut. Bolt paling bersinar di fase nol-ke-satu, bukan satu-ke-seratus.",
      "Kesimpulan ulasan: Bolt adalah tool validasi ide terbaik untuk orang yang belum (atau tidak mau) jadi developer penuh. Bangun MVP-mu di sini, tunjukkan ke calon pengguna, dan kalau idenya terbukti, ekspor kodenya dan lanjutkan pengembangan serius dengan tool agentic di repo lokal.",
    ],
    link: "https://bolt.new",
    linkLabel: "Situs Resmi",
    date: "2026-02-25",
  },
  {
    slug: "aider",
    name: "Aider",
    tagline: "Pelopor pair programming di terminal — open-source dan berakar pada git",
    tags: ["CLI", "Open Source", "BYOK"],
    score: 8.0,
    scores: [
      { label: "Kemampuan Agentic", value: 7.8 },
      { label: "Kualitas Kode", value: 8.4 },
      { label: "Pengalaman Pengguna", value: 7.6 },
      { label: "Ekosistem & Integrasi", value: 7.8 },
      { label: "Harga", value: 9.3 },
    ],
    summary:
      "Jauh sebelum 'agentic coding' jadi kata kunci, Aider sudah melakukan pair programming di terminal. Open-source, bring-your-own-key, dan punya disiplin git terbaik: setiap perubahan AI jadi commit rapi yang mudah di-undo.",
    pros: [
      "Integrasi git terbaik di kelasnya — tiap perubahan tercatat sebagai commit terpisah",
      "BYOK murni: pakai model apa pun, dari frontier sampai lokal via Ollama",
      "Repo map yang cerdas membuatnya hemat token di codebase besar",
      "Open-source penuh dengan komunitas yang setia",
    ],
    cons: [
      "Antarmuka teks polosnya terasa spartan dibanding pesaing modern",
      "Lebih bergaya 'pair programming' yang dibimbing — kurang otonom untuk tugas panjang",
      "Laju pengembangannya melambat dibanding para pesaing bermodal besar",
    ],
    verdict:
      "Veteran yang tetap relevan karena dua hal: disiplin git dan kebebasan memilih model. Untuk yang ingin kontrol penuh dengan biaya minimal, Aider masih layak duduk di toolbox — meski bukan lagi bintang utamanya.",
    body: [
      "Sebelum Claude Code dan kawan-kawan lahir, Aider sudah membuktikan bahwa terminal adalah rumah alami untuk AI pair programming. Proyek open-source ini punya filosofi yang khas: alih-alih agen otonom yang dilepas sendirian, Aider adalah partner yang bekerja bersamamu — kamu menunjuk file, mendiskusikan perubahan, dan ia mengeksekusi dengan presisi.",
      "Fitur pembedanya sampai hari ini adalah hubungannya dengan git. Setiap perubahan yang dibuat Aider otomatis menjadi commit tersendiri dengan pesan yang masuk akal. Kedengarannya sepele, tapi efeknya besar: riwayat eksperimenmu terdokumentasi rapi, dan membatalkan perubahan AI yang keliru cukup dengan satu perintah git. Banyak tool yang lebih baru justru belum menyamai kedisiplinan ini. Repo map-nya juga cerdas — ia membangun peta struktur codebase sehingga model paham konteks tanpa harus menelan semua file, yang berarti hemat token.",
      "Seperti Cline, Aider menganut bring-your-own-key: tanpa langganan, kamu hanya membayar token API yang dipakai, dan bebas memilih model dari yang termurah sampai frontier — termasuk model lokal lewat Ollama untuk setup nol biaya. Untuk pelajar Indonesia yang menghitung tiap dolar, kombinasi Aider + model murah adalah salah satu jalur belajar paling ekonomis di terminal.",
      "Jujur saja: dikepung pesaing bermodal raksasa, Aider kini terasa seperti veteran ketimbang pionir garis depan. Antarmukanya polos, dan untuk tugas otonom berlapis-lapis ia kalah napas dari agen modern. Tapi sebagai tool pair programming yang patuh, transparan, dan murah — apalagi untuk perubahan terarah di codebase yang kamu kenal — Aider tetap pilihan yang terhormat.",
    ],
    link: "https://github.com/Aider-AI/aider",
    linkLabel: "Lihat di GitHub",
    date: "2026-02-10",
  },
  {
    slug: "deepnote",
    name: "Deepnote",
    tagline: "Notebook data kolaboratif dengan AI copilot dan integrasi warehouse",
    tags: ["Data Workspace", "AI Copilot", "Freemium"],
    score: 8.1,
    scores: [
      { label: "Kemampuan Agentic", value: 8.0 },
      { label: "Kualitas Output", value: 8.3 },
      { label: "Pengalaman Pengguna", value: 8.5 },
      { label: "Ekosistem & Integrasi", value: 8.2 },
      { label: "Harga", value: 8.0 },
    ],
    summary:
      "Jupyter yang sudah disulap jadi platform kolaboratif: AI copilot, real-time co-editing, dan koneksi sekali klik ke Snowflake, BigQuery, Redshift, dan PostgreSQL. Pilihan masuk akal untuk tim data Indonesia yang mulai serius dengan analitik bersama.",
    pros: [
      "Kolaborasi real-time yang matang — beberapa analis bisa edit notebook yang sama tanpa saling menimpa",
      "Konektor warehouse bawaan (Snowflake, BigQuery, Redshift, Postgres) — tidak perlu ETL manual",
      "AI copilot dengan GPT-5 dan Sonnet 4.6 di paket Team, plus auto-AI untuk eksplorasi dataset",
      "Ekspor dan impor .ipynb penuh — tidak mengunci kamu di ekosistem Deepnote",
    ],
    cons: [
      "Tier gratis ketat: 3 editor, 5 project, dan kuota AI sangat tipis (10 completion, 5 auto-AI per bulan)",
      "Tanpa self-host — datamu selalu di cloud mereka, implikasi penting untuk compliance lokal",
      "Untuk analitik yang sangat ad-hoc di laptop lokal, Jupyter klasik masih lebih gesit",
    ],
    verdict:
      "Standar yang solid untuk notebook kolaboratif bertenaga AI — bukan untuk yang kerja sendirian di laptop, tapi tim data Indonesia yang pelan-pelan migrasi dari spreadsheet ke Python akan langsung mendapat nilai.",
    body: [
      "Deepnote mengambil alih posisi yang selama ini diisi Jupyter di banyak workflow data profesional, lalu menambahkan hal-hal yang Jupyter klasik tidak punya: kolaborasi real-time yang andal, AI copilot yang paham konteks cell di sekitarnya, dan koneksi ke data warehouse yang tidak butuh setup lokal. Buat analis Indonesia yang bekerja dengan data pelanggan di BigQuery atau transaksi di PostgreSQL, menghilangkan 'setup lokal' saja sudah menghapus satu lapisan gesekan yang sering menggagalkan eksperimen.",
      "Yang paling terasa di pengujian editorial adalah alur kolaborasinya. Saat dua atau tiga analis membuka notebook yang sama, kursor masing-masing tampil dengan warna berbeda dan perubahannya masuk tanpa konflik. Untuk tim yang biasa bekerja dengan spreadsheet bersama dan sering kehilangan jejak versi, transisi ke Deepnote memberi mereka jejak audit yang jelas. SQL block-nya juga punya Jinja bawaan dan menampilkan hasil query sebagai dataframe interaktif — kualitas kecil yang menghilangkan bolak-balik antara tool.",
      "AI copilot-nya mengikuti standar industri: bisa melengkapi kode, menjelaskan blok yang sudah ada, dan di tier Team bisa dipakai untuk eksplorasi dataset dengan pertanyaan bahasa alami. Hasilnya tidak seajaib Claude Code untuk tugas rekayasa perangkat lunak panjang, tapi untuk analisis data — terutama SQL berulang dan visualisasi cepat — ia menghemat waktu dengan konsisten. AI credits $39/bulan di paket Team cukup untuk pemakaian harian kebanyakan tim kecil.",
      "Catatan penting untuk pengguna Indonesia: tidak ada opsi self-host. Datamu selalu tersimpan di cloud Deepnote, dengan kepatuhan SOC 2 dan HIPAA yang bagus tapi tetap di luar yurisdiksi lokal. Untuk UMKM yang mengelola data pelanggan dalam jumlah besar, keputusan untuk bergantung pada platform SaaS asing perlu dipertimbangkan. Untuk tim startup dan korporat yang sudah nyaman dengan Google Cloud atau AWS, barrier ini kecil dan nilai kolaborasi yang didapat jauh lebih besar.",
    ],
    link: "https://deepnote.com",
    linkLabel: "Situs Resmi",
    date: "2026-06-14",
  },
];

export function getStack(slug: string) {
  return stacks.find((s) => s.slug === slug);
}
