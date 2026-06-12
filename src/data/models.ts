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
      { label: "Kecepatan", value: 8.5 },
      { label: "Harga/Performa", value: 8.5 },
    ],
    summary:
      "Model flagship Anthropic yang menjadi standar emas untuk tugas coding dan agentic. Kemampuannya mengerjakan tugas panjang multi-langkah — refactor besar, debugging lintas file, riset mendalam — masih sulit ditandingi.",
    pros: [
      "Kemampuan coding dan tool-use terbaik di kelasnya",
      "Sangat andal untuk tugas agentic panjang tanpa 'hilang fokus'",
      "Output panjang tetap koheren — jarang kehilangan konteks di sesi agentic",
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
      "Dalam pengujian editorial dengan Claude Code, Opus 4.5 adalah model yang paling bisa 'dilepas' mengerjakan tugas panjang: beri instruksi besar, dan ia merencanakan, mengeksekusi, mengetes, lalu memperbaiki sendiri kesalahannya. Pola kerja agentic seperti ini adalah pembeda utama generasi model saat ini, dan Opus memimpinnya.",
      "Pada refactor besar lintas banyak file, ia jarang kehilangan jejak rencana awal — keandalan ini yang paling terasa dibanding model lain saat tugas menyebar.",
      "Kelemahan utamanya satu: harga. Untuk eksperimen ringan, model kelas menengah seperti Sonnet sering sudah cukup. Strategi editorial: model murah untuk draft dan tugas rutin, Opus untuk tugas yang benar-benar sulit. Pola 'model routing' seperti ini akan makin umum.",
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
      "Kekuatan sesungguhnya OpenAI ada di ekosistem. Hampir semua tool, tutorial, dan integrasi mendukung format API-nya — bahkan pesaingnya ramai-ramai membuat API yang 'kompatibel OpenAI'. Untuk pemula, melimpahnya tutorial dan komunitas seputar ChatGPT adalah nilai plus nyata.",
      "Dalam pengujian editorial untuk tugas kompleks lintas domain, GPT-5 sangat kompeten, meski sesekali kurang stabil pada sesi agentic panjang. Untuk coding one-shot ia kuat; untuk kerja multi-langkah, tim editorial masih lebih memercayai Claude.",
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
      "Tier gratis Google yang murah hati layak disorot khusus: untuk pelajar, mahasiswa, dan developer Indonesia yang terkendala pembayaran internasional, Gemini sering jadi satu-satunya akses realistis ke model frontier. Itu sebabnya tim editorial selalu menyebutkannya dalam rekomendasi untuk pemula.",
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
      "Dokumentasi dan komunitas di luar pasar utama masih terbatas",
      "Pertimbangan kebijakan data jika memakai API resminya",
      "Butuh hardware serius untuk self-host versi penuhnya",
    ],
    verdict:
      "Untuk workload volume tinggi — klasifikasi, ekstraksi, ringkasan massal — DeepSeek adalah pilihan ekonomis yang sulit ditolak. Self-host-nya menjadikannya kandidat serius untuk instansi.",
    body: [
      "DeepSeek membuktikan satu hal penting: model kelas frontier tidak harus mahal. Harga API-nya yang sepersekian pesaing mengubah kalkulasi banyak proyek — pipeline yang tadinya tidak masuk akal secara biaya tiba-tiba jadi feasible.",
      "Sifat open weight-nya membuka opsi yang sangat relevan untuk Indonesia: instansi atau perusahaan bisa menjalankan model sepenuhnya di server sendiri. Untuk data yang tidak boleh keluar (dan di pemerintahan, itu hampir semua data), ini bukan fitur — ini prasyarat.",
      "Catatan penggunaan: untuk tugas yang butuh reasoning transparan, mode R1 membantu. Strategi editorial: DeepSeek untuk volume dan ekstraksi, model frontier untuk arsitektur sulit.",
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
      { label: "Kecepatan", value: 8.5 },
      { label: "Harga/Performa", value: 9.5 },
    ],
    summary:
      "Keluarga model open-weight Alibaba dengan rentang ukuran terlengkap, varian coding yang sangat kompeten, dan opsi MoE untuk skala server. Favorit komunitas self-host.",
    pros: [
      "Pilihan ukuran lengkap: dari yang muat di laptop sampai kelas server",
      "Varian MoE dan dense tersedia untuk skenario berbeda",
      "Varian Qwen Coder sangat kuat untuk asisten coding lokal",
      "Lisensi permisif untuk sebagian besar varian",
    ],
    cons: [
      "Dokumentasi dan penamaan varian kadang membingungkan",
      "Model kecilnya tetap punya batas jelas untuk penalaran kompleks",
    ],
    verdict:
      "Kalau kamu cuma boleh pilih satu keluarga model untuk dijalankan lokal via Ollama, pilih Qwen. Keseimbangan ukuran, lisensi, dan performa coding-nya sulit ditandingi.",
    body: [
      "Qwen adalah keluarga model yang paling sering diuji editorial lewat Ollama. Alasannya sederhana: di ukuran yang sama, performa coding dan penalarannya konsisten di atas rata-rata model open lain di kelas yang sama.",
      "Rentang ukurannya juga strategi yang cerdas: ada varian kecil untuk perangkat terbatas, kelas menengah yang jadi sweet spot laptop modern, sampai model besar ber-arsitektur MoE untuk server. Satu keluarga model bisa menemani dari tahap prototipe sampai produksi.",
      "Varian Qwen Coder layak disebut khusus: dipasangkan dengan editor seperti Cline atau ekstensi lokal lain, ia memberi pengalaman asisten coding lokal tanpa biaya langganan — pilihan menarik untuk pelajar dan developer dengan budget terbatas.",
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
      "Tetap penting sebagai fondasi ekosistem, tapi untuk pemakaian baru ulasan ini lebih sering merekomendasikan Qwen atau DeepSeek. Pantau terus — Meta punya sumber daya untuk membalikkan keadaan.",
    body: [
      "Sulit membicarakan model open tanpa Llama — keluarga model inilah yang memulai gelombang LLM open-weight dan membangun hampir seluruh ekosistem tooling yang kita pakai sekarang, dari llama.cpp sampai format GGUF yang dipakai Ollama.",
      "Generasi keempatnya membawa arsitektur mixture-of-experts dan multimodal, tapi penerimaan komunitas lebih dingin dibanding generasi sebelumnya: di banyak benchmark dan uji nyata, pesaing seperti Qwen dan DeepSeek kini sering unggul di kelas ukuran yang sama.",
      "Meski begitu, dukungan ekosistemnya tetap tak tertandingi — hampir semua tutorial, alat fine-tuning, dan platform inference menjadikan Llama sebagai acuan pertama. Untuk belajar 'cara kerja' dunia open model, Llama tetap pintu masuk yang baik.",
    ],
    link: "https://www.llama.com",
    linkLabel: "Situs Resmi",
    date: "2026-04-18",
  },
  {
    slug: "grok-4",
    name: "Grok 4",
    tagline: "Model nyeleneh dari xAI dengan mata yang selalu memantau X",
    tags: ["xAI", "Proprietary", "Real-time", "Reasoning"],
    score: 8.5,
    scores: [
      { label: "Penalaran", value: 8.8 },
      { label: "Coding", value: 8.3 },
      { label: "Kecepatan", value: 8.0 },
      { label: "Harga/Performa", value: 7.8 },
    ],
    summary:
      "Model flagship xAI dengan penalaran kuat dan keunggulan unik: akses real-time ke linimasa X. Gayanya yang santai dan kadang nyeleneh membuatnya terasa berbeda dari asisten AI lain yang serba sopan.",
    pros: [
      "Akses real-time ke X — kuat untuk memantau isu dan tren yang sedang panas",
      "Penalaran kelas atas, bersaing dengan model frontier untuk soal sulit",
      "Gaya jawaban lugas dan jarang bertele-tele dengan disclaimer",
    ],
    cons: [
      "Akses penuh terikat langganan X Premium — terasa mahal dalam dolar",
      "Gaya nyelenehnya kadang kurang pas untuk konteks formal dan kedinasan",
      "Ekosistem API dan tooling pihak ketiga masih kalah matang",
    ],
    verdict:
      "Pilih Grok kalau kebutuhan utamamu adalah informasi terkini dari media sosial dengan penalaran yang serius. Untuk dokumen resmi dan kerja kantoran, ulasan ini tetap mengarah ke model lain.",
    body: [
      "Grok 4 punya satu jualan yang tidak dimiliki pesaing mana pun: ia hidup di dalam X. Saat diuji dengan pertanyaan soal isu yang baru ramai beberapa jam lalu — termasuk topik yang sedang trending di Indonesia — ia bisa menjawab dengan konteks segar, bukan pengetahuan beku dari data latihan. Untuk pemantauan opini publik dan riset isu, ini kemampuan yang nyata bedanya.",
      "Di luar gimik real-time, mesin penalarannya sendiri serius. Untuk soal logika, matematika, dan analisis berlapis, Grok 4 bermain di papan atas — xAI jelas tidak main-main dengan komputasi yang mereka kerahkan. Coding-nya juga kompeten, meski untuk sesi agentic panjang ia belum jadi pilihan pertama tim editorial.",
      "Soal gaya, ini selera: Grok sengaja didesain nyeleneh, suka bercanda, dan minim basa-basi. Buat percakapan santai itu menyegarkan; buat konteks formal, pengguna perlu sering menyuruhnya 'serius sedikit'.",
      "Catatan akses untuk pembaca Indonesia: jalur paling mudah adalah langganan X Premium, yang harganya dalam dolar lumayan menggigit, dan API-nya butuh kartu pembayaran internasional. Kalau kebutuhanmu bukan data real-time, ada opsi lain yang lebih ekonomis.",
    ],
    link: "https://x.ai",
    linkLabel: "Situs Resmi",
    date: "2026-04-08",
  },
  {
    slug: "kimi-k2",
    name: "Kimi K2",
    tagline: "MoE open-weight raksasa yang jago kerja agentic — dengan harga kaki lima",
    tags: ["Moonshot AI", "Open Weight", "Agent", "Coding", "Murah"],
    score: 8.8,
    scores: [
      { label: "Penalaran", value: 8.8 },
      { label: "Coding", value: 9.0 },
      { label: "Kecepatan", value: 8.0 },
      { label: "Harga/Performa", value: 9.5 },
    ],
    summary:
      "Model mixture-of-experts raksasa dari Moonshot AI yang dirancang sejak awal untuk tool-use dan kerja agentic. Kemampuan coding-nya menempel ketat ke model proprietary papan atas, dengan harga API yang jauh lebih ramah dan bobot yang terbuka.",
    pros: [
      "Kemampuan agentic dan tool-use terbaik di kalangan model open-weight",
      "Coding sangat kuat — terasa dekat dengan model proprietary mahal",
      "Harga API murah, cocok untuk pemakaian volume tinggi",
      "Open weight — bisa di-host sendiri untuk kedaulatan data",
    ],
    cons: [
      "Ukurannya raksasa — self-host realistis hanya untuk organisasi ber-GPU serius",
      "Brand awareness di luar komunitas developer masih terbatas",
      "Pertimbangan kebijakan data jika memakai API resminya",
    ],
    verdict:
      "Kimi K2 adalah bukti bahwa dunia open sudah bisa bermain di liga agentic. Untuk asisten coding hemat biaya lewat API, ini salah satu rekomendasi pertama ulasan ini saat ini.",
    body: [
      "Kalau DeepSeek mengguncang soal harga, Kimi K2 mengguncang soal kemampuan kerja. Moonshot AI melatih model ini secara khusus untuk skenario agentic — memanggil tool, mengeksekusi langkah berurutan, memperbaiki kesalahan sendiri — dan hasilnya terasa: saat dipasangkan dengan tool coding agentic, ia menyelesaikan tugas multi-langkah dengan kepatuhan yang jarang ditemui di model open lain.",
      "Untuk coding, K2 berada di papan atas dunia open-weight. Refactor lintas file, menulis test, memahami codebase menengah — semuanya dikerjakan dengan percaya diri. Dengan harga API yang jauh di bawah model proprietary sekelas, kalkulasi biayanya sangat menarik untuk developer Indonesia yang menghitung pengeluaran dalam dolar.",
      "Sifat open weight-nya tetap perlu dicatat dengan realistis: ini model MoE raksasa, jadi 'bisa di-host sendiri' dalam praktiknya berarti butuh server ber-GPU kelas data center. Untuk individu, jalur masuk yang masuk akal adalah API resminya atau penyedia inference pihak ketiga yang sudah banyak menyajikannya.",
      "Kelemahan yang teridentifikasi ada di ekosistem: dokumentasi dan integrasi pihak ketiga belum seluwes model proprietary papan atas. Strategi editorial sama seperti DeepSeek: K2 untuk kerja teknis dan agentic hemat biaya, model frontier untuk tugas paling kritis.",
    ],
    link: "https://www.moonshot.ai",
    linkLabel: "Situs Resmi",
    date: "2026-03-25",
  },
  {
    slug: "glm-4-6",
    name: "GLM-4.6",
    tagline: "Kuda hitam coding dari Zhipu — alternatif murah yang serius",
    tags: ["Zhipu AI", "Open Weight", "Coding", "Agent", "Murah"],
    score: 8.6,
    scores: [
      { label: "Penalaran", value: 8.6 },
      { label: "Coding", value: 8.9 },
      { label: "Kecepatan", value: 8.3 },
      { label: "Harga/Performa", value: 9.5 },
    ],
    summary:
      "Model open-weight dari Zhipu AI (Z.ai) yang melejit sebagai alternatif murah di tool coding agentic. Untuk pekerjaan kode sehari-hari, jarak rasanya ke model proprietary mahal makin tipis — dengan biaya langganan yang jauh lebih ringan.",
    pros: [
      "Coding agentic sangat kompeten — nyaman dipakai di tool seperti Claude Code dan sejenisnya",
      "Paket langganan coding-nya termasuk yang termurah di industri",
      "Open weight — opsi self-host terbuka untuk organisasi",
    ],
    cons: [
      "Ekosistem plugin dan dokumentasi masih kalah matang dari pesaing besar",
      "Brand dan dokumentasi berbahasa Inggrisnya belum serapi pemain besar",
      "Pertimbangan kebijakan data jika memakai layanan resminya",
    ],
    verdict:
      "Kalau tagihan asisten coding-mu mulai bikin meringis, GLM-4.6 adalah downgrade harga tanpa downgrade rasa yang berarti. Untuk kerja kode murni, ini sleeper hit tahun ini.",
    body: [
      "GLM-4.6 adalah model yang naik daun lewat jalur yang tidak biasa: bukan lewat hype peluncuran, tapi lewat komunitas pengguna tool coding agentic yang mencari alternatif murah dari model proprietary. Zhipu cerdik menangkap momen ini — mereka menawarkan paket langganan coding dengan harga yang, dihitung dalam dolar, terasa hampir tidak masuk akal murahnya bagi developer Indonesia.",
      "Dalam pengujian editorial untuk kerja kode sehari-hari — bug fix, fitur kecil-menengah, menulis test — GLM-4.6 menyelesaikan sebagian besar tugas dengan baik. Ia paham instruksi tool-use, jarang ngawur saat mengedit file, dan cukup tahan untuk sesi agentic beberapa langkah. Untuk tugas arsitektur besar atau debugging paling pelik, model frontier masih unggul, tapi jaraknya tidak lagi selebar harganya.",
      "Sebagai model open-weight, ia juga membuka opsi self-host — relevan untuk perusahaan atau instansi Indonesia yang datanya tidak boleh keluar. Seperti model besar lain, ini butuh hardware serius, tapi penyedia inference pihak ketiga sudah banyak yang menyajikannya kalau mau jalan tengah.",
      "Posisikan GLM sebagai kuda beban coding dan agentic — di situ ia paling bersinar. Untuk tugas arsitektur paling pelik, model frontier masih punya jarak tipis.",
    ],
    link: "https://z.ai",
    linkLabel: "Situs Resmi",
    date: "2026-03-10",
  },
  {
    slug: "mistral",
    name: "Mistral Large / Medium",
    tagline: "Juara Eropa: efisien, enterprise-ready, dan punya Le Chat",
    tags: ["Mistral AI", "Eropa", "Enterprise", "Efisien"],
    score: 8.2,
    scores: [
      { label: "Penalaran", value: 8.3 },
      { label: "Coding", value: 8.2 },
      { label: "Kecepatan", value: 9.0 },
      { label: "Harga/Performa", value: 8.5 },
    ],
    summary:
      "Lini model andalan Mistral AI, satu-satunya pemain frontier dari Eropa. Filosofinya jelas: performa kompetitif dari model yang lebih kecil dan efisien, dengan opsi deployment fleksibel yang disukai enterprise — plus asisten Le Chat yang sangat responsif.",
    pros: [
      "Sangat efisien — respons cepat dengan biaya inference rendah",
      "Opsi deployment fleksibel (cloud, on-premise) — menarik untuk kebutuhan kedaulatan data",
      "Le Chat adalah salah satu asisten AI gratis tercepat yang bisa dicoba",
    ],
    cons: [
      "Fokus produk masih kuat di pasar Eropa — integrasi lokal terbatas",
      "Untuk penalaran paling sulit masih selapis di bawah model frontier",
      "Gaungnya di komunitas Indonesia kecil, tutorial lokal minim",
    ],
    verdict:
      "Mistral adalah pilihan rasional untuk kebutuhan enterprise yang menimbang efisiensi dan kontrol data, bukan sekadar skor benchmark. Untuk pengguna Indonesia perorangan, Le Chat layak dicoba — gratisnya kencang sekali.",
    body: [
      "Mistral menarik justru karena tidak ikut perlombaan 'model terbesar'. Filosofi mereka konsisten dari awal: kejar performa maksimal dari parameter seminimal mungkin. Hasilnya adalah model-model yang responsnya kencang dan biaya operasinya rendah — pendekatan yang, menurut ulasan ini, lebih relevan untuk mayoritas use case nyata daripada mengejar satu-dua poin benchmark.",
      "Sebagai juara Eropa, Mistral menjual sesuatu yang makin laku: kedaulatan. Mereka menawarkan deployment on-premise dan komitmen regulasi ala Eropa yang membuat bank dan pemerintahan nyaman. Bagi instansi Indonesia yang punya kekhawatiran serupa soal data, model bisnis Mistral ini patut dipelajari — meski tentu kontraknya enterprise-minded, bukan untuk perorangan.",
      "Le Chat, asisten gratisnya, adalah kejutan yang menyenangkan: kecepatannya termasuk yang paling kencang yang pernah diuji editorial, dan tier gratisnya cukup murah hati. Untuk tanya-jawab cepat sehari-hari, ia sangat layak masuk rotasi.",
      "Untuk kerja berbahasa Inggris atau Eropa, nilai tambahnya jauh lebih terasa dibanding pasar Asia. Di Indonesia, Le Chat tetap menarik sebagai asisten cepat gratis.",
    ],
    link: "https://mistral.ai",
    linkLabel: "Situs Resmi",
    date: "2026-02-20",
  },
  {
    slug: "gemma-3",
    name: "Gemma 3",
    tagline: "Model open kecil terbaik — multimodal yang muat di laptop kentang",
    tags: ["Google", "Open Weight", "Lokal", "Multimodal", "Kecil"],
    score: 7.9,
    scores: [
      { label: "Penalaran", value: 7.5 },
      { label: "Coding", value: 7.3 },
      { label: "Kecepatan", value: 9.0 },
      { label: "Harga/Performa", value: 9.5 },
    ],
    summary:
      "Keluarga model open kecil dari Google yang dirancang untuk perangkat terbatas: dari ponsel sampai laptop tanpa GPU. Kemampuan multibahasa dan multimodalnya mengejutkan untuk ukurannya — pintu masuk terbaik ke dunia AI lokal.",
    pros: [
      "Performa terbaik di kelas model kecil — realistis dijalankan di laptop biasa",
      "Multimodal: varian tertentu bisa memahami gambar, langka di ukuran ini",
      "Gratis total via Ollama atau LM Studio — tanpa API, tanpa kartu kredit",
    ],
    cons: [
      "Tetap model kecil — penalaran kompleks dan coding serius bukan arenanya",
      "Lisensinya open dengan syarat penggunaan khas Google, bukan lisensi bebas murni",
    ],
    verdict:
      "Untuk siapa pun di Indonesia yang ingin mencoba AI lokal di laptop seadanya tanpa keluar uang sepeser pun, Gemma 3 adalah titik mulai terbaik. Tahu batasnya, dan ia akan jadi alat yang sangat berguna.",
    body: [
      "Gemma 3 adalah jawaban untuk pertanyaan yang paling sering diajukan pembaca: 'laptop biasa saja, internet pas-pasan, bisa pakai AI tidak?' Bisa. Distilasi dari teknologi Gemini ini dirancang khusus untuk perangkat terbatas, dan varian kecilnya berjalan lancar bahkan di laptop tanpa GPU dedicated — kondisi mayoritas perangkat di Indonesia.",
      "Yang membuat tim editorial terkesan adalah seberapa banyak kemampuan yang dijejalkan ke ukuran sekecil ini. Varian yang lebih besar bahkan bisa memahami gambar — fitur yang dulu eksklusif model raksasa. Untuk ringkasan dokumen dan tanya-jawab umum secara offline, ia sangat bisa diandalkan.",
      "Cara pakainya juga ramah pemula: pasang Ollama atau LM Studio, unduh sekali, dan selesai — tidak ada API key, tidak ada kartu kredit, tidak ada tagihan dolar. Untuk pelajar dan pegawai sektor publik yang ingin memproses data sensitif tanpa mengirimnya ke cloud siapa pun, ini kombinasi privasi dan gratis yang sulit dilawan.",
      "Yang penting adalah ekspektasi: ini model kecil, dan fisika tidak bisa ditipu. Untuk penalaran berlapis, coding serius, atau tulisan panjang yang bernuansa, ia akan kehabisan napas. Posisikan Gemma sebagai asisten ringan harian, dan kamu tidak akan kecewa.",
    ],
    link: "https://ai.google.dev/gemma",
    linkLabel: "Situs Resmi",
    date: "2026-02-05",
  },
  {
    slug: "muse-spark",
    name: "Muse Spark",
    tagline: "Model eksperimental Meta untuk generasi kreatif multimodal",
    tags: ["Meta", "Open Weight", "Multimodal", "Kreatif"],
    score: 8.2,
    scores: [
      { label: "Penalaran", value: 8.0 },
      { label: "Coding", value: 7.5 },
      { label: "Kecepatan", value: 9.0 },
      { label: "Harga/Performa", value: 9.5 },
    ],
    summary:
      "Muse Spark adalah keluarga model eksperimental dari Meta yang fokus pada generasi kreatif multimodal — teks, gambar, dan audio dalam satu pipeline. Intelligence index 52 dan bobot terbuka menjadikannya pilihan menarik untuk eksplorasi pipeline generasi konten di infrastruktur sendiri. Bukan model penalaran terkuat, tapi kelebihannya ada pada kelancaran dan integrasi multimodal.",
    pros: [
      "Multimodal terpadu (teks, gambar, audio) dalam satu model — tidak perlu chain beberapa model",
      "Open weight — bisa dijalankan lokal lewat Ollama, vLLM, atau transformers",
      "Throughput tinggi untuk kategori ukurannya (median output 100+ tokens/sec)",
      "Cocok untuk pipeline generasi konten kreatif yang tidak butuh penalaran berat",
    ],
    cons: [
      "Intelligence index lebih rendah dari frontier (52) — kurang cocok untuk coding agent atau analisis",
      "Dokumentasi dan tooling pihak ketiga masih terbatas dibanding model mainstream",
      "Penalaran kompleks masih sering keliru pada prompt ambigu",
    ],
    verdict:
      "Rekomendasi: pakai untuk eksplorasi multimodal di mesin sendiri, bukan untuk pekerjaan coding atau analisis berat. Pilih Qwen 3 atau Llama 4 kalau butuh penalaran; pilih Muse Spark kalau butuh generasi konten kreatif dengan integrasi native.",
    body: [
      "Meta memperkenalkan Muse Spark sebagai bagian dari eksplorasinya di generative multimodal — model yang sejak awal dirancang untuk menghasilkan teks, gambar, dan audio dalam satu sistem, bukan digabung dari komponen terpisah. Pendekatan ini berbeda dari kebanyakan model open-weight di kelas yang sama, yang biasanya khusus di satu modalitas. Hasilnya adalah model yang mulus untuk pipeline konten, meskipun intelligence indexnya tidak setinggi frontier.",
      "Dalam pengujian editorial Wawasan AI, Muse Spark menunjukkan kelebihannya di workload yang meminta orkestrasi beberapa modalitas: misalnya menghasilkan caption otomatis untuk serangkaian gambar, atau menulis narasi audio dari skrip yang sudah ada. Untuk kasus seperti ini, latensi rendah dan integrasi native multimodal sangat terasa — model tidak perlu 'menerjemahkan' antar modalitas lewat pipeline terpisah.",
      "Kritik yang perlu dicatat: intelligence index 52 (berdasarkan benchmark Artificial Analysis) menempatkannya di bawah frontier seperti Claude Opus 4.5 (90+) atau DeepSeek V3 (60+). Untuk coding agentic, analisis data, atau penalaran berat, Muse Spark kurang tepat — pilih Qwen 3 atau DeepSeek. Untuk generasi konten kreatif, integrasi multimodal, atau eksplorasi di mesin lokal dengan sumber daya terbatas, ia punya nilai yang tidak ditawarkan model lain.",
    ],
    link: "https://ai.meta.com",
    linkLabel: "Situs Resmi",
    date: "2026-06-12",
  },
];

export function getModel(slug: string) {
  return models.find((m) => m.slug === slug);
}
