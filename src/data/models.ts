import { Review } from "@/lib/types";

export const models: Review[] = [
  {
    slug: "claude-opus-4-5",
    name: "Claude Opus 4.5",
    tagline: "Raja coding dan agentic task — andalan para power user",
    tags: ["Anthropic", "Proprietary", "Coding", "Agent"],
    score: 9.4,
    scores: [
      { label: "Penalaran", value: 9.5 },
      { label: "Coding", value: 9.7 },
      { label: "Bahasa Indonesia", value: 9.0 },
      { label: "Kecepatan", value: 8.5 },
      { label: "Harga/Performa", value: 8.5 },
    ],
    summary:
      "Model flagship Anthropic yang menjadi standar emas untuk tugas coding dan agentic. Kemampuannya mengerjakan tugas panjang multi-langkah — refactor besar, debugging lintas file, riset mendalam — masih sulit ditandingi.",
    pros: [
      "Kemampuan coding dan tool-use terbaik di kelasnya",
      "Sangat andal untuk tugas agentic panjang tanpa 'hilang fokus'",
      "Bahasa Indonesia natural, jarang terasa seperti terjemahan",
      "Jarang berhalusinasi percaya diri — lebih sering jujur saat tidak tahu",
    ],
    cons: [
      "Harga premium — terasa untuk pemakaian volume tinggi",
      "Akses API butuh kartu kredit/pembayaran internasional",
      "Kadang terlalu berhati-hati pada permintaan yang ambigu",
    ],
    verdict:
      "Kalau pekerjaanmu serius soal kode dan otomasi agent, Opus adalah investasi yang sepadan. Pasangkan dengan Claude Code dan kamu punya rekan kerja digital sungguhan.",
    body: [
      "Dalam pemakaian harian saya dengan Claude Code, Opus 4.5 adalah model yang paling bisa 'dilepas' mengerjakan tugas panjang: beri instruksi besar, dan ia merencanakan, mengeksekusi, mengetes, lalu memperbaiki sendiri kesalahannya. Pola kerja agentic seperti ini adalah pembeda utama generasi model saat ini, dan Opus memimpinnya.",
      "Untuk bahasa Indonesia, hasilnya termasuk yang terbaik di antara model frontier: gaya tulisannya luwes, paham konteks formal-informal (penting untuk dunia birokrasi!), dan jarang menghasilkan kalimat kaku khas mesin terjemahan.",
      "Kelemahan utamanya satu: harga. Untuk eksperimen ringan, model kelas menengah seperti Sonnet sering sudah cukup. Strategi saya: model murah untuk draft dan tugas rutin, Opus untuk tugas yang benar-benar sulit. Pola 'model routing' seperti ini akan makin umum.",
    ],
    link: "https://www.anthropic.com",
    linkLabel: "Situs Resmi",
    date: "2026-06-02",
    featured: true,
  },
  {
    slug: "gpt-5",
    name: "GPT-5",
    tagline: "Generalis terkuat dengan ekosistem terluas",
    tags: ["OpenAI", "Proprietary", "Multimodal"],
    score: 9.2,
    scores: [
      { label: "Penalaran", value: 9.5 },
      { label: "Coding", value: 9.2 },
      { label: "Bahasa Indonesia", value: 9.0 },
      { label: "Kecepatan", value: 8.5 },
      { label: "Harga/Performa", value: 8.5 },
    ],
    summary:
      "Model andalan OpenAI dengan sistem routing pintar yang memilih sendiri kapan perlu 'berpikir keras'. Ekosistemnya — ChatGPT, API, integrasi pihak ketiga — tetap yang paling luas di industri.",
    pros: [
      "Penalaran kelas atas dengan mode thinking yang efisien",
      "Ekosistem dan integrasi paling matang (ChatGPT, plugin, API)",
      "Multimodal lengkap: teks, gambar, suara",
      "Paling banyak dipakai orang Indonesia — komunitas dan tutorial melimpah",
    ],
    cons: [
      "Perilaku routing kadang tidak konsisten antar permintaan serupa",
      "Untuk coding agentic panjang masih sedikit di bawah pesaing terdekat",
      "Privasi data perlu dicermati untuk pemakaian organisasi",
    ],
    verdict:
      "Pilihan default yang aman untuk hampir semua orang. Untuk pengguna umum Indonesia, ChatGPT dengan GPT-5 tetap pintu masuk AI paling mudah.",
    body: [
      "GPT-5 menandai pergeseran penting: alih-alih memilih model secara manual, sistemnya memutuskan sendiri kapan menjawab cepat dan kapan perlu penalaran mendalam. Untuk pengguna awam ini penyederhanaan besar; untuk power user, kadang terasa kurang bisa dikontrol.",
      "Kekuatan sesungguhnya OpenAI ada di ekosistem. Hampir semua tool, tutorial, dan integrasi mendukung format API-nya — bahkan pesaingnya ramai-ramai membuat API yang 'kompatibel OpenAI'. Untuk pemula di Indonesia, melimpahnya konten belajar berbahasa Indonesia seputar ChatGPT adalah nilai plus nyata.",
      "Dalam pengujian saya untuk tugas berbahasa Indonesia — surat resmi, ringkasan peraturan, draft kajian — GPT-5 sangat kompeten, meski sesekali gaya bahasanya lebih kaku dibanding pesaing. Untuk coding, ia kuat di one-shot generation; untuk sesi agentic panjang, saya pribadi masih lebih memercayai Claude.",
    ],
    link: "https://openai.com",
    linkLabel: "Situs Resmi",
    date: "2026-05-28",
    featured: true,
  },
  {
    slug: "gemini-3",
    name: "Gemini 3",
    tagline: "Multimodal monster dengan context window raksasa",
    tags: ["Google", "Proprietary", "Multimodal", "Long Context"],
    score: 9.1,
    scores: [
      { label: "Penalaran", value: 9.3 },
      { label: "Coding", value: 9.0 },
      { label: "Bahasa Indonesia", value: 9.0 },
      { label: "Kecepatan", value: 9.0 },
      { label: "Harga/Performa", value: 9.0 },
    ],
    summary:
      "Lompatan besar Google: penalaran frontier, kemampuan multimodal (video, audio, gambar) terbaik, dan context window jutaan token. Integrasinya dengan ekosistem Google membuatnya sulit diabaikan.",
    pros: [
      "Context window raksasa — muat ratusan halaman dokumen sekaligus",
      "Pemahaman video dan audio terbaik di kelasnya",
      "Tier gratis paling murah hati — penting untuk pelajar Indonesia",
      "Terintegrasi ke Workspace (Docs, Gmail) yang dipakai jutaan orang",
    ],
    cons: [
      "Kualitas jawaban kadang fluktuatif antar versi dan endpoint",
      "Ekosistem tooling pihak ketiga belum serapi OpenAI/Anthropic",
      "Dokumentasi API-nya berlapis-lapis (AI Studio vs Vertex) dan membingungkan",
    ],
    verdict:
      "Nilai terbaik per rupiah saat ini, apalagi lewat tier gratisnya. Untuk analisis dokumen panjang dan multimodal, Gemini adalah senjata utama.",
    body: [
      "Gemini 3 adalah momen Google benar-benar kembali ke barisan depan. Dalam pengujian penalaran dan matematika ia bersaing ketat di puncak, dan untuk tugas multimodal — memahami isi video, membaca diagram, menganalisis audio — ia praktis tanpa lawan sepadan.",
      "Fitur paling berguna untuk pekerjaan dokumen-berat khas birokrasi: context window jutaan token. Unggah ratusan halaman peraturan atau laporan, dan tanyakan apa pun lintas dokumen tanpa perlu pipeline RAG. Untuk banyak kasus, ini mengubah cara kerja secara langsung.",
      "Tier gratis Google yang murah hati layak disorot khusus: untuk pelajar, mahasiswa, dan developer Indonesia yang terkendala pembayaran internasional, Gemini sering jadi satu-satunya akses realistis ke model frontier. Itu sebabnya saya selalu menyebutnya dalam rekomendasi untuk pemula.",
    ],
    link: "https://deepmind.google",
    linkLabel: "Situs Resmi",
    date: "2026-05-20",
    featured: true,
  },
  {
    slug: "deepseek-v3",
    name: "DeepSeek V3.x / R1",
    tagline: "Open-weight disruptor: performa frontier, harga kaki lima",
    tags: ["DeepSeek", "Open Weight", "Reasoning", "Murah"],
    score: 8.8,
    scores: [
      { label: "Penalaran", value: 9.0 },
      { label: "Coding", value: 8.8 },
      { label: "Bahasa Indonesia", value: 8.0 },
      { label: "Kecepatan", value: 8.0 },
      { label: "Harga/Performa", value: 10 },
    ],
    summary:
      "Model dari Tiongkok yang mengguncang industri: kemampuan mendekati model frontier dengan harga API sepersekian, dan bobotnya terbuka untuk di-host sendiri. Pilihan rasional untuk volume besar.",
    pros: [
      "Rasio harga/performa terbaik di industri, tanpa kompetitor dekat",
      "Open weight — bisa di-host sendiri untuk kedaulatan data penuh",
      "Mode reasoning (R1) yang transparan memperlihatkan proses berpikirnya",
    ],
    cons: [
      "Bahasa Indonesia bagus tapi belum sehalus model frontier Barat",
      "Pertimbangan kebijakan data jika memakai API resminya",
      "Butuh hardware serius untuk self-host versi penuhnya",
    ],
    verdict:
      "Untuk workload volume tinggi — klasifikasi, ekstraksi, ringkasan massal — DeepSeek adalah pilihan ekonomis yang sulit ditolak. Self-host-nya menjadikannya kandidat serius untuk instansi.",
    body: [
      "DeepSeek membuktikan satu hal penting: model kelas frontier tidak harus mahal. Harga API-nya yang sepersekian pesaing mengubah kalkulasi banyak proyek — pipeline yang tadinya tidak masuk akal secara biaya tiba-tiba jadi feasible.",
      "Sifat open weight-nya membuka opsi yang sangat relevan untuk Indonesia: instansi atau perusahaan bisa menjalankan model sepenuhnya di server sendiri. Untuk data yang tidak boleh keluar (dan di pemerintahan, itu hampir semua data), ini bukan fitur — ini prasyarat.",
      "Catatan penggunaan: untuk output berbahasa Indonesia yang halus dan bernuansa, model frontier Barat masih unggul tipis. Strategi yang saya pakai: DeepSeek untuk pemrosesan massal di belakang layar, model frontier untuk teks yang dibaca manusia.",
    ],
    link: "https://www.deepseek.com",
    linkLabel: "Situs Resmi",
    date: "2026-05-12",
  },
  {
    slug: "qwen3",
    name: "Qwen 3",
    tagline: "Keluarga model open terlengkap — dari laptop sampai data center",
    tags: ["Alibaba", "Open Weight", "Multilingual", "Lokal"],
    score: 8.7,
    scores: [
      { label: "Penalaran", value: 8.8 },
      { label: "Coding", value: 8.8 },
      { label: "Bahasa Indonesia", value: 8.5 },
      { label: "Kecepatan", value: 8.5 },
      { label: "Harga/Performa", value: 9.5 },
    ],
    summary:
      "Keluarga model open-weight Alibaba dengan rentang ukuran terlengkap, dukungan multibahasa kuat (termasuk Indonesia), dan varian coding yang sangat kompeten. Favorit komunitas self-host.",
    pros: [
      "Pilihan ukuran lengkap: dari yang muat di laptop sampai kelas server",
      "Dukungan bahasa Indonesia termasuk yang terbaik di kalangan model open",
      "Varian Qwen Coder sangat kuat untuk asisten coding lokal",
      "Lisensi permisif untuk sebagian besar varian",
    ],
    cons: [
      "Dokumentasi dan penamaan varian kadang membingungkan",
      "Model kecilnya tetap punya batas jelas untuk penalaran kompleks",
    ],
    verdict:
      "Kalau kamu cuma boleh pilih satu keluarga model untuk dijalankan lokal via Ollama, pilih Qwen. Kemampuan bahasa Indonesianya membuat perbedaan nyata.",
    body: [
      "Qwen adalah keluarga model yang paling sering saya jalankan lewat Ollama. Alasannya sederhana: di ukuran yang sama, kemampuan bahasa Indonesianya konsisten di atas rata-rata model open lain — dan untuk use case lokal di Indonesia, itu faktor penentu.",
      "Rentang ukurannya juga strategi yang cerdas: ada varian kecil untuk perangkat terbatas, kelas menengah yang jadi sweet spot laptop modern, sampai model besar ber-arsitektur MoE untuk server. Satu keluarga model bisa menemani dari tahap prototipe sampai produksi.",
      "Varian Qwen Coder layak disebut khusus: dipasangkan dengan editor seperti Cline atau ekstensi lokal lain, ia memberi pengalaman 'Copilot pribadi' tanpa biaya langganan — pilihan menarik untuk pelajar dan developer dengan budget terbatas.",
    ],
    link: "https://qwen.ai",
    linkLabel: "Situs Resmi",
    date: "2026-04-30",
  },
  {
    slug: "llama-4",
    name: "Llama 4",
    tagline: "Fondasi ekosistem open dari Meta — standar de facto industri",
    tags: ["Meta", "Open Weight", "Multimodal"],
    score: 8.3,
    scores: [
      { label: "Penalaran", value: 8.3 },
      { label: "Coding", value: 8.0 },
      { label: "Bahasa Indonesia", value: 8.0 },
      { label: "Kecepatan", value: 8.5 },
      { label: "Harga/Performa", value: 9.0 },
    ],
    summary:
      "Generasi terbaru keluarga Llama dengan arsitektur MoE dan kemampuan multimodal. Bukan yang tertajam di setiap benchmark, tapi ekosistem dan dukungannya tetap yang paling luas di dunia open model.",
    pros: [
      "Ekosistem fine-tuning dan tooling paling matang",
      "Didukung praktis semua platform inference sejak hari pertama",
      "Konteks panjang dan multimodal di varian tertentu",
    ],
    cons: [
      "Di banyak tugas sudah disalip pesaing open dari Tiongkok",
      "Varian terbaik terlalu besar untuk hardware konsumen",
      "Lisensinya 'open' dengan catatan — baca syaratnya",
    ],
    verdict:
      "Tetap penting sebagai fondasi ekosistem, tapi untuk pemakaian baru saya lebih sering merekomendasikan Qwen atau DeepSeek. Pantau terus — Meta punya sumber daya untuk membalikkan keadaan.",
    body: [
      "Sulit membicarakan model open tanpa Llama — keluarga model inilah yang memulai gelombang LLM open-weight dan membangun hampir seluruh ekosistem tooling yang kita pakai sekarang, dari llama.cpp sampai format GGUF yang dipakai Ollama.",
      "Generasi keempatnya membawa arsitektur mixture-of-experts dan multimodal, tapi penerimaan komunitas lebih dingin dibanding generasi sebelumnya: di banyak benchmark dan uji nyata, pesaing seperti Qwen dan DeepSeek kini sering unggul di kelas ukuran yang sama.",
      "Meski begitu, dukungan ekosistemnya tetap tak tertandingi — hampir semua tutorial, alat fine-tuning, dan platform inference menjadikan Llama sebagai acuan pertama. Untuk belajar 'cara kerja' dunia open model, Llama tetap pintu masuk yang baik.",
    ],
    link: "https://www.llama.com",
    linkLabel: "Situs Resmi",
    date: "2026-04-18",
  },
];

export function getModel(slug: string) {
  return models.find((m) => m.slug === slug);
}
