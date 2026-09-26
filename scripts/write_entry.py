#!/usr/bin/env python3
"""Write ThoughtSpot AI entry to temp file for CJK check."""

entry = '''  {
    slug: "thoughtspot-ai",
    name: "ThoughtSpot AI",
    tagline: "Platform analitik agentic dengan Spotter dan natural language query untuk insight instan",
    tags: ["ThoughtSpot", "Paid", "BI/Analytics", "Enterprise"],
    score: 8.2,
    scores: [
      { label: "Kemampuan Agentic", value: 7.8 },
      { label: "Kualitas Output", value: 8.3 },
      { label: "Pengalaman Pengguna", value: 8.6 },
      { label: "Ekosistem & Integrasi", value: 8.4 },
      { label: "Harga", value: 7.8 },
    ],
    summary:
      "ThoughtSpot AI membawa konsep 'search untuk data' ke level baru lewat Spotter, fitur AI yang memungkinkan pengguna enterprise mengajukan pertanyaan dalam bahasa natural dan langsung mendapatkan chart atau dashboard tervisualisasi tanpa perlu SQL atau bantuan tim IT. Dengan integrasi native ke Slack, Salesforce, dan Google Workspace, ThoughtSpot mencoba menjembatani jurang antara kekuatan analitik tradisional dan kemudahan penggunaan generatif AI.",
    pros: [
      "Natural language query paling lancar di kelas BI: ketik 'penjualan mana tertinggi Q3 lalu?' dan Spotter menghasilkan chart interaktif serta penjelasan statistik dalam hitungan detik",
      "Embed analytics ke aplikasi pihak ketiga dengan mudah — bisa menyematkan dashboard ThoughtSpot langsung ke produk SaaS milik perusahaan tanpa setup backend tambahan",
      "Integrasi Slack原生 memungkinkan tim menerima alert analitik dan pertanyaan AI langsung di channel workspace tanpa harus login ke platform terpisah",
      "Liveboard yang kolaboratif dan real-time lebih responsif dibanding dashboard statis klasik, sangat berguna untuk tim operasional yang perlu memantau metrik secara live",
      "Semantic layer otomatis menyingkirkan kerja manual modeling data — algoritma AI ThoughtSpot menganalisis pola data dan mengonstruksi relasi antar table secara otomatis",
    ],
    cons: [
      "Tidak ada tier gratis sama sekali — semua langganan dalam konteks enterprise dengan minimal ribuan dolar per tahun per user",
      "Kurva belajar masih cukup tinggi untuk administrator: meskipun end-user bisa pakai natural language query, setting up data connector, semantic model, dan governance model memerlukan expertise spesifik",
      "Performa pada dataset sangat besar (ratusan juta record) bisa lambat karena beberapa fitur menggunakan search-based engine bukan columnar storage murni",
      "Vendor lock-in cukup nyata — migrasi keluar dari ThoughtSpot butuh effort signifikan terutama karena ketergantungan pada semantic layer proprietary mereka",
    ],
    verdict:
      "Luar biasa kalau kebutuhanmu memang 'pertanyaan natural language ke data apapun tanpa perlu SQL', tapi biaya enterprise-nya membuat tool ini tidak masuk akal bagi startup kecil atau freelancer Indonesia. Nilai terbaik ada di perusahaan menengah-ke atas yang punya data warehouse terintegrasi dan tim IT yang siap mengelola semantic layer.",
    body: [
      "ThoughtSpot lahir pada 2012 di Mountain View, California, didirikan oleh Ajeet Singh dan Amit Prakash dengan visi yang cukup radikal saat itu: apa kalau mencari insight dari data semudah mencari sesuatu di Google? Berbeda dengan Tableau atau Power BI yang menuntut pengguna memahami struktur data, membuat hubungan antar tabel, dan menulis query SQL — ThoughtSpot membalik paradigma tersebut. Pengguna tinggal mengetik pertanyaan dalam bahasa natural, dan mesin AI mereka (dikenal sebagai Spotter) akan menghasilkan visualisasi yang relevan beserta penjelasan kontekstual. Dalam enam belas tahun sejak pendiriannya, ThoughtSpot berevolusi dari startup ambisius menjadi salah satu pemain penting di ruang enterprise analytics, dengan klien yang mencakup Fortune 500 company seperti Ford, eBay, dan Wells Fargo. Penekanannya selalu pada self-service analytics: siapa pun dalam organisasi — marketer, sales ops, product manager — bisa menjawab pertanyaan bisnis sendiri tanpa bergantung pada data team yang seringkali overwhelmed dengan permintaan report.",
      "Fitur-fitur AI ThoughtSpot yang paling menarik ada tiga lapis. Pertama, Spotter adalah interface utama yang menjalankan natural language query: pengguna mengetik pertanyaan seperti 'trend penjualan produk kami bulan ini' dan mendapatkan hasil berupa chart, tabel, maupun insight tekstual. Yang membedakan Spotter dari chatbot analitik lainnya adalah kedalaman integrasinya — ia terhubung langsung ke data warehouse pelanggan (Snowflake, BigQuery, Databricks, AWS Redshift, atau database on-premise), sehingga setiap query dijalankan di atas data aktual, bukan dataset dummy atau sample. Kedua, SpotterCode menambahkan lapisan code generation: AI bisa mengubah pertanyaan text menjadi kode Python atau SQL yang bisa diekspor dan diintegrasikan ke pipeline analytics yang sudah ada. Ini berguna bagi tim data yang ingin otomasi generasi report rutin. Ketiga, SpotterViz (baru diperkenalkan 2025-2026) melakukan transformasi otomatis dari data mentah ke dashboard interaktif — Anda upload CSV atau hubungkan ke API, dan AI yang menyusun layout, memilih jenis chart yang tepat, dan mengatur hierarki analisis berdasarkan karakteristik data. Untuk non-data-person di perusahaan Indonesia yang akhirnya jadi 'orang data' karena tidak ada analyst dedicated, SpotterViz bisa menjadi titik masuk yang cukup smooth.",
      "Di bidang integrasi, ThoughtSpot menawarkan ekosistem yang cukup komprehensif. Mereka punya konektor native ke Slack, Google Slides, Salesforce, Microsoft Teams, dan Google Workspace — artinya insight bisa muncul di tempat dimana tim biasanya bekerja, tanpa perlu membuka aplikasi BI khusus. Fitur embedded analytics juga cukup matang: perusahaan bisa menyematkan dashboard ThoughtSpot ke produk SaaS mereka sebagai feature value-add, tanpa perlu build capability analytics dari nol. Namun di sisi harga, ini jelas alat enterprise. ThoughtSpot tidak memiliki tier gratis atau bahkan trial yang terjangkau; pricing-nya berbasis per-user subscription mulai dari kisaran USD dua puluh lima hingga lima puluh per bulan (atau kontrak tahunan dengan volume discount). Bagi perusahaan Indonesia, angka itu berarti Rp empat ratus ribu sampai Rp delapan ratus ribu per user per bulan, dan biasanya kontrak minimum three-user dengan commitment minimal satu tahun. Untuk startup Jakarta tahap early-stage atau UMKM yang mungkin membutuhkan dashboard sederhana, biaya ini jauh di luar jangkauan. Kompetitor yang lebih accessible termasuk Metabase (open-source, self-hosted, free) dan Apache Superset (juga open-source), meski keduanya menuntut setup teknis yang lebih banyak dan tidak memiliki fitur AI-native sekuat ThoughtSpot.",
      "Untuk konteks Indonesia, nilai ThoughtSpot paling terasa di korporasi yang sedang transisi digital dan memiliki data tersimpan di cloud — bank, e-commerce, telekomunikasi, dan retail chain. Perusahaan seperti Tokopedia, GoTo, atau Traveloka misalnya, pastilah punya tim data yang sophisticated, dan tools seperti ThoughtSpot bisa mempercepat time-to-insight bagi business users di berbagai department tanpa membebani data engineering team. Trade-off yang perlu dipertimbangkan vendor lock-in: ThoughtSpot proprietary semantic layer berarti migrasi ke platform lain (misalnya pindah ke Snowflake + Looker) butuh replikasi seluruh logic analytical yang sudah dibangun di sana. Belum lagi bahwa infrastruktur ThoughtSpot berjalan sepenuhnya di cloud Amerika Serikat — latency dari Indonesia rata-rata 150-200ms, yang bisa terasa ketika navigasi dashboard kompleks atau drill-down multi-level. Kalau privacy concern soal data sensitif perusahaan adalah prioritas, self-hosted alternative seperti Metabase tetap menjadi pilihan yang lebih aman, meski dengan tradeoff kemampuan AI yang jauh lebih terbatas. Untuk tim yang benar-benar serius dengan 'analytics as a self-service feature' dan budget enterprise tersedia, ThoughtSpot AI adalah investasi jangka panjang yang bisa mengurangi dependency pada data team — tapi hanya jika ada resource internal yang cukup untuk mengelola administrasi dan governance model secara proper.",
    ],
    link: "https://www.thoughtspot.com",
    linkLabel: "Situs Resmi",
    date: "2026-09-26",
    featured: false,
  }'''

import os
path = os.path.expanduser(r"~/AppData/Local/Temp/stacks_entry.txt")
with open(path, 'w', encoding='utf-8') as f:
    f.write(entry)
print(f"Written {len(entry)} chars ({entry.count(chr(10))+1} lines) to {path}")
