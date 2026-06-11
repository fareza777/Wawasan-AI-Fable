import { Artikel } from "@/lib/types";

export const berita: Artikel[] = [
  {
    slug: "gelombang-ai-agent-2026",
    title: "2026: Tahun AI Agent Benar-Benar Masuk ke Pekerjaan Sehari-hari",
    excerpt:
      "Dari OpenClaw yang viral sampai agen coding yang kini menulis sebagian besar kode di banyak perusahaan — inilah peta gelombang AI agent dan artinya untuk pekerja Indonesia.",
    category: "Analisis",
    date: "2026-06-05",
    readingTime: "6 menit",
    body: [
      {
        paragraphs: [
          "Kalau 2023 adalah tahun chatbot dan 2024-2025 adalah tahun perlombaan model, maka 2026 makin jelas menjadi tahun AI agent: sistem AI yang tidak hanya menjawab, tapi mengerjakan. Memesan, mengetik, menjalankan skrip, mengisi formulir, menyusun laporan — lalu melapor kembali ke kita.",
          "Tanda-tandanya ada di mana-mana. Proyek open-source seperti OpenClaw meledak popularitasnya karena orang biasa kini bisa punya asisten personal yang hidup di WhatsApp. Di dunia kerja, agen coding seperti Claude Code dan Codex sudah menulis porsi signifikan kode di banyak perusahaan teknologi. Dan framework seperti DeerFlow membawa kemampuan riset mendalam ke tangan siapa saja.",
        ],
      },
      {
        heading: "Apa artinya untuk pekerja Indonesia?",
        paragraphs: [
          "Pertama, keterampilan yang paling naik nilainya bukan 'bisa memakai ChatGPT', melainkan kemampuan mendelegasikan ke agen: memecah pekerjaan, menulis instruksi yang jelas, dan me-review hasil. Ini keterampilan manajerial, bukan sekadar teknis — dan bisa dipelajari siapa saja.",
          "Kedua, kesenjangan adopsi adalah peluang. Sebagian besar organisasi di Indonesia — termasuk pemerintahan — baru di tahap eksperimen chatbot. Mereka yang hari ini belajar merangkai agen untuk otomasi nyata akan menjadi rujukan di organisasinya masing-masing dalam satu-dua tahun ke depan.",
          "Ketiga, jangan menunggu sempurna. Agen hari ini masih sering salah dan butuh pengawasan. Justru itu alasannya untuk mulai sekarang: belajar mengawasi agen yang belum sempurna adalah keterampilan yang tidak bisa diperoleh dengan menunggu.",
        ],
      },
      {
        heading: "Dari mana mulai?",
        paragraphs: [
          "Jalur yang disarankan editorial: (1) pasang Ollama dan rasakan LLM lokal, (2) coba n8n untuk otomasi visual pertamamu, (3) kalau sudah nyaman, jajal OpenClaw atau agen coding. Semua tahap itu sudah diulas satu per satu di rubrik Review Repo dan Review Tools di situs ini.",
        ],
      },
    ],
  },
  {
    slug: "asn-dan-ai-otomasi-birokrasi",
    title: "Sektor Publik dan AI: Otomasi Administratif yang Berdampak",
    excerpt:
      "Bagaimana instansi pemerintahan bisa mengotomasi pekerjaan administratif dengan AI — apa yang berhasil, apa yang harus dijaga, dan kenapa birokrasi justru lahan paling subur untuk otomasi.",
    category: "Opini",
    date: "2026-05-15",
    readingTime: "7 menit",
    body: [
      {
        paragraphs: [
          "Birokrasi adalah salah satu lahan paling subur untuk otomasi AI. Pekerjaan di sektor publik penuh pola berulang — rekap, format laporan, surat-menyurat, telaah dokumen — persis jenis pekerjaan yang paling cepat terbantu oleh LLM dan agen.",
          "Tapi justru karena bekerja di pemerintahan, batasannya harus dipahami dengan jelas: data tidak boleh sembarang keluar, kebijakan penggunaan teknologi harus diikuti, dan hasil AI tetap tanggung jawab manusia yang menandatanganinya.",
        ],
      },
      {
        heading: "Yang terbukti berhasil",
        paragraphs: [
          "Pola yang paling aman dan langsung terasa: otomasi pada dokumen non-rahasia dan pekerjaan format. Contoh nyata: merapikan notulen dari catatan mentah, menyusun draft pertama telaah dari bahan yang sudah ada, mengubah tabel berantakan menjadi rekap rapi, dan membuat ringkasan peraturan panjang untuk bahan diskusi.",
          "Naik satu level: workflow otomatis dengan n8n yang berjalan di server sendiri — misalnya pipeline yang membaca laporan harian dari grup, merekapnya, dan mengirim ringkasan setiap sore. Karena self-hosted, data tidak meninggalkan infrastruktur sendiri.",
        ],
      },
      {
        heading: "Yang harus dijaga",
        paragraphs: [
          "Pertama: jangan pernah menempelkan data pribadi warga atau dokumen rahasia ke layanan AI publik. Kalau ragu, anggap tidak boleh. Untuk kebutuhan seperti itu, satu-satunya jalur yang layak adalah model lokal di infrastruktur sendiri.",
          "Kedua: AI menghasilkan draft, manusia yang bertanggung jawab. Setiap keluaran harus dibaca dan diverifikasi — halusinasi yang masuk ke dokumen resmi bukan salah modelnya, tapi salah kita.",
          "Ketiga: bawa serta rekan kerja. Otomasi yang dibangun sendirian akan mati saat penanggung jawabnya pindah tugas. Dokumentasikan, ajari, dan jadikan kemampuan tim — itu bedanya inisiatif individu dan perubahan cara kerja.",
        ],
      },
    ],
  },
  {
    slug: "panduan-llm-lokal-pertamamu",
    title: "Panduan: Menjalankan LLM Lokal Pertamamu dalam 15 Menit",
    excerpt:
      "Tidak butuh GPU mahal untuk mulai. Langkah demi langkah memasang Ollama, memilih model yang pas untuk spek laptopmu, dan menyambungkannya ke tool lain.",
    category: "Tutorial",
    date: "2026-05-02",
    readingTime: "8 menit",
    body: [
      {
        paragraphs: [
          "Banyak yang mengira menjalankan AI di komputer sendiri butuh GPU jutaan rupiah. Kenyataannya: laptop dengan RAM 16 GB sudah bisa menjalankan model yang berguna, dan prosesnya sekarang sangat sederhana berkat Ollama.",
        ],
      },
      {
        heading: "Langkah 1: Pasang Ollama",
        paragraphs: [
          "Kunjungi ollama.com, unduh installer sesuai sistem operasimu (Windows, macOS, Linux), dan jalankan. Selesai — tidak ada konfigurasi tambahan. Buka terminal dan ketik 'ollama --version' untuk memastikan terpasang.",
        ],
      },
      {
        heading: "Langkah 2: Pilih model sesuai spek",
        paragraphs: [
          "Aturan kasarnya: model butuh RAM/VRAM kira-kira sebesar ukuran filenya plus sedikit ruang. RAM 8 GB: pakai model 3-4B (kecil tapi tetap berguna untuk ringkasan dan draft). RAM 16 GB: model 7-8B adalah sweet spot — coba 'ollama run qwen3:8b'. RAM 32 GB ke atas atau punya GPU: model 14B+ mulai terasa 'pintar' untuk penalaran.",
          "Rekomendasi utama editorial: keluarga Qwen untuk keseimbangan ukuran dan performa. Alternatifnya Gemma dan Llama.",
        ],
      },
      {
        heading: "Langkah 3: Sambungkan ke tool lain",
        paragraphs: [
          "Di sinilah serunya dimulai. Ollama menyediakan API lokal yang kompatibel dengan format OpenAI di http://localhost:11434. Artinya: n8n bisa memakainya untuk workflow otomasi, Dify bisa menjadikannya otak chatbot dokumen, dan Cline bisa memakainya sebagai asisten coding — semuanya tanpa biaya API sepeser pun.",
          "Mulai dari percakapan sederhana di terminal, lalu naik level pelan-pelan. Dalam beberapa minggu kamu akan punya intuisi soal apa yang bisa dan belum bisa dilakukan model lokal — intuisi yang tidak bisa dibeli, hanya bisa dilatih.",
        ],
      },
    ],
  },
  {
    slug: "indonesia-butuh-komunitas-review-ai",
    title: "Kenapa Indonesia Butuh Media Review AI Sendiri",
    excerpt:
      "Konten AI berbahasa Indonesia masih didominasi berita terjemahan dan hype. Yang langka: review mendalam dari tim yang benar-benar menguji tool-nya. Wawasan AI hadir mengisi celah itu.",
    category: "Editorial",
    date: "2026-04-20",
    readingTime: "4 menit",
    body: [
      {
        paragraphs: [
          "Coba cari di Google: 'review OpenClaw Indonesia' atau 'perbandingan Claude Code vs Cursor untuk developer lokal'. Hasilnya nyaris kosong — paling banter berita terjemahan atau video singkat yang menyentuh permukaan. Padahal pertanyaannya nyata: tool mana yang layak dipakai? Model mana yang masuk akal untuk workload-mu? Mana yang sepadan untuk kantong dan koneksi internet kita?",
          "Konten AI global melimpah, tapi konteks lokal kita berbeda: daya beli berbeda (langganan $20 itu signifikan), kendala pembayaran internasional nyata, dan untuk sektor publik — aturan data yang ketat. Review yang baik untuk pembaca Indonesia harus memperhitungkan semua itu.",
        ],
      },
      {
        heading: "Apa yang Wawasan AI tawarkan",
        paragraphs: [
          "Tiga rubrik utama: Review Repo GitHub (proyek open-source AI yang layak dicoba, dari OpenClaw sampai DeerFlow), Review Model LLM (dinilai dari penalaran, coding, kecepatan, dan harga), dan Review Tools (tool coding dan otomasi, dinilai dari pemakaian nyata).",
          "Prinsipnya sederhana: hanya mengulas yang sudah diuji langsung tim editorial, jujur soal kekurangan, dan selalu menjawab pertanyaan 'untuk siapa tool ini masuk akal?'. Tidak ada skor sempurna gratisan — skor di situs ini adalah opini editorial dari pengujian langsung.",
          "Wawasan AI baru mulai. Kalau kamu punya repo, model, atau tool yang ingin diulas — atau tidak setuju dengan penilaian editorial — sampaikan. Justru perdebatan seperti itulah yang komunitas AI Indonesia butuhkan.",
        ],
      },
    ],
  },
  {
    slug: "apa-itu-mcp-protokol-penghubung-ai",
    title: "Apa Itu MCP? Mengenal 'USB-C-nya AI' yang Membuat Asisten Pintarmu Benar-Benar Berguna",
    excerpt:
      "MCP membuat AI bisa menyambung ke tool dan data apa pun lewat satu protokol standar. Inilah penjelasan tanpa jargon — dan kenapa ini penting untuk pengguna di Indonesia.",
    category: "Panduan",
    date: "2026-04-08",
    readingTime: "6 menit",
    body: [
      {
        paragraphs: [
          "Bayangkan zaman dulu ketika setiap ponsel punya colokan charger sendiri-sendiri — Nokia beda dengan Sony, Sony beda dengan Samsung. Lalu datang USB-C, dan tiba-tiba satu kabel bisa untuk semua. Model Context Protocol (MCP) melakukan hal yang sama untuk AI: ia adalah colokan standar yang membuat model AI bisa tersambung ke tool, database, dan layanan apa pun tanpa integrasi khusus satu per satu.",
          "Sebelum MCP, kalau kamu mau asisten AI bisa membaca Google Drive, mengecek kalender, dan menjalankan query database, tiap koneksi harus dibangun sendiri — kerja ulang yang melelahkan dan rapuh. Dengan MCP, pembuat tool cukup membuat satu 'server MCP', dan semua aplikasi AI yang mendukung protokol ini langsung bisa memakainya. Itulah kenapa banyak orang menyebutnya USB-C-nya AI — dan kenapa adopsinya menyebar begitu cepat.",
        ],
      },
      {
        heading: "Cara kerjanya, tanpa jargon",
        paragraphs: [
          "Strukturnya sederhana: ada klien (aplikasi AI yang kamu pakai — Claude Code, OpenClaw, editor coding, dan lain-lain) dan ada server MCP (program kecil yang 'membungkus' suatu layanan agar bisa diajak bicara oleh AI). Server MCP memberi tahu si model: 'ini daftar hal yang bisa kamu lakukan lewat server ini' — misalnya cari file, baca email, atau tarik data dari spreadsheet.",
          "Model lalu memutuskan sendiri kapan memanggil kemampuan itu, persis seperti asisten manusia yang tahu kapan harus membuka lemari arsip. Yang penting dipahami: MCP bukan model AI, bukan juga aplikasi. Ia hanya bahasa perantara — tapi justru bahasa perantara yang disepakati bersama itulah yang selama ini hilang.",
        ],
      },
      {
        heading: "Manfaat nyata untuk pengguna Indonesia",
        paragraphs: [
          "Contoh paling membumi: asisten AI yang bisa membaca folder dokumen kerja langsung, tanpa perlu copy-paste bolak-balik — untuk pegawai sektor publik, ini mengubah cara menelaah dokumen panjang. Untuk pemilik UMKM, server MCP untuk spreadsheet atau database berarti AI bisa menjawab 'berapa stok barang X' dari data nyata, bukan mengarang. Untuk pengguna n8n dan OpenClaw, MCP membuka ribuan integrasi siap pakai yang dibuat komunitas.",
          "Kabar baiknya lagi: banyak server MCP bersifat open-source dan bisa jalan di komputer sendiri, sehingga data tidak harus keluar dari infrastruktur kita — relevan sekali untuk instansi dengan aturan data ketat. Saran editorial: mulai dari server MCP filesystem yang paling sederhana, rasakan bedanya, lalu jelajahi katalog server yang terus bertambah. Begitu terbiasa, kamu akan heran dulu bisa hidup tanpa ini.",
        ],
      },
    ],
  },
  {
    slug: "vibe-coding-peluang-dan-jebakan",
    title: "Vibe Coding: Membangun Aplikasi Tanpa Menulis Kode — Peluang Sekaligus Jebakannya",
    excerpt:
      "Kini siapa pun bisa 'ngobrol' dengan AI dan jadi punya aplikasi. Fenomena ini membawa peluang sekaligus risiko — ini catatan jujur editorial soal peluang dan jebakan vibe coding untuk orang Indonesia.",
    category: "Opini",
    date: "2026-03-22",
    readingTime: "7 menit",
    body: [
      {
        paragraphs: [
          "Beberapa bulan terakhir fenomena yang dulu terasa mustahil makin umum: orang yang tidak pernah menulis satu baris kode pun kini punya aplikasi buatan sendiri. Mereka cukup mendeskripsikan keinginannya ke AI — 'buatkan aplikasi pencatat kas RT yang bisa diakses dari HP' — lalu memoles hasilnya lewat percakapan. Inilah yang disebut vibe coding: membangun software dengan mengandalkan 'vibe', bukan pemahaman teknis.",
          "Dari sudut pandang editorial, ini kabar baik sekaligus peringatan. Banyak kode hasil AI terlihat jalan di permukaan, tapi bolong di tempat yang tidak terlihat. Tulisan ini mencoba jujur di dua sisi: vibe coding adalah peluang nyata, dan pada saat yang sama jebakan yang nyata pula.",
        ],
      },
      {
        heading: "Peluangnya sungguhan",
        paragraphs: [
          "Untuk konteks Indonesia, ini demokratisasi yang berarti. Pemilik warung bisa bikin kalkulator HPP sendiri, pengurus komunitas bisa bikin sistem pendaftaran acara, staf kantor bisa bikin dashboard rekap — hal-hal yang dulu butuh menyewa programmer dengan biaya yang tidak masuk akal untuk kebutuhan sekecil itu. Jarak antara 'punya ide' dan 'punya prototipe' menyusut dari berbulan-bulan menjadi semalam.",
          "Dan untuk yang ingin serius, vibe coding adalah pintu masuk belajar yang menyenangkan. Banyak orang yang mulanya cuma 'ngobrol' dengan AI lama-lama penasaran kenapa kodenya begini, lalu tanpa sadar mulai belajar betulan. Itu jalur belajar yang valid — dan pola yang sama terlihat di banyak kasus pengujian editorial.",
        ],
      },
      {
        heading: "Jebakan yang jarang dibicarakan",
        paragraphs: [
          "Pertama, keamanan. Aplikasi hasil vibe coding sering terlihat jalan tapi bolong di tempat yang tidak terlihat: password tersimpan sembarangan, data bisa diakses siapa saja, kunci API tertanam di kode yang dipublikasikan. Kalau aplikasimu hanya dipakai sendiri, risikonya kecil; begitu menyimpan data orang lain — apalagi data pelanggan atau warga — kamu memikul tanggung jawab yang tidak bisa didelegasikan ke AI.",
          "Kedua, maintainability. Aplikasi yang lahir dari percakapan seminggu bisa jadi tidak bisa diubah enam bulan kemudian, karena tidak ada yang benar-benar paham isinya — termasuk pembuatnya. Menambah fitur kecil bisa merusak fitur lain, dan kamu tidak tahu kenapa. Software itu bukan barang jadi, ia makhluk hidup yang harus dirawat.",
          "Ketiga — dan ini yang paling halus — ilusi kompetensi. Berhasil mem-vibe-code sebuah aplikasi terasa seperti 'sudah bisa bikin software', padahal yang dikuasai baru kulitnya. Bahayanya muncul saat ilusi itu dibawa ke ranah profesional: menerima proyek berbayar atau memasang sistem untuk kantor tanpa kemampuan menilai apakah hasilnya aman dan benar. Nasihat editorial sederhana: silakan vibe coding sebebas-bebasnya untuk diri sendiri, tapi begitu menyangkut uang dan data orang lain, ajak orang yang paham untuk me-review — atau jadilah orang yang paham itu dengan belajar sungguhan.",
        ],
      },
    ],
  },
  {
    slug: "keamanan-ai-agent-checklist",
    title: "Checklist Keamanan Sebelum Memasang AI Agent Self-Hosted di Server Sendiri",
    excerpt:
      "AI agent seperti OpenClaw bisa menjalankan perintah di servermu — itulah kekuatannya, sekaligus risikonya. Lima pemeriksaan wajib sebelum kamu menyalakannya.",
    category: "Tutorial",
    date: "2026-02-28",
    readingTime: "7 menit",
    body: [
      {
        paragraphs: [
          "AI agent self-hosted seperti OpenClaw memikat karena satu hal: ia bisa benar-benar mengerjakan sesuatu — menjalankan perintah, membaca file, mengirim pesan. Tapi kemampuan itu pedang bermata dua. Agen yang bisa menjalankan perintah di servermu adalah agen yang, kalau salah arah atau dimanipulasi, bisa merusak servermu juga.",
          "Tim editorial Wawasan AI memasang dan membongkar cukup banyak agen di server sendiri untuk tahu bahwa sebagian besar masalah bisa dicegah dengan persiapan sederhana. Berikut checklist yang dijalankan editorial sebelum menyalakan agen baru — tidak butuh keahlian security khusus, hanya kedisiplinan.",
        ],
      },
      {
        heading: "1. Isolasi: beri agen 'kamar' sendiri",
        paragraphs: [
          "Jangan jalankan agen sebagai root atau di user utama yang menyimpan semua datamu. Buat user Linux terpisah khusus untuk agen, atau lebih baik lagi jalankan di dalam container (Docker) atau VPS murah yang memang dialokasikan untuk eksperimen. Prinsipnya: kalau agen mengamuk atau dibobol, kerusakannya terkurung di kamarnya sendiri.",
          "Bonus dari isolasi: kamu jadi berani bereksperimen. Agen di lingkungan terisolasi boleh dikasih kebebasan lebih, karena skenario terburuknya cuma 'hapus container, buat ulang'.",
        ],
      },
      {
        heading: "2. Batasi izin dan jauhkan data sensitif",
        paragraphs: [
          "Beri agen hanya akses yang ia butuhkan untuk tugasnya — tidak lebih. Kalau tugasnya merekap pesan, ia tidak perlu akses hapus file. Kalau ia perlu API key, buat key terpisah dengan cakupan paling sempit dan limit pengeluaran, jangan pakai key utama. Tinjau ulang daftar tool yang diaktifkan: tiap tool tambahan adalah pintu tambahan.",
          "Dan ini yang paling sering dilanggar: jangan taruh data sensitif di jangkauan agen. Dokumen rahasia kantor, data pribadi warga, file keuangan — semua itu tidak boleh berada di folder yang bisa dibaca agen yang tersambung ke internet. Untuk pegawai sektor publik dan siapa pun yang memegang data orang lain, anggap ini garis merah, bukan saran.",
        ],
      },
      {
        heading: "3. Waspadai prompt injection, dan selalu punya backup",
        paragraphs: [
          "Prompt injection itu serangan yang sederhana tapi efektif: penyerang menitipkan instruksi jahat di konten yang akan dibaca agenmu — email, halaman web, pesan masuk — dan agen yang polos bisa menurutinya seolah perintah darimu. Pertahanannya berlapis: jangan beri agen kemampuan destruktif yang berjalan otomatis tanpa konfirmasi, curigai agen yang memproses konten dari orang tak dikenal, dan aktifkan mode konfirmasi manusia untuk aksi penting seperti mengirim uang, menghapus data, atau mengirim pesan keluar.",
          "Terakhir, backup. Sebelum agen pertama kali menyala, pastikan ada salinan data penting di tempat yang tidak bisa dijangkau si agen. Backup yang bisa dihapus oleh agen yang sama bukanlah backup. Kedengarannya paranoid, sampai hari kamu bersyukur pernah paranoid.",
          "Checklist ini tidak membuat sistemmu kebal — tidak ada yang bisa. Tapi ia mengubah risiko dari 'bencana' menjadi 'pelajaran yang bisa dipulihkan', dan itu cukup untuk mulai bereksperimen dengan tenang.",
        ],
      },
    ],
  },
  {
    slug: "rag-vs-konteks-panjang",
    title: "RAG vs Context Window Jutaan Token: Kapan Butuh Pipeline, Kapan Cukup Lempar Semua Dokumen?",
    excerpt:
      "Model berkonteks panjang membuat banyak orang bertanya: masih perlu RAG? Jawabannya tergantung skala, frekuensi, dan — yang sering dilupakan — tagihan.",
    category: "Analisis",
    date: "2026-02-10",
    readingTime: "7 menit",
    body: [
      {
        paragraphs: [
          "Dulu jawabannya gampang: model hanya kuat membaca beberapa halaman, jadi kalau mau AI menjawab dari dokumen banyak, kamu wajib membangun pipeline RAG — sistem yang memotong dokumen, menyimpannya di database vektor, lalu mengambil potongan relevan untuk tiap pertanyaan. Sekarang model berkonteks ratusan ribu hingga jutaan token mengubah hitungannya: untuk banyak kasus, kamu bisa melempar seluruh dokumen mentah-mentah ke model dan selesai.",
          "Lalu apakah RAG sudah mati? Belum — tapi wilayah kekuasaannya menyempit. Pertanyaan yang tepat bukan 'mana yang lebih canggih', melainkan 'untuk kasus tertentu, mana yang lebih sederhana dan lebih murah'. Mari kita bedah.",
        ],
      },
      {
        heading: "Kapan konteks panjang saja sudah cukup",
        paragraphs: [
          "Kalau total dokumenmu muat di context window dan pertanyaannya tidak terlalu sering, lempar saja semuanya. Menelaah satu kontrak panjang, membandingkan beberapa peraturan, merangkum laporan tahunan — untuk pekerjaan begini, membangun pipeline RAG itu seperti membangun gudang untuk menyimpan tiga kardus. Konteks panjang juga unggul saat jawabannya butuh pemahaman lintas-dokumen yang utuh: model melihat semuanya sekaligus, bukan potongan-potongan yang diambil sistem pencari.",
          "Pola pemakaian di sektor publik justru hampir semuanya kategori ini: dokumen kerja datang per kasus, ditelaah, selesai. Tidak ada alasan merawat database vektor untuk itu.",
        ],
      },
      {
        heading: "Kapan RAG tetap tak tergantikan",
        paragraphs: [
          "Pertama, skala: kalau korpusmu ribuan dokumen — arsip peraturan satu instansi, basis pengetahuan layanan pelanggan, dokumentasi produk bertahun-tahun — tidak ada context window yang muat, dan RAG kembali jadi satu-satunya jalan. Kedua, frekuensi: chatbot yang menjawab ratusan pertanyaan sehari dari basis pengetahuan yang sama akan jauh lebih hemat mengambil potongan kecil yang relevan ketimbang membayar pembacaan seluruh korpus berulang-ulang.",
          "Di sinilah implikasi biaya yang sering dilupakan: kamu membayar per token yang dibaca model, dan membaca dokumen raksasa untuk tiap pertanyaan kecil itu seperti menyewa truk kontainer untuk antar satu paket. Fitur prompt caching memang memangkas biaya pembacaan berulang secara signifikan, tapi tidak menghilangkan logika dasarnya. Untuk dompet Indonesia — apalagi UMKM yang menimbang tiap rupiah tagihan API — selisihnya terasa.",
          "Rumus praktis editorial: mulai dari yang paling sederhana, yaitu lempar dokumen ke model berkonteks panjang. Baru bangun RAG kalau (a) dokumen tidak muat, (b) volume pertanyaan tinggi dan tagihan mulai sakit, atau (c) korpus terus bertambah dan butuh diperbarui tanpa menyentuh ulang semuanya. RAG itu jawaban untuk masalah skala — jangan mengadopsi masalah skala sebelum kamu memilikinya.",
        ],
      },
    ],
  },
  {
    slug: "peta-karier-ai-untuk-orang-indonesia",
    title: "Peta Karier dan Cuan di Era AI untuk Orang Indonesia Biasa — Tanpa Gelar Peneliti",
    excerpt:
      "Tidak perlu jadi peneliti machine learning untuk dapat penghasilan dari gelombang AI. Empat jalur realistis untuk orang Indonesia — beserta syarat dan risikonya yang jujur.",
    category: "Analisis",
    date: "2026-01-18",
    readingTime: "8 menit",
    body: [
      {
        paragraphs: [
          "Setiap kali AI ramai dibicarakan, narasi kariernya selalu sama: jadi peneliti machine learning bergaji fantastis di perusahaan besar. Jalur itu nyata, tapi relevan untuk segelintir orang — butuh latar matematika kuat dan biasanya gelar lanjutan. Padahal di bawah radar, ada lapisan peluang yang jauh lebih bisa dijangkau orang Indonesia biasa: pekerjaan yang intinya menjembatani kemampuan AI dengan kebutuhan nyata di sekitar kita.",
          "Tulisan ini memetakan jalur-jalur itu tanpa hype. Tidak ada janji 'cuan puluhan juta dalam sebulan' — yang ada adalah peluang riil yang menuntut belajar sungguhan, plus kejujuran soal di mana persaingannya berat.",
        ],
      },
      {
        heading: "Empat jalur yang realistis",
        paragraphs: [
          "Pertama, 'AI engineer dadakan' — istilah untuk orang yang bisa merangkai layanan AI yang sudah ada (API model, n8n, Dify, agen coding) menjadi solusi kerja, tanpa membangun model dari nol. Banyak perusahaan menengah Indonesia tidak butuh peneliti; mereka butuh orang yang bisa membuat sistem 'baca email masuk, klasifikasikan, balas otomatis yang rutin'. Modal masuknya: kemauan belajar tooling dan kemampuan memahami proses bisnis.",
          "Kedua, konsultan otomasi UMKM. Jutaan usaha kecil kita masih merekap pesanan manual dan membalas pertanyaan pelanggan yang sama berulang-ulang di WhatsApp. Orang yang bisa datang, memetakan proses, dan memasang otomasi sederhana — lalu mengajari pemiliknya — menjual hasil yang sangat konkret: waktu. Kuncinya bukan teknologi canggih, tapi kemampuan bicara bahasa pedagang, bukan bahasa engineer.",
          "Ketiga, content ops: mengoperasikan produksi konten berbantuan AI untuk bisnis — riset, draft, edit, jadwal, ukur. Yang dibayar di sini bukan kemampuan menyuruh AI menulis (semua orang bisa), melainkan kurasi dan kontrol kualitas: memastikan konten akurat, bernada tepat, dan tidak generik. Keempat, jasa pembuatan chatbot — customer service UMKM, FAQ instansi, asisten internal kantor. Pasarnya nyata, tapi ini jalur yang paling cepat ramai pesaing; pembedanya ada di pemahaman domain dan layanan purna jual, bukan di chatbotnya sendiri.",
        ],
      },
      {
        heading: "Catatan jujur sebelum melompat",
        paragraphs: [
          "Semua jalur di atas punya musuh yang sama: tool yang makin mudah. Apa yang hari ini kamu jual sebagai jasa, tahun depan mungkin jadi fitur sekali klik. Pertahanannya bukan merahasiakan trik, melainkan terus naik level ke hal yang lebih sulit ditiru: pemahaman mendalam atas industri tertentu, kepercayaan klien, dan kemampuan menilai kapan AI salah. Posisikan dirimu sebagai orang yang bertanggung jawab atas hasil, bukan operator tool.",
          "Dan untuk yang sudah bekerja — termasuk pegawai sektor publik — jalur paling aman sering kali bukan resign, melainkan menjadi orang yang paling paham AI di organisasimu sendiri. Nilai itu tidak selalu cair sebagai uang langsung, tapi cair sebagai peran, jejaring, dan pilihan. Mulailah dari masalah nyata di depan mata, bukan dari teknologi yang sedang viral; orang yang menyelesaikan masalah membosankan dengan AI akan selalu menang dari orang yang mendemokan AI keren tanpa masalah untuk diselesaikan.",
        ],
      },
    ],
  },
];

export function getArtikel(slug: string) {
  return berita.find((b) => b.slug === slug);
}
