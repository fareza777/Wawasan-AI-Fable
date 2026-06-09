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
          "Jalur yang saya sarankan: (1) pasang Ollama dan rasakan LLM lokal, (2) coba n8n untuk otomasi visual pertamamu, (3) kalau sudah nyaman, jajal OpenClaw atau agen coding. Semua tahap itu sudah saya ulas satu per satu di rubrik Review Repo dan Review Stack di situs ini.",
        ],
      },
    ],
  },
  {
    slug: "memilih-llm-untuk-bahasa-indonesia",
    title: "Model LLM Mana yang Paling Jago Bahasa Indonesia? Catatan dari Pengujian Saya",
    excerpt:
      "Tidak semua model frontier setara dalam bahasa Indonesia. Ringkasan pengamatan dari pemakaian harian: mana yang luwes, mana yang kaku, dan mana yang murah tapi memadai.",
    category: "Panduan",
    date: "2026-05-26",
    readingTime: "5 menit",
    body: [
      {
        paragraphs: [
          "Benchmark internasional jarang mengukur hal yang penting bagi kita: kualitas bahasa Indonesia. Padahal perbedaannya nyata — ada model yang menulis seperti penutur asli, ada yang terasa seperti hasil terjemahan mesin tahun 2015.",
          "Dari pemakaian harian saya untuk dokumen kerja, surat resmi, ringkasan peraturan, dan tulisan santai, polanya cukup konsisten. Model frontier komersial (Claude, GPT, Gemini) berada di level tertinggi: luwes, paham register formal-informal, dan jarang salah idiom. Perbedaan di antara ketiganya lebih soal selera gaya daripada kemampuan.",
        ],
      },
      {
        heading: "Kelas open model: kejutan dari timur",
        paragraphs: [
          "Di kalangan model open-weight, Qwen secara konsisten paling nyaman dipakai berbahasa Indonesia — tidak mengejutkan mengingat fokus multibahasa Alibaba di Asia. DeepSeek menyusul: sangat kompeten secara substansi, sesekali kaku dalam gaya.",
          "Untuk model lokal kecil yang jalan di laptop, ekspektasinya harus realistis: ringkasan, klasifikasi, dan draft kasar sudah baik; menulis final yang halus sebaiknya tetap ke model besar — atau diedit manusia.",
        ],
      },
      {
        heading: "Rekomendasi praktis",
        paragraphs: [
          "Untuk tulisan yang dibaca publik: model frontier, lalu edit manusia. Untuk pemrosesan internal bervolume besar: DeepSeek atau Qwen via API yang murah. Untuk data sensitif: Qwen lokal via Ollama. Skor lengkap tiap model ada di rubrik Review Model di situs ini.",
        ],
      },
    ],
  },
  {
    slug: "asn-dan-ai-otomasi-birokrasi",
    title: "ASN dan AI: Otomasi Kecil-kecilan yang Dampaknya Tidak Kecil",
    excerpt:
      "Pengalaman pribadi seorang ASN mengotomasi pekerjaan administratif dengan AI — apa yang berhasil, apa yang harus hati-hati, dan kenapa birokrasi justru lahan paling subur untuk otomasi.",
    category: "Opini",
    date: "2026-05-15",
    readingTime: "7 menit",
    body: [
      {
        paragraphs: [
          "Sebagai ASN, saya berani bilang: birokrasi adalah salah satu lahan paling subur untuk otomasi AI. Pekerjaan kami penuh pola berulang — rekap, format laporan, surat-menyurat, telaah dokumen — persis jenis pekerjaan yang paling cepat terbantu oleh LLM dan agen.",
          "Tapi justru karena bekerja di pemerintahan, saya juga paham batasannya: data tidak boleh sembarang keluar, kebijakan penggunaan teknologi harus diikuti, dan hasil AI tetap tanggung jawab manusia yang menandatanganinya.",
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
          "Ketiga: bawa serta rekan kerja. Otomasi yang dibangun sendirian akan mati saat kita pindah tugas. Dokumentasikan, ajari, dan jadikan kemampuan tim — itu bedanya proyek pribadi dan perubahan cara kerja.",
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
          "Untuk bahasa Indonesia, rekomendasi utama saya keluarga Qwen — kualitas bahasanya paling konsisten di kelas open model. Alternatifnya Gemma dan Llama.",
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
    title: "Kenapa Indonesia Butuh Media Review AI Sendiri (dan Kenapa Saya Membuat Wawasan AI)",
    excerpt:
      "Konten AI berbahasa Indonesia masih didominasi berita terjemahan dan hype. Yang langka: review mendalam dari orang yang benar-benar memakai tool-nya. Wawasan AI hadir mengisi celah itu.",
    category: "Editorial",
    date: "2026-04-20",
    readingTime: "4 menit",
    body: [
      {
        paragraphs: [
          "Coba cari di Google: 'review OpenClaw bahasa Indonesia' atau 'perbandingan Claude Code vs Cursor untuk developer Indonesia'. Hasilnya nyaris kosong — paling banter berita terjemahan atau video singkat yang menyentuh permukaan. Padahal pertanyaannya nyata: tool mana yang layak dipakai? Model mana yang jago bahasa Indonesia? Mana yang masuk akal untuk kantong dan koneksi internet kita?",
          "Konten AI global melimpah, tapi konteks lokal kita berbeda: daya beli berbeda (langganan $20 itu signifikan), kendala pembayaran internasional nyata, kebutuhan bahasa Indonesia spesifik, dan untuk sektor publik — aturan data yang ketat. Review yang baik untuk pembaca Indonesia harus memperhitungkan semua itu.",
        ],
      },
      {
        heading: "Apa yang Wawasan AI tawarkan",
        paragraphs: [
          "Tiga rubrik utama: Review Repo GitHub (proyek open-source AI yang layak dicoba, dari OpenClaw sampai DeerFlow), Review Model LLM (dengan skor khusus kemampuan bahasa Indonesia — yang tidak akan kamu temukan di benchmark global), dan Review Stack (tool coding dan otomasi, dinilai dari pemakaian nyata).",
          "Prinsipnya sederhana: hanya mengulas yang sudah saya pakai sendiri, jujur soal kekurangan, dan selalu menjawab pertanyaan 'untuk siapa tool ini masuk akal?'. Tidak ada skor sempurna gratisan — skor di situs ini adalah opini editorial dari pemakaian langsung.",
          "Wawasan AI baru mulai. Kalau kamu punya repo, model, atau tool yang ingin diulas — atau tidak setuju dengan skor saya — sampaikan. Justru perdebatan seperti itulah yang komunitas AI Indonesia butuhkan.",
        ],
      },
    ],
  },
];

export function getArtikel(slug: string) {
  return berita.find((b) => b.slug === slug);
}
