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
    link: "https://github.com/NousResearch/hermes-agent",
    linkLabel: "Nous Research",
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
      "Butuh tuning prompt untuk tugas domain spesifik",
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
  {
    slug: "open-webui",
    name: "Open WebUI",
    tagline: "Antarmuka chat self-hosted yang membuat LLM lokal terasa seperti produk jadi",
    tags: ["LLM Lokal", "UI Chat", "Self-hosted", "Privasi"],
    score: 8.9,
    scores: [
      { label: "Kemudahan Setup", value: 9.5 },
      { label: "Fitur & Ekstensibilitas", value: 9.0 },
      { label: "Komunitas & Momentum", value: 9.0 },
      { label: "Dokumentasi", value: 8.5 },
      { label: "Kesiapan Produksi", value: 8.5 },
    ],
    summary:
      "Open WebUI adalah pasangan paling natural untuk Ollama: antarmuka chat ala ChatGPT yang berjalan sepenuhnya di server sendiri. Lengkap dengan manajemen pengguna, RAG dokumen, dan dukungan multi-model — semuanya tanpa data keluar dari mesinmu.",
    pros: [
      "Pengalaman pakai setara produk komersial, padahal gratis dan self-hosted",
      "Satu perintah Docker dan langsung jalan — pasangan sempurna untuk Ollama",
      "Fitur RAG bawaan: unggah dokumen, langsung bisa ditanya-tanyai",
      "Multi-user dengan kontrol akses, cocok untuk dipakai satu kantor",
    ],
    cons: [
      "Fitur lanjutan (pipeline, tool, function) butuh waktu untuk dipahami",
      "Kualitas jawaban tetap dibatasi model lokal yang dipakai di belakangnya",
      "Update sering membawa perubahan UI yang kadang membingungkan pengguna lama",
    ],
    verdict:
      "Kalau Ollama adalah mesinnya, Open WebUI adalah bodinya. Inilah cara paling cepat menghadirkan 'ChatGPT internal' yang sepenuhnya privat untuk keluarga, tim, atau instansi.",
    body: [
      "Setelah memasang Ollama, pertanyaan berikutnya hampir selalu sama: 'masa ngobrolnya lewat terminal terus?' Open WebUI adalah jawabannya. Proyek ini menghadirkan antarmuka chat yang rapi dan familiar — riwayat percakapan, pemilihan model, render markdown, sampai input suara — di atas model lokal yang berjalan di mesinmu sendiri. Saya memasangnya lewat Docker dan dalam lima menit sudah punya 'ChatGPT pribadi' yang bisa diakses dari HP lewat jaringan rumah.",
      "Yang membuat saya betah adalah fiturnya yang ternyata jauh melampaui sekadar tampilan chat. Ada manajemen pengguna lengkap dengan peran admin, sehingga satu instalasi bisa dipakai banyak orang. Ada fitur unggah dokumen dengan RAG bawaan, jadi model bisa menjawab berdasarkan file PDF peraturan atau SOP yang kita beri. Bahkan ada sistem 'model kustom' untuk membuat persona dengan system prompt tertentu — semacam GPTs versi lokal.",
      "Untuk konteks Indonesia, kombinasi Ollama plus Open WebUI di satu server adalah resep yang sering saya sarankan ke instansi yang datanya tidak boleh menyentuh cloud asing. Modalnya cuma satu PC atau server dengan GPU sekadarnya, dan seluruh pegawai bisa menikmati asisten AI tanpa biaya langganan per orang — penghematan yang sangat berarti ketika anggaran dihitung dalam rupiah.",
      "Kekurangannya lebih ke sisi pengelolaan: fitur lanjutan seperti pipelines dan tools punya kurva belajar sendiri, dan ritme update yang cepat kadang mengubah letak menu yang sudah dihafal pengguna. Tapi itu harga yang wajar untuk proyek sehidup ini. Bagi saya, Open WebUI adalah bukti bahwa pengalaman AI kelas premium tidak harus berarti data kita ikut terkirim ke luar negeri.",
    ],
    link: "https://github.com/open-webui/open-webui",
    linkLabel: "Lihat di GitHub",
    date: "2026-03-28",
  },
  {
    slug: "langgraph",
    name: "LangGraph",
    tagline: "Orkestrasi agent berbasis graph untuk alur kerja AI yang serius",
    tags: ["AI Agent", "Framework", "Python", "Orkestrasi"],
    score: 8.5,
    scores: [
      { label: "Kemudahan Setup", value: 7.5 },
      { label: "Fitur & Ekstensibilitas", value: 9.5 },
      { label: "Komunitas & Momentum", value: 9.0 },
      { label: "Dokumentasi", value: 8.0 },
      { label: "Kesiapan Produksi", value: 8.5 },
    ],
    summary:
      "LangGraph memodelkan alur kerja agent sebagai graph: setiap node adalah langkah, setiap edge adalah keputusan. Pendekatan ini memberi kontrol penuh atas perilaku agent — termasuk percabangan, perulangan, dan intervensi manusia di tengah proses.",
    pros: [
      "Kontrol alur yang eksplisit — perilaku agent bisa diprediksi dan diaudit",
      "Dukungan state, checkpoint, dan human-in-the-loop bawaan",
      "Jadi fondasi banyak proyek agent serius (termasuk DeerFlow yang saya review)",
    ],
    cons: [
      "Kurva belajar curam — konsep state, node, dan edge butuh waktu dicerna",
      "Terasa berlebihan (overkill) untuk chatbot atau otomasi sederhana",
      "Dokumentasi luas tapi kadang tertinggal dari kecepatan perubahan API-nya",
    ],
    verdict:
      "Bukan tool untuk pemula, tapi begitu kebutuhanmu melewati 'chatbot biasa' menuju agent multi-langkah yang harus bisa dipertanggungjawabkan, LangGraph adalah salah satu fondasi paling matang yang tersedia.",
    body: [
      "Setelah beberapa kali membangun agent dengan pendekatan 'biarkan LLM memutuskan semuanya', saya sampai pada kesimpulan yang sama dengan banyak praktisi: untuk alur kerja serius, kita butuh kontrol. LangGraph hadir tepat di titik itu. Alih-alih satu loop agent yang gelap, alur kerja dipecah menjadi graph eksplisit — node untuk setiap langkah, edge untuk setiap keputusan — sehingga kita selalu tahu agent sedang di mana dan mau ke mana.",
      "Fitur yang paling saya hargai adalah manajemen state dan checkpoint. Setiap langkah agent tersimpan, bisa dilanjutkan setelah gangguan, dan bisa 'di-rewind' untuk debugging. Ada pula pola human-in-the-loop bawaan: agent berhenti di titik tertentu menunggu persetujuan manusia sebelum lanjut. Untuk dunia birokrasi yang saya geluti — di mana setiap keputusan harus ada penanggung jawabnya — pola seperti ini bukan fitur tambahan, melainkan syarat mutlak.",
      "Jujur saja, kurva belajarnya tidak ramah. Datang dari dunia 'prompt lalu jadi', konsep StateGraph, reducer, dan conditional edge awalnya terasa seperti belajar framework backend baru. Saya butuh beberapa akhir pekan oprek sebelum polanya nyantol. Dokumentasinya luas dan contoh-contohnya banyak, tapi karena proyek ini bergerak cepat, beberapa tutorial pihak ketiga sudah tidak cocok lagi dengan API terbaru.",
      "Rekomendasi saya: jangan mulai dari LangGraph kalau kebutuhanmu masih bisa diselesaikan n8n atau Dify. Tapi kalau kamu developer yang diminta membangun sistem agent multi-langkah untuk organisasi — yang harus bisa diaudit, dilanjutkan, dan diawasi manusia — investasi belajar LangGraph akan terbayar. Fakta bahwa proyek sekelas DeerFlow dibangun di atasnya bukan kebetulan.",
    ],
    link: "https://github.com/langchain-ai/langgraph",
    linkLabel: "Lihat di GitHub",
    date: "2026-03-15",
  },
  {
    slug: "flowise",
    name: "Flowise",
    tagline: "Rakit aplikasi LLM dengan drag-and-drop, tanpa harus jago koding",
    tags: ["Low-code", "LLM", "RAG", "Self-hosted"],
    score: 8.1,
    scores: [
      { label: "Kemudahan Setup", value: 9.0 },
      { label: "Fitur & Ekstensibilitas", value: 8.5 },
      { label: "Komunitas & Momentum", value: 8.0 },
      { label: "Dokumentasi", value: 7.5 },
      { label: "Kesiapan Produksi", value: 7.5 },
    ],
    summary:
      "Flowise membawa konsep visual builder ke dunia aplikasi LLM: susun node chain, agent, dan vector store di kanvas, lalu chatbot-mu langsung jadi lengkap dengan API dan widget embed. Jalan tengah antara n8n yang generalis dan koding LangChain langsung.",
    pros: [
      "Membangun chatbot RAG fungsional dalam hitungan jam, bukan minggu",
      "Hasil rakitan langsung dapat API dan widget chat yang bisa ditempel ke website",
      "Self-hosted via Docker, data dan dokumen tetap di server sendiri",
    ],
    cons: [
      "Dokumentasi sering tertinggal dari fitur — banyak hal dipelajari lewat trial-and-error",
      "Untuk kebutuhan produksi skala besar, abstraksi visualnya mulai terasa membatasi",
      "Beberapa fitur tim dan enterprise digeser ke versi berbayar",
    ],
    verdict:
      "Prototyping aplikasi LLM tercepat yang pernah saya pakai untuk non-engineer. Sempurna untuk membuktikan ide ke atasan; untuk produksi berat, siapkan rencana naik kelas.",
    body: [
      "Flowise adalah tool yang saya pakai ketika ingin membuktikan sebuah ide AI ke orang lain secepat mungkin. Konsepnya mirip n8n tapi khusus dunia LLM: kanvas visual berisi node-node — model, prompt, memory, vector store, document loader — yang dihubungkan menjadi sebuah chatflow. Pertama kali mencoba, saya berhasil merakit chatbot yang menjawab berdasarkan kumpulan dokumen PDF dalam satu sore, tanpa menulis kode sama sekali.",
      "Nilai jual terbesarnya menurut saya ada di ujung alurnya: begitu chatflow jadi, Flowise langsung menyediakan endpoint API dan widget chat yang tinggal ditempel ke website mana pun. Untuk UMKM yang ingin punya layanan tanya-jawab produk di websitenya, atau unit kerja yang ingin membuat asisten informasi layanan publik, jarak dari ide ke demo yang bisa dipegang jadi sangat pendek. Inilah jenis 'kemenangan kecil' yang ampuh untuk meyakinkan pimpinan agar mau berinvestasi di AI.",
      "Kekurangannya mulai terasa ketika prototipe naik kelas jadi sistem sungguhan. Dokumentasinya kerap tertinggal dari fitur-fitur baru, sehingga banyak hal harus dipelajari lewat coba-coba atau ubek-ubek forum komunitas. Logika yang rumit — percabangan kondisional yang dalam, penanganan error yang rapi — bisa dirakit, tapi kanvasnya cepat berubah jadi benang kusut. Dan seperti banyak proyek open-source lain, beberapa fitur kolaborasi tim kini diarahkan ke paket berbayar.",
      "Posisi Flowise di peta saya: di bawah Dify untuk kelengkapan platform, di atas koding manual untuk kecepatan. Kalau organisasimu butuh satu platform terkelola, Dify lebih matang; kalau butuh otomasi umum plus AI, n8n lebih luas. Tapi untuk satu tujuan spesifik — merakit dan memamerkan aplikasi LLM secepat-cepatnya dengan modal server sendiri — Flowise tetap juaranya.",
    ],
    link: "https://github.com/FlowiseAI/Flowise",
    linkLabel: "Lihat di GitHub",
    date: "2026-02-20",
  },
  {
    slug: "crewai",
    name: "CrewAI",
    tagline: "Susun 'kru' AI dengan peran dan tugas masing-masing, biarkan mereka bekerja sama",
    tags: ["Multi-Agent", "AI Agent", "Python", "Framework"],
    score: 8.0,
    scores: [
      { label: "Kemudahan Setup", value: 8.5 },
      { label: "Fitur & Ekstensibilitas", value: 8.5 },
      { label: "Komunitas & Momentum", value: 8.5 },
      { label: "Dokumentasi", value: 8.0 },
      { label: "Kesiapan Produksi", value: 7.0 },
    ],
    summary:
      "CrewAI menawarkan cara berpikir yang intuitif tentang multi-agent: definisikan agent dengan peran, latar belakang, dan tujuan — seperti menyusun tim kerja — lalu beri mereka daftar tugas. Mudah dipahami, cepat menghasilkan, meski hasilnya tidak selalu konsisten.",
    pros: [
      "Mental model 'tim kerja' yang langsung nyantol bahkan untuk non-engineer",
      "Dari nol sampai kru multi-agent berjalan hanya butuh puluhan baris kode",
      "Fleksibel dengan berbagai LLM, termasuk model lokal via Ollama",
      "Komunitas dan materi belajarnya tumbuh pesat",
    ],
    cons: [
      "Hasil antar-eksekusi bisa berbeda-beda — kontrol alurnya tidak seketat LangGraph",
      "Konsumsi token boros: banyak agent berarti banyak pemanggilan model",
      "Arah pengembangan makin condong ke platform komersialnya",
    ],
    verdict:
      "Gerbang masuk paling menyenangkan ke dunia multi-agent — cocok untuk belajar dan otomasi internal yang toleran variasi. Untuk sistem yang menuntut konsistensi ketat, pertimbangkan orkestrasi yang lebih eksplisit.",
    body: [
      "Dari semua framework multi-agent yang saya coba, CrewAI punya mental model yang paling gampang dijelaskan ke orang awam: kamu menyusun 'kru' seperti menyusun tim kerja di kantor. Setiap agent diberi peran (analis, penulis, pemeriksa), latar belakang, dan tujuan; lalu kamu definisikan daftar tugas dan urutan kerjanya. Konsep yang sangat akrab bagi siapa pun yang pernah membagi tugas dalam sebuah kepanitiaan.",
      "Eksperimen pertama saya: kru tiga agent untuk menyusun draft materi sosialisasi — satu agent meriset topik, satu menulis draft, satu mengedit gaya bahasanya agar sesuai pembaca awam. Hasilnya mengejutkan untuk usaha sekecil itu; kodenya pendek dan terbaca seperti deskripsi pekerjaan biasa. Dipasangkan dengan model lokal lewat Ollama pun bisa, meski hasil terbaik tetap datang dari model API yang lebih kuat.",
      "Kelemahan utamanya terasa setelah dipakai berulang: karena koordinasi antar-agent banyak diserahkan ke LLM, hasil eksekusi yang sama bisa berbeda kualitas dari hari ke hari. Untuk tugas kreatif seperti drafting itu bisa diterima, tapi untuk alur yang menuntut konsistensi — misalnya validasi data — saya lebih percaya orkestrasi eksplisit ala LangGraph. Biaya token juga perlu diwaspadai: tiga agent yang saling 'berdiskusi' berarti tagihan API berlipat, hal yang sensitif untuk kantong rupiah.",
      "Saya menempatkan CrewAI sebagai alat belajar dan alat produksi ringan. Sebagai bahan belajar konsep multi-agent, dia nyaris tak tertandingi karena kesederhanaannya. Sebagai alat produksi, pakai untuk otomasi internal yang outputnya tetap direview manusia — jangan untuk proses kritis tanpa pengawasan. Perhatikan juga bahwa proyek ini makin serius menggarap platform komersialnya, jadi pantau baik-baik mana fitur yang tetap open-source.",
    ],
    link: "https://github.com/crewAIInc/crewAI",
    linkLabel: "Lihat di GitHub",
    date: "2026-02-10",
  },
  {
    slug: "comfyui",
    name: "ComfyUI",
    tagline: "Kanvas node-based untuk meracik gambar dan video AI sesukamu",
    tags: ["Image Generation", "Workflow", "Stable Diffusion", "Self-hosted"],
    score: 8.8,
    scores: [
      { label: "Kemudahan Setup", value: 7.0 },
      { label: "Fitur & Ekstensibilitas", value: 9.5 },
      { label: "Komunitas & Momentum", value: 9.5 },
      { label: "Dokumentasi", value: 7.5 },
      { label: "Kesiapan Produksi", value: 8.5 },
    ],
    summary:
      "ComfyUI adalah standar de facto untuk AI image dan video generation secara lokal: setiap tahap proses — dari prompt, model, sampler, hingga upscaling — adalah node yang bisa dirangkai bebas di kanvas. Kuasa penuh bagi yang mau belajar, membingungkan bagi yang cuma mau klik 'generate'.",
    pros: [
      "Kontrol granular atas seluruh pipeline generasi gambar dan video",
      "Ekosistem custom node raksasa — hampir semua teknik baru hadir di sini lebih dulu",
      "Workflow tersimpan di dalam file gambar — berbagi resep semudah berbagi PNG",
      "Sekali punya GPU, generate sepuasnya tanpa biaya langganan per gambar",
    ],
    cons: [
      "Tampilan awal berupa jaring node bisa membuat pemula langsung mundur",
      "Sangat haus VRAM — GPU kelas atas masih barang mewah dengan harga Indonesia",
      "Manajemen custom node dan dependensinya kadang berujung konflik versi",
    ],
    verdict:
      "Kalau kamu serius di AI visual — bukan sekadar iseng — ComfyUI adalah investasi belajar terbaik saat ini. Lebih curam dari tool sekali-klik, tapi memberi kendali yang tidak ditawarkan siapa pun.",
    body: [
      "ComfyUI mengambil filosofi yang sama dengan n8n tapi untuk dunia visual: seluruh proses pembuatan gambar AI dibongkar menjadi node-node di kanvas — loader model, encoder prompt, sampler, VAE, upscaler — yang bebas dirangkai ulang. Pertama kali membukanya saya sempat keder melihat jaring kabel di layar, tapi justru dari situ saya akhirnya paham apa yang sebenarnya terjadi ketika sebuah gambar AI 'dilahirkan'.",
      "Kekuatan terbesarnya adalah ekosistem. Hampir setiap teknik baru di dunia image dan video generation — ControlNet, IP-Adapter, berbagai model video terbaru — biasanya tersedia sebagai custom node ComfyUI lebih dulu sebelum muncul di tool lain. Fitur favorit saya: workflow lengkap tersimpan di metadata file gambar hasilnya, jadi 'resep' sebuah gambar bisa dibagikan cukup dengan mengirim file PNG-nya, lalu di-drag ke kanvas orang lain.",
      "Untuk konteks Indonesia, kalkulasi ekonominya menarik sekaligus menyakitkan. Menyakitkan karena ComfyUI haus VRAM, sementara GPU kelas atas harganya bisa setara motor — daya beli kita memang belum ramah hobi ini. Tapi menariknya: sekali investasi GPU (atau sewa GPU cloud per jam saat butuh), kamu bisa generate ribuan aset visual tanpa biaya per gambar. Untuk pelaku usaha kreatif, desainer, atau tim humas instansi yang rutin butuh materi visual, hitungannya bisa jauh lebih hemat daripada langganan layanan komersial.",
      "Saran saya untuk memulai: jangan langsung merakit workflow dari nol. Unduh workflow jadi dari komunitas, jalankan, lalu pelan-pelan bongkar dan ubah satu node demi satu node. Manajemen custom node memang kadang merepotkan — konflik dependensi Python adalah ritual yang hampir pasti kamu temui — tapi komunitasnya sangat aktif dan solusinya hampir selalu sudah ada di pembahasan orang lain. Ini tool yang memberi imbalan setimpal dengan kesabaranmu.",
    ],
    link: "https://github.com/comfyanonymous/ComfyUI",
    linkLabel: "Lihat di GitHub",
    date: "2026-02-01",
  },
];

export function getRepo(slug: string) {
  return repos.find((r) => r.slug === slug);
}
