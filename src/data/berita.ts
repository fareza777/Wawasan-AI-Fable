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
  {
    slug: "skill-ai-engineer-paling-dicari-2026",
    title: "Lima Skill AI Engineer yang Paling Dicari Perusahaan Indonesia di 2026",
    excerpt:
      "Bukan riset mutakhir yang paling dibutuhkan pasar, melainkan kemampuan merangkai alat yang sudah ada menjadi solusi yang benar-benar dipakai. Lima skill ini jadi pembeda utama.",
    category: "Analisis",
    date: "2026-06-12",
    readingTime: "7 menit",
    body: [
      {
        paragraphs: [
          "Kalau bertanya ke perekrut teknologi di Jakarta, Bandung, atau Surabaya, lowongan AI engineer di 2026 sudah tidak lagi terdengar seperti posisi riset yang sakral. Yang dicari adalah orang yang bisa merangkai API yang sudah ada, menghubungkan layanan, dan memastikan sistem yang dibangun benar-benar dipakai tim operasional — bukan menghasilkan makalah. Pergeseran ini diam-diam sudah berlangsung dua tahun, dan akselerasinya terasa tahun ini.",
          "Pertanyaannya jadi: skill apa yang benar-benar membedakan kandidat yang langsung produktif dari yang baru jago teori? Berikut lima yang muncul konsisten di percakapan dengan tim engineering lokal, lengkap dengan cara membangunnya untuk orang Indonesia yang tidak punya akses ke Silicon Valley.",
        ],
      },
      {
        heading: "1. Merangkai agen — bukan membangun model",
        paragraphs: [
          "Skill pertama dan paling nyata: kemampuan merangkai 'agen' dari komponen yang sudah jadi. OpenClaw untuk orkestrasi pesan, n8n untuk workflow visual, Ollama untuk model lokal — ketiga nama ini adalah toolkit dasar yang dicari tim. Yang membedakan kandidat andal bukan apakah mereka bisa menulis paper tentang attention mechanism, melainkan seberapa cepat mereka bisa memasang pipeline 'baca email masuk, klasifikasikan, balas otomatis' dalam sehari.",
          "Cara membangunnya: jangan mulai dari teori. Pilih satu workflow nyata di tempat kerja, lalu pasang. Saat pertama gagal, baca log. Saat kedua gagal, tanya di Discord komunitas. Saat ketiga baru jadi — di situ skill sudah terbentuk. Iterasi seperti ini jauh lebih efektif daripada kursus online yang membuat lulus tanpa pernah menyentuh produksi.",
        ],
      },
      {
        heading: "2. Memahami konteks bisnis, bukan hanya kode",
        paragraphs: [
          "Skill kedua yang membedakan: kemampuan menerjemahkan kebutuhan bisnis ke solusi teknis. Banyak engineer hebat yang bisa membangun apa saja, tapi gagal paham mengapa pengguna benar-benar membutuhkannya. AI engineer yang paling dicari tahu kapan harus berhenti menambahkan fitur dan mulai mendengarkan: 'apa yang sebulan ini paling sering membuat Anda kesal di tempat kerja?'",
          "Untuk konteks Indonesia, ini skill yang membuat seorang engineer bisa charging premium untuk klien lokal: kemampuan menerjemahkan bahasa teknis ke bahasa masalah nyata. UMKM yang butuh otomasi tidak peduli apakah Anda menggunakan GPT-5 atau Claude Opus — mereka peduli apakah struk mereka otomatis terisi tiap malam.",
        ],
      },
      {
        heading: "3. Self-hosting dan kedaulatan data",
        paragraphs: [
          "Skill ketiga yang meningkat tajam permintaannya: kemampuan menjalankan AI di infrastruktur sendiri. Untuk banyak perusahaan di Indonesia — apalagi yang bergerak di sektor publik, keuangan, atau kesehatan — mengirim data ke API publik bukan opsi. Ollama, vLLM, LM Studio, dan kawan-kawan menjadi literasi wajib, sama seperti Linux wajib untuk backend engineer lima tahun lalu.",
          "Prasyaratnya: laptop dengan RAM 16 GB sudah cukup untuk mulai. Pasang Ollama, unduh Qwen 3 8B, dan biarkan model itu menjadi 'rekan' Anda sehari-hari. Setelah beberapa minggu, intuisi tentang ukuran model, latency, dan biaya akan terlatih dengan sendirinya — intuisi yang tidak bisa dibeli dari tutorial manapun.",
        ],
      },
      {
        heading: "4. Evaluasi, bukan hanya output",
        paragraphs: [
          "Skill keempat: kemampuan menilai apakah hasil AI benar-benar bagus, bukan sekadar 'kelihatannya bagus'. Untuk ringkasan atau draf dokumen, mata manusia masih lebih bisa diandalkan dari metrik otomatis. Untuk alur kerja yang melibatkan keputusan — misalnya klasifikasi dokumen hukum — membangun set evaluasi kecil dari 50 contoh yang sudah diberi label manusia adalah investasi terbaik yang bisa dilakukan engineer.",
          "Di sinilah bedanya 'prompt engineer' dan 'AI engineer' sesungguhnya: prompt engineer puas ketika output kelihatannya meyakinkan; AI engineer tahu bahwa tanpa evaluasi yang terstruktur, keyakinan itu kosong. Untuk standar industri Indonesia, kemampuan ini yang membedakan konsultan mahal dari konsultan biasa.",
        ],
      },
      {
        heading: "5. Menulis narasi, bukan hanya kode",
        paragraphs: [
          "Skill kelima yang sering diabaikan: kemampuan menulis dengan jelas. README yang baik, dokumentasi internal, presentasi ke stakeholder non-teknis — semua ini sering membedakan AI engineer yang dihargai dari yang sekadar produktif. Di era di mana AI sendiri sudah bisa menghasilkan kode, kemampuan menjelaskan 'mengapa' dan 'untuk apa' menjadi semakin bernilai.",
          "Untuk konteks Indonesia, skill ini mengambil bentuk tambahan: kemampuan menulis dalam dua bahasa. Dokumentasi internal bisa bahasa Inggris, tapi laporan ke klien atau presentasi ke atasan sering perlu bahasa Indonesia yang baik. AI engineer yang bisa menulis narasi untuk kedua audiens — dan tahu kapan masing-masing digunakan — akan selalu punya keunggulan di pasar lokal.",
        ],
      },
    ],
  },
  {
    slug: "top-145000-asn-bakal-dilatih-microsoft-biar-jago-ai",
    title:
      "Saat 145.000 ASN Resmi Dilatih Microsoft: Apa yang Sebenarnya Berubah di Birokrasi Kita?",
    excerpt:
      "Kemitraan BKN dan Microsoft untuk melatih 145.000 ASN menandai masuknya AI ke jantung birokrasi Indonesia. Pertanyaan besarnya: apakah ini hanya pelatihan, atau transformasi cara kerja?",
    category: "Analisis",
    date: "2026-06-14",
    readingTime: "6 menit",
    body: [
      {
        paragraphs: [
          "Beberapa hari lalu pengumuman yang dinanti bertahun-tahun akhirnya datang juga: Badan Kepegawaian Negara (BKN) mengumumkan kerja sama dengan Microsoft Indonesia untuk melatih 145.000 aparatur sipil negara dalam kecerdasan buatan. Bukan pelatihan singkat di hotel beberapa jam yang selesai lalu dilupakan — tapi program penguatan kapasitas kepemimpinan digital bernama 'GARUDA AI for Microsoft Elevate', menyasar sebagian besar ASN di Indonesia sekaligus dan digelar dalam beberapa gelombang daring.",
          "Bagi yang berkecimpung di birokrasi, angka itu bukan sekadar statistik. 145.000 ASN adalah sekitar empat persen dari total aparatur negara kita. Kalau program ini benar-benar menyentuh mereka di level yang terukur, ini adalah inisiatif transformasi talenta publik terbesar yang pernah ada di Indonesia — dan salah satu yang paling ambisius di Asia Tenggara saat ini.",
        ],
      },
      {
        heading: "Apa yang sebenarnya diumumkan BKN dan Microsoft?",
        paragraphs: [
          "Secara resmi, ada tiga hal yang dipublikasikan. Pertama, pelatihan AI untuk ASN dengan target 145.000 peserta yang digelar daring. Microsoft menyediakan kurikulum dan platform; BKN memastikan peserta, logistik, dan integrasi ke sistem pengembangan kompetensi ASN. Kedua, penguatan kapasitas kepemimpinan digital untuk pejabat struktural — penting karena sejarah birokrasi menunjukkan pelatihan di level staf saja tidak cukup kalau atasannya tidak paham apa yang sedang dipakai anak buahnya. Ketiga, disertifikasi: peserta yang menyelesaikan program mendapat pengakuan yang tercatat di sistem SDM ASN, bukan sertifikat seremonial.",
          "Program ini juga bukan muncul tiba-tiba. Pada 2023, Microsoft dan Prakerja sudah menjalankan 'Talenta AI Indonesia' yang melatih 100.000 pemuda. Pada 2024-2025, berbagai kementerian menjalankan inisiatif serupa secara terpisah. Yang berubah dengan pengumuman BKN kali ini adalah skala dan integrasinya: bukan lagi program kementerian sendiri-sendiri, melainkan program nasional yang dirancang menyentuh hampir seluruh ASN di bawah koordinasi satu badan.",
        ],
      },
      {
        heading:
          "Kenapa angka 145.000 itu penting — dan apa yang belum dijawab",
        paragraphs: [
          "Angka 145.000 terdengar meyakinkan, tapi dalam pengujian editorial Wawasan AI, ada beberapa hal yang perlu ditanyakan sebelum ramai memuji. Yang pertama adalah kualitas pelatihan: apakah ini pelatihan video ceramah yang selesai ditonton lalu terlupakan, atau program yang benar-benar membuat ASN mampu memakai AI untuk pekerjaan nyata mereka? Pelatihan daring yang efektif membutuhkan bimbingan, tugas terapan, dan forum diskusi — bukan sekadar video dan kuis akhir.",
          "Yang kedua adalah keberlanjutan. Microsoft adalah perusahaan komersial dengan kurikulum yang dirancang untuk ekosistemnya sendiri. Kalau ASN menjadi terbiasa dengan Copilot, Azure, dan Microsoft 365, lalu kontrak besar putus, apa yang terjadi dengan kebiasaan baru itu? Yang ketiga adalah kedaulatan data: data yang dipakai ASN dalam percakapan dengan AI publik di luar negeri tunduk pada regulasi negara tempat server berada — bukan regulasi Indonesia. Untuk sebagian besar pekerjaan ASN yang tidak sensitif, ini bukan masalah besar; untuk dokumen kepegawaian, data pribadi warga, dan keputusan strategis, ini pertanyaan besar yang wajib dijawab sebelum pelatihan menjadi rutinitas.",
          "Yang keempat adalah pengukuran dampak. Bagaimana BKN akan tahu bahwa pelatihan ini benar-benar mengubah cara kerja ASN, bukan hanya mengisi baris 'sudah dilatih' di laporan? Indikator yang terukur — jumlah layanan publik yang dipercepat, dokumen yang disusun lebih cepat dengan tetap akurat, keputusan yang lebih informed — adalah hal yang akan menentukan apakah program ini masuk sejarah sebagai transformasi nyata atau hanya menjadi baris seremonial di laporan tahunan.",
        ],
      },
      {
        heading: "Apa artinya untuk ASN sendiri — dan untuk warga yang dilayani",
        paragraphs: [
          "Di balik angka besar itu ada manusia-manusia yang bekerja di garda depan. ASN yang akan mengikuti pelatihan adalah guru, penyuluh pertanian, analis kebijakan, operator layanan kependudukan, dan banyak peran lain yang menyentuh kehidupan kita setiap hari. Kalau mereka benar-benar keluar dari pelatihan dengan kemampuan baru — memakai AI untuk menyusun draf, menganalisis data, atau melayani pertanyaan warga dengan lebih cepat — itu terasa langsung ke kualitas pelayanan publik.",
          "Tapi untuk ASN sendiri ada pertanyaan pribadi yang jujur: apakah pelatihan ini akan menjadi bekal karier atau hanya tambahan sertifikat? Dalam birokrasi, kemampuan baru bernilai kalau ada ruang untuk dipakai. Kalau setelah pelatihan ASN kembali ke meja dengan sistem lama, SOP yang tidak berubah, dan atasan yang tidak paham — sertifikat bertambah, perilaku tidak. Itulah sebabnya program seperti ini akan berhasil atau gagal bukan di ruang pelatihan, melainkan di unit kerja masing-masing ASN setelah mereka pulang ke tempat tugasnya semula.",
        ],
      },
      {
        heading: "Pelajaran yang bisa diambil sekarang",
        paragraphs: [
          "Bagi ASN yang beruntung masuk gelombang pertama: anggap ini bukan pelatihan yang harus dilalui, melainkan kesempatan untuk benar-benar mengubah cara kerja. Pilih satu pekerjaan nyata di unitmu — boleh rekap laporan bulanan, boleh telaah peraturan, boleh draf jawaban untuk pertanyaan warga — dan pakai AI untuk mengerjakannya. Hasilnya akan jauh lebih berguna dari sertifikat yang ditandatangani di akhir program.",
          "Bagi instansi yang tidak masuk gelombang awal: tidak ada alasan menunggu. Ollama dan model lokal sudah bisa dipasang di server instansi untuk memastikan data tidak keluar. Untuk kebutuhan non-sensitif, tool gratis yang tersedia sekarang sudah cukup untuk memulai. Pelatihan formal memang penting, tapi belajar paling efektif justru terjadi saat kita menghadapi masalah nyata yang harus dipecahkan di tempat kerja masing-masing.",
          "Bagi masyarakat yang awam: program ini adalah tanda bahwa AI bukan lagi percakapan tentang Silicon Valley atau startup Jakarta. Pelan-pelan, AI akan terasa di kantor kecamatan, di kantor pajak daerah, di loket layanan kependudukan. Tidak ada yang perlu ditakuti, tapi juga tidak ada yang perlu diharapkan berlebihan. Yang akan menentukan berhasil atau tidaknya adalah ratusan ribu ASN yang duduk di pelatihan itu, dan apakah mereka pulang dengan kemampuan baru yang benar-benar dipakai — atau hanya cerita baru untuk ditulis di bio.",
        ],
      },
    ],
  },
  {
    slug: "adopsi-ai-tembus-92-pemerintah-siapkan-peta-jalan-untuk-perkuat-daya-saing",
    title:
      "Angka 92% Adopsi AI dan Peta Jalan yang Belum Lahir: Sebenarnya Indonesia Sudah di Mana?",
    excerpt:
      "Pemerintah klaim adopsi AI di Indonesia sudah 92%, tapi manfaat produktivitas masih samar. Peta jalan nasional yang dinanti pun masih berupa rancangan — ini catatan editorial soal klaim besar dan realitas lapangan.",
    category: "Analisis",
    date: "2026-06-15",
    readingTime: "7 menit",
    body: [
      {
        paragraphs: [
          "Beberapa hari lalu Wakil Menteri Komunikasi dan Digital menyampaikan angka yang membuat banyak orang berhenti scroll: tingkat adopsi AI di Indonesia disebut sudah menyentuh 92% per Februari 2026. Angka itu diucapkan di forum IBM AI Leadership Exchange, di depan pelaku industri dan korporasi besar, lengkap dengan kabar bahwa pemerintah sedang menyelesaikan rancangan peraturan presiden tentang peta jalan AI nasional. Di atas kertas, ini adalah berita besar: Indonesia tampak sudah melompat ke barisan depan adopsi AI global.",
          "Tapi sebelum dirayakan — atau dicemaskan — angka 92% itu perlu dibongkar. Apa sebenarnya yang diukur? Siapa yang dihitung? Dan kenapa dengan adopsi setinggi itu, cerita di lapangan tentang produktivitas yang naik signifikan masih susah ditemukan? Tulisan ini adalah catatan editorial Wawasan AI soal klaim besar, angka yang perlu diterjemahkan, dan apa yang sebenarnya bisa kita tunggu dari peta jalan yang dijanjikan.",
        ],
      },
      {
        heading: "Apa yang sebenarnya diukur oleh angka 92% itu?",
        paragraphs: [
          "Angka 92% yang disampaikan Wamenkomdigi Nezar Patria bersumber dari data internal Komdigi dan dipublikasikan lebih luas lewat berbagai media pada Februari 2026. Yang perlu dipahami: 'adopsi' di sini bukan berarti 92% perusahaan Indonesia sudah memakai AI dalam operasional produksi. Definisi yang dipakai lebih longgar — termasuk siapa saja yang pernah menggunakan AI untuk produktivitas: dari pelajar yang menyalin tugas ke ChatGPT, pedagang yang memakai template balasan otomatis di WhatsApp, sampai perusahaan besar yang menjalankan pipeline agentik terintegrasi.",
          "Dengan definisi longgar seperti itu, 92% bukan hal yang mengejutkan. Generative AI memang sudah masuk ke hampir semua lapisan masyarakat dalam dua tahun terakhir — sering tanpa mereka sadari sebagai 'AI'. Filter spam di email, rekomendasi di marketplace, autocomplete di aplikasi chatting, semuanya sudah memakai model AI. Yang berubah pasca-2023 adalah masuknya AI generatif yang bisa diajak ngobrol, dan itu memang menyentuh semua orang dengan sangat cepat.",
          "Karena itu klaim '92% adopsi' adalah benar secara angka, tapi menyesatkan secara makna. Yang sebenarnya perlu ditanyakan bukan berapa banyak orang yang pernah mencoba AI, melainkan berapa banyak organisasi yang sudah mengintegrasikan AI ke sistem kerjanya dan merasakan manfaat produktivitas yang terukur. Di sinilah ceritanya berbeda — dan jauh lebih rumit.",
        ],
      },
      {
        heading: "Kenapa produktivitas masih samar, walau adopsi tinggi?",
        paragraphs: [
          "Ada jurang yang lebar antara 'pernah pakai' dan 'benar-benar dipakai dalam sistem'. Banyak organisasi, terutama UMKM dan instansi di luar Jakarta, sudah mencoba AI — biasanya ChatGPT gratis atau Copilot di Microsoft 365 — tapi pemakaian itu berhenti di taraf eksperimen personal. Tidak ada workflow yang berubah, tidak ada SOP yang direvisi, dan yang paling penting: tidak ada metrik yang diukur untuk melihat apakah pemakaian itu benar-benar menghemat waktu atau hanya perasaan subjektif.",
          "Dalam pengujian editorial Wawasan AI, pola yang berulang adalah: seorang staf menemukan AI berguna, mulai memakainya untuk tugas pribadinya, lalu diam-diam kembali ke cara lama saat beban kerja naik karena tidak ada dukungan institusional. Tidak ada atasan yang tahu, tidak ada pelatihan yang difasilitasi, tidak ada kebijakan yang mengatur. Pemakaian AI di level individu memang meledak, tapi di level organisasi yang menentukan perubahan produktivitas nasional, gerakannya masih lambat.",
          "Menteri Komunikasi dan Digital sendiri di forum terpisah sempat menyebut AI berpotensi menambah PDB Indonesia hingga 3,67% — angka yang sering dikutip dari studi global. Tapi dalam pengujian editorial Wawasan AI, kontribusi riil AI ke produktivitas Indonesia sulit diisolasi dari faktor lain: pemulihan ekonomi pascapandemi, adopsi cloud yang masif, dan otomasi pra-AI yang sudah jalan lebih dulu. Yang jelas: angka 3,67% adalah potensi, bukan capaian — dan membedakannya penting agar kita tidak salah membaca grafik.",
        ],
      },
      {
        heading: "Peta jalan yang dijanjikan — apa yang bisa kita harapkan?",
        paragraphs: [
          "Kabar baiknya: pemerintah sudah merampungkan rancangan peraturan presiden tentang peta jalan AI nasional, dan saat ini tinggal menunggu pengesahan. Peta jalan ini fokus ke pembangunan ekosistem AI yang etis dan bertanggung jawab — bukan cuma soal penggunaan, tapi juga perlindungan data, transparansi algoritma, dan tata kelola. Untuk konteks Indonesia yang aturan datanya tersebar di banyak kementerian, satu dokumen payung seperti ini sudah lama dinanti.",
          "Tapi perlu juga diingat: peta jalan adalah dokumen arah, bukan jaminan hasil. Perpres yang bagus bisa jadi sia-sia kalau tidak disertai dengan kapasitas implementasi di level kementerian dan daerah. Pengalaman dari regulasi teknologi sebelumnya menunjukkan bahwa yang sering menjadi hambatan bukan ketiadaan aturan, melainkan lemahnya pengawasan, tumpang tindih otoritas, dan sanksi yang tidak pernah ditegakkan. Untuk ASN, pemilik UMKM, dan developer yang ingin membangun di atas ekosistem AI Indonesia, yang ditunggu bukan cuma perpresnya — tapi juga badan yang dipercaya mengeksekusi dan mengawasi implementasinya.",
          "Yang patut diapresiasi dari pidato Wamenkomdigi di forum IBM adalah nada yang dipilih: bukan optimisme kosong, melainkan pengakuan jujur bahwa adopsi tinggi belum berarti produktivitas naik. 'Pemanfaatan belum terintegrasi secara strategis' adalah kalimat yang jarang diucapkan pejabat — dan justru kalimat itulah yang memberi harapan bahwa ke depan, fokusnya bukan lagi soal berapa banyak yang mencoba, tapi berapa banyak yang benar-benar merasakan dampaknya.",
        ],
      },
      {
        heading: "Buat pembaca yang bertanya: lalu kita harus bagaimana?",
        paragraphs: [
          "Buat ASN dan pekerja kantoran: angka 92% itu bisa dibaca sebagai 'kamu tidak sendirian', bukan 'kamu sudah ketinggalan'. Adopsi setinggi itu justru memudahkan: carilah rekan kerja yang sudah lebih dulu memakai AI untuk tugas nyata, dan belajar dari mereka. Yang mengubah produktivitas bukan tool-nya, melainkan komunitas kecil yang saling mengajari di unit kerja masing-masing.",
          "Buat pemilik UMKM: klaim 92% sering dipakai vendor untuk menjual tool AI yang sebenarnya belum kamu butuhkan. Sebelum berlangganan, tanya dulu: pekerjaan repetitif apa yang paling menyita waktumu? Kalau belum bisa menjawab dengan jelas, jangan beli — pahami dulu masalahnya. Untuk banyak kasus, model lokal gratis via Ollama sudah lebih dari cukup untuk memulai tanpa biaya langganan bulanan.",
          "Buat masyarakat umum: adopsi AI yang meledak bukan berarti kamu wajib memakainya. Yang berubah adalah opsi-opsi yang tersedia: dari mencari informasi sampai menyusun dokumen, sekarang ada alat yang bisa mempercepat. Gunakan secukupnya, pahami keterbatasannya, dan jangan ragu untuk tetap berpikir sendiri. AI adalah alat bantu yang ampuh — tapi arah dan pertanggung jawabannya tetap di tangan manusia. Klaim 92% adalah pengingat bahwa kita semua sudah masuk ke era ini; bagaimana kita memakainya adalah cerita yang akan ditulis satu per satu oleh masing-masing dari kita.",
        ],
      },
    ],
  },
  {
    slug: "warung-soto-pun-kini-butuh-apa-itu-ai-engineer",
    title: "Warung Soto pun Kini Butuh AI Engineer: Apa yang Sebenarnya Diminta Pasar?",
    excerpt:
      "Lowongan AI engineer di 2026 sudah masuk ke restoran, retail, dan UMKM. Di balik judul yang ramai, kompetensi yang diminta ternyata lebih sederhana dan lebih bisa dipelajari dari yang dibayangkan.",
    category: "Analisis",
    date: "2026-06-13",
    readingTime: "7 menit",
    body: [
      {
        paragraphs: [
          "Beberapa bulan terakhir iklan lowongan kerja di platform pencarian kerja Indonesia menampilkan kalimat yang dulu jarang muncul di luar startup teknologi: 'dicari AI engineer' — dan kadang muncul di tempat yang tak terduga, dari restoran cepat saji sampai jaringan klinik gigi. Fenomena ini bukan sekadar bahasa marketing. Di baliknya ada pergeseran kebutuhan yang nyata: pekerjaan-pekerjaan yang dulu sepenuhnya manual kini minta disentuh otomasi, dan orang yang bisa menyentuhnya disebut dengan jabatan baru.",
          "Pertanyaan yang muncul di banyak percakapan editorial: apa sebenarnya yang diminta pasar ketika mereka menulis 'AI engineer' di judul lowongan? Apakah riset mutakhir? Membangun model dari nol? Atau sesuatu yang lebih sederhana — dan justru lebih bisa dicapai orang Indonesia yang gigih belajar di waktu luang? Tulisan ini mencoba memetakan apa yang benar-benar terjadi di balik judul-jurusan yang ramai itu.",
        ],
      },
      {
        heading: "Di balik judul 'AI engineer' yang banyak dipasang",
        paragraphs: [
          "Kalau dibedah, sebagian besar lowongan itu meminta kemampuan merangkai, bukan kemampuan meneliti. Perusahaan ingin orang yang bisa menyambungkan model bahasa yang sudah ada ke sistem internal mereka: chatbot yang bisa menjawab pertanyaan umum pelanggan, pipeline yang membaca formulir masuk dan mengekstrak data penting, atau agen yang mengirim ringkasan harian ke grup manajemen. Tugas-tugas itu dulu akan diserahkan ke vendor konsultasi dengan biaya puluhan juta per bulan; sekarang perusahaan menengah mencarinya sebagai posisi tetap dengan gaji yang masuk akal.",
          "Di sinilah realitas yang perlu dilihat jujur: judul 'AI engineer' hari ini mencakup spektrum yang sangat lebar, dari orang yang bisa memasang workflow n8n di laptop sampai orang yang bisa menyetel model open-source. Yang membedakan kandidat yang dilirik dari yang tidak biasanya bukan gelar, melainkan portofolio kecil yang menunjukkan 'saya pernah pasang sesuatu yang benar-benar dipakai'. Untuk konteks Indonesia, itu kabar baik: lebih banyak orang punya pintu masuk daripada yang dibayangkan.",
        ],
      },
      {
        heading: "Kenapa warung dan klinik pun ikut pasang lowongan",
        paragraphs: [
          "Alasan yang paling sering muncul di balik permintaan dari usaha non-teknologi: kompetisi dan biaya operasional. Pemilik usaha kecil melihat kompetitor mereka yang sudah menggunakan WhatsApp auto-reply pintar, pelayan chatbot di website, atau sistem rekap pesanan otomatis — dan merasa harus mengejar. Di saat yang sama, mereka sadar bahwa biaya untuk menambahkan karyawan administrasi baru terus naik, sementara pekerjaan yang sifatnya repetitif tidak memberikan nilai tambah bila dilakukan manusia.",
          "Pola yang muncul: banyak usaha kecil kita tidak punya departemen IT, jadi mereka mencari satu orang yang bisa menjadi 'tukang AI' internal — memasang otomasi, melatih karyawan menggunakan tool baru, memperbaiki saat ada yang rusak. Jabatan resminya bisa apa saja, dari 'AI engineer' sampai 'staf digitalisasi', tapi bentuk pekerjaannya mirip: menerjemahkan keluhan pemilik usaha soal proses bisnis ke solusi yang bisa dipasang AI. Untuk seseorang dengan kemampuan komunikasi yang baik dan kemauan belajar, ini peluang yang lebih dekat dari yang terlihat.",
        ],
      },
      {
        heading: "Apa yang sebenarnya perlu dikuasai",
        paragraphs: [
          "Kalau diturunkan ke kemampuan konkret, ada empat yang muncul konsisten. Pertama, familiar dengan satu atau dua model bahasa besar — cukup untuk tahu kapan harus pakai model besar yang mahal dan kapan model kecil lokal sudah cukup. Kedua, bisa merangkai workflow otomasi: n8n, Make, atau tools serupa. Ketiga, paham cara menyambungkan API: membaca dokumentasi, mengirim request, menangani error. Keempat, dan ini yang sering diremehkan, kemampuan mendengar: menggali dari pemilik usaha apa yang sebenarnya menghambat mereka, lalu menerjemahkannya ke solusi teknis.",
          "Tidak perlu jadi programmer ulung untuk mulai. Yang diminta pasar adalah kemampuan teknis yang cukup ditambah kemampuan memahami masalah nyata. Untuk pelajar, fresh graduate, atau pekerja yang ingin pindah jalur, itu kombinasi yang bisa dibangun pelan-pelan — dan justru kombinasi yang banyak dimiliki orang Indonesia yang sudah terbiasa menerjemahkan bahasa teknis ke bahasa keseharian.",
        ],
      },
      {
        heading: "Realita yang perlu dijaga",
        paragraphs: [
          "Di tengah optimisme itu, ada sisi yang perlu dijaga. Pertama, jangan sampai title 'AI engineer' menjadi syarat yang berlebihan untuk pekerjaan yang sebenarnya bisa dipelajari staf non-teknis dalam beberapa minggu. Kedua, jam kerja yang tidak masuk akal — banyak lowongan AI engineer datang dengan ekspektasi 'bisa bekerja kapan saja karena AI tidak tidur' — adalah red flag yang harus diwaspadai. Ketiga, gaji yang ditawarkan tidak selalu sefantastis judulnya: banyak yang memasang rentang yang terlalu lebar, dan kandidat pemula sering ditawarkan di ujung bawah.",
          "Nasihat editorial: kalau kamu sedang melamar atau menerima tawaran, lihat substansinya, bukan judulnya. Apakah pekerjaan itu benar-benar memungkinkan kamu belajar? Apakah ada ruang untuk bertanya dan gagal? Apakah gajinya mencerminkan keterampilan yang diminta? Dan kalau kamu seorang perekrut, pertimbangkan apakah posisi yang kamu buka benar-benar butuh 'AI engineer', atau cukup dicari orang yang mau belajar — dengan titel yang lebih jujur. Kedua sisi pasar perlu saling menjaga, kalau tidak judul besar akan cepat kehilangan makna.",
        ],
      },
    ],
  },
];

export function getArtikel(slug: string) {
  return berita.find((b) => b.slug === slug);
}
