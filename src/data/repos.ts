import { Review } from "@/lib/types";

export const repos: Review[] = [
  {
    slug: "openclaw",
    name: "OpenClaw",
    tagline: "Asisten AI personal open-source yang hidup di WhatsApp & Telegram-mu",
    tags: ["AI Agent", "Asisten Personal", "TypeScript", "Self-hosted"],
    score: 9.2,
    scores: [
      { label: "Kemudahan Setup", value: 8.5 },
      { label: "Fitur & Ekstensibilitas", value: 9.5 },
      { label: "Komunitas & Momentum", value: 9.5 },
      { label: "Dokumentasi", value: 8.5 },
      { label: "Kesiapan Produksi", value: 8.0 },
    ],
    summary:
      "OpenClaw adalah salah satu proyek open-source paling viral di dunia AI agent: asisten personal yang berjalan di mesinmu sendiri dan bisa diajak ngobrol lewat WhatsApp, Telegram, hingga Discord. Bukan sekadar chatbot — dia bisa mengeksekusi tugas, mengelola file, menjalankan skrip, dan punya memori jangka panjang.",
    pros: [
      "Konsep 'asisten yang benar-benar milikmu' — data dan kontrol penuh di tangan sendiri",
      "Integrasi kanal chat sehari-hari (WhatsApp, Telegram) yang terasa natural",
      "Ekosistem skill/plugin yang berkembang sangat cepat",
      "Komunitas besar dan aktif, update hampir setiap hari",
    ],
    cons: [
      "Perlu mesin yang selalu menyala (server/VPS/mini PC) untuk pengalaman maksimal",
      "Karena agent punya akses luas ke sistem, aspek keamanan harus dipikirkan serius",
      "Perkembangan terlalu cepat — breaking change kadang terjadi",
    ],
    verdict:
      "Wajib dicoba bagi siapa pun yang penasaran dengan masa depan asisten AI personal. Ini bukan demo — ini agent yang benar-benar bisa dipakai harian. Mulai dari VPS murah atau mini PC bekas pun jalan.",
    body: [
      "Kalau kamu mengikuti dunia AI agent dalam setahun terakhir, hampir mustahil tidak mendengar nama OpenClaw. Proyek ini meledak karena menawarkan sesuatu yang selama ini hanya jadi wacana: asisten AI personal yang berjalan di infrastruktur milikmu sendiri, terhubung ke aplikasi chat yang kamu pakai setiap hari, dan benar-benar bisa mengerjakan sesuatu — bukan cuma menjawab pertanyaan.",
      "Saya sendiri sudah otak-atik OpenClaw di server pribadi. Pengalaman pertamanya cukup magis: kirim pesan WhatsApp 'tolong rangkum file laporan di folder kerja', dan beberapa detik kemudian rangkumannya masuk ke chat. Agent-nya punya akses ke shell, file system, browser, dan bisa diberi 'skill' tambahan sesuai kebutuhan — dari sekadar pengingat sampai otomasi alur kerja yang kompleks.",
      "Arsitekturnya menarik untuk dipelajari: ada gateway yang menjembatani kanal chat, lapisan agent yang mengatur konteks dan memori, serta sistem skill yang modular. Kamu bebas memilih model di belakangnya — bisa model API komersial seperti Claude, atau model lokal lewat Ollama bagi yang peduli privasi penuh.",
      "Catatan penting: karena agent ini punya akses luas ke sistem, jangan pasang sembarangan di mesin berisi data sensitif. Pakai user terpisah, batasi izin, dan baca dokumentasi keamanannya. Untuk konteks Indonesia — di mana banyak dari kita hidup di WhatsApp — OpenClaw terasa seperti dibuat khusus untuk kebiasaan kita. Ini proyek yang akan sering saya bahas di Wawasan AI.",
    ],
    link: "https://github.com/openclaw/openclaw",
    linkLabel: "Lihat di GitHub",
    date: "2026-06-01",
    featured: true,
  },
  {
    slug: "hermes-agent",
    name: "Hermes",
    tagline: "Kerangka agent otomasi yang ringan dan bisa di-hack sesuka hati",
    tags: ["AI Agent", "Otomasi", "Open Source"],
    score: 8.4,
    scores: [
      { label: "Kemudahan Setup", value: 8.0 },
      { label: "Fitur & Ekstensibilitas", value: 8.5 },
      { label: "Komunitas & Momentum", value: 8.0 },
      { label: "Dokumentasi", value: 7.5 },
      { label: "Kesiapan Produksi", value: 8.0 },
    ],
    summary:
      "Hermes mengambil pendekatan berbeda dari framework agent raksasa: minimalis, transparan, dan mudah dimodifikasi. Cocok untuk yang ingin memahami cara kerja agent dari dalam, bukan sekadar memakai kotak hitam.",
    pros: [
      "Kode ringkas dan mudah dibaca — sangat bagus untuk belajar arsitektur agent",
      "Loop agent (reasoning → tool call → observasi) terlihat jelas, gampang di-debug",
      "Fleksibel dipasangkan dengan berbagai model dan tool",
    ],
    cons: [
      "Ekosistem plugin belum sebesar pemain besar",
      "Dokumentasi masih mengandalkan eksplorasi kode langsung",
      "Perlu pemahaman teknis lebih dalam dibanding solusi siap pakai",
    ],
    verdict:
      "Pilihan tepat untuk developer yang ingin mengerti 'jeroan' AI agent. Kalau OpenClaw adalah mobil siap pakai, Hermes adalah kit yang menyenangkan untuk dirakit dan dimodifikasi.",
    body: [
      "Hermes adalah salah satu proyek agent yang saya pakai untuk eksperimen otomasi. Daya tariknya justru pada kesederhanaannya: tidak ada lapisan abstraksi berlebihan, sehingga alur kerja agent — dari menerima instruksi, memilih tool, sampai mengevaluasi hasil — bisa diikuti baris per baris.",
      "Untuk kebutuhan otomasi tugas-tugas administratif (yang sangat relevan dengan dunia kerja saya sebagai ASN), pendekatan ringan seperti ini sering kali lebih praktis. Saya pernah merangkai Hermes untuk membaca dokumen, mengekstrak data, lalu mengisinya ke format laporan — alur sederhana yang kalau dikerjakan manual memakan waktu berjam-jam.",
      "Kelemahan terbesarnya adalah dokumentasi dan ekosistem yang belum sematang framework besar. Tapi justru di situ nilainya sebagai bahan belajar: kamu dipaksa memahami konsep dasar seperti tool calling, context window management, dan agentic loop — fondasi yang berlaku di framework mana pun.",
      "Rekomendasi saya: pakai Hermes sebagai 'sekolah' arsitektur agent. Setelah paham polanya, kamu akan jauh lebih percaya diri mengevaluasi framework lain — dan tahu kapan sebuah abstraksi membantu atau justru menghalangi.",
    ],
    date: "2026-05-25",
  },
  {
    slug: "deer-flow",
    name: "DeerFlow",
    tagline: "Framework deep research open-source dari ByteDance",
    tags: ["Deep Research", "Multi-Agent", "Python", "LangGraph"],
    score: 8.7,
    scores: [
      { label: "Kemudahan Setup", value: 8.0 },
      { label: "Fitur & Ekstensibilitas", value: 9.0 },
      { label: "Komunitas & Momentum", value: 8.5 },
      { label: "Dokumentasi", value: 8.5 },
      { label: "Kesiapan Produksi", value: 8.5 },
    ],
    summary:
      "DeerFlow (Deep Exploration and Efficient Research Flow) adalah jawaban open-source untuk fitur 'Deep Research' ala produk komersial. Sistem multi-agent yang bisa merencanakan riset, mencari sumber, dan menyusun laporan lengkap — semuanya bisa di-self-host.",
    pros: [
      "Hasil riset terstruktur dengan kualitas mengejutkan untuk proyek open-source",
      "Arsitektur multi-agent (planner, researcher, coder, reporter) yang rapi di atas LangGraph",
      "Bisa dikombinasikan dengan berbagai mesin pencari dan model LLM",
      "Output bisa berupa laporan, bahkan podcast dan presentasi",
    ],
    cons: [
      "Konsumsi token cukup besar — siapkan budget API atau model lokal yang kuat",
      "Setup awal butuh beberapa konfigurasi (API pencarian, model, dsb.)",
      "Bahasa Indonesia perlu sedikit penyesuaian prompt untuk hasil maksimal",
    ],
    verdict:
      "Kalau pekerjaanmu melibatkan riset, ringkasan kebijakan, atau penyusunan laporan — DeerFlow bisa menghemat waktu secara dramatis. Salah satu repo paling berguna yang pernah saya coba.",
    body: [
      "Deep research adalah salah satu kemampuan AI paling berguna untuk pekerja kantoran dan analis: beri satu pertanyaan, dan sistem akan mencari, membaca, memverifikasi, lalu menyusun laporan utuh. DeerFlow dari ByteDance membawa kemampuan itu ke dunia open-source.",
      "Yang membuat DeerFlow menonjol adalah arsitekturnya. Dibangun di atas LangGraph, ia memecah riset menjadi peran-peran agent: planner menyusun rencana riset, researcher mengumpulkan dan membaca sumber, coder menangani analisis data bila perlu, dan reporter merangkai semuanya menjadi laporan akhir. Pola 'pembagian kerja' ini terbukti jauh lebih andal daripada satu agent yang mengerjakan semuanya.",
      "Dalam percobaan saya, DeerFlow sanggup menghasilkan laporan riset belasan halaman dengan struktur yang layak edit-tipis-lalu-pakai. Untuk konteks pemerintahan dan kebijakan publik di Indonesia, pola seperti ini sangat menjanjikan: bayangkan telaah staf atau kajian singkat yang draft awalnya disusun agent dalam hitungan menit.",
      "Biaya token adalah hal yang perlu diwaspadai — riset mendalam berarti banyak pemanggilan model. Solusinya: pakai model yang lebih hemat untuk peran researcher dan model kuat hanya untuk reporter. Fleksibilitas konfigurasi seperti ini sudah disediakan DeerFlow sejak awal.",
    ],
    link: "https://github.com/bytedance/deer-flow",
    linkLabel: "Lihat di GitHub",
    date: "2026-05-18",
    featured: true,
  },
  {
    slug: "n8n",
    name: "n8n",
    tagline: "Otomasi workflow visual dengan kekuatan AI agent di dalamnya",
    tags: ["Otomasi", "Workflow", "Low-code", "Self-hosted"],
    score: 9.0,
    scores: [
      { label: "Kemudahan Setup", value: 9.0 },
      { label: "Fitur & Ekstensibilitas", value: 9.5 },
      { label: "Komunitas & Momentum", value: 9.5 },
      { label: "Dokumentasi", value: 9.0 },
      { label: "Kesiapan Produksi", value: 8.5 },
    ],
    summary:
      "n8n adalah platform otomasi workflow open-source yang kini menjelma menjadi salah satu cara termudah membangun AI agent untuk kebutuhan nyata. Ratusan integrasi siap pakai, editor visual, dan node AI yang makin matang.",
    pros: [
      "Editor visual yang membuat otomasi kompleks bisa dipahami siapa saja",
      "400+ integrasi: Google Sheets, Telegram, WhatsApp API, database, dll.",
      "Node AI Agent bawaan — RAG, tool calling, memory tanpa koding",
      "Bisa self-host gratis, cocok untuk instansi yang datanya tidak boleh keluar",
    ],
    cons: [
      "Lisensi 'fair-code', bukan open-source murni — perhatikan jika dipakai komersial",
      "Workflow sangat kompleks bisa jadi sulit dirawat (spaghetti visual)",
      "Debugging error di tengah workflow panjang kadang melelahkan",
    ],
    verdict:
      "Titik masuk terbaik ke dunia otomasi + AI bagi non-programmer maupun developer. Untuk UMKM dan instansi pemerintah di Indonesia, ini gerbang otomasi yang paling realistis.",
    body: [
      "Dari semua tool otomasi yang pernah saya coba, n8n adalah yang paling sering saya rekomendasikan ke teman-teman non-programmer. Konsepnya sederhana: susun kotak-kotak (node) di kanvas, hubungkan dengan garis, dan jadilah workflow — dari hal sepele seperti 'kirim notifikasi Telegram saat ada email masuk' sampai pipeline AI yang membaca dokumen dan mengisi database.",
      "Perkembangan terbesarnya ada di sisi AI. Node AI Agent di n8n kini mendukung tool calling, memori percakapan, dan RAG (retrieval-augmented generation) langsung dari editor visual. Artinya, membangun chatbot internal yang bisa menjawab berdasarkan dokumen organisasi tidak lagi butuh tim engineering — cukup satu orang yang mau belajar.",
      "Untuk konteks Indonesia, kemampuan self-host adalah nilai jual utama. Banyak instansi dan perusahaan yang tidak bisa mengirim data ke layanan cloud asing; dengan n8n, seluruh workflow dan data tetap di server sendiri, sementara pemanggilan LLM bisa diatur seperlunya — atau sepenuhnya lokal dengan Ollama.",
      "Saran praktis dari pengalaman saya: mulai dari workflow kecil yang menyelesaikan satu masalah nyata (misalnya rekap laporan harian otomatis), lalu berkembang. Jangan langsung membangun 'super-agent' — workflow raksasa yang menyentuh semua sistem justru paling cepat rusak dan paling sulit dirawat.",
    ],
    link: "https://github.com/n8n-io/n8n",
    linkLabel: "Lihat di GitHub",
    date: "2026-05-10",
    featured: true,
  },
  {
    slug: "dify",
    name: "Dify",
    tagline: "Platform pengembangan aplikasi LLM lengkap: RAG, agent, dan observability",
    tags: ["LLMOps", "RAG", "Low-code", "Self-hosted"],
    score: 8.6,
    scores: [
      { label: "Kemudahan Setup", value: 8.5 },
      { label: "Fitur & Ekstensibilitas", value: 9.0 },
      { label: "Komunitas & Momentum", value: 9.0 },
      { label: "Dokumentasi", value: 8.0 },
      { label: "Kesiapan Produksi", value: 8.5 },
    ],
    summary:
      "Dify menggabungkan pipeline RAG, orkestrasi agent, manajemen prompt, dan monitoring dalam satu platform self-hosted. Salah satu repo dengan pertumbuhan bintang tercepat di GitHub, dan memang pantas.",
    pros: [
      "Satu platform untuk knowledge base, chatbot, agent, dan workflow",
      "Pipeline RAG bawaan yang solid: chunking, embedding, reranking",
      "UI manajemen prompt dan versi yang memudahkan iterasi tim",
      "Deploy via Docker Compose dalam hitungan menit",
    ],
    cons: [
      "Fitur sangat banyak — kurva belajar awal bisa terasa membingungkan",
      "Kustomisasi sangat dalam kadang tetap butuh turun ke kode",
      "Butuh resource server lumayan untuk semua komponennya",
    ],
    verdict:
      "Pilihan terbaik untuk organisasi yang ingin punya 'ChatGPT internal' berbasis dokumen sendiri tanpa membangun semuanya dari nol.",
    body: [
      "Kalau tugasmu adalah menghadirkan chatbot internal berbasis dokumen organisasi — peraturan, SOP, arsip surat — dalam waktu singkat, Dify kemungkinan besar adalah jalan tercepatnya. Unggah dokumen, atur pipeline pengetahuan, pilih model, dan aplikasi chat siap dibagikan, lengkap dengan API.",
      "Kekuatan Dify ada pada kelengkapannya. Pipeline RAG-nya menangani pemecahan dokumen (chunking), embedding, hingga reranking hasil pencarian. Bagian agent mendukung tool calling dan workflow bercabang. Ada pula dasbor observability untuk melihat percakapan nyata pengguna — fitur yang sering dilupakan padahal krusial untuk perbaikan berkelanjutan.",
      "Saya menempatkan Dify sebagai 'kelas menengah-atas' dalam tangga adopsi AI organisasi: lebih dalam dari sekadar memakai chatbot publik, tapi tidak sekompleks membangun stack sendiri dengan LangChain atau LlamaIndex. Untuk banyak instansi di Indonesia, posisi tengah inilah yang paling masuk akal.",
      "Tips: mulai dari satu use case dengan dokumen yang rapi. Kualitas jawaban RAG sangat bergantung pada kualitas dan struktur dokumen sumbernya — sampah masuk, sampah keluar. Rapikan dulu dokumennya, baru salahkan modelnya.",
    ],
    link: "https://github.com/langgenius/dify",
    linkLabel: "Lihat di GitHub",
    date: "2026-04-28",
  },
  {
    slug: "ollama",
    name: "Ollama",
    tagline: "Cara paling mudah menjalankan LLM secara lokal di laptopmu",
    tags: ["LLM Lokal", "Privasi", "CLI", "Go"],
    score: 9.1,
    scores: [
      { label: "Kemudahan Setup", value: 10 },
      { label: "Fitur & Ekstensibilitas", value: 8.5 },
      { label: "Komunitas & Momentum", value: 9.5 },
      { label: "Dokumentasi", value: 9.0 },
      { label: "Kesiapan Produksi", value: 8.0 },
    ],
    summary:
      "Satu perintah — ollama run — dan model LLM berjalan di mesinmu sendiri, tanpa internet, tanpa biaya API, tanpa data keluar. Ollama adalah gerbang utama dunia LLM lokal.",
    pros: [
      "Instalasi dan pemakaian sesederhana itu: satu perintah, model jalan",
      "Pustaka model lengkap: Llama, Qwen, Gemma, DeepSeek, Mistral, dll.",
      "API kompatibel OpenAI — gampang dicolok ke tool lain (n8n, Dify, OpenClaw)",
      "Privasi total: data tidak pernah meninggalkan mesinmu",
    ],
    cons: [
      "Performa bergantung penuh pada hardware — laptop kentang ya tetap kentang",
      "Model lokal kecil masih jauh di bawah model API papan atas untuk tugas berat",
      "Manajemen VRAM untuk model besar perlu pemahaman ekstra",
    ],
    verdict:
      "Wajib terpasang di mesin siapa pun yang serius belajar AI. Gratis, privat, dan jadi fondasi untuk hampir semua eksperimen self-hosted.",
    body: [
      "Ollama menyelesaikan satu masalah dengan sangat baik: menjalankan LLM secara lokal dulunya ribet (kompilasi, konversi format model, atur parameter GPU), sekarang cukup 'ollama run qwen3' dan kamu sudah ngobrol dengan model di terminal. Di balik layar ia mengatur unduhan model, kuantisasi, dan alokasi GPU/CPU secara otomatis.",
      "Untuk Indonesia, relevansinya besar. Pertama, biaya: API model komersial dibayar dolar, sementara model lokal cuma butuh listrik. Kedua, privasi dan kedaulatan data: untuk data internal pemerintah atau perusahaan, model lokal adalah satu-satunya opsi yang benar-benar aman. Ketiga, koneksi: model lokal jalan tanpa internet.",
      "API Ollama yang kompatibel dengan format OpenAI adalah kunci ekosistemnya. Hampir semua tool yang saya review di situs ini — n8n, Dify, OpenClaw — bisa menunjuk ke Ollama sebagai 'otak'-nya. Artinya kamu bisa membangun seluruh stack AI tanpa satu rupiah pun biaya API.",
      "Ekspektasi tetap perlu dijaga: model 7-14 miliar parameter yang muat di laptop biasa tidak akan menyamai model raksasa di cloud. Tapi untuk ringkasan, klasifikasi, draft tulisan, dan chatbot dokumen — model lokal modern sudah lebih dari cukup. Dan kurvanya terus membaik setiap beberapa bulan.",
    ],
    link: "https://github.com/ollama/ollama",
    linkLabel: "Lihat di GitHub",
    date: "2026-04-15",
  },
];

export function getRepo(slug: string) {
  return repos.find((r) => r.slug === slug);
}
