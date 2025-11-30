const allQuestions = [
    // --- Tema 1: Pancasila sebagai Pemersatu Bangsa (No. 1 - 40) ---
    {
        id: 1,
        text: "Bunyi sila pertama yang terdapat dalam **Piagam Jakarta** sebelum diubah pada Sidang PPKI 18 Agustus 1945 adalah....",
        options: [
            "Ketuhanan Yang Maha Esa",
            "Ketuhanan, dengan kewajiban menjalankan syari’at Islam bagi pemeluk-pemeluknya",
            "Ketuhanan yang berkebudayaan",
            "Ketuhanan yang berdasar pada prinsip-prinsip keagamaan"
        ],
        correctAnswer: 1,
        rationale: "Piagam Jakarta (naskah 22 Juni 1945) merumuskan sila pertama sebagai 'Ketuhanan, dengan kewajiban menjalankan syari’at Islam bagi pemeluk-pemeluknya.' Rumusan ini diubah oleh PPKI untuk mengakomodasi keberatan dari perwakilan Indonesia Timur.",
        hint: "Perhatikan perumusan sila pertama dalam naskah 22 Juni 1945."
    },
    {
        id: 2,
        text: "Istilah **\"Pancasila\"** sebagai nama dari lima dasar negara bagi Indonesia yang akan merdeka diperkenalkan pertama kali oleh Sukarno pada tanggal....",
        options: [
            "29 Mei 1945",
            "31 Mei 1945",
            "1 Juni 1945",
            "18 Agustus 1945"
        ],
        correctAnswer: 2,
        rationale: "Sukarno menyampaikan pidato berjudul 'Lahirnya Pancasila' pada tanggal **1 Juni 1945** dalam sidang BPUPK.",
        hint: "Tanggal tersebut diperingati sebagai Hari Lahir Pancasila."
    },
    {
        id: 3,
        text: "Dalam sidang pertama BPUPK, tokoh yang mengemukakan gagasan tentang dasar negara yang bersifat **integralistik**, yaitu menekankan pada persatuan antara rakyat dan pemerintah, adalah....",
        options: [
            "Moh. Yamin",
            "Sukarno",
            "Soepomo",
            "Ki Hajar Dewantara"
        ],
        correctAnswer: 2,
        rationale: "**Soepomo** (31 Mei 1945) mengusulkan dasar negara yang salah satu cirinya adalah **Negara Integralistik** atau Negara Persatuan.",
        hint: "Konsep negara yang tidak memihak golongan mana pun."
    },
    {
        id: 4,
        text: "Dalam kehidupan sehari-hari di sekolah, sikap yang mencerminkan pengamalan **Sila Ketiga** Pancasila, **\"Persatuan Indonesia\"**, adalah....",
        options: [
            "Menghargai perbedaan pendapat dalam diskusi kelompok",
            "Melaksanakan ibadah sesuai ajaran agama masing-masing",
            "Menggunakan produk dalam negeri sebagai prioritas dibandingkan produk luar negeri",
            "Membantu teman yang kesusahan tanpa memandang latar belakangnya"
        ],
        correctAnswer: 2,
        rationale: "Menggunakan produk dalam negeri sebagai prioritas (mencintai produk dalam negeri) adalah salah satu bentuk kontribusi untuk menjaga persatuan dan keutuhan bangsa yang didasarkan pada Sila Ketiga.",
        hint: "Sila ke-3 berfokus pada kecintaan terhadap tanah air dan menjaga keutuhan bangsa."
    },
    {
        id: 5,
        text: "Penerapan **nilai Ketuhanan** di lingkungan sekolah yang paling tepat adalah....",
        options: [
            "Menjaga kebersihan dan ketertiban lingkungan sekolah.",
            "Memperlakukan semua teman tanpa diskriminasi.",
            "Memberikan waktu dan tempat untuk teman yang ingin beribadah.",
            "Bermusyawarah untuk menentukan ketua kelas."
        ],
        correctAnswer: 2,
        rationale: "Memberikan kesempatan dan fasilitas beribadah kepada teman adalah wujud toleransi beragama yang sesuai dengan Sila Pertama.",
        hint: "Sila pertama berkaitan dengan toleransi dan praktik keagamaan."
    },
    {
        id: 6,
        text: "Sifat ideologi Pancasila yang memungkinkan untuk berinteraksi, menyesuaikan, dan beradaptasi dengan perkembangan zaman, namun tetap memiliki nilai dasar yang tidak berubah, disebut sebagai **ideologi yang**....",
        options: [
            "Totaliter",
            "Tertutup",
            "Statis",
            "Terbuka"
        ],
        correctAnswer: 3,
        rationale: "Pancasila adalah **ideologi terbuka**, yang berarti ia mampu berinteraksi secara dinamis dan menyesuaikan diri dengan perkembangan zaman.",
        hint: "Sifat ideologi yang mampu menerima pembaharuan."
    },
    {
        id: 7,
        text: "Kemampuan ideologi Pancasila untuk mencerminkan atau memantulkan realitas yang hidup dan berkembang dalam masyarakat Indonesia sehingga memiliki landasan sosiologis dan filosofis yang kuat, disebut sebagai dimensi....",
        options: [
            "Realitas",
            "Idealitas",
            "Fleksibilitas",
            "Normatif"
        ],
        correctAnswer: 0,
        rationale: "**Dimensi realitas** mengacu pada nilai-nilai dasar Pancasila yang bersumber dari nilai-nilai riil yang hidup dan berkembang dalam masyarakat Indonesia.",
        hint: "Dimensi yang berkaitan dengan nilai-nilai yang benar-benar ada dan berakar dalam masyarakat."
    },
    {
        id: 8,
        text: "Dimensi ideologi Pancasila yang menuntut bahwa nilai-nilai Pancasila dapat dijabarkan dan dikembangkan sesuai dengan dinamika dan kebutuhan masyarakat Indonesia, tanpa mengubah nilai dasarnya, adalah dimensi....",
        options: [
            "Realitas",
            "Idealitas",
            "Normatif",
            "Fleksibilitas"
        ],
        correctAnswer: 3,
        rationale: "**Dimensi fleksibilitas** atau dimensi pengembangan menunjukkan bahwa Pancasila mampu dikembangkan dalam kehidupan nyata sesuai perkembangan zaman.",
        hint: "Dimensi yang terkait dengan daya adaptasi dan pengembangan."
    },
    {
        id: 9,
        text: "Peraturan perundang-undangan di Indonesia harus didasarkan dan bersumber pada Pancasila. Hal ini menunjukkan bahwa Pancasila berperan sebagai **sumber dari segala sumber hukum negara**. Peran ini paling sesuai dengan kedudukan Pancasila sebagai....",
        options: [
            "Pandangan Hidup Bangsa",
            "Falsafah Hidup",
            "Ideologi Negara",
            "Dasar Negara"
        ],
        correctAnswer: 3,
        rationale: "Pancasila sebagai **Dasar Negara** (*filosofische grondslag*) berfungsi sebagai fondasi, sumber dari segala sumber hukum negara, dan norma dasar yang mengatur penyelenggaraan negara.",
        hint: "Kedudukan yang berfungsi sebagai fondasi dan sumber hukum utama."
    },
    {
        id: 10,
        text: "Di era bonus demografi, banyak generasi muda diproyeksikan tidak mampu menjadi produktif yang berakibat pada masalah sosial seperti kemiskinan dan tingkat kriminalitas yang tinggi. Perilaku tidak produktif ini secara tidak langsung bertentangan dengan nilai Pancasila terutama sila....",
        options: [
            "Ketuhanan Yang Maha Esa",
            "Kemanusiaan yang Adil dan Beradab",
            "Persatuan Indonesia",
            "Keadilan Sosial bagi Seluruh Rakyat Indonesia"
        ],
        correctAnswer: 3,
        rationale: "Ketidakproduktifan akan memperburuk masalah sosial seperti kemiskinan, yang bertentangan dengan cita-cita **Keadilan Sosial** yang menghendaki kesejahteraan dan membantu saudara sebangsa yang berkekurangan.",
        hint: "Perhatikan dampak sosial dari perilaku tersebut terhadap kesejahteraan bersama."
    },
    {
        id: 11,
        text: "Hubungan antara Pancasila dan Undang-Undang Dasar Negara Republik Indonesia Tahun 1945 dapat digambarkan sebagai....",
        options: [
            "Pancasila diatur oleh UUD NRI 1945.",
            "UUD NRI 1945 adalah penjabaran dari sila-sila Pancasila.",
            "Keduanya merupakan dokumen yang setara dan independen.",
            "UUD NRI 1945 adalah pengganti Pancasila setelah kemerdekaan."
        ],
        correctAnswer: 1,
        rationale: "Pancasila menjadi sumber dan dasar normatif bagi UUD NRI 1945. UUD NRI 1945 adalah hukum dasar tertulis negara yang **menjabarkan nilai-nilai luhur Pancasila**.",
        hint: "Pancasila adalah norma fundamental negara."
    },
    {
        id: 12,
        text: "Dalam pidatonya 1 Juni 1945, Sukarno menggunakan istilah **\"weltanschauung\"** untuk menjelaskan kedudukan Pancasila. Istilah ini relevan dengan kedudukan Pancasila sebagai....",
        options: [
            "Ideologi Negara",
            "Pandangan Hidup Bangsa",
            "Dasar Negara",
            "Cita-cita Hukum"
        ],
        correctAnswer: 1,
        rationale: "*Weltanschauung* dapat dimaknai sebagai perspektif atau cara pandang yang dimiliki bangsa, yang sejalan dengan kedudukan Pancasila sebagai **Pandangan Hidup Bangsa**.",
        hint: "*Weltanschauung* adalah istilah dari bahasa Jerman/Belanda yang berarti 'pandangan dunia'."
    },
    {
        id: 13,
        text: "Setelah selesai berpidato 1 Juni 1945, Sukarno menyatakan bahwa lima sila dasar negara dapat diperas menjadi tiga sila (Trisila) dan bahkan menjadi satu sila tunggal yang disebut....",
        options: [
            "Sila Ketuhanan",
            "Gotong Royong",
            "Sosio-Nasionalisme",
            "Mufakat"
        ],
        correctAnswer: 1,
        rationale: "Intisari dari Pancasila yang diusulkan Sukarno adalah **Gotong Royong**.",
        hint: "Intisari dari Pancasila yang diusulkan Sukarno."
    },
    {
        id: 14,
        text: "Pancasila berfungsi sebagai pedoman atau pegangan hidup yang bersumber dari kehidupan bangsa Indonesia masa lalu, mengajarkan perilaku mulia bagi generasi masa kini dan masa datang. Fungsi ini dimiliki Pancasila dalam kedudukannya sebagai....",
        options: [
            "Dasar Negara",
            "Sumber Hukum",
            "Ideologi Terbuka",
            "Pandangan Hidup Bangsa"
        ],
        correctAnswer: 3,
        rationale: "Pancasila sebagai **pandangan hidup** (*weltanschauung*) memiliki arti sebuah pedoman atau pegangan hidup yang mengikat dan memandu berbagai komponen bangsa Indonesia.",
        hint: "Fungsi sebagai tuntunan perilaku sehari-hari."
    },
    {
        id: 15,
        text: "Pengakuan bahwa semua manusia adalah makhluk ciptaan Tuhan yang memiliki kemuliaan, tidak peduli suku, bangsa, atau agamanya, merupakan penjabaran nilai yang terkandung dalam sila....",
        options: [
            "Ketuhanan Yang Maha Esa",
            "Kemanusiaan yang Adil dan Beradab",
            "Persatuan Indonesia",
            "Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan"
        ],
        correctAnswer: 1,
        rationale: "Sila kedua (**Kemanusiaan yang adil dan beradab**) menganggap semua manusia adalah makhluk ciptaan Tuhan yang memiliki kemuliaan, tanpa memandang perbedaan suku, bangsa, atau agama.",
        hint: "Sila yang berkaitan dengan harkat dan martabat manusia."
    },
    {
        id: 16,
        text: "Tujuan utama pendidikan Pancasila dalam Kurikulum Merdeka yang berarti menghargai dan menghormati perbedaan serta mampu berinteraksi secara positif dengan budaya lain, adalah....",
        options: [
            "Bergotong Royong",
            "Mandiri",
            "Berkebinekaan Global",
            "Bernalar Kritis"
        ],
        correctAnswer: 2,
        rationale: "Salah satu tujuan Pendidikan Pancasila adalah membentuk peserta didik yang **berkebinekaan global**.",
        hint: "Salah satu dimensi Profil Pelajar Pancasila."
    },
    {
        id: 17,
        text: "Konsep \"Tri Pusat Pendidikan\" yang dicetuskan oleh Ki Hajar Dewantara dan digunakan dalam penyusunan buku teks Pendidikan Pancasila meliputi....",
        options: [
            "Sekolah, Pemerintah, dan Masyarakat.",
            "Sekolah, Rumah, dan Lingkungan Masyarakat.",
            "Sekolah, Guru, dan Orang Tua.",
            "Guru, Siswa, dan Kurikulum."
        ],
        correctAnswer: 1,
        rationale: "Konsep **\"Tri Pusat Pendidikan\"** Ki Hajar Dewantara melibatkan sekolah, anggota keluarga di rumah, dan lingkungan masyarakat.",
        hint: "Tiga pilar utama dalam proses pendidikan."
    },
    {
        id: 18,
        text: "Istilah *filosofische grondslag* yang digunakan Sukarno dalam pidatonya pada 1 Juni 1945 memiliki arti dalam bahasa Indonesia sebagai....",
        options: [
            "Pandangan hidup bangsa.",
            "Filsafat atau pemikiran yang menjadi norma dasar.",
            "Dasar negara yang statis.",
            "Ideologi yang terbuka."
        ],
        correctAnswer: 1,
        rationale: "*Filosofische grondslag* berasal dari bahasa Belanda yang berarti **'filsafat atau pemikiran yang menjadi norma dasar'**.",
        hint: "Istilah bahasa Belanda untuk filsafat dasar negara."
    },
    {
        id: 19,
        text: "Kedudukan Pancasila sebagai ideologi negara mengandung arti bahwa Pancasila adalah....",
        options: [
            "Pedoman hidup sehari-hari bagi setiap individu warga negara.",
            "Sumber dari segala sumber hukum yang mengatur negara.",
            "Sistem gagasan, keyakinan, dan cita-cita yang menjadi orientasi hidup dan perjuangan bangsa.",
            "Perjanjian luhur yang hanya berlaku pada masa pendirian negara."
        ],
        correctAnswer: 2,
        rationale: "Ideologi negara adalah **sistem gagasan, keyakinan, dan cita-cita yang menjadi orientasi hidup dan perjuangan bangsa**.",
        hint: "Peran Pancasila sebagai keseluruhan visi dan misi negara."
    },
    {
        id: 20,
        text: "Salah satu nilai yang terkandung dalam Sila Keempat **\"Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan\"** sebagai pandangan hidup adalah....",
        options: [
            "Mengutamakan kepentingan pribadi dan golongan.",
            "Mengambil keputusan bersama melalui jalan musyawarah dan mufakat.",
            "Menghargai perbedaan suku, agama, dan budaya.",
            "Rela berkorban demi kepentingan negara."
        ],
        correctAnswer: 1,
        rationale: "Nilai-nilai Sila Keempat menghendaki agar berbagai keputusan menyangkut kepentingan bersama mestinya diambil dengan jalan **musyawarah dan mufakat**.",
        hint: "Sila ini berfokus pada proses pengambilan keputusan bersama."
    },
    {
        id: 21,
        text: "Semangat yang ditunjukkan oleh tokoh pendiri bangsa dalam menyikapi perbedaan Piagam Jakarta, terutama perubahan sila pertama, adalah sikap....",
        options: [
            "Mementingkan kelompok agama.",
            "Menjunjung tinggi persatuan dan kesatuan.",
            "Memaksakan kehendak mayoritas.",
            "Bersikap radikal dan tidak mau berkompromi."
        ],
        correctAnswer: 1,
        rationale: "Para pendiri bangsa menunjukkan komitmen untuk **menjunjung tinggi persatuan dan kesatuan** dengan kesediaan berkorban dan berkompromi.",
        hint: "Sikap yang memungkinkan terwujudnya pengesahan Pancasila."
    },
    {
        id: 22,
        text: "Proses kesejarahan kelahiran dan perumusan Pancasila menjadi dasar negara secara berurutan diawali dengan....",
        options: [
            "Perumusan (22 Juni 1945) – Kelahiran (1 Juni 1945) – Pengesahan (18 Agustus 1945).",
            "Kelahiran (1 Juni 1945) – Perumusan (22 Juni 1945) – Pengesahan (18 Agustus 1945).",
            "Kelahiran (29 Mei 1945) – Perumusan (1 Juni 1945) – Pengesahan (17 Agustus 1945).",
            "Perumusan (29 Mei 1945) – Kelahiran (18 Agustus 1945) – Pengesahan (17 Agustus 1945)."
        ],
        correctAnswer: 1,
        rationale: "Proses diawali dengan **kelahiran** (Pidato 1 Juni 1945), dilanjutkan dengan **perumusan** (Piagam Jakarta 22 Juni 1945), dan diakhiri dengan **pengesahan** (Sidang PPKI 18 Agustus 1945).",
        hint: "Tahapan dari pidato Sukarno, pembentukan Panitia Sembilan, hingga sidang PPKI."
    },
    {
        id: 23,
        text: "Tindakan yang harus dilakukan oleh seorang pelajar ketika usulan/idenya tidak diterima dalam suatu kegiatan musyawarah di kelas adalah....",
        options: [
            "Tetap memaksakan ide karena merasa paling benar.",
            "Menerima keputusan musyawarah dengan lapang dada.",
            "Menyampaikan protes kepada guru pembimbing.",
            "Mengajak kelompoknya untuk tidak berpartisipasi dalam kegiatan tersebut."
        ],
        correctAnswer: 1,
        rationale: "Sila Keempat menekankan pada pentingnya menghargai dan **menerima keputusan yang dihasilkan dari musyawarah**.",
        hint: "Sikap yang sesuai dengan nilai Sila Keempat."
    },
    {
        id: 24,
        text: "Salah satu ciri negara yang mendasarkan dirinya pada ***filosofische grondslag*** Pancasila adalah....",
        options: [
            "Menganut sistem monarki absolut.",
            "Memiliki dasar yang berisi pemikiran dan semangat untuk bersatu, berdaulat, adil, dan makmur.",
            "Mengutamakan kepentingan golongan tertentu dalam setiap kebijakan.",
            "Menjadikan agama sebagai satu-satunya sumber hukum."
        ],
        correctAnswer: 1,
        rationale: "Pancasila sebagai dasar negara adalah fondasi yang berisi pemikiran dan semangat yang membuat negara Indonesia dapat berdiri kokoh, bersatu, berdaulat, serta bercita-cita merealisasikan masyarakat Indonesia yang adil dan makmur.",
        hint: "Peran Pancasila sebagai fondasi negara."
    },
    {
        id: 25,
        text: "Generasi muda diharapkan dapat menjadi bagian dari generasi penerus bangsa yang berjuang untuk meraih impian Indonesia 2015–2085 dengan mengisi hidup dengan hal-hal yang berguna. Hal ini sejalan dengan komitmen tokoh pendiri bangsa, yaitu....",
        options: [
            "Memiliki semangat untuk berjuang memerdekakan negara-negara terjajah.",
            "Rela berkorban jiwa raga untuk mencapai cita-cita bangsa.",
            "Berpartisipasi aktif mencapai cita-cita bangsa.",
            "Pantang bekerja sama dengan negara yang pernah menjajah."
        ],
        correctAnswer: 2,
        rationale: "Sikap proaktif dan produktif sejalan dengan nilai semangat pendiri bangsa, yaitu **berpartisipasi aktif mencapai cita-cita bangsa**.",
        hint: "Komitmen yang berorientasi pada pencapaian tujuan bersama di masa depan."
    },
    {
        id: 26,
        text: "Nilai Sila Kelima **\"Keadilan Sosial bagi Seluruh Rakyat Indonesia\"** dalam kehidupan bermasyarakat menghendaki adanya sikap....",
        options: [
            "Hidup mewah dan berfoya-foya setelah berhasil.",
            "Menghindari kehidupan bermasyarakat yang plural.",
            "Hidup tenggang rasa dan membantu saudara sebangsa yang berkekurangan.",
            "Bersikap adil hanya kepada golongan atau kelompok sendiri."
        ],
        correctAnswer: 2,
        rationale: "Sila kelima memberikan pesan untuk hidup **tenggang rasa** dan membantu saudara sebangsa yang masih hidup dalam keadaan miskin atau kekurangan.",
        hint: "Perhatikan aspek kesejahteraan bersama."
    },
    {
        id: 27,
        text: "Peran **Badan Pembinaan Ideologi Pancasila (BPIP)** dalam pengembangan buku teks utama Pendidikan Pancasila adalah....",
        options: [
            "Sebagai penyusun utama materi.",
            "Memastikan muatan pembelajaran Pancasila mencerminkan dan memperkuat nilai-nilai Pancasila.",
            "Menentukan Capaian Pembelajaran Kurikulum Merdeka.",
            "Menggantikan peran Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi."
        ],
        correctAnswer: 1,
        rationale: "BPIP berkoordinasi dengan Kemendikbudristek untuk **memastikan muatan pembelajaran Pancasila mencerminkan dan memperkuat nilai-nilai Pancasila**.",
        hint: "Lembaga yang bertugas di bidang pembinaan ideologi."
    },
    {
        id: 28,
        text: "Komitmen untuk menjaga keutuhan negara sehingga tidak terjadi **separatisme** merupakan penerapan nilai Sila Ketiga dalam konteks....",
        options: [
            "Cinta tanah air.",
            "Mencintai produk dalam negeri.",
            "Rela berkorban.",
            "Menghargai perbedaan."
        ],
        correctAnswer: 0,
        rationale: "Menjaga keutuhan negara dari ancaman separatisme adalah wujud nyata dari **cinta tanah air** yang diamanatkan oleh Sila Persatuan Indonesia.",
        hint: "Tindakan yang paling langsung berkaitan dengan integritas wilayah negara."
    },
    {
        id: 29,
        text: "Pembentukan Panitia Sembilan pada tanggal 22 Juni 1945 dilakukan dengan tujuan utama....",
        options: [
            "Mengesahkan UUD NRI 1945.",
            "Merumuskan draf final dasar negara berdasarkan gagasan-gagasan di sidang BPUPK.",
            "Menyelenggarakan sidang kedua BPUPK.",
            "Menetapkan presiden dan wakil presiden pertama."
        ],
        correctAnswer: 1,
        rationale: "Panitia Sembilan dibentuk untuk **merumuskan draf final dasar negara** (Piagam Jakarta).",
        hint: "Kelompok ini menghasilkan Piagam Jakarta."
    },
    {
        id: 30,
        text: "Konsep persatuan dalam Sila Ketiga Pancasila mengingatkan bangsa Indonesia untuk selalu menjunjung semboyan....",
        options: [
            "Tut Wuri Handayani",
            "Ing Ngarso Sung Tulodo",
            "Bhinneka Tunggal Ika",
            "Tiada Hari Tanpa Prestasi"
        ],
        correctAnswer: 2,
        rationale: "Sila Ketiga menghendaki agar setiap orang dapat menghargai berbagai macam perbedaan dengan menjunjung semboyan **‘’Bhinneka Tunggal Ika’’**.",
        hint: "Semboyan yang mengikat keragaman."
    },
    {
        id: 31,
        text: "Salah satu faktor yang mendorong penyusunan buku teks utama Pendidikan Pancasila adalah amanat dari Peraturan Pemerintah Nomor 4 Tahun 2022 yang bertujuan untuk....",
        options: [
            "Menguatkan peran BPIP.",
            "Menerapkan mata pelajaran Pendidikan Pancasila dalam sistem pendidikan nasional.",
            "Mewajibkan metode *student-centered learning*.",
            "Mengintegrasikan Kurikulum Merdeka dengan Kurikulum 2013."
        ],
        correctAnswer: 1,
        rationale: "Buku ini disusun sesuai dengan amanat **Peraturan Pemerintah Nomor 4 Tahun 2022** untuk menerapkan mata pelajaran Pendidikan Pancasila.",
        hint: "Dasar hukum penerapan mata pelajaran."
    },
    {
        id: 32,
        text: "Tanggal pengesahan Pancasila sebagai Dasar Negara Indonesia yang sah secara konstitusional bersamaan dengan pengesahan UUD NRI 1945 adalah....",
        options: [
            "1 Juni 1945",
            "22 Juni 1945",
            "17 Agustus 1945",
            "18 Agustus 1945"
        ],
        correctAnswer: 3,
        rationale: "Pancasila disahkan oleh sidang PPKI yang berlangsung pada **18 Agustus 1945**.",
        hint: "Tanggal Sidang Panitia Persiapan Kemerdekaan Indonesia (PPKI)."
    },
    {
        id: 33,
        text: "Sikap yang perlu ditumbuhkan oleh bangsa Indonesia terhadap perbedaan agama-agama lain agar sesuai dengan nilai Sila Pertama yang berkeadaban adalah....",
        options: [
            "Menghindari pergaulan dengan umat agama lain.",
            "Saling menghargai dan menghormati perbedaan agama-agama lain.",
            "Menyadari bahwa hanya ada satu agama yang benar.",
            "Memaksakan keyakinan agama sendiri kepada orang lain."
        ],
        correctAnswer: 1,
        rationale: "Seluruh orang Indonesia dikehendaki untuk menjalankan ajaran agama yang diyakininya secara leluasa dengan cara yang **saling menghargai dan menghormati perbedaan agama-agama lain**.",
        hint: "Sila Ketuhanan yang diusulkan Sukarno."
    },
    {
        id: 34,
        text: "Komitmen para pendiri negara dalam perumusan dasar negara Pancasila ditunjukkan oleh pernyataan berikut, **kecuali**....",
        options: [
            "Mengutamakan kepentingan bangsa dan negara di atas kepentingan pribadi/golongan.",
            "Memiliki semangat persatuan dan kesatuan.",
            "Mendukung terciptanya cita-cita bangsa.",
            "Bersikap kaku dan menolak kompromi dalam perumusan dasar negara."
        ],
        correctAnswer: 3,
        rationale: "Komitmen pendiri negara ditunjukkan dengan kesediaan berkorban dan berkompromi, sehingga sikap **kaku dan menolak kompromi** justru bertentangan.",
        hint: "Komitmen yang harus diteladani."
    },
    {
        id: 35,
        text: "Nilai-nilai Pancasila yang dijadikan dasar atau alasan dari didirikannya sebuah negara, serta menjadi sistem pemikiran yang berisi nilai-nilai atau prinsip berdirinya negara Indonesia, merupakan pengertian dari Pancasila sebagai....",
        options: [
            "Pandangan Hidup",
            "Ideologi",
            "Filsafat Dasar Negara (*filosofische grondslag*)",
            "Kebijakan Publik"
        ],
        correctAnswer: 2,
        rationale: "Pancasila sebagai filsafat dasar negara (*filosofische grondslag*) dimaknai sebagai sistem pemikiran yang berisi nilai-nilai atau prinsip berdirinya negara Indonesia.",
        hint: "Istilah yang setara dengan dasar negara."
    },
    {
        id: 36,
        text: "Penerapan nilai kemanusiaan (Sila Kedua) dalam kehidupan sehari-hari di masyarakat dapat diwujudkan melalui sikap....",
        options: [
            "Mempertahankan budaya dan tradisi lokal.",
            "Menempatkan setiap manusia dalam posisi setara.",
            "Mengutamakan musyawarah untuk mufakat.",
            "Rela berkorban untuk kepentingan negara."
        ],
        correctAnswer: 1,
        rationale: "Penerapan Sila Kedua salah satunya adalah **menempatkan bahwa setiap manusia, apa pun latar belakang dan identitasnya, dalam posisi setara**.",
        hint: "Sila ini berfokus pada kesetaraan martabat manusia."
    },
    {
        id: 37,
        text: "Perilaku yang bertentangan dengan Sila Persatuan Indonesia (Sila Ketiga) adalah....",
        options: [
            "Mengadakan pertukaran budaya antar daerah.",
            "Menyebarkan ujaran kebencian berdasarkan suku.",
            "Menggunakan hak pilih dalam pemilu.",
            "Menghargai hasil musyawarah."
        ],
        correctAnswer: 1,
        rationale: "**Menyebarkan ujaran kebencian** adalah tindakan yang bertentangan dengan semangat **Persatuan Indonesia**.",
        hint: "Tindakan yang berpotensi memecah belah bangsa."
    },
    {
        id: 38,
        text: "Peran yang harus diutamakan oleh generasi muda untuk menyongsong impian Indonesia Emas 2015–2085 adalah....",
        options: [
            "Biasa saja, tunggu saja waktunya.",
            "Mengutamakan kepentingan pribadi.",
            "Lebih semangat, buat impian dan tindakan nyata.",
            "Menunggu kesempatan dari pemerintah."
        ],
        correctAnswer: 2,
        rationale: "Untuk menyongsong Indonesia Emas, generasi muda harus bersikap proaktif, yaitu **lebih semangat, membuat impian dan tindakan nyata**.",
        hint: "Sikap proaktif yang dibutuhkan generasi emas."
    },
    {
        id: 39,
        text: "Salah satu poin penting yang ditegaskan Sukarno dalam Pidato 1 Juni 1945 adalah kemerdekaan bukanlah akhir dari perjuangan, melainkan harus dilanjutkan dengan mewujudkan....",
        options: [
            "Kekuatan militer yang besar.",
            "Cita-cita bangsa pada masa depan.",
            "Pembangunan infrastruktur.",
            "Kekuatan ekonomi global."
        ],
        correctAnswer: 1,
        rationale: "Kemerdekaan bukanlah akhir dari perjuangan, melainkan harus dilanjutkan dengan **mewujudkan cita-citanya pada masa depan**.",
        hint: "Kemerdekaan sebagai jembatan emas."
    },
    {
        id: 40,
        text: "Dalam upaya memfasilitasi dan memotivasi peserta didik untuk mengalami pembelajaran Pendidikan Pancasila yang berpusat kepada mereka, peran guru adalah....",
        options: [
            "Menghafalkan seluruh materi kepada siswa.",
            "Melakukan aktivitas pembelajaran yang bermakna dan menyenangkan.",
            "Mengabaikan kodrat alam dan kodrat zaman siswa.",
            "Memaksa siswa untuk hanya menggunakan buku teks utama."
        ],
        correctAnswer: 1,
        rationale: "Guru diharapkan mampu memfasilitasi pembelajaran dengan **aktivitas yang bermakna dan menyenangkan**.",
        hint: "Peran guru sesuai dengan semangat Kurikulum Merdeka."
    },

    // --- Tema 2: Membangun Budaya Taat Hukum (No. 41 - 80) ---
    {
        id: 41,
        text: "Peraturan-peraturan yang bersifat memaksa, dibuat oleh lembaga yang berwenang, serta bertujuan untuk menciptakan ketertiban dan keadilan, adalah pengertian dari....",
        options: [
            "Norma Agama",
            "Norma Kesusilaan",
            "Norma Kesopanan",
            "Hukum"
        ],
        correctAnswer: 3,
        rationale: "Hukum adalah kumpulan peraturan yang bersifat memaksa dan dibuat oleh lembaga berwenang untuk menciptakan **ketertiban dan keadilan**.",
        hint: "Peraturan yang ditegakkan oleh otoritas negara."
    },
    {
        id: 42,
        text: "Salah satu tujuan dari hukum adalah untuk memberikan perlindungan kepada setiap individu warga negara dengan cara....",
        options: [
            "Memberikan kebebasan tanpa batas untuk bertindak.",
            "Menjamin hak-hak dan kepentingan setiap individu.",
            "Membiarkan konflik diselesaikan secara pribadi.",
            "Mengutamakan kepentingan kelompok tertentu."
        ],
        correctAnswer: 1,
        rationale: "Tujuan hukum adalah untuk **menjamin hak-hak dan kepentingan setiap individu** warga negara.",
        hint: "Fokus pada aspek jaminan hak."
    },
    {
        id: 43,
        text: "Unsur-unsur yang melekat pada **norma hukum** adalah: (1) dibuat oleh badan yang berwenang, (2) bersifat mengikat, (3) berisikan perintah dan larangan, dan (4)....",
        options: [
            "Sanksinya berupa penyesalan batin",
            "Sanksinya hanya celaan masyarakat",
            "Terdapat sanksi yang tegas dan nyata bagi pelanggarnya",
            "Bersifat tidak memaksa"
        ],
        correctAnswer: 2,
        rationale: "Norma hukum memiliki sanksi yang **tegas, nyata, dan dipaksakan oleh lembaga negara**.",
        hint: "Norma hukum memiliki sanksi yang tegas dan dipaksakan."
    },
    {
        id: 44,
        text: "Norma yang bersumber dari hati nurani manusia itu sendiri, sehingga pelanggarannya akan menimbulkan rasa penyesalan, disebut sebagai norma....",
        options: [
            "Agama",
            "Kesopanan",
            "Kesusilaan",
            "Hukum"
        ],
        correctAnswer: 2,
        rationale: "**Norma Kesusilaan** bersumber dari hati nurani manusia, dan sanksinya adalah rasa bersalah atau penyesalan.",
        hint: "Sumber norma yang bersifat internal/batin."
    },
    {
        id: 45,
        text: "Sanksi norma hukum bersifat....",
        options: [
            "Tidak pasti dan spontan.",
            "Tegas, nyata, dan dipaksakan oleh lembaga negara.",
            "Hanya berupa celaan dan penyesalan.",
            "Diberikan di akhirat."
        ],
        correctAnswer: 1,
        rationale: "Sanksi norma hukum bersifat **tegas, nyata, dan dipaksakan oleh badan/lembaga negara** yang berwenang.",
        hint: "Perhatikan lembaga yang menegakkan sanksi."
    },
    {
        id: 46,
        text: "Kepatuhan dan ketaatan terhadap hukum dapat memberikan manfaat berupa terciptanya....",
        options: [
            "Konflik antarwarga.",
            "Suasana yang kacau.",
            "Kehidupan yang aman, tertib, dan damai.",
            "Ketimpangan sosial yang tajam."
        ],
        correctAnswer: 2,
        rationale: "Ketaatan terhadap hukum akan menciptakan **kehidupan yang aman, tertib, dan damai** di tengah masyarakat.",
        hint: "Hasil positif dari ketaatan terhadap aturan."
    },
    {
        id: 47,
        text: "Asas yang menyatakan bahwa peraturan yang dibuat lebih baru akan mengesampingkan peraturan yang lama (jika setingkat dan mengatur hal yang sama) adalah **asas**....",
        options: [
            "*Lex superior derogat legi inferiori*",
            "*Lex specialis derogat legi generali*",
            "*Lex posterior derogat legi priori*",
            "*Nullum delictum nulla poena sine praevia lege poenali*"
        ],
        correctAnswer: 2,
        rationale: "Asas ***Lex posterior derogat legi priori*** berarti peraturan yang baru mengesampingkan peraturan yang lama.",
        hint: "Asas yang berhubungan dengan waktu terbit."
    },
    {
        id: 48,
        text: "Berdasarkan UU Nomor 12 Tahun 2011, urutan peraturan perundang-undangan di Indonesia di bawah UUD NRI 1945 adalah....",
        options: [
            "UU/Perppu – TAP MPR – Perpres – Perda Provinsi.",
            "TAP MPR – UU/Perppu – Perpres – Perda Provinsi.",
            "Perpres – UU/Perppu – TAP MPR – Perda Provinsi.",
            "UU/Perppu – Perpres – Perda Provinsi – Perda Kab/Kota."
        ],
        correctAnswer: 1,
        rationale: "Urutan yang benar adalah **TAP MPR – UU/Perppu – Perpres – Perda Provinsi** (dan seterusnya).",
        hint: "Perhatikan posisi TAP MPR dan Peraturan Presiden (Perpres)."
    },
    {
        id: 49,
        text: "Mekanisme pembatalan Peraturan Daerah (Perda) Kabupaten/Kota yang isinya bertentangan dengan Undang-Undang (UU) dapat dilakukan melalui jalur....",
        options: [
            "*Judicial Review* di Mahkamah Agung (MA).",
            "Pembatalan oleh Presiden melalui Kementerian Dalam Negeri.",
            "*Judicial Review* di Mahkamah Konstitusi (MK).",
            "Sidang Paripurna DPR."
        ],
        correctAnswer: 0,
        rationale: "Lembaga yang berwenang melakukan uji materiil Peraturan di bawah UU terhadap UU adalah **Mahkamah Agung (MA)**.",
        hint: "Lembaga yang menguji peraturan di bawah UU terhadap UU."
    },
    {
        id: 50,
        text: "Perbedaan mendasar antara **Undang-Undang (UU)** dan **Peraturan Pemerintah Pengganti Undang-Undang (Perppu)** terletak pada....",
        options: [
            "Masa berlaku peraturan.",
            "Materi muatan yang diatur.",
            "Lembaga yang berwenang membuat dan prosedur pembentukannya.",
            "Daya ikat peraturannya."
        ],
        correctAnswer: 2,
        rationale: "Perppu dibuat oleh Presiden dalam kegentingan yang memaksa, sementara UU dibuat oleh DPR bersama Presiden (berbeda di **prosedur pembentukan**).",
        hint: "Perhatikan kondisi darurat dan lembaga yang menetapkannya."
    },
    {
        id: 51,
        text: "Dalam situasi terjadi **kekosongan hukum** atau suatu masalah belum diatur oleh peraturan perundang-undangan yang ada, hakim di Indonesia wajib untuk....",
        options: [
            "Menolak perkara dengan alasan hukumnya tidak ada.",
            "Menunggu hingga pemerintah membuat peraturan baru.",
            "Mencari dan menggali sumber hukum lain, termasuk nilai-nilai yang hidup di masyarakat.",
            "Mengambil keputusan berdasarkan kepentingan pribadi."
        ],
        correctAnswer: 2,
        rationale: "Hakim wajib **mencari dan menggali sumber hukum lain** dan nilai-nilai yang hidup di masyarakat (Prinsip *Ius Curia Novit*).",
        hint: "Prinsip yang menjamin hakim tidak boleh menolak perkara."
    },
    {
        id: 52,
        text: "Lembaga negara yang berwenang melakukan uji materiil (**Judicial Review**) Undang-Undang (UU) terhadap Undang-Undang Dasar Negara Republik Indonesia Tahun 1945 adalah....",
        options: [
            "Mahkamah Agung (MA)",
            "Mahkamah Konstitusi (MK)",
            "Dewan Perwakilan Rakyat (DPR)",
            "Komisi Yudisial (KY)"
        ],
        correctAnswer: 1,
        rationale: "**Mahkamah Konstitusi (MK)** memiliki kewenangan untuk menguji UU terhadap UUD NRI 1945.",
        hint: "Lembaga yang mengawal konstitusi negara."
    },
    {
        id: 53,
        text: "Berdasarkan UU Nomor 12 Tahun 2011, **Ketetapan Majelis Permusyawaratan Rakyat (TAP MPR)** tetap diakui keberadaannya. Hal ini dimaknai bahwa TAP MPR yang ada saat ini bersifat....",
        options: [
            "Tidak berlaku lagi.",
            "Temporer (sementara) hingga diatur lebih lanjut dalam Undang-Undang.",
            "Menggantikan kedudukan UUD NRI 1945.",
            "Setara dengan Undang-Undang."
        ],
        correctAnswer: 1,
        rationale: "TAP MPR yang masih berlaku memiliki sifat **temporer** hingga materi muatannya diatur kembali dalam UU.",
        hint: "Sifat keberlanjutan TAP MPR pasca-perubahan UUD."
    },
    {
        id: 54,
        text: "Salah satu syarat utama agar **Peraturan Menteri (Permen)** dianggap sah dan memiliki kekuatan hukum mengikat adalah....",
        options: [
            "Diatur secara eksplisit dalam Undang-Undang yang lebih tinggi.",
            "Mengatur materi yang bertentangan dengan Pancasila.",
            "Dibuat oleh Presiden dalam keadaan kegentingan yang memaksa.",
            "Berasal dari usulan Dewan Perwakilan Rakyat."
        ],
        correctAnswer: 0,
        rationale: "Peraturan di bawah UU, seperti Permen, harus dibentuk berdasarkan **perintah atau delegasi dari Undang-Undang** yang lebih tinggi (asas *delegated legislation*).",
        hint: "Asas hierarki dalam pembuatan peraturan."
    },
    {
        id: 55,
        text: "Perbedaan mendasar antara **Perda Provinsi** dan **Perda Kabupaten/Kota** adalah pada aspek....",
        options: [
            "Jenis sanksi bagi pelanggarnya.",
            "Materi muatan yang diatur.",
            "Dasar pembentukan dan wilayah berlakunya.",
            "Lembaga yang berwenang membatalkannya."
        ],
        correctAnswer: 2,
        rationale: "Perbedaannya terletak pada **dasar pembentukan** (Gubernur/Bupati/Walikota) dan **wilayah berlakunya** (provinsi/kabupaten/kota).",
        hint: "Perhatikan lembaga eksekutif yang membuatnya dan batas yurisdiksinya."
    },
    {
        id: 56,
        text: "Jika terjadi konflik atau pertentangan antara **Peraturan Presiden (Perpres)** dengan **Undang-Undang (UU)**, maka tindakan yang harus dilakukan adalah....",
        options: [
            "Mengutamakan Perpres karena dibuat oleh Presiden.",
            "Mengutamakan UU karena memiliki kedudukan hierarki yang lebih tinggi.",
            "Melakukan musyawarah antara Presiden dan DPR.",
            "Menangguhkan kedua peraturan."
        ],
        correctAnswer: 1,
        rationale: "Berdasarkan asas hierarki, **Undang-Undang memiliki kedudukan yang lebih tinggi** daripada Perpres, sehingga UU yang diutamakan.",
        hint: "Asas *Lex superior derogat legi inferiori*."
    },
    {
        id: 57,
        text: "Kebijakan negara yang membiarkan **eksploitasi Sumber Daya Alam (SDA) tanpa batas** dan hanya menguntungkan pihak swasta, bertentangan dengan nilai Pancasila, terutama sila....",
        options: [
            "Ketuhanan Yang Maha Esa",
            "Persatuan Indonesia",
            "Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan",
            "Keadilan Sosial bagi Seluruh Rakyat Indonesia"
        ],
        correctAnswer: 3,
        rationale: "Pengelolaan SDA untuk kemakmuran rakyat adalah tuntutan **Sila Keadilan Sosial**, sehingga eksploitasi yang tidak adil melanggar sila ini.",
        hint: "Perhatikan aspek pengelolaan sumber daya untuk kemakmuran bersama."
    },
    {
        id: 58,
        text: "Jika sekelompok warga negara merasa **hak konstitusional** mereka dilanggar oleh suatu ketentuan dalam Undang-Undang, mereka dapat mengajukan permohonan **uji materiil** ke lembaga....",
        options: [
            "Mahkamah Agung (MA)",
            "Komisi Yudisial (KY)",
            "Mahkamah Konstitusi (MK)",
            "Pengadilan Negeri"
        ],
        correctAnswer: 2,
        rationale: "Uji materiil Undang-Undang terhadap UUD NRI 1945 adalah kewenangan mutlak dari **Mahkamah Konstitusi (MK)**.",
        hint: "Perhatikan bahwa yang diuji adalah Undang-Undang dan dasarnya adalah UUD 1945."
    },
    {
        id: 59,
        text: "Ketika suatu peraturan yang lebih rendah dibuat karena adanya perintah atau kewenangan dari peraturan yang lebih tinggi, maka hal ini merujuk pada **asas**....",
        options: [
            "*Lex superior derogat legi inferiori*",
            "*Lex specialis derogat legi generali*",
            "*Lex posterior derogat legi priori*",
            "*Delegated legislation* (Asas Kewenangan Mendelegasikan)"
        ],
        correctAnswer: 3,
        rationale: "Asas **delegated legislation** menyatakan bahwa peraturan pelaksana harus dibentuk atas dasar pendelegasian wewenang dari peraturan yang lebih tinggi.",
        hint: "Asas yang berhubungan dengan pendelegasian wewenang pembuatan peraturan."
    },
    {
        id: 60,
        text: "Upaya menyampaikan aspirasi atau protes terhadap kebijakan pemerintah melalui aksi unjuk rasa, harus dilakukan dengan cara yang....",
        options: [
            "Merusak fasilitas umum.",
            "Memicu kerusuhan dan anarkis.",
            "Tertib, damai, dan sesuai dengan ketentuan hukum.",
            "Memaksa pihak berwenang untuk memenuhi tuntutan."
        ],
        correctAnswer: 2,
        rationale: "Menyampaikan aspirasi harus dilakukan dengan cara yang **tertib, damai, dan sesuai dengan ketentuan hukum**.",
        hint: "Perhatikan cara-cara yang legal dan berkeadaban."
    },
    {
        id: 61,
        text: "Aturan yang menjadi petunjuk hidup yang berasal dari ajaran agama atau kepercayaan, di mana sanksi atas pelanggarannya akan diterima di akhirat, disebut sebagai norma....",
        options: [
            "Hukum",
            "Kesusilaan",
            "Agama",
            "Kesopanan"
        ],
        correctAnswer: 2,
        rationale: "Sanksi ukhrawi (di akhirat) adalah ciri dari **Norma Agama**.",
        hint: "Sumber norma yang bersifat dogmatis."
    },
    {
        id: 62,
        text: "Peraturan yang dibuat oleh pemerintah pusat yang berfungsi untuk melaksanakan Undang-Undang dan disahkan oleh Presiden disebut....",
        options: [
            "Peraturan Presiden (Perpres)",
            "Peraturan Pemerintah (PP)",
            "Peraturan Menteri (Permen)",
            "Peraturan Daerah (Perda)"
        ],
        correctAnswer: 1,
        rationale: "**Peraturan Pemerintah (PP)** ditetapkan oleh Presiden dan berfungsi untuk menjalankan UU.",
        hint: "Jenis peraturan pelaksana UU yang setingkat di bawah UU."
    },
    {
        id: 63,
        text: "Asas dalam hukum yang menyatakan bahwa peraturan yang bersifat khusus (spesialis) akan mengesampingkan peraturan yang bersifat umum (generalis) adalah....",
        options: [
            "*Lex superior derogat legi inferiori*",
            "*Lex specialis derogat legi generali*",
            "*Lex posterior derogat legi priori*",
            "*Nullum delictum nulla poena sine praevia lege poenali*"
        ],
        correctAnswer: 1,
        rationale: "Asas ***Lex specialis derogat legi generali*** adalah asas yang digunakan untuk mengatasi konflik antara peraturan umum dan peraturan khusus.",
        hint: "Asas yang berhubungan dengan ruang lingkup."
    },
    {
        id: 64,
        text: "Sikap yang menunjukkan **ketidaktaatan** terhadap hukum di lingkungan sekolah adalah....",
        options: [
            "Memakai seragam sesuai aturan yang ditetapkan.",
            "Datang terlambat dengan alasan macet.",
            "Tidak menyontek saat ujian.",
            "Berkata sopan kepada guru dan karyawan."
        ],
        correctAnswer: 1,
        rationale: "**Datang terlambat** melanggar tata tertib sekolah yang merupakan bagian dari hukum/aturan di lingkungan sekolah.",
        hint: "Perilaku yang melanggar tata tertib sekolah."
    },
    {
        id: 65,
        text: "Norma yang sumbernya berasal dari pergaulan masyarakat dan sanksinya berupa celaan atau dikucilkan oleh masyarakat setempat adalah norma....",
        options: [
            "Kesusilaan",
            "Agama",
            "Hukum",
            "Kesopanan"
        ],
        correctAnswer: 3,
        rationale: "Sanksi celaan dan pengucilan adalah sanksi dari **Norma Kesopanan**.",
        hint: "Norma yang berkaitan dengan tata krama dalam pergaulan."
    },
    {
        id: 66,
        text: "Kewajiban untuk membayar pajak dan retribusi yang ditetapkan oleh pemerintah daerah diatur dalam jenis peraturan perundang-undangan....",
        options: [
            "Peraturan Presiden",
            "Undang-Undang",
            "Peraturan Pemerintah",
            "Peraturan Daerah"
        ],
        correctAnswer: 3,
        rationale: "Pajak dan retribusi daerah diatur secara rinci dalam **Peraturan Daerah (Perda)**.",
        hint: "Peraturan yang sifatnya lokal/daerah."
    },
    {
        id: 67,
        text: "Hubungan antara Pancasila dengan UUD NRI Tahun 1945 adalah Pancasila menjadi sumber dan dasar normatif bagi UUD. Dengan demikian, Pancasila menempati posisi sebagai....",
        options: [
            "Peraturan pelaksana dari UUD NRI 1945.",
            "Hukum dasar tertulis.",
            "*Staatsfundamentalnorm* (Norma Fundamental Negara).",
            "Perjanjian luhur."
        ],
        correctAnswer: 2,
        rationale: "Pancasila sebagai dasar negara adalah **Norma Fundamental Negara** (*Staatsfundamentalnorm*), yang menjadi landasan bagi UUD NRI 1945.",
        hint: "Norma tertinggi yang menjadi landasan konstitusi."
    },
    {
        id: 68,
        text: "Keputusan bersama yang menyangkut kepentingan umum di masyarakat mestinya diambil dengan jalan musyawarah dan mufakat. Hal ini merupakan pengamalan hukum yang sejalan dengan nilai Pancasila Sila....",
        options: [
            "Kedua",
            "Ketiga",
            "Keempat",
            "Kelima"
        ],
        correctAnswer: 2,
        rationale: "Pengambilan keputusan melalui **musyawarah dan mufakat** merupakan inti dari nilai **Sila Keempat**.",
        hint: "Proses pengambilan keputusan bersama."
    },
    {
        id: 69,
        text: "Lembaga negara yang berhak menguji Peraturan Pemerintah (PP) terhadap Undang-Undang (UU) adalah....",
        options: [
            "Mahkamah Konstitusi (MK)",
            "Komisi Yudisial (KY)",
            "Dewan Perwakilan Rakyat (DPR)",
            "Mahkamah Agung (MA)"
        ],
        correctAnswer: 3,
        rationale: "**Mahkamah Agung (MA)** berwenang menguji peraturan di bawah undang-undang (termasuk PP) terhadap Undang-Undang.",
        hint: "Uji materiil peraturan di bawah UU."
    },
    {
        id: 70,
        text: "Perhatikan kasus berikut: Seorang pengemudi menerobos lampu merah di persimpangan jalan dan menyebabkan kecelakaan. Sanksi yang diterima pengemudi tersebut bersumber dari norma....",
        options: [
            "Kesopanan",
            "Kesusilaan",
            "Agama",
            "Hukum"
        ],
        correctAnswer: 3,
        rationale: "Menerobos lampu merah melanggar peraturan lalu lintas yang merupakan bagian dari **Norma Hukum**.",
        hint: "Sanksi yang bersifat memaksa dan ditegakkan oleh aparat."
    },
    {
        id: 71,
        text: "Asas yang menyatakan bahwa tidak ada perbuatan yang dapat dipidana tanpa adanya undang-undang yang mengaturnya terlebih dahulu adalah....",
        options: [
            "*Lex specialis derogat legi generali*",
            "*Lex posterior derogat legi priori*",
            "*Nullum delictum nulla poena sine praevia lege poenali*",
            "*Lex superior derogat legi inferiori*"
        ],
        correctAnswer: 2,
        rationale: "***Nullum delictum nulla poena sine praevia lege poenali*** adalah asas legalitas yang mewajibkan adanya undang-undang sebelum pidana dijatuhkan.",
        hint: "Asas legalitas dalam hukum pidana."
    },
    {
        id: 72,
        text: "Peraturan Pemerintah Pengganti Undang-Undang (Perppu) diterbitkan oleh Presiden karena adanya....",
        options: [
            "Kesepakatan antara Presiden dan DPR.",
            "Perintah eksplisit dari Mahkamah Konstitusi.",
            "Hal ikhwal kegentingan yang memaksa.",
            "Keinginan pribadi Presiden."
        ],
        correctAnswer: 2,
        rationale: "Perppu dibentuk oleh Presiden dalam kondisi **hal ikhwal kegentingan yang memaksa**.",
        hint: "Kondisi khusus yang memungkinkan penerbitan Perppu."
    },
    {
        id: 73,
        text: "Perilaku yang mencerminkan taat hukum di lingkungan masyarakat adalah....",
        options: [
            "Ikut serta dalam kegiatan tawuran antarwarga.",
            "Mendirikan bangunan di atas saluran air.",
            "Melaporkan tindak kriminal yang terjadi.",
            "Mengambil keputusan tanpa melibatkan warga."
        ],
        correctAnswer: 2,
        rationale: "**Melaporkan tindak kriminal** adalah wujud partisipasi aktif warga negara dalam penegakan hukum.",
        hint: "Tindakan yang mendukung penegakan hukum dan ketertiban."
    },
    {
        id: 74,
        text: "Undang-Undang dibuat oleh....",
        options: [
            "Presiden",
            "Presiden dan Dewan Perwakilan Rakyat (DPR)",
            "Majelis Permusyawaratan Rakyat (MPR)",
            "Mahkamah Konstitusi (MK)"
        ],
        correctAnswer: 1,
        rationale: "Kekuasaan membentuk undang-undang dipegang oleh **DPR** dan disahkan oleh **Presiden**.",
        hint: "Lembaga yang memegang kekuasaan membentuk undang-undang."
    },
    {
        id: 75,
        text: "Asas ***Lex superior derogat legi inferiori*** dalam sistem hukum di Indonesia memiliki arti....",
        options: [
            "Peraturan yang baru mengesampingkan yang lama.",
            "Peraturan yang lebih tinggi mengesampingkan yang lebih rendah.",
            "Peraturan yang khusus mengesampingkan yang umum.",
            "Peraturan harus dilaksanakan secara konsekuen."
        ],
        correctAnswer: 1,
        rationale: "Asas ***Lex superior derogat legi inferiori*** berarti **peraturan yang lebih tinggi mengesampingkan peraturan yang lebih rendah**.",
        hint: "Asas yang berhubungan dengan hierarki."
    },
    {
        id: 76,
        text: "Ketika seseorang merasa sangat menyesal setelah berbohong, rasa penyesalan tersebut adalah sanksi yang berasal dari norma....",
        options: [
            "Hukum",
            "Agama",
            "Kesusilaan",
            "Kesopanan"
        ],
        correctAnswer: 2,
        rationale: "Rasa penyesalan adalah sanksi yang bersifat internal (batin) yang ditimbulkan oleh pelanggaran **Norma Kesusilaan**.",
        hint: "Sanksi yang bersifat batin."
    },
    {
        id: 77,
        text: "Dampak negatif dari ketidaktaatan terhadap peraturan lalu lintas adalah....",
        options: [
            "Peningkatan kesadaran masyarakat.",
            "Terciptanya kelancaran arus lalu lintas.",
            "Meningkatnya risiko kecelakaan dan kerugian materiil.",
            "Pengurangan beban kerja polisi."
        ],
        correctAnswer: 2,
        rationale: "Ketidaktaatan terhadap peraturan lalu lintas akan **meningkatkan risiko kecelakaan** dan kerugian materiil.",
        hint: "Konsekuensi logis dari pelanggaran aturan."
    },
    {
        id: 78,
        text: "Tata urutan Peraturan Perundang-undangan di Indonesia harus mencerminkan tertib hukum yang mengutamakan peraturan yang lebih tinggi. Hal ini sejalan dengan konsep Pancasila sebagai....",
        options: [
            "Pandangan Hidup Bangsa.",
            "Cita-cita Hukum.",
            "Sumber dari segala sumber hukum.",
            "Tujuan Negara."
        ],
        correctAnswer: 2,
        rationale: "Pancasila sebagai **sumber dari segala sumber hukum** menempati posisi tertinggi, sehingga semua peraturan harus bersumber darinya.",
        hint: "Kedudukan Pancasila dalam hierarki peraturan."
    },
    {
        id: 79,
        text: "Pembangunan nasional yang di satu sisi harus mengutamakan kesejahteraan rakyat, namun di sisi lain tetap menjaga keadilan dan keadaban, adalah cerminan nilai Pancasila Sila....",
        options: [
            "Ketiga dan Keempat.",
            "Pertama dan Kedua.",
            "Keempat dan Kelima.",
            "Kedua dan Kelima."
        ],
        correctAnswer: 3,
        rationale: "**Sila Kedua (keadaban)** dan **Sila Kelima (keadilan dan kesejahteraan)** harus menjiwai pembangunan nasional.",
        hint: "Kesejahteraan (adil) dan keadaban (manusiawi)."
    },
    {
        id: 80,
        text: "Peran yang paling tepat dilakukan oleh siswa dalam rangka menegakkan budaya taat hukum di sekolah adalah....",
        options: [
            "Menuntut sanksi tegas kepada teman yang melanggar.",
            "Mengabaikan aturan yang tidak disukai.",
            "Mematuhi semua tata tertib sekolah dengan kesadaran penuh.",
            "Membuat aturan baru tanpa persetujuan guru."
        ],
        correctAnswer: 2,
        rationale: "**Mematuhi semua tata tertib sekolah dengan kesadaran penuh** adalah bentuk nyata dari budaya taat hukum di lingkungan sekolah.",
        hint: "Tindakan yang menunjukkan kesadaran hukum."
    },

    // --- Tema 3: Mengelola Kebinekaan sebagai Modal Sosial (No. 81 - 100) ---
    {
        id: 81,
        text: "Pengakuan akan keanekaragaman suku, agama, ras, dan antargolongan dalam konteks berbangsa dan bernegara disebut....",
        options: [
            "Pluralisme",
            "Integrasi",
            "Separatisme",
            "Monisme"
        ],
        correctAnswer: 0,
        rationale: "**Pluralisme** adalah pengakuan terhadap kemajemukan atau keanekaragaman dalam suatu masyarakat.",
        hint: "Istilah yang berarti pengakuan terhadap banyak keragaman."
    },
    {
        id: 82,
        text: "Semboyan **\"Bhinneka Tunggal Ika\"** memiliki makna yang sangat penting dalam mengelola kebinekaan, yaitu....",
        options: [
            "Walaupun berbeda-beda, tetapi tetap satu jua.",
            "Persatuan tanpa adanya perbedaan.",
            "Kesamaan dalam kebudayaan.",
            "Mementingkan suku bangsa sendiri."
        ],
        correctAnswer: 0,
        rationale: "**\"Bhinneka Tunggal Ika\"** secara harfiah berarti **berbeda-beda tetapi tetap satu jua**, menekankan persatuan di tengah keragaman.",
        hint: "Makna literal dari semboyan."
    },
    {
        id: 83,
        text: "Sikap yang tepat dalam menghadapi kebinekaan di lingkungan masyarakat agar tercipta integrasi nasional adalah....",
        options: [
            "Primordialisme.",
            "Etnosentrisme.",
            "Toleransi dan gotong royong.",
            "Individualisme."
        ],
        correctAnswer: 2,
        rationale: "**Toleransi** dan **gotong royong** adalah modal sosial utama untuk mengelola kebinekaan dan mencapai integrasi nasional.",
        hint: "Sikap positif yang mendukung kesatuan."
    },
    {
        id: 84,
        text: "Dalam upaya mengelola kebinekaan, peran aktif warga negara dalam menghargai perbedaan praktik ibadah umat agama lain sejalan dengan nilai Pancasila Sila....",
        options: [
            "Pertama",
            "Kedua",
            "Ketiga",
            "Keempat"
        ],
        correctAnswer: 0,
        rationale: "Menghargai dan bertoleransi terhadap perbedaan praktik-praktik ibadah adalah tuntutan dari **Sila Pertama: Ketuhanan Yang Maha Esa**.",
        hint: "Perbedaan praktik ibadah."
    },
    {
        id: 85,
        text: "Salah satu potensi konflik yang muncul akibat kebinekaan yang tidak dikelola dengan baik adalah....",
        options: [
            "Peningkatan kerukunan antar umat beragama.",
            "Terciptanya integrasi budaya.",
            "Munculnya disintegrasi atau perpecahan bangsa.",
            "Peningkatan daya saing ekonomi."
        ],
        correctAnswer: 2,
        rationale: "Jika kebinekaan tidak dikelola dengan semangat persatuan, potensi konflik dapat menyebabkan **disintegrasi atau perpecahan bangsa**.",
        hint: "Dampak negatif dari konflik horizontal."
    },
    {
        id: 86,
        text: "Perilaku yang mencerminkan upaya menjaga **kebinekaan budaya** di sekolah adalah....",
        options: [
            "Hanya bergaul dengan teman yang berasal dari suku yang sama.",
            "Mengolok-olok dialek daerah teman.",
            "Mengadakan festival seni yang menampilkan keragaman budaya daerah.",
            "Menghilangkan semua tradisi lokal demi budaya modern."
        ],
        correctAnswer: 2,
        rationale: "**Mengadakan festival seni** adalah cara positif untuk memperkenalkan dan menghargai kebinekaan budaya.",
        hint: "Tindakan yang merayakan dan memelihara keragaman."
    },
    {
        id: 87,
        text: "**Etnosentrisme** dapat mengganggu persatuan karena....",
        options: [
            "Mendorong toleransi.",
            "Memicu diskriminasi dan konflik sosial.",
            "Memperkuat gotong royong.",
            "Mendorong munculnya ideologi terbuka."
        ],
        correctAnswer: 1,
        rationale: "Etnosentrisme (menganggap budaya sendiri paling unggul) dapat memicu rasa superioritas, **diskriminasi, dan konflik sosial**.",
        hint: "Dampak dari menganggap suku sendiri superior."
    },
    {
        id: 88,
        text: "**Integrasi sosial** bertujuan utama untuk....",
        options: [
            "Mencapai kekayaan materi.",
            "Menciptakan keseragaman mutlak.",
            "Membangun masyarakat yang bersatu dan harmonis.",
            "Mengutamakan kepentingan individu."
        ],
        correctAnswer: 2,
        rationale: "Integrasi sosial bertujuan untuk menyatukan perbedaan agar tercipta **masyarakat yang bersatu, serasi, dan harmonis**.",
        hint: "Fokus pada kesatuan dan keselarasan."
    },
    {
        id: 89,
        text: "Dalam pembangunan nasional, kebinekaan dapat dijadikan sebagai **modal sosial** karena....",
        options: [
            "Menimbulkan kerugian ekonomi.",
            "Menyulitkan proses pengambilan keputusan.",
            "Kekayaan sumber daya manusia dan budaya yang beragam dapat mendorong inovasi dan kreativitas.",
            "Mendorong masyarakat untuk menutup diri dari dunia luar."
        ],
        correctAnswer: 2,
        rationale: "Kebinekaan, dengan keragaman budaya dan suku, dapat menjadi **modal sosial** karena mendorong **inovasi dan kreativitas** untuk pembangunan nasional.",
        hint: "Aspek positif dari keragaman bagi pembangunan."
    },
    {
        id: 90,
        text: "Nilai Sila Ketiga, **Persatuan Indonesia**, memiliki fungsi vital dalam menghadapi era globalisasi karena....",
        options: [
            "Menghilangkan batas-batas negara.",
            "Menguatkan pembangunan nasional dan mengantisipasi pengaruh negatif yang dapat memecah belah.",
            "Mendorong sikap individualisme.",
            "Mewajibkan penggunaan produk luar negeri."
        ],
        correctAnswer: 1,
        rationale: "Nilai persatuan berfungsi untuk **menguatkan pembangunan nasional** dan **mengantisipasi** pengaruh globalisasi yang dapat memicu perpecahan.",
        hint: "Fungsi nilai persatuan di tengah tantangan global."
    },
    {
        id: 91,
        text: "Peran negara dalam menjaga kebinekaan, terutama pada isu-isu keagamaan, adalah dengan....",
        options: [
            "Menetapkan satu agama resmi negara.",
            "Mewajibkan semua warga negara untuk mengikuti satu praktik ibadah.",
            "Menjamin kebebasan setiap penduduk untuk memeluk agama dan beribadah sesuai keyakinan.",
            "Mengutamakan kepentingan kelompok mayoritas."
        ],
        correctAnswer: 2,
        rationale: "Negara wajib **menjamin kebebasan** setiap penduduk untuk memeluk agama dan beribadah sesuai keyakinan.",
        hint: "Kewajiban negara terhadap hak asasi beragama."
    },
    {
        id: 92,
        text: "Peran seorang pelajar dalam menciptakan kerukunan antaragama/kepercayaan di lingkungan sekolah adalah....",
        options: [
            "Menghindari berinteraksi dengan teman berbeda agama.",
            "Hanya berpartisipasi dalam kegiatan keagamaan sendiri.",
            "Dapat menghormati dan bekerja sama dengan kelompok agama/kepercayaan yang berbeda.",
            "Mengajak teman pindah ke agama yang sama."
        ],
        correctAnswer: 2,
        rationale: "Pelajar harus **dapat menghormati dan bekerja sama** dengan kelompok agama/kepercayaan yang berbeda untuk menciptakan kerukunan.",
        hint: "Sikap yang mendukung toleransi dan kolaborasi."
    },
    {
        id: 93,
        text: "Pengamalan **Kemanusiaan yang Adil dan Beradab** dalam mengelola kebinekaan menuntut kita untuk....",
        options: [
            "Bersikap diskriminatif terhadap suku minoritas.",
            "Memperlakukan semua manusia dengan martabat yang sama.",
            "Menerapkan hukum adat yang keras.",
            "Mengabaikan hak asasi manusia."
        ],
        correctAnswer: 1,
        rationale: "Sila Kedua menekankan bahwa semua manusia harus **diperlakukan dengan martabat yang sama** dan adil.",
        hint: "Perlakuan yang setara bagi setiap individu."
    },
    {
        id: 94,
        text: "Konflik horizontal yang terjadi antar suku atau antar kelompok di masyarakat dapat diatasi dengan mengedepankan nilai....",
        options: [
            "Individualisme",
            "Primordialisme",
            "Musyawarah untuk Mufakat",
            "Separatisme"
        ],
        correctAnswer: 2,
        rationale: "Nilai **Musyawarah untuk Mufakat** (Sila Keempat) dapat dijadikan sarana untuk menyelesaikan konflik secara damai dan adil.",
        hint: "Sila Keempat yang menjadi solusi konflik."
    },
    {
        id: 95,
        text: "Salah satu bentuk **gotong royong** dalam konteks kebinekaan adalah....",
        options: [
            "Memaksakan kehendak kepada kelompok lain.",
            "Kerja sama hanya dengan kelompok yang memiliki kesamaan.",
            "Kerja sama dan saling bantu antarwarga tanpa memandang latar belakang.",
            "Menolak intervensi dari kelompok lain."
        ],
        correctAnswer: 2,
        rationale: "Gotong royong melibatkan **kerja sama dan saling bantu** antarwarga tanpa memandang latar belakang.",
        hint: "Kerja sama yang melintasi batas perbedaan."
    },
    {
        id: 96,
        text: "Peristiwa perubahan bunyi sila pertama Piagam Jakarta menjadi **Ketuhanan Yang Maha Esa** menunjukkan bahwa para pendiri bangsa mengedepankan....",
        options: [
            "Kepentingan kelompok.",
            "Kepentingan agama tertentu.",
            "Kompromi dan kepentingan persatuan nasional.",
            "Keinginan untuk membentuk negara agama."
        ],
        correctAnswer: 2,
        rationale: "Perubahan tersebut adalah wujud **kompromi** yang mengedepankan **kepentingan persatuan nasional** di atas kepentingan golongan.",
        hint: "Tujuan utama perubahan tersebut."
    },
    {
        id: 97,
        text: "Menghadapi maraknya konten provokatif di media sosial yang mengancam kebinekaan, sikap warga negara yang baik adalah....",
        options: [
            "Ikut menyebarkan konten tersebut.",
            "Bersikap apatis terhadap media sosial.",
            "Tidak ikut menyebarkan dan melaporkan konten tersebut kepada pihak berwenang.",
            "Membalas dengan ujaran kebencian yang sama."
        ],
        correctAnswer: 2,
        rationale: "Warga negara yang baik harus **tidak ikut menyebarkan dan melaporkan** konten provokatif sebagai upaya menjaga ketertiban umum.",
        hint: "Tindakan yang mendukung hukum dan persatuan."
    },
    {
        id: 98,
        text: "Upaya untuk menciptakan **ketertiban dunia** dan perdamaian abadi, seperti yang dicantumkan dalam refleksi, adalah wujud pengamalan Pancasila yang selaras dengan cita-cita....",
        options: [
            "Kemanusiaan yang Adil dan Beradab",
            "Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan",
            "Keadilan Sosial",
            "Persatuan Indonesia"
        ],
        correctAnswer: 0,
        rationale: "Upaya menciptakan ketertiban dunia sejalan dengan nilai **Kemanusiaan yang Adil dan Beradab** (Sila Kedua).",
        hint: "Fokus pada perdamaian dan keadilan global."
    },
    {
        id: 99,
        text: "Dalam komunitas, kelompok mayoritas memberikan ruang kepada kelompok minoritas untuk menjalankan tradisi dan kepercayaannya tanpa intimidasi. Fenomena ini menunjukkan adanya....",
        options: [
            "Hegemoni.",
            "Toleransi berbudaya dan beragama.",
            "Asimilasi budaya.",
            "Primordialisme."
        ],
        correctAnswer: 1,
        rationale: "Memberikan ruang dan tidak melakukan intimidasi adalah wujud nyata dari **toleransi berbudaya dan beragama**.",
        hint: "Sikap positif dalam menerima perbedaan."
    },
    {
        id: 100,
        text: "Adanya **Tri Pusat Pendidikan** yang melibatkan sekolah, rumah, dan masyarakat dalam pembinaan ideologi Pancasila menunjukkan bahwa pembinaan ideologi adalah tanggung jawab....",
        options: [
            "Guru dan Kepala Sekolah saja.",
            "Pemerintah pusat dan daerah.",
            "Bersama, yang harus dipikul secara bergotong-royong.",
            "Orang tua di rumah saja."
        ],
        correctAnswer: 2,
        rationale: "Konsep Tri Pusat Pendidikan mengandung pesan bahwa pembinaan ideologi Pancasila merupakan **tanggung jawab yang harus dipikul bersama, secara bergotong-royong**.",
        hint: "Kesimpulan dari konsep yang melibatkan tiga pilar."
    },

    // --- Tema 4: Menjadi Warga Negara yang Baik (No. 101 - 120) ---
    {
        id: 101,
        text: "Hakikat dari menjadi **Warga Negara yang Baik** (*Good Citizen*) dalam konteks Indonesia adalah....",
        options: [
            "Mendahulukan kepentingan pribadi di atas kepentingan umum.",
            "Menuntut hak tanpa melaksanakan kewajiban.",
            "Mematuhi hukum dan aktif berpartisipasi dalam kehidupan berbangsa dan bernegara.",
            "Bersikap apatis terhadap masalah sosial."
        ],
        correctAnswer: 2,
        rationale: "Warga negara yang baik adalah yang **mematuhi hukum, melaksanakan kewajiban**, dan **aktif berpartisipasi** dalam kehidupan berbangsa dan bernegara.",
        hint: "Peran aktif dan kepatuhan terhadap aturan."
    },
    {
        id: 102,
        text: "Salah satu peran Indonesia dalam Organisasi Internasional, seperti PBB, adalah upaya untuk mewujudkan cita-cita bangsa dalam konteks....",
        options: [
            "Menguasai negara lain.",
            "Menciptakan ketertiban dunia yang berdasarkan kemerdekaan, perdamaian abadi, dan keadilan sosial.",
            "Mencari keuntungan ekonomi semata.",
            "Mendukung salah satu blok kekuatan dunia."
        ],
        correctAnswer: 1,
        rationale: "Keterlibatan Indonesia di dunia internasional bertujuan untuk **menciptakan ketertiban dunia** berdasarkan perdamaian abadi dan keadilan sosial.",
        hint: "Tujuan politik luar negeri bebas aktif Indonesia."
    },
    {
        id: 103,
        text: "Sila yang paling relevan dengan partisipasi aktif warga negara dalam pembangunan nasional yang berorientasi pada kesejahteraan bersama adalah....",
        options: [
            "Ketuhanan Yang Maha Esa",
            "Kemanusiaan yang Adil dan Beradab",
            "Persatuan Indonesia",
            "Keadilan Sosial bagi Seluruh Rakyat Indonesia"
        ],
        correctAnswer: 3,
        rationale: "Pembangunan nasional yang bertujuan mewujudkan kesejahteraan dan kemakmuran bagi seluruh rakyat dijiwai oleh **Sila Keadilan Sosial**.",
        hint: "Pembangunan yang bertujuan untuk mencapai kemakmuran rakyat."
    },
    {
        id: 104,
        text: "Peran serta pelajar dalam mewujudkan cita-cita bangsa di era globalisasi yang tepat adalah....",
        options: [
            "Menghindari penggunaan teknologi asing.",
            "Membangun kreativitas dan inovasi sesuai tuntutan zaman dan nilai Pancasila.",
            "Menunggu kesempatan dari pemerintah.",
            "Mengutamakan produk impor karena dianggap lebih berkualitas."
        ],
        correctAnswer: 1,
        rationale: "Warga negara yang baik di era globalisasi harus **membangun kreativitas dan inovasi** sambil berpegang teguh pada nilai Pancasila.",
        hint: "Sikap proaktif yang dibutuhkan generasi penerus."
    },
    {
        id: 105,
        text: "Terkait fenomena **\"Golongan Putih\" (Golput)** dalam pemilu, respons pembangunan yang sesuai dengan Pancasila (Sila Keempat) adalah....",
        options: [
            "Membiarkan Golput karena itu adalah hak setiap warga negara.",
            "Mengabaikan hak suara mereka dalam perhitungan.",
            "Mendorong peningkatan kesadaran politik dan partisipasi aktif warga negara melalui pendidikan dan sosialisasi.",
            "Memberikan sanksi denda bagi yang Golput."
        ],
        correctAnswer: 2,
        rationale: "**Mendorong peningkatan kesadaran politik dan partisipasi aktif** sejalan dengan nilai **Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan**.",
        hint: "Tindakan yang mendukung Sila Keempat."
    },
    {
        id: 106,
        text: "Salah satu ciri warga negara yang memiliki **semangat kebangsaan** adalah....",
        options: [
            "Menganggap budaya asing lebih baik daripada budaya sendiri.",
            "Memiliki rasa bangga dan cinta terhadap tanah air.",
            "Bersikap apatis terhadap isu-isu nasional.",
            "Mengutamakan kepentingan kelompok di atas kepentingan bangsa."
        ],
        correctAnswer: 1,
        rationale: "**Semangat kebangsaan** diwujudkan dengan **rasa bangga dan cinta terhadap tanah air**.",
        hint: "Perasaan yang mengikat seseorang dengan bangsanya."
    },
    {
        id: 107,
        text: "Dalam menghadapi globalisasi, warga negara yang baik harus mampu menjaga **identitas nasional** Indonesia yang bersumber dari....",
        options: [
            "Budaya Barat yang dominan.",
            "Kepentingan individu.",
            "Nilai-nilai Pancasila.",
            "Hukum internasional."
        ],
        correctAnswer: 2,
        rationale: "**Identitas nasional** Indonesia harus berpegang teguh pada **nilai-nilai Pancasila**.",
        hint: "Jati diri bangsa Indonesia."
    },
    {
        id: 108,
        text: "Korupsi merupakan salah satu perilaku yang sangat bertentangan dengan nilai-nilai Pancasila. Secara spesifik, korupsi paling jelas melanggar nilai....",
        options: [
            "Ketuhanan Yang Maha Esa dan Persatuan Indonesia.",
            "Kemanusiaan yang Adil dan Beradab dan Keadilan Sosial.",
            "Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan.",
            "Semua sila Pancasila."
        ],
        correctAnswer: 1,
        rationale: "Korupsi melanggar **Kemanusiaan yang Adil dan Beradab** (merendahkan martabat) dan **Keadilan Sosial** (mengambil hak rakyat miskin dan menyebabkan ketidakadilan).",
        hint: "Dampak korupsi terhadap martabat dan kesejahteraan rakyat."
    },
    {
        id: 109,
        text: "Salah satu contoh **peran aktif** pelajar dalam pembangunan nasional di bidang pendidikan adalah....",
        options: [
            "Menuntut pemerintah menyediakan fasilitas mewah.",
            "Belajar dengan tekun untuk meningkatkan kualitas sumber daya manusia (SDM) bangsa.",
            "Mengabaikan kebijakan pemerintah.",
            "Hanya fokus pada kegiatan yang menguntungkan diri sendiri."
        ],
        correctAnswer: 1,
        rationale: "**Belajar dengan tekun** adalah kontribusi paling penting pelajar untuk meningkatkan **kualitas SDM** yang dibutuhkan untuk pembangunan nasional.",
        hint: "Kontribusi nyata pelajar yang paling mendasar."
    },
    {
        id: 110,
        text: "Pembangunan nasional yang dijiwai oleh **Sila Pertama: Ketuhanan Yang Maha Esa** harus mencerminkan....",
        options: [
            "Pembangunan yang didasarkan pada salah satu dogma agama.",
            "Pembangunan yang mengabaikan aspek moral dan spiritual.",
            "Pembangunan yang memajukan nilai-nilai moral, spiritual, dan toleransi antarumat beragama.",
            "Pembangunan yang didasarkan pada ateisme." // Modified from original to make A, B, C, D distinct options
        ],
        correctAnswer: 2,
        rationale: "Pembangunan yang dijiwai Sila Pertama harus memajukan **nilai-nilai moral, spiritual**, dan menjunjung tinggi **toleransi**.",
        hint: "Nilai-nilai yang dijiwai oleh sila pertama."
    },
    {
        id: 111,
        text: "Dampak negatif dari **bonus demografi** jika tidak diikuti dengan peningkatan kualitas sumber daya manusia (SDM) adalah....",
        options: [
            "Peningkatan daya saing global.",
            "Terciptanya masyarakat yang produktif.",
            "Peningkatan masalah sosial seperti kemiskinan dan kriminalitas.",
            "Peningkatan kesejahteraan yang merata."
        ],
        correctAnswer: 2,
        rationale: "Jika SDM tidak berkualitas, bonus demografi akan meningkatkan **masalah sosial** seperti kemiskinan, pengangguran, dan tingkat kriminalitas.",
        hint: "Konsekuensi negatif dari SDM yang tidak berkualitas."
    },
    {
        id: 112,
        text: "Dalam konteks Sila Kedua, untuk mewujudkan **keadilan dan keadaban** dalam pembangunan nasional, kebijakan yang diambil harus....",
        options: [
            "Hanya memikirkan keuntungan ekonomi.",
            "Mempertimbangkan martabat manusia dan hak asasi.",
            "Didasarkan pada pemaksaan kehendak.",
            "Mengutamakan kepentingan modal besar."
        ],
        correctAnswer: 1,
        rationale: "Pembangunan yang adil dan beradab harus **mempertimbangkan martabat manusia dan hak asasi**, sejalan dengan **Sila Kedua**.",
        hint: "Fokus pada aspek kemanusiaan dan martabat."
    },
    {
        id: 113,
        text: "Sikap **toleransi** dalam kehidupan bermasyarakat merupakan implementasi nilai Pancasila Sila....",
        options: [
            "Pertama dan Kedua.",
            "Pertama dan Ketiga.",
            "Kedua dan Keempat.",
            "Ketiga dan Kelima."
        ],
        correctAnswer: 1,
        rationale: "Toleransi terkait dengan: **Sila Pertama** (toleransi beragama) dan **Sila Ketiga** (toleransi terhadap perbedaan suku, budaya, dan ras).",
        hint: "Sikap menghargai perbedaan."
    },
    {
        id: 114,
        text: "Salah satu peran Indonesia di tingkat internasional adalah menjadi anggota PBB dan berpartisipasi dalam misi perdamaian. Hal ini menunjukkan komitmen Indonesia terhadap....",
        options: [
            "Netralitas politik luar negeri.",
            "Politik luar negeri yang bebas aktif.",
            "Politik isolasionisme.",
            "Doktrin pertahanan mutlak."
        ],
        correctAnswer: 1,
        rationale: "Partisipasi aktif dalam urusan dunia adalah wujud pelaksanaan **politik luar negeri bebas aktif** Indonesia.",
        hint: "Sifat politik luar negeri Indonesia."
    },
    {
        id: 115,
        text: "Dalam kehidupan bernegara, hak warga negara untuk menyampaikan aspirasi atau protes harus dilakukan melalui cara yang legal. Hal ini sejalan dengan prinsip....",
        options: [
            "Kekuasaan penuh pemerintah.",
            "Kepatuhan terhadap hukum.",
            "Otoritarianisme.",
            "Individualisme politik."
        ],
        correctAnswer: 1,
        rationale: "Penyampaian aspirasi harus **sesuai dengan ketentuan hukum**, menunjukkan pentingnya **kepatuhan terhadap hukum**.",
        hint: "Keseimbangan antara hak dan aturan."
    },
    {
        id: 116,
        text: "Perilaku yang mencerminkan **tenggang rasa** dalam kehidupan bertetangga adalah....",
        options: [
            "Menjaga ketenangan saat tetangga sedang sakit.",
            "Berfoya-foya tanpa mempedulikan lingkungan.",
            "Menutup diri dari interaksi sosial.",
            "Mencampuri urusan pribadi tetangga."
        ],
        correctAnswer: 0,
        rationale: "**Tenggang rasa** adalah sikap menghargai dan memedulikan perasaan orang lain, sejalan dengan Sila Kelima.",
        hint: "Sikap peduli terhadap keadaan orang lain."
    },
    {
        id: 117,
        text: "**Bhinneka Tunggal Ika** dalam praktik kehidupan berbangsa dan bernegara berfungsi sebagai....",
        options: [
            "Alat untuk menyeragamkan budaya.",
            "Landasan untuk menghilangkan perbedaan.",
            "Pengikat persatuan dan kesatuan bangsa.",
            "Doktrin untuk memisahkan diri dari dunia."
        ],
        correctAnswer: 2,
        rationale: "Semboyan **Bhinneka Tunggal Ika** berfungsi sebagai **pengikat persatuan dan kesatuan bangsa** di tengah kebinekaan.",
        hint: "Peran semboyan negara."
    },
    {
        id: 118,
        text: "Salah satu upaya yang dapat dilakukan untuk mengatasi perilaku yang bertentangan dengan Pancasila adalah melalui....",
        options: [
            "Membiarkan masalah diselesaikan sendiri.",
            "Menghukum pelaku tanpa proses hukum.",
            "Sosialisasi dan pengamalan nilai-nilai Pancasila secara kontekstual dalam kehidupan sehari-hari.",
            "Memperkuat sikap individualisme."
        ],
        correctAnswer: 2,
        rationale: "Upaya solutif adalah **sosialisasi dan pengamalan nilai-nilai Pancasila secara kontekstual**.",
        hint: "Tindakan pencegahan dan penguatan ideologi."
    },
    {
        id: 119,
        text: "Prinsip dalam Sila Kerakyatan yang mengutamakan **kepentingan umum** daripada kepentingan pribadi atau golongan dalam kehidupan sehari-hari berarti....",
        options: [
            "Setiap orang harus mengorbankan semua kebutuhan pribadinya.",
            "Keputusan bersama diambil demi kebaikan dan kepentingan seluruh masyarakat.",
            "Kepentingan kelompok mayoritas harus diutamakan.",
            "Kepentingan pemimpin harus selalu didahulukan."
        ],
        correctAnswer: 1,
        rationale: "Nilai Sila Keempat mengutamakan kepentingan umum, yang berarti **keputusan bersama diambil demi kebaikan dan kepentingan seluruh masyarakat**.",
        hint: "Makna dari musyawarah yang berhikmat."
    },
    {
        id: 120,
        text: "Kedudukan Pancasila yang memberikan nilai-nilai keteladanan untuk dipraktikkan dalam kehidupan bermasyarakat, sehingga tanpa Pancasila Indonesia akan terombang-ambing, adalah kedudukan Pancasila sebagai....",
        options: [
            "Dasar Negara",
            "Ideologi Negara",
            "Pandangan Hidup Bangsa",
            "Tujuan Negara"
        ],
        correctAnswer: 2,
        rationale: "Tanpa Pancasila sebagai **Pandangan Hidup Bangsa** (*weltanschauung*), Indonesia tidak memiliki pedoman dan nilai-nilai keteladanan.",
        hint: "Fungsi Pancasila sebagai pedoman hidup."
    },
    // Lanjutan dari Soal sebelumnya (ID 1-120)
    // --- ID 121 - 240 ---
    
    // MATERI 1: SEJARAH & PERUMUSAN PANCASILA (Lanjutan)
    {
        id: 121,
        text: "Mr. Mohammad Yamin mengusulkan dasar negara pada tanggal 29 Mei 1945. Salah satu usulan yang ia sampaikan secara tertulis adalah....",
        options: [
            "Peri Ketuhanan",
            "Mufakat atau Demokrasi",
            "Kesejahteraan Sosial",
            "Internasionalisme"
        ],
        correctAnswer: 0,
        rationale: "Usulan tertulis Moh. Yamin mencakup Ketuhanan, Kebangsaan, Rasa Kemanusiaan, Kerakyatan, dan Keadilan Sosial.",
        hint: "Usulan yang berbasis 'Peri'."
    },
    {
        id: 122,
        text: "Pidato Ir. Soekarno pada 1 Juni 1945 menyebut Pancasila sebagai **Philosofische Grondslag**. Istilah ini berarti....",
        options: [
            "Pandangan hidup bangsa",
            "Dasar filsafat atau fundamen negara",
            "Perjanjian luhur bangsa",
            "Kepribadian bangsa"
        ],
        correctAnswer: 1,
        rationale: "Philosofische Grondslag berarti dasar filsafat, fundamen, atau pikiran sedalam-dalamnya yang melandasi berdirinya negara.",
        hint: "Fundamen untuk mendirikan gedung Indonesia merdeka."
    },
    {
        id: 123,
        text: "Meskipun berbeda pandangan (Nasionalis dan Islam), para pendiri bangsa akhirnya mencapai titik temu (kompromi) dalam Panitia Sembilan yang menghasilkan naskah....",
        options: [
            "Teks Proklamasi",
            "UUD 1945",
            "Piagam Jakarta",
            "Dekrit Presiden"
        ],
        correctAnswer: 2,
        rationale: "Piagam Jakarta adalah hasil kompromi antara golongan nasionalis dan Islam pada 22 Juni 1945.",
        hint: "Naskah 22 Juni 1945."
    },
    {
        id: 124,
        text: "Perubahan frasa 'dengan kewajiban menjalankan syari’at Islam bagi pemeluk-pemeluknya' menjadi 'Ketuhanan Yang Maha Esa' diputuskan oleh PPKI atas usul....",
        options: [
            "Moh. Yamin",
            "Drs. Moh. Hatta yang mendengar aspirasi dari Indonesia Timur",
            "Ir. Soekarno",
            "Mr. Soepomo"
        ],
        correctAnswer: 1,
        rationale: "Drs. Moh. Hatta adalah yang menyampaikan keberatan wakil Indonesia Timur dan mengusulkan perubahan tersebut demi persatuan.",
        hint: "Tokoh dari Sumatera yang berperan penting dalam kompromi 18 Agustus."
    },
    {
        id: 125,
        text: "Sikap Mr. Soepomo yang mengusulkan konsep negara integralistik dalam sidang BPUPK dilandasi oleh kekhawatiran terhadap....",
        options: [
            "Perang Dunia II",
            "Sistem negara liberal dan individualis yang dapat memecah belah bangsa",
            "Ancaman Jepang",
            "Kekurangan sumber daya alam"
        ],
        correctAnswer: 1,
        rationale: "Konsep integralistik Soepomo menolak gagasan negara yang memisahkan individu dengan negara (liberalisme), demi persatuan dan kesatuan.",
        hint: "Menolak pemisahan individu dan negara."
    },
    {
        id: 126,
        text: "Faktor utama yang mendorong pembentukan Panitia Sembilan setelah sidang BPUPK pertama adalah....",
        options: [
            "Menyusun teks Proklamasi.",
            "Merumuskan mukadimah UUD sebagai kompromi atas perbedaan dasar negara antara golongan Islam dan Nasionalis.",
            "Menentukan anggota PPKI.",
            "Mengubah nama Indonesia menjadi Republik."
        ],
        correctAnswer: 1,
        rationale: "Panitia Sembilan dibentuk untuk merumuskan rancangan Pembukaan UUD sebagai solusi atas perdebatan rumusan dasar negara.",
        hint: "Kompromi dua golongan besar."
    },
    
    // MATERI 2: KEDUDUKAN & FUNGSI PANCASILA (Lanjutan)
    {
        id: 127,
        text: "Pancasila sebagai **cita hukum** (*Rechtsidee*) bagi bangsa Indonesia berarti bahwa....",
        options: [
            "Hukum harus dibuat seberat mungkin.",
            "Semua hukum harus mencerminkan nilai-nilai moral dan keadilan Pancasila.",
            "Pancasila hanya berlaku di pengadilan.",
            "Pancasila dapat diubah oleh Mahkamah Konstitusi."
        ],
        correctAnswer: 1,
        rationale: "Cita hukum adalah ide tertinggi tentang keadilan, sehingga seluruh hukum harus dijiwai dan mencerminkan nilai-nilai moral Pancasila.",
        hint: "Tujuan moral dan keadilan dari hukum."
    },
    {
        id: 128,
        text: "Perbedaan mendasar antara Pancasila sebagai **Ideologi Terbuka** dan Ideologi Tertutup terletak pada....",
        options: [
            "Pancasila berasal dari luar negeri, sedangkan ideologi tertutup dari dalam.",
            "Pancasila bersifat dinamis, terbuka terhadap kritik, dan menghargai partisipasi, sedangkan ideologi tertutup dogmatis dan memaksakan nilai.",
            "Pancasila tidak memiliki nilai-nilai dasar.",
            "Pancasila dianut oleh semua negara."
        ],
        correctAnswer: 1,
        rationale: "Ideologi terbuka bersifat luwes, adaptif, dan demokratis, berbeda dengan ideologi tertutup yang kaku, dogmatis, dan otoriter.",
        hint: "Demokratis vs Dogmatis."
    },
    {
        id: 129,
        text: "Korupsi, kolusi, dan nepotisme (KKN) sangat bertentangan dengan Pancasila, khususnya Sila ke-5, karena....",
        options: [
            "KKN adalah bentuk kejahatan pribadi.",
            "KKN menghambat pemerataan pembangunan dan keadilan sosial bagi seluruh rakyat.",
            "KKN melanggar norma kesopanan.",
            "KKN hanya terjadi di kota besar."
        ],
        correctAnswer: 1,
        rationale: "KKN adalah perbuatan tidak adil yang merampas hak rakyat, sehingga sangat bertentangan dengan prinsip Keadilan Sosial.",
        hint: "Konteks Keadilan Sosial dan pemerataan."
    },
    {
        id: 130,
        text: "Jika Indonesia menggunakan sistem negara sekuler, konsekuensinya adalah....",
        options: [
            "Semua warga wajib beragama.",
            "Negara memisahkan urusan agama dari urusan publik dan pemerintahan.",
            "Negara hanya mengakui satu agama resmi.",
            "Warga negara dilarang menjalankan ibadah."
        ],
        correctAnswer: 1,
        rationale: "Negara sekuler adalah negara yang memisahkan secara tegas urusan agama dan negara, berbeda dengan Indonesia yang mengakui Ketuhanan.",
        hint: "Pemisahan agama dan politik."
    },
    {
        id: 131,
        text: "Pancasila sebagai **Dasar Negara** mewajibkan semua pejabat publik dan lembaga negara untuk....",
        options: [
            "Mengutamakan kepentingan partai.",
            "Menjalankan tugas dan wewenang sesuai nilai-nilai dan moral Pancasila.",
            "Hanya mengikuti peraturan internasional.",
            "Bekerja tanpa pengawasan."
        ],
        correctAnswer: 1,
        rationale: "Sebagai dasar negara, Pancasila menuntut penyelenggara negara menjunjung tinggi nilai-nilai yang terkandung di dalamnya.",
        hint: "Implementasi pada aparatur negara."
    },
    {
        id: 132,
        text: "Pancasila mengandung **Dimensi Realitas** yang tinggi. Hal ini dibuktikan dengan....",
        options: [
            "Hanya menjadi mimpi para pendiri bangsa.",
            "Diadopsi secara paksa dari ideologi asing.",
            "Nilai-nilai Pancasila digali dan bersumber dari adat istiadat, kebudayaan, dan nilai religius bangsa Indonesia sendiri.",
            "Sering diubah sesuai kepentingan penguasa."
        ],
        correctAnswer: 2,
        rationale: "Dimensi realitas berarti nilai Pancasila hidup dan berakar dalam kehidupan nyata masyarakat Indonesia.",
        hint: "Asal-usul nilai Pancasila dari budaya lokal."
    },
    
    // MATERI 3: IMPLEMENTASI SILA PANCASILA (Lanjutan)
    {
        id: 133,
        text: "Seorang siswa yang melakukan **tabayyun** (cek dan ricek kebenaran) sebelum menyebarkan informasi di media sosial, menunjukkan pengamalan Sila ke....",
        options: [
            "1 dan 2 (Kemanusiaan dan Beradab)",
            "3 dan 4 (Persatuan dan Kerakyatan)",
            "4 dan 5 (Kerakyatan dan Keadilan)",
            "1 dan 3 (Ketuhanan dan Persatuan)"
        ],
        correctAnswer: 1,
        rationale: "Menjaga kebenaran adalah bagian dari hikmat kebijaksanaan (Sila 4), dan mencegah perpecahan (hoaks) adalah bagian dari Persatuan (Sila 3).",
        hint: "Bijak bermedia sosial menjaga persatuan dan akal sehat."
    },
    {
        id: 134,
        text: "Ketika seorang pejabat memilih bersikap **hidup sederhana** dan menjauhi kemewahan, ia mengamalkan butir Sila ke-5 yang bertujuan untuk....",
        options: [
            "Menunjukkan kekuatan.",
            "Menghindari sikap pemerasan.",
            "Memperlihatkan kesetiakawanan sosial dan tidak mencolok.",
            "Mendapatkan pujian."
        ],
        correctAnswer: 2,
        rationale: "Hidup sederhana adalah cerminan dari kesetiakawanan sosial dan keadilan, di mana kesenjangan sosial dihindari.",
        hint: "Menjauhi ketidakadilan sosial."
    },
    {
        id: 135,
        text: "Gotong royong sebagai nilai luhur bangsa merupakan intisari dari sila-sila Pancasila. Gotong royong adalah **Ekasila** yang diusulkan oleh....",
        options: [
            "Moh. Hatta",
            "Mr. Soepomo",
            "Ir. Soekarno",
            "Moh. Yamin"
        ],
        correctAnswer: 2,
        rationale: "Ir. Soekarno dalam pidato 1 Juni 1945 mengatakan jika Pancasila diperas lagi, isinya adalah Trisila (Sosio-Nasionalisme, Sosio-Demokrasi, Ketuhanan), dan jika diperas lagi adalah Ekasila, yaitu Gotong Royong.",
        hint: "Tokoh yang memeras Pancasila menjadi Ekasila."
    },
    {
        id: 136,
        text: "Sikap **fanatisme agama** yang berlebihan hingga memicu konflik SARA sangat bertentangan dengan....",
        options: [
            "Sila ke-4 (Kerakyatan)",
            "Sila ke-1 (Ketuhanan) dan Sila ke-3 (Persatuan)",
            "Sila ke-5 (Keadilan Sosial)",
            "Sila ke-2 (Kemanusiaan)"
        ],
        correctAnswer: 1,
        rationale: "Fanatisme yang merusak kerukunan melanggar toleransi (Sila 1) dan mengancam keutuhan bangsa (Sila 3).",
        hint: "Merusak kerukunan dan keutuhan."
    },
    {
        id: 137,
        text: "Hak dan Kewajiban harus dilaksanakan secara seimbang. Tindakan menuntut hak tanpa melaksanakan kewajiban merupakan pelanggaran terhadap prinsip keadilan dalam Sila ke....",
        options: [
            "2",
            "3",
            "4",
            "5"
        ],
        correctAnswer: 3,
        rationale: "Keseimbangan antara hak dan kewajiban adalah prinsip utama dalam mencapai Keadilan Sosial.",
        hint: "Keseimbangan dan keadilan."
    },
    {
        id: 138,
        text: "Dalam menghadapi perbedaan pandangan saat rapat, kita wajib menghormati pendapat anggota lain meskipun pendapatnya berbeda. Hal ini sesuai dengan prinsip....",
        options: [
            "Asas Desentralisasi",
            "Asas Kekeluargaan dan Demokrasi (Sila 4)",
            "Asas Integralistik",
            "Asas Pembangunan Berkelanjutan"
        ],
        correctAnswer: 1,
        rationale: "Menghormati pendapat adalah etika bermusyawarah yang esensial dalam Sila ke-4 (Kerakyatan).",
        hint: "Sila musyawarah dan hikmat kebijaksanaan."
    },
    
    // MATERI 4: NORMA DAN KONSTITUSI (Lanjutan)
    {
        id: 139,
        text: "Asas dalam hierarki peraturan perundang-undangan yang menyatakan bahwa 'peraturan yang lebih baru mengesampingkan peraturan yang lama' adalah....",
        options: [
            "Lex Superior Derogat Legi Inferiori",
            "Lex Specialis Derogat Legi Generali",
            "Lex Posterior Derogat Legi Priori",
            "Asas Keterbukaan"
        ],
        correctAnswer: 2,
        rationale: "Lex Posterior Derogat Legi Priori berarti hukum yang baru mengalahkan hukum yang lama.",
        hint: "Posterior = Baru, Priori = Lama."
    },
    {
        id: 140,
        text: "Peraturan yang dibentuk oleh Presiden untuk melaksanakan Undang-Undang sebagaimana mestinya adalah....",
        options: [
            "Peraturan Presiden (Perpres)",
            "Peraturan Pemerintah (PP)",
            "Keputusan Presiden (Keppres)",
            "Instruksi Presiden (Inpres)"
        ],
        correctAnswer: 1,
        rationale: "Peraturan Pemerintah (PP) adalah aturan turunan yang berfungsi melaksanakan UU.",
        hint: "Pelaksana UU."
    },
    {
        id: 141,
        text: "Syarat utama agar sebuah peraturan perundang-undangan dapat dikatakan sah secara formal adalah....",
        options: [
            "Materi muatannya tebal.",
            "Dibuat sesuai prosedur dan oleh lembaga yang berwenang (asas kewenangan).",
            "Sudah disetujui Mahkamah Agung.",
            "Isinya sesuai dengan semua kehendak rakyat."
        ],
        correctAnswer: 1,
        rationale: "Keabsahan formal mensyaratkan peraturan dibuat oleh lembaga yang berwenang (kompeten) dan melalui prosedur yang ditetapkan.",
        hint: "Prosedur dan Lembaga Pembuat."
    },
    {
        id: 142,
        text: "Kewajiban negara untuk menyelenggarakan sistem pendidikan nasional dan mengalokasikan minimal 20% APBN/APBD diatur dalam Pasal....",
        options: [
            "29",
            "30",
            "31",
            "33"
        ],
        correctAnswer: 2,
        rationale: "Pasal 31 UUD 1945 mengatur tentang hak dan kewajiban warga negara dan pemerintah di bidang pendidikan.",
        hint: "Pasal Pendidikan."
    },
    {
        id: 143,
        text: "Hak warga negara untuk **memperoleh lingkungan hidup yang baik dan sehat** dijamin dalam UUD 1945, yang merupakan penjabaran dari Sila ke-....",
        options: [
            "2 dan 5",
            "1 dan 3",
            "4 dan 5",
            "1 dan 2"
        ],
        correctAnswer: 0,
        rationale: "Lingkungan hidup yang baik adalah hak asasi (Sila 2) dan merupakan bagian dari kesejahteraan/keadilan sosial (Sila 5).",
        hint: "Hak Asasi dan Kesejahteraan."
    },
    {
        id: 144,
        text: "Dalam pembuatan Undang-Undang, asas yang mewajibkan adanya partisipasi publik dan keterbukaan akses informasi adalah asas....",
        options: [
            "Kejelasan rumusan",
            "Keterbukaan",
            "Kedayagunaan",
            "Hierarki"
        ],
        correctAnswer: 1,
        rationale: "Asas keterbukaan menjamin masyarakat berhak memberikan masukan dan mengetahui proses pembentukan peraturan.",
        hint: "Transparansi dan partisipasi."
    },
    
    // MATERI 5: ANALISIS KASUS DAN TANTANGAN (Lanjutan)
    {
        id: 145,
        text: "Salah satu tantangan ideologi Pancasila di era digital adalah munculnya **radikalisme** yang penyebarannya melalui....",
        options: [
            "Media massa tradisional.",
            "Kurikulum sekolah.",
            "Media sosial dan internet yang tidak tersaring.",
            "Ceramah di tempat ibadah."
        ],
        correctAnswer: 2,
        rationale: "Penyebaran ideologi radikal saat ini sangat marak menggunakan platform digital dan media sosial.",
        hint: "Penyebaran yang masif dan anonim."
    },
    {
        id: 146,
        text: "Gerakan **Revolusi Mental** yang dicanangkan pemerintah bertujuan untuk mengubah mentalitas negatif menjadi positif. Tiga nilai intinya adalah Integritas, Etos Kerja, dan....",
        options: [
            "Individualisme",
            "Sentralisasi",
            "Gotong Royong",
            "Liberalisme"
        ],
        correctAnswer: 2,
        rationale: "Tiga nilai utama Revolusi Mental adalah Integritas (bersih), Etos Kerja (produktif), dan Gotong Royong (kooperatif).",
        hint: "Nilai luhur Ekasila."
    },
    {
        id: 147,
        text: "Hak dan kewajiban warga negara yang diatur dalam Pasal 30 UUD 1945 terkait dengan....",
        options: [
            "Kesehatan dan Jaminan Sosial.",
            "Sistem Pertahanan dan Keamanan Negara.",
            "Kemerdekaan berserikat.",
            "Perekonomian nasional."
        ],
        correctAnswer: 1,
        rationale: "Pasal 30 mengatur tentang hak dan kewajiban warga negara dalam usaha pertahanan dan keamanan negara (Sishankamrata).",
        hint: "TNI dan Polri."
    },
    {
        id: 148,
        text: "Sikap **individualisme** dan **hedonisme** yang masuk bersama globalisasi paling kuat bertentangan dengan Sila ke-....",
        options: [
            "1 dan 3",
            "2 dan 4",
            "3 dan 5",
            "4 dan 5"
        ],
        correctAnswer: 2,
        rationale: "Individualisme mengancam Persatuan (Sila 3), sedangkan hedonisme (kemewahan) mengancam Keadilan Sosial dan kesederhanaan (Sila 5).",
        hint: "Ancaman terhadap persatuan dan kesederhanaan."
    },
    {
        id: 149,
        text: "Lembaga negara yang bertugas menjaga kemurnian Pancasila dan ketaatan semua lembaga negara terhadap Konstitusi (UUD 1945) adalah....",
        options: [
            "Mahkamah Agung (MA)",
            "Komisi Pemberantasan Korupsi (KPK)",
            "Majelis Permusyawaratan Rakyat (MPR)",
            "Mahkamah Konstitusi (MK)"
        ],
        correctAnswer: 3,
        rationale: "Mahkamah Konstitusi (MK) adalah penjaga konstitusi yang menguji UU terhadap UUD, memastikan semua peraturan di bawahnya tidak menyimpang dari Pancasila dan UUD 1945.",
        hint: "Penjaga Konstitusi (Judicial Review)."
    },
    {
        id: 150,
        text: "Prinsip **politik luar negeri bebas aktif** yang dianut Indonesia mengandung makna....",
        options: [
            "Bebas dari utang, aktif mencari keuntungan.",
            "Tidak memihak blok manapun, namun aktif berkontribusi dalam perdamaian dunia.",
            "Bebas menentukan nasib negara lain, aktif menjajah.",
            "Bebas melakukan perang, aktif membantu sekutu."
        ],
        correctAnswer: 1,
        rationale: "Bebas berarti tidak terikat pada blok manapun, Aktif berarti berpartisipasi dalam mewujudkan ketertiban dunia (sesuai Alinea IV Pembukaan UUD 1945).",
        hint: "Bebas (netral) dan Aktif (berkontribusi)."
    },
    
    // Soal Analisis Lanjutan (C3/C4)
    {
        id: 151,
        text: "Jika Indonesia kembali ke rumusan Piagam Jakarta, terutama sila pertama yang menyebut syariat Islam, konsekuensi terburuk bagi bangsa adalah....",
        options: [
            "Peningkatan jumlah umat Islam.",
            "Timbulnya disintegrasi bangsa karena perpecahan SARA, terutama di wilayah non-Muslim.",
            "Penguatan ekonomi nasional.",
            "Meningkatnya toleransi."
        ],
        correctAnswer: 1,
        rationale: "Perubahan sila pertama pada 18 Agustus 1945 dilakukan untuk mencegah perpecahan dan menjaga persatuan bangsa (disintegrasi), terutama di Indonesia Timur.",
        hint: "Alasan penghapusan tujuh kata demi keutuhan."
    },
    {
        id: 152,
        text: "Soekarno memeras Pancasila menjadi Ekasila (**Gotong Royong**). Hal ini menunjukkan bahwa....",
        options: [
            "Pancasila dapat diubah kapan saja.",
            "Nilai kerjasama dan kekeluargaan merupakan esensi dan roh fundamental dari Pancasila.",
            "Sila Ketuhanan adalah yang paling utama.",
            "Gotong royong lebih tinggi kedudukannya dari Pancasila."
        ],
        correctAnswer: 1,
        rationale: "Gotong royong dianggap sebagai roh karena mencerminkan cara hidup asli bangsa Indonesia yang mengutamakan kekeluargaan dan kerjasama dalam mencapai kebaikan bersama.",
        hint: "Esensi Pancasila yang paling khas."
    },
    {
        id: 153,
        text: "Ketika seorang anggota DPR menggunakan hak angket untuk menyelidiki kebijakan pemerintah, ia sedang menjalankan fungsi....",
        options: [
            "Legislasi",
            "Anggaran",
            "Pengawasan (Kontrol)",
            "Yudikatif"
        ],
        correctAnswer: 2,
        rationale: "Hak angket adalah salah satu hak DPR untuk melakukan penyelidikan terhadap pelaksanaan undang-undang atau kebijakan pemerintah, yang termasuk fungsi pengawasan.",
        hint: "Fungsi kontrol terhadap eksekutif."
    },
    {
        id: 154,
        text: "Ancaman **perang siber** atau serangan digital terhadap infrastruktur vital negara merupakan tantangan terhadap Sila ke-3 karena....",
        options: [
            "Melanggar norma kesusilaan.",
            "Mengancam kedaulatan, stabilitas nasional, dan persatuan ekonomi bangsa.",
            "Hanya merugikan individu.",
            "Menguntungkan pihak asing."
        ],
        correctAnswer: 1,
        rationale: "Serangan siber mengancam keutuhan dan stabilitas negara, yang merupakan hakikat dari Persatuan Indonesia.",
        hint: "Ancaman terhadap kedaulatan digital."
    },
    {
        id: 155,
        text: "Dalam konteks Pancasila, prinsip **Bhinneka Tunggal Ika** mengandung makna bahwa....",
        options: [
            "Perbedaan harus dihilangkan untuk mencapai kesatuan.",
            "Keragaman suku, agama, dan budaya diakui, namun tetap satu dalam identitas bangsa.",
            "Hanya suku mayoritas yang berhak memimpin.",
            "Perbedaan adalah pemisah."
        ],
        correctAnswer: 1,
        rationale: "Bhinneka Tunggal Ika berarti berbeda-beda (keragaman) tetapi pada hakikatnya tetap satu (kesatuan).",
        hint: "Semboyan pemersatu."
    },
    
    // Soal Analisis Kasus Hukum dan Norma
    {
        id: 156,
        text: "Seorang siswa berinisiatif membentuk kelompok belajar dan berbagi materi dengan teman-temannya tanpa memandang nilai. Sikap ini paling mencerminkan pengamalan Sila ke....",
        options: [
            "1 dan 2",
            "3 dan 5",
            "4 dan 5",
            "1 dan 4"
        ],
        correctAnswer: 1,
        rationale: "Inisiatif belajar bersama (gotong royong/kebersamaan) adalah Persatuan (Sila 3), dan berbagi tanpa diskriminasi adalah Keadilan Sosial (Sila 5).",
        hint: "Gotong royong dan adil."
    },
    {
        id: 157,
        text: "Jika norma hukum di suatu daerah melarang kegiatan seni budaya lokal tertentu, maka norma hukum tersebut berpotensi melanggar hak konstitusional warga negara, yaitu hak....",
        options: [
            "Mendapat pendidikan.",
            "Beragama.",
            "Memajukan kebudayaan nasional (Pasal 32).",
            "Memperoleh pekerjaan."
        ],
        correctAnswer: 2,
        rationale: "Pasal 32 UUD 1945 menjamin negara memajukan kebudayaan nasional, sehingga pelarangan budaya lokal melanggar hak ini.",
        hint: "Pasal Kebudayaan."
    },
    {
        id: 158,
        text: "Masyarakat menolak pembangunan pabrik yang mencemari lingkungan. Tindakan ini merupakan perwujudan ketaatan terhadap norma....",
        options: [
            "Hukum (Pasal 28H tentang lingkungan sehat) dan Norma Kesusilaan (moral menjaga alam).",
            "Agama saja.",
            "Kesopanan saja.",
            "Adat saja."
        ],
        correctAnswer: 0,
        rationale: "Menjaga lingkungan adalah kewajiban hukum (UUD Pasal 28H) dan juga kewajiban moral/kesusilaan (moralitas universal).",
        hint: "Dasar hukum dan moralitas."
    },
    {
        id: 159,
        text: "Sanksi sosial berupa **pengucilan** dari lingkungan masyarakat adalah sanksi yang utama bagi pelanggar norma....",
        options: [
            "Hukum",
            "Agama",
            "Kesusilaan",
            "Kesopanan"
        ],
        correctAnswer: 3,
        rationale: "Norma Kesopanan memiliki sanksi non-fisik berupa cemoohan, teguran, atau dikucilkan oleh masyarakat.",
        hint: "Sanksi bersifat sosial."
    },
    {
        id: 160,
        text: "Pengakuan dan penjaminan hak asasi manusia (HAM) dalam UUD 1945 (Bab XA) adalah penjabaran dari nilai instrumental Pancasila, khususnya Sila ke-....",
        options: [
            "1 dan 3",
            "2 dan 5",
            "3 dan 4",
            "4 dan 5"
        ],
        correctAnswer: 1,
        rationale: "HAM (hak dasar manusia) adalah inti dari Sila Kemanusiaan yang Adil dan Beradab (Sila 2) dan Keadilan Sosial (Sila 5).",
        hint: "Martabat dan Kesejahteraan."
    },
    
    // Soal Tambahan - Mengulang Indikator per 3 Soal
    
    // MATERI 1: SEJARAH PERUMUSAN PANCASILA (Lanjutan)
    
    {
        id: 161,
        text: "Alasan strategis utama penghapusan tujuh kata dalam Piagam Jakarta adalah untuk....",
        options: [
            "Memenuhi tuntutan Sekutu.",
            "Menciptakan kesatuan nasional dan mencegah disintegrasi dari Indonesia Timur.",
            "Mengubah ideologi negara menjadi sekuler.",
            "Mempercepat proklamasi kemerdekaan."
        ],
        correctAnswer: 1,
        rationale: "Penghapusan tujuh kata adalah langkah politik yang sangat strategis demi keutuhan wilayah RI yang baru diproklamasikan.",
        hint: "Mencegah pecah belah."
    },
    {
        id: 162,
        text: "Naskah Piagam Jakarta disahkan oleh Panitia Sembilan pada tanggal....",
        options: [
            "1 Juni 1945",
            "22 Juni 1945",
            "17 Agustus 1945",
            "18 Agustus 1945"
        ],
        correctAnswer: 1,
        rationale: "Piagam Jakarta disahkan oleh Panitia Sembilan pada 22 Juni 1945.",
        hint: "Tanggal 22 Juni."
    },
    {
        id: 163,
        text: "Jika Indonesia tetap menggunakan rumusan sila pertama Piagam Jakarta ('Ketuhanan, dengan kewajiban menjalankan syari’at Islam bagi pemeluk-pemeluknya'), maka Indonesia akan menjadi negara....",
        options: [
            "Sekuler",
            "Islam (Negara Agama)",
            "Federal",
            "Kesatuan yang demokratis"
        ],
        correctAnswer: 1,
        rationale: "Rumusan awal tersebut mengandung unsur teokratis atau negara agama yang berbasis Islam.",
        hint: "Implikasi syariat Islam dalam konstitusi."
    },
    
    {
        id: 164,
        text: "Selain Pancasila, Ir. Soekarno juga menawarkan konsep Trisila dan Ekasila. Konsep Ekasila yang ia usulkan adalah....",
        options: [
            "Sosio-Nasionalisme",
            "Sosio-Demokrasi",
            "Ketuhanan",
            "Gotong Royong"
        ],
        correctAnswer: 3,
        rationale: "Ekasila adalah hasil perasan dari Trisila, yaitu Gotong Royong.",
        hint: "Intisari dari intisari Pancasila."
    },
    {
        id: 165,
        text: "Soekarno menekankan bahwa Pancasila harus menjadi **Weltanschauung**. Hal ini berarti Pancasila adalah....",
        options: [
            "Dasar hukum tertinggi.",
            "Pandangan hidup yang dijiwai oleh nilai-nilai luhur bangsa.",
            "Keputusan mayoritas.",
            "Sistem pertahanan negara."
        ],
        correctAnswer: 1,
        rationale: "Weltanschauung berarti pandangan dunia atau pandangan hidup bangsa.",
        hint: "Cara pandang dan pedoman."
    },
    {
        id: 166,
        text: "Langkah-langkah yang diusulkan Soekarno dalam pidato 1 Juni 1945 untuk menyusun dasar negara adalah....",
        options: [
            "Membentuk MPR, DPR, dan MK.",
            "Mendirikan negara dengan lima prinsip: Kebangsaan, Kemanusiaan, Mufakat, Kesejahteraan Sosial, dan Ketuhanan.",
            "Mengadakan pemilu secara langsung.",
            "Mengubah sistem pemerintahan menjadi monarki."
        ],
        correctAnswer: 1,
        rationale: "Soekarno mengusulkan lima sila: Kebangsaan Indonesia, Internasionalisme atau Peri Kemanusiaan, Mufakat atau Demokrasi, Kesejahteraan Sosial, dan Ketuhanan Yang Maha Esa/Berkebudayaan.",
        hint: "Lima prinsip Soekarno."
    },
    
    {
        id: 167,
        text: "Perbedaan mendasar antara usulan dasar negara Moh. Yamin dan Ir. Soekarno terletak pada....",
        options: [
            "Yamin mengusulkan Ketuhanan berbudaya, Soekarno mengusulkan Ketuhanan berkebudayaan.",
            "Yamin mengusulkan 'Peri', Soekarno mengusulkan 'Sila'.",
            "Soekarno menekankan Gotong Royong, Yamin menekankan Keadilan Sosial.",
            "Yamin mengusulkan tertulis, Soekarno lisan."
        ],
        correctAnswer: 1,
        rationale: "Yamin menggunakan frasa 'Peri' (Peri Kebangsaan, Peri Kemanusiaan, dsb), sementara Soekarno menggunakan istilah 'Sila'.",
        hint: "Perbedaan penggunaan awalan kata."
    },
    {
        id: 168,
        text: "Salah satu ciri utama negara integralistik yang diusulkan Mr. Soepomo adalah....",
        options: [
            "Mengutamakan hak individu di atas segalanya.",
            "Negara adalah kesatuan yang mengatasi segala golongan, dengan pemimpin bersatu dengan rakyat.",
            "Pemisahan kekuasaan secara tegas (trias politica).",
            "Pembentukan negara federal."
        ],
        correctAnswer: 1,
        rationale: "Integralistik adalah konsep negara yang menyatu antara pemimpin dan rakyat, mengatasi kelompok-kelompok individualis.",
        hint: "Persatuan seluruh elemen."
    },
    {
        id: 169,
        text: "Meskipun memiliki latar belakang pendidikan yang berbeda (hukum, teknik, sosial), persamaan semangat yang dimiliki oleh para pendiri bangsa adalah....",
        options: [
            "Keinginan untuk menjadi negara adidaya.",
            "Semangat untuk mencapai kemerdekaan dan mewujudkan negara kesatuan yang merdeka, berdaulat, adil, dan makmur.",
            "Keinginan untuk mengadopsi sistem negara Barat sepenuhnya.",
            "Menolak semua intervensi asing."
        ],
        correctAnswer: 1,
        rationale: "Semua pendiri bangsa memiliki cita-cita yang sama, yaitu mewujudkan Indonesia merdeka yang berdaulat dan sejahtera.",
        hint: "Cita-cita Proklamasi."
    },
    
    {
        id: 170,
        text: "Tugas utama PPKI setelah dibentuk adalah....",
        options: [
            "Mengadakan perundingan dengan Belanda.",
            "Mempersiapkan segala hal yang diperlukan untuk pembentukan negara (mengubah UUD, memilih Presiden/Wapres, menetapkan Komite Nasional).",
            "Menyusun teks Sumpah Pemuda.",
            "Menghentikan Perang Dunia II."
        ],
        correctAnswer: 1,
        rationale: "PPKI (Panitia Persiapan Kemerdekaan Indonesia) bertugas menyiapkan dan mengesahkan perangkat negara yang diperlukan.",
        hint: "Fungsinya adalah 'Persiapan Kemerdekaan'."
    },
    {
        id: 171,
        text: "Sidang PPKI pada 18 Agustus 1945 menghasilkan tiga keputusan penting, salah satunya adalah....",
        options: [
            "Pembentukan Tentara Nasional Indonesia (TNI).",
            "Pengesahan UUD NRI Tahun 1945.",
            "Pembacaan Teks Proklamasi.",
            "Pembubaran BPUPK."
        ],
        correctAnswer: 1,
        rationale: "Tiga hasil sidang PPKI: 1) Mengesahkan UUD 1945, 2) Memilih Ir. Soekarno dan Drs. Moh. Hatta sebagai Presiden dan Wakil Presiden, 3) Pembentukan Komite Nasional.",
        hint: "Hari setelah Proklamasi."
    },
    {
        id: 172,
        text: "Tokoh yang menjabat sebagai Wakil Ketua BPUPK (seorang warga negara Jepang) adalah....",
        options: [
            "Dr. Radjiman Wedyodiningrat",
            "Mr. Soepomo",
            "Ichibangase Yosio",
            "Soekarno"
        ],
        correctAnswer: 2,
        rationale: "Ketua BPUPK adalah Radjiman Wedyodiningrat, didampingi Wakil Ketua R.P. Soeroso dan Ichibangase Yosio (Jepang).",
        hint: "Wakil dari pihak Jepang."
    },
    
    {
        id: 173,
        text: "Salah satu anggota Panitia Sembilan yang mewakili golongan Nasionalis adalah....",
        options: [
            "KH. Wahid Hasyim",
            "Mr. Moh. Yamin",
            "Mr. A.A. Maramis",
            "Ki Bagus Hadikusumo"
        ],
        correctAnswer: 2,
        rationale: "AA Maramis adalah salah satu dari 5 tokoh Nasionalis dalam Panitia Sembilan (Soekarno, Hatta, Yamin, Soebardjo, Maramis).",
        hint: "Tokoh dari Indonesia Timur."
    },
    {
        id: 174,
        text: "Peran Panitia Sembilan menjadi sangat penting dalam sejarah perumusan Pancasila karena mereka bertugas sebagai....",
        options: [
            "Penyusun naskah pembukaan UUD yang memuat dasar negara.",
            "Pemimpin perang melawan Sekutu.",
            "Penentu jumlah anggota PPKI.",
            "Penyelenggara Pemilu pertama."
        ],
        correctAnswer: 0,
        rationale: "Tugas mereka adalah merumuskan rancangan Pembukaan UUD (Piagam Jakarta) yang berisi rumusan dasar negara.",
        hint: "Perumus Piagam Jakarta."
    },
    {
        id: 175,
        text: "Yang **bukan** merupakan hasil kompromi antara golongan Nasionalis dan Islam dalam Piagam Jakarta adalah....",
        options: [
            "Pernyataan 'Indonesia merdeka' (Nasionalis).",
            "Sila Ketuhanan dengan tujuh kata (Islam).",
            "Frasa 'dengan berdasar kepada ketuhanan' (Kompromi Ketuhanan).",
            "Pembentukan negara Republik (Kompromi bentuk negara)."
        ],
        correctAnswer: 2,
        rationale: "Frasa 'dengan berdasar kepada ketuhanan' tidak terdapat dalam Piagam Jakarta. Piagam Jakarta memuat tujuh kata kontroversial pada sila pertama.",
        hint: "Cari frasa yang tidak ada dalam Piagam Jakarta."
    },
    
    // MATERI 2: KEDUDUKAN & FUNGSI PANCASILA (Lanjutan)
    
    {
        id: 176,
        text: "Pancasila sebagai dasar negara memiliki makna yuridis bahwa....",
        options: [
            "Pancasila dapat diubah oleh MPR.",
            "Semua hukum positif di Indonesia harus berlandaskan dan bersumber dari Pancasila.",
            "Pancasila hanya simbol tanpa kekuatan hukum.",
            "Pancasila hanya berlaku bagi umat beragama."
        ],
        correctAnswer: 1,
        rationale: "Makna yuridis (hukum) Pancasila sebagai dasar negara adalah kedudukannya sebagai norma dasar (*Grundnorm*) dan sumber dari segala sumber hukum.",
        hint: "Konteks hukum dan perundang-undangan."
    },
    {
        id: 177,
        text: "Jika suatu Peraturan Pemerintah (PP) bertentangan dengan Pancasila, maka PP tersebut harus....",
        options: [
            "Tetap dilaksanakan.",
            "Dibiarkan saja.",
            "Diuji materi ke Mahkamah Agung dan dibatalkan.",
            "Diubah oleh DPR."
        ],
        correctAnswer: 2,
        rationale: "Semua peraturan di bawah UUD 1945 harus diuji materi ke MA jika bertentangan dengan Pancasila (melalui UUD 1945).",
        hint: "Uji materi ke MA."
    },
    {
        id: 178,
        text: "Pancasila sebagai 'Meja Statis' mengandung makna....",
        options: [
            "Tempat untuk duduk.",
            "Prinsip-prinsip dasar yang kokoh dan abadi yang menyatukan bangsa.",
            "Aturan yang kaku dan tidak dapat diubah.",
            "Hukum yang bersifat dinamis."
        ],
        correctAnswer: 1,
        rationale: "Meja Statis berarti dasar yang kokoh dan tidak bergerak (abadi) yang menjadi pijakan seluruh elemen bangsa.",
        hint: "Dasar yang kokoh dan abadi."
    },
    
    {
        id: 179,
        text: "Pancasila sebagai pandangan hidup bangsa (*Weltanschauung*) diwujudkan dalam kehidupan sehari-hari melalui....",
        options: [
            "Pengesahan Undang-Undang.",
            "Perilaku, etika, dan nilai moral individu dalam interaksi sosial.",
            "Pemilihan umum.",
            "Pemberian sanksi pidana."
        ],
        correctAnswer: 1,
        rationale: "Pandangan hidup adalah cerminan nilai-nilai dalam sikap dan perilaku masyarakat.",
        hint: "Konteks moral dan sosial."
    },
    {
        id: 180,
        text: "Mengapa Pancasila disebut sebagai pandangan hidup bangsa?",
        options: [
            "Karena Pancasila dicetuskan pertama kali di luar negeri.",
            "Karena Pancasila memberi arah, pedoman, dan motivasi bagi bangsa Indonesia dalam mencapai cita-cita.",
            "Karena Pancasila hanya berlaku untuk kaum elite.",
            "Karena Pancasila adalah aturan agama."
        ],
        correctAnswer: 1,
        rationale: "Pandangan hidup berfungsi sebagai petunjuk arah dan motivasi untuk mencapai cita-cita bangsa.",
        hint: "Fungsi petunjuk arah."
    },
    {
        id: 181,
        text: "Perwujudan Pancasila sebagai pandangan hidup dalam bidang ekonomi adalah....",
        options: [
            "Sistem kapitalisme mutlak.",
            "Prinsip kebebasan berusaha tanpa batas.",
            "Sistem ekonomi kerakyatan dan kekeluargaan (koperasi).",
            "Sistem ekonomi komando."
        ],
        correctAnswer: 2,
        rationale: "Sistem ekonomi yang sesuai pandangan hidup Pancasila adalah ekonomi kerakyatan, contohnya koperasi (Pasal 33 UUD 1945).",
        hint: "Ekonomi yang berbasis kekeluargaan."
    },
    
    {
        id: 182,
        text: "Dimensi **fleksibilitas** dalam ideologi Pancasila berarti....",
        options: [
            "Pancasila dapat diubah kapan saja.",
            "Pancasila memiliki keterbukaan untuk dikembangkan sesuai kebutuhan zaman, asalkan tidak menyimpang dari nilai dasarnya.",
            "Pancasila hanya berlaku di era Orde Baru.",
            "Pancasila kaku dan tidak bisa dikembangkan."
        ],
        correctAnswer: 1,
        rationale: "Fleksibilitas (keterbukaan) adalah ciri ideologi terbuka yang memungkinkan penafsiran dan pengembangan nilai dasar (Dimensi Normatif) ke nilai praktis.",
        hint: "Keterbukaan terhadap perkembangan."
    },
    {
        id: 183,
        text: "Peran Pancasila sebagai **filter** dalam menghadapi globalisasi adalah....",
        options: [
            "Menolak semua budaya asing.",
            "Menyaring budaya asing agar tidak bertentangan dengan nilai luhur bangsa.",
            "Menerima semua budaya asing tanpa seleksi.",
            "Mengubah nilai Pancasila agar sesuai budaya asing."
        ],
        correctAnswer: 1,
        rationale: "Sebagai filter, Pancasila menyaring pengaruh luar agar tetap sesuai dengan kepribadian bangsa.",
        hint: "Saringan budaya."
    },
    {
        id: 184,
        text: "Jika suatu negara memaksakan ideologi tertentu kepada seluruh rakyatnya, maka ideologi tersebut cenderung bersifat....",
        options: [
            "Terbuka",
            "Tertutup (Dogmatis)",
            "Fleksibel",
            "Reformatif"
        ],
        correctAnswer: 1,
        rationale: "Ideologi tertutup bersifat memaksakan, dogmatis, dan tidak menerima kritik atau partisipasi publik.",
        hint: "Memaksa dan kaku."
    },
    
    {
        id: 185,
        text: "Ketentuan bahwa 'Negara berdasar atas Ketuhanan Yang Maha Esa' dalam UUD 1945 menunjukkan Indonesia adalah negara yang....",
        options: [
            "Sekuler",
            "Teokratis (Negara Agama)",
            "Bukan negara agama, tetapi mengakui dan melindungi nilai-nilai religius (Negara Berketuhanan)",
            "Atheis"
        ],
        correctAnswer: 2,
        rationale: "Indonesia mengakui Ketuhanan dan menjamin kebebasan beragama, namun bukan negara yang didirikan atas dasar agama tertentu (bukan teokrasi).",
        hint: "Jalan tengah antara sekuler dan teokrasi."
    },
    {
        id: 186,
        text: "Tindakan yang paling mencerminkan toleransi antarumat beragama adalah....",
        options: [
            "Mengikuti ritual ibadah agama lain.",
            "Tidak peduli terhadap kegiatan agama lain.",
            "Menghormati dan menjamin kebebasan orang lain menjalankan ibadahnya sesuai keyakinan masing-masing.",
            "Memaksa orang lain pindah agama."
        ],
        correctAnswer: 2,
        rationale: "Toleransi adalah sikap saling menghormati dan tidak mengganggu peribadatan orang lain.",
        hint: "Saling menghormati ibadah."
    },
    {
        id: 187,
        text: "Pasal 29 ayat (2) UUD 1945 menjamin kemerdekaan tiap-tiap penduduk untuk....",
        options: [
            "Berpolitik.",
            "Memeluk agamanya dan beribadah menurut agamanya.",
            "Mendapatkan pekerjaan.",
            "Berserikat dan berkumpul."
        ],
        correctAnswer: 1,
        rationale: "Pasal 29 ayat (2) adalah pasal kunci yang menjamin kebebasan beragama di Indonesia.",
        hint: "Pasal kebebasan beragama."
    },
    
    
    {
        id: 188,
        text: "Sebagai sumber dari segala sumber hukum, Pancasila berkedudukan sebagai norma fundamental negara, yang dalam ilmu hukum disebut....",
        options: [
            "Aturan teknis",
            "Grundnorm (Norma Dasar)",
            "Peraturan Daerah",
            "Traktat"
        ],
        correctAnswer: 1,
        rationale: "Grundnorm adalah norma dasar tertinggi yang menjadi landasan dan sumber bagi semua norma hukum di bawahnya.",
        hint: "Norma Dasar."
    },
    {
        id: 189,
        text: "Jika sebuah Undang-Undang (UU) yang baru dibuat melanggar prinsip keadilan sosial (Sila 5), maka UU tersebut....",
        options: [
            "Tetap berlaku.",
            "Harus diuji materi ke Mahkamah Konstitusi karena bertentangan dengan UUD 1945 (yang memuat Pancasila).",
            "Dapat diubah oleh Peraturan Pemerintah.",
            "Dapat diubah oleh Peraturan Presiden."
        ],
        correctAnswer: 1,
        rationale: "Pengujian UU terhadap UUD 1945 (termasuk nilai-nilai Pancasila) adalah wewenang MK.",
        hint: "Uji UU terhadap UUD."
    },
    {
        id: 190,
        text: "Pembukaan UUD 1945 yang memuat Pancasila tidak dapat diubah (kesepakatan amandemen) karena....",
        options: [
            "Sudah terlalu tua.",
            "Merupakan kaidah pokok negara yang fundamental (*Staatsfundamentalnorm*) yang mengandung dasar negara.",
            "Tidak ada yang berani mengubahnya.",
            "Terlalu banyak pasal."
        ],
        correctAnswer: 1,
        rationale: "Pembukaan UUD 1945 mengandung Pancasila yang merupakan fundamen berdirinya negara, sehingga mengubahnya sama dengan membubarkan negara.",
        hint: "Kaidah Pokok Negara."
    },
    
    // MATERI 3: IMPLEMENTASI SILA PANCASILA (Lanjutan)
    
    {
        id: 191,
        text: "Sikap yang menunjukkan toleransi beragama paling tinggi adalah....",
        options: [
            "Membiarkan teman beribadah tanpa mengganggunya.",
            "Membantu membersihkan tempat ibadah agama lain.",
            "Mengikuti semua ritual agama lain.",
            "Meyakini semua agama sama."
        ],
        correctAnswer: 1,
        rationale: "Toleransi tidak hanya sekadar tidak mengganggu, tetapi juga memberikan dukungan atau bantuan (solidaritas) tanpa mencampuradukkan akidah.",
        hint: "Solidaritas tanpa sinkretisme."
    },
    {
        id: 192,
        text: "Tindakan yang bertentangan dengan nilai Sila ke-1 di lingkungan sekolah adalah....",
        options: [
            "Menghormati teman yang sedang berpuasa.",
            "Mengolok-olok atau menghina keyakinan agama teman.",
            "Mengadakan kegiatan bakti sosial.",
            "Menghargai hasil musyawarah."
        ],
        correctAnswer: 1,
        rationale: "Menghina keyakinan orang lain adalah pelanggaran serius terhadap toleransi dan kemanusiaan.",
        hint: "Tindakan menghina SARA."
    },
    {
        id: 193,
        text: "Dalam ranah hukum, Sila Ketuhanan diimplementasikan melalui....",
        options: [
            "Pemisahan agama dan negara.",
            "Diakuinya pernikahan dan perceraian berdasarkan hukum agama.",
            "Pelarangan semua agama.",
            "Pencantuman sila ke-1 dalam pasal UUD 1945."
        ],
        correctAnswer: 1,
        rationale: "Hukum positif Indonesia mengatur aspek kehidupan beragama, seperti Pasal 29 UUD 1945 dan undang-undang terkait pernikahan.",
        hint: "Regulasi kehidupan beragama."
    },
    
    
    {
        id: 194,
        text: "Jika terjadi kasus diskriminasi rasial di lingkungan masyarakat, tindakan yang sesuai dengan Sila ke-2 adalah....",
        options: [
            "Membiarkan diskriminasi tersebut.",
            "Melawan diskriminasi dan menjunjung tinggi persamaan derajat manusia.",
            "Ikut-ikutan mendiskriminasi.",
            "Menyelesaikan dengan voting."
        ],
        correctAnswer: 1,
        rationale: "Sila ke-2 menuntut pengakuan dan perlakuan yang sama tanpa memandang latar belakang (persamaan derajat).",
        hint: "Persamaan derajat dan HAM."
    },
    {
        id: 195,
        text: "Sikap tidak **semena-mena** terhadap orang lain berarti....",
        options: [
            "Melakukan pemerasan dan penindasan.",
            "Tidak melakukan perbuatan yang dapat merugikan atau menzalimi orang lain.",
            "Mengutamakan kepentingan pribadi.",
            "Menjadi pemimpin yang otoriter."
        ],
        correctAnswer: 1,
        rationale: "Tidak semena-mena berarti menjaga martabat orang lain dan menghindari penindasan.",
        hint: "Menghindari penindasan."
    },
    {
        id: 196,
        text: "Pengamalan Sila ke-2 di tingkat internasional diwujudkan melalui....",
        options: [
            "Ikut campur urusan negara lain.",
            "Politik luar negeri bebas aktif dan kerjasama kemanusiaan global.",
            "Memutuskan hubungan dengan semua negara.",
            "Mendominasi negara berkembang."
        ],
        correctAnswer: 1,
        rationale: "Politik luar negeri bebas aktif adalah wujud dari pengakuan terhadap kemerdekaan dan keadilan antarbangsa (Sila 2).",
        hint: "Konteks hubungan antarnegara."
    },
    
 
    {
        id: 197,
        text: "Contoh sikap **cinta tanah air** yang paling relevan dengan konteks ekonomi adalah....",
        options: [
            "Memilih pemimpin dari suku sendiri.",
            "Mengutamakan penggunaan produk dalam negeri daripada produk impor.",
            "Menolak kerjasama dengan negara tetangga.",
            "Berbicara dengan bahasa asing."
        ],
        correctAnswer: 1,
        rationale: "Mencintai produk dalam negeri adalah wujud dukungan terhadap ekonomi nasional, yang memperkuat ketahanan bangsa (Persatuan).",
        hint: "Dukungan pada ekonomi domestik."
    },
    {
        id: 198,
        text: "Prinsip **Bhinneka Tunggal Ika** dalam Sila ke-3 memiliki fungsi sebagai....",
        options: [
            "Alat pemaksa kehendak.",
            "Dasar untuk menganggap semua sama.",
            "Menciptakan persatuan dalam keberagaman dan mencegah perpecahan.",
            "Menghapus identitas daerah."
        ],
        correctAnswer: 2,
        rationale: "Fungsi utama Bhinneka Tunggal Ika adalah menyatukan berbagai keragaman dalam satu bangsa Indonesia.",
        hint: "Semboyan yang menjembatani perbedaan."
    },
    {
        id: 199,
        text: "Tindakan yang menunjukkan sikap **rela berkorban** demi kepentingan bangsa dan negara di lingkungan sekolah adalah....",
        options: [
            "Menjadi sukarelawan membersihkan lingkungan sekolah saat libur.",
            "Melaporkan semua teman yang melakukan kesalahan.",
            "Menyelesaikan PR dengan bantuan orang tua.",
            "Membolos saat pelajaran."
        ],
        correctAnswer: 0,
        rationale: "Rela berkorban adalah mengesampingkan kepentingan pribadi demi kepentingan umum (sekolah/lingkungan).",
        hint: "Mendahulukan kepentingan umum."
    },
    

    {
        id: 200,
        text: "Sila Kerakyatan mengutamakan **musyawarah untuk mufakat**. Jika mufakat tidak tercapai, maka keputusan diambil berdasarkan....",
        options: [
            "Suara pemimpin.",
            "Suara terbanyak (voting) sebagai jalan keluar terakhir.",
            "Suara minoritas.",
            "Keputusan ditarik kembali."
        ],
        correctAnswer: 1,
        rationale: "Voting adalah mekanisme terakhir yang sah dalam demokrasi Pancasila untuk menghindari kebuntuan.",
        hint: "Opsi terakhir dalam rapat."
    },
    {
        id: 201,
        text: "Ciri khas demokrasi Pancasila yang paling menonjol dalam proses pengambilan keputusan adalah....",
        options: [
            "Hanya mengandalkan voting.",
            "Musyawarah mufakat yang dijiwai oleh **Hikmat Kebijaksanaan**.",
            "Otoriter dari pemimpin.",
            "Menolak intervensi rakyat."
        ],
        correctAnswer: 1,
        rationale: "Kata kunci 'Hikmat Kebijaksanaan' membedakan demokrasi Pancasila dari demokrasi Barat.",
        hint: "Kata kunci yang ada di Sila ke-4."
    },
    {
        id: 202,
        text: "Dalam rapat OSIS, seorang anggota dilarang mengkritik keras program kerja ketua. Tindakan ini melanggar Sila ke-4 karena....",
        options: [
            "Mengabaikan kepentingan umum.",
            "Membatasi hak berpendapat dan bermusyawarah secara bebas dan bertanggung jawab.",
            "Melanggar norma agama.",
            "Tidak ada musyawarah."
        ],
        correctAnswer: 1,
        rationale: "Hak untuk mengemukakan pendapat (kritik) adalah bagian dari hak demokrasi yang wajib dihormati.",
        hint: "Hak berpendapat."
    },
    
    {
        id: 203,
        text: "Tujuan utama pengamalan Sila ke-5 dalam kehidupan bernegara adalah....",
        options: [
            "Menciptakan kekayaan yang menumpuk pada satu golongan.",
            "Mewujudkan kemakmuran dan kesejahteraan yang merata bagi seluruh rakyat Indonesia.",
            "Menciptakan sistem kasta.",
            "Menguatkan peran individu."
        ],
        correctAnswer: 1,
        rationale: "Tujuan Keadilan Sosial adalah kesejahteraan yang merata bagi seluruh rakyat.",
        hint: "Kesejahteraan untuk 'seluruh' rakyat."
    },
    {
        id: 204,
        text: "Kebijakan pemerintah berupa **subsidi pupuk** bagi petani kecil adalah perwujudan Sila ke-5 karena....",
        options: [
            "Menghabiskan anggaran negara.",
            "Upaya pemerataan dan perlindungan terhadap kelompok ekonomi lemah.",
            "Tidak sesuai dengan demokrasi.",
            "Menguntungkan pejabat."
        ],
        correctAnswer: 1,
        rationale: "Subsidi adalah bentuk campur tangan negara untuk mewujudkan pemerataan dan keadilan sosial bagi kelompok yang membutuhkan.",
        hint: "Bantuan untuk pemerataan."
    },
    {
        id: 205,
        text: "Perilaku yang paling bertentangan dengan Sila Keadilan Sosial di bidang etos kerja adalah....",
        options: [
            "Bekerja keras dan giat.",
            "Tidak suka bekerja keras dan melakukan pemerasan terhadap orang lain.",
            "Menjaga keseimbangan hak dan kewajiban.",
            "Menghargai hasil karya orang lain."
        ],
        correctAnswer: 1,
        rationale: "Tidak suka bekerja keras melanggar etos kerja, sementara pemerasan melanggar keadilan sosial.",
        hint: "Pemerasan dan kemalasan."
    },
    
    {
        id: 206,
        text: "Koperasi merupakan implementasi nyata nilai gotong royong dalam bidang....",
        options: [
            "Politik",
            "Ekonomi",
            "Sosial",
            "Hukum"
        ],
        correctAnswer: 1,
        rationale: "Koperasi adalah soko guru ekonomi Indonesia yang berasaskan kekeluargaan/gotong royong (Pasal 33 UUD 1945).",
        hint: "Soko guru ekonomi."
    },
    {
        id: 207,
        text: "Gotong royong memiliki sifat dasar yang khas, yaitu....",
        options: [
            "Individualis dan kompetitif.",
            "Bekerja bersama untuk mencapai kepentingan pribadi.",
            "Bekerja bersama untuk menyelesaikan suatu pekerjaan demi kepentingan umum.",
            "Sistem upah yang tinggi."
        ],
        correctAnswer: 2,
        rationale: "Gotong royong adalah kerjasama untuk kepentingan bersama (umum), bukan kepentingan pribadi.",
        hint: "Kerja sama untuk kepentingan umum."
    },
    {
        id: 208,
        text: "Dalam konteks pertahanan negara, gotong royong diwujudkan melalui....",
        options: [
            "Kerjasama militer asing.",
            "Sistem Pertahanan Keamanan Rakyat Semesta (Sishankamrata).",
            "Perang individual.",
            "Pembentukan satu suku bangsa."
        ],
        correctAnswer: 1,
        rationale: "Sishankamrata melibatkan seluruh rakyat dalam upaya pertahanan dan keamanan, mencerminkan gotong royong.",
        hint: "Pertahanan Rakyat Semesta."
    },
    
    {
        id: 209,
        text: "Salah satu dampak negatif globalisasi yang paling mengancam Sila ke-1 dan ke-2 adalah....",
        options: [
            "Tingginya harga barang.",
            "Penyebaran ideologi ateisme dan nihilisme yang menolak moral dan Tuhan.",
            "Berkurangnya lahan parkir.",
            "Meningkatnya etos kerja."
        ],
        correctAnswer: 1,
        rationale: "Ateisme bertentangan dengan Ketuhanan YME (Sila 1), sedangkan nihilisme (ketiadaan moral) bertentangan dengan Kemanusiaan yang Adil dan Beradab (Sila 2).",
        hint: "Ancaman terhadap keyakinan dan moralitas."
    },
    {
        id: 210,
        text: "Agar tidak tergerus arus globalisasi, bangsa Indonesia harus menguatkan kembali **jati diri** dan **identitas nasional** yang bersumber dari....",
        options: [
            "Negara maju.",
            "Pancasila dan budaya luhur bangsa.",
            "Peraturan asing.",
            "Kepentingan individu."
        ],
        correctAnswer: 1,
        rationale: "Jati diri bangsa adalah Pancasila, yang digali dari budaya luhur bangsa sendiri.",
        hint: "Sumber identitas bangsa."
    },
    {
        id: 211,
        text: "Sikap yang paling bijak dalam menghadapi masuknya teknologi dan informasi asing adalah....",
        options: [
            "Menutup diri dan menolak teknologi.",
            "Menerima teknologi dan informasi, tetapi menyaringnya agar tidak bertentangan dengan nilai Pancasila.",
            "Menerima tanpa batas.",
            "Hanya menggunakan teknologi kuno."
        ],
        correctAnswer: 1,
        rationale: "Ideologi terbuka Pancasila mewajibkan sikap selektif dan kritis, bukan menolak total.",
        hint: "Sikap selektif."
    },
    
    // MATERI 4: NORMA DAN KONSTITUSI (Lanjutan)
    
    {
        id: 212,
        text: "Sanksi yang ditimbulkan jika seseorang melanggar **Norma Agama** adalah....",
        options: [
            "Penjara",
            "Denda",
            "Dosa dan hukuman dari Tuhan di akhirat",
            "Pengucilan sosial"
        ],
        correctAnswer: 2,
        rationale: "Norma agama berasal dari Tuhan, sehingga sanksinya bersifat vertikal dan transenden (dosa).",
        hint: "Sanksi vertikal."
    },
    {
        id: 213,
        text: "Aturan berpakaian rapi saat ke sekolah merupakan perwujudan dari norma....",
        options: [
            "Agama",
            "Hukum",
            "Kesusilaan",
            "Kesopanan"
        ],
        correctAnswer: 3,
        rationale: "Tata krama dan etika berpakaian di tempat umum termasuk dalam Norma Kesopanan.",
        hint: "Tata krama sosial."
    },
    {
        id: 214,
        text: "Perbedaan mendasar antara Norma Kesusilaan dan Norma Kesopanan terletak pada....",
        options: [
            "Asal sumbernya (hati nurani vs kebiasaan masyarakat).",
            "Sanksinya (denda vs penjara).",
            "Waktu berlakunya (dulu vs sekarang).",
            "Cakupan wilayahnya (desa vs kota)."
        ],
        correctAnswer: 0,
        rationale: "Kesusilaan bersumber dari hati nurani, Kesopanan bersumber dari kebiasaan/adat istiadat masyarakat.",
        hint: "Asal sumber norma."
    },
    
    {
        id: 215,
        text: "Budaya taat hukum di sekolah ditunjukkan dengan sikap....",
        options: [
            "Membolos saat pelajaran.",
            "Menghargai dan melaksanakan semua tata tertib sekolah dengan kesadaran penuh.",
            "Melawan guru.",
            "Melakukan perundungan."
        ],
        correctAnswer: 1,
        rationale: "Taat hukum berarti melaksanakan aturan yang berlaku dengan kesadaran, termasuk tata tertib sekolah.",
        hint: "Disiplin di lingkungan sekolah."
    },
    {
        id: 216,
        text: "Kepatuhan hukum yang didasarkan pada **paksaan dan ancaman hukuman** disebut ketaatan yang bersifat....",
        options: [
            "Otonom (sadar diri)",
            "Formal (terpaksa)",
            "Material",
            "Volunter"
        ],
        correctAnswer: 1,
        rationale: "Ketaatan formal didorong oleh faktor eksternal (ancaman/paksaan), sedangkan otonom didorong oleh kesadaran internal.",
        hint: "Sifat ketaatan yang eksternal."
    },
    {
        id: 217,
        text: "Mengapa kesadaran hukum lebih efektif daripada paksaan hukum?",
        options: [
            "Karena kesadaran menciptakan ketaatan yang tulus dan berkelanjutan tanpa harus selalu diawasi oleh aparat.",
            "Karena paksaan lebih mahal.",
            "Karena kesadaran lebih mudah diatur.",
            "Karena paksaan tidak diperlukan."
        ],
        correctAnswer: 0,
        rationale: "Ketaatan yang bersumber dari kesadaran bersifat berkelanjutan dan stabil, tidak hanya saat ada pengawasan.",
        hint: "Ketaatan yang internal dan berkelanjutan."
    },
    
    {
        id: 218,
        text: "Pancasila (sebagai *Grundnorm*) dan UUD 1945 (sebagai *Basic Law*) adalah satu kesatuan yang tidak terpisahkan. Pancasila merupakan....",
        options: [
            "Aturan teknis.",
            "Pokok pikiran dan sumber nilai yang dijabarkan dalam pasal-pasal UUD 1945.",
            "Pelengkap UUD 1945.",
            "Hanya berlaku pada masa lalu."
        ],
        correctAnswer: 1,
        rationale: "Pancasila adalah sumber nilai, jiwa, dan pokok pikiran yang kemudian dijabarkan dalam pasal-pasal UUD 1945.",
        hint: "Sifatnya sebagai jiwa/roh."
    },
    {
        id: 219,
        text: "Sila Keadilan Sosial (Sila 5) dijabarkan secara instrumental dalam UUD 1945, terutama pada Pasal....",
        options: [
            "28",
            "29",
            "31",
            "33"
        ],
        correctAnswer: 3,
        rationale: "Pasal 33 UUD 1945 mengatur tentang perekonomian nasional dan kemakmuran rakyat, yang merupakan perwujudan Keadilan Sosial.",
        hint: "Pasal Ekonomi."
    },
    {
        id: 220,
        text: "Pembukaan UUD 1945 alinea IV memuat empat tujuan nasional. Salah satunya adalah ikut melaksanakan ketertiban dunia yang berdasar pada....",
        options: [
            "Demokrasi Liberal.",
            "Kekuatan Militer.",
            "Kemerdekaan, perdamaian abadi, dan keadilan sosial.",
            "Sentralisasi kekuasaan."
        ],
        correctAnswer: 2,
        rationale: "Tujuan negara Indonesia (luar negeri) adalah kemerdekaan, perdamaian abadi, dan keadilan sosial.",
        hint: "Tujuan eksternal negara."
    },
    
    {
        id: 221,
        text: "Peraturan yang kedudukannya berada tepat di bawah Undang-Undang (UU) dalam hierarki adalah....",
        options: [
            "Peraturan Presiden (Perpres)",
            "Peraturan Pemerintah (PP)",
            "Peraturan Daerah (Perda)",
            "UUD 1945"
        ],
        correctAnswer: 1,
        rationale: "Urutan setelah UU/Perppu adalah Peraturan Pemerintah (PP).",
        hint: "Pelaksana UU."
    },
    {
        id: 222,
        text: "Lembaga negara yang berwenang menetapkan Peraturan Pemerintah (PP) adalah....",
        options: [
            "DPR",
            "MPR",
            "Presiden",
            "Mahkamah Agung"
        ],
        correctAnswer: 2,
        rationale: "PP ditetapkan oleh Presiden sebagai peraturan pelaksana UU.",
        hint: "Eksekutif yang menetapkan PP."
    },
    {
        id: 223,
        text: "Peraturan Daerah (Perda) Provinsi dibentuk oleh....",
        options: [
            "Bupati/Walikota dan DPRD Kab/Kota.",
            "Gubernur dan DPRD Provinsi.",
            "Presiden.",
            "Menteri Dalam Negeri."
        ],
        correctAnswer: 1,
        rationale: "Perda Provinsi dibentuk oleh Kepala Daerah Provinsi (Gubernur) bersama DPRD Provinsi.",
        hint: "Lembaga di level provinsi."
    },
    
    {
        id: 224,
        text: "Jika terjadi kekosongan hukum dan diperlukan aturan yang bersifat segera karena kegentingan yang memaksa, Presiden dapat mengeluarkan....",
        options: [
            "Peraturan Presiden (Perpres)",
            "Peraturan Pemerintah Pengganti Undang-Undang (Perppu)",
            "Peraturan Pemerintah (PP)",
            "Peraturan Daerah (Perda)"
        ],
        correctAnswer: 1,
        rationale: "Perppu adalah diskresi Presiden dalam kondisi darurat/kegentingan yang memaksa.",
        hint: "Kegentingan yang memaksa."
    },
    {
        id: 225,
        text: "Peraturan Presiden (Perpres) dibuat untuk....",
        options: [
            "Mengganti UUD.",
            "Mengganti UU.",
            "Menetapkan peraturan teknis untuk melaksanakan UU atau PP.",
            "Mengatur urusan daerah."
        ],
        correctAnswer: 2,
        rationale: "Perpres mengatur materi teknis pelaksanaan UU atau PP, atau yang diatur berdasarkan kewenangan Presiden.",
        hint: "Aturan pelaksana teknis."
    },
    {
        id: 226,
        text: "Perbedaan mendasar antara UU dan Perppu terletak pada....",
        options: [
            "Kekuatan hukumnya (sama).",
            "Substansinya.",
            "Prosedur pembentukannya (DPR wajib menyetujui Perppu pada sidang berikutnya).",
            "Yang membuat (Presiden vs MPR)."
        ],
        correctAnswer: 2,
        rationale: "Perppu dibuat oleh Presiden sendirian namun harus disetujui DPR, sementara UU dibuat bersama Presiden dan DPR sejak awal.",
        hint: "Peran persetujuan DPR."
    },
    
    {
        id: 227,
        text: "Asas **Lex Specialis Derogat Legi Generali** berarti....",
        options: [
            "Hukum yang baru mengalahkan yang lama.",
            "Hukum yang lebih tinggi mengalahkan yang rendah.",
            "Hukum yang khusus (spesialis) mengalahkan hukum yang umum (general).",
            "Hukum tidak boleh berlaku surut."
        ],
        correctAnswer: 2,
        rationale: "Asas ini digunakan untuk mengatasi konflik norma dengan mengutamakan aturan yang lebih spesifik.",
        hint: "Khusus vs Umum."
    },
    {
        id: 228,
        text: "Jika terjadi persengketaan kewenangan antara DPR dan Presiden, penyelesaian sengketa tersebut berada di tangan....",
        options: [
            "Mahkamah Agung (MA)",
            "Mahkamah Konstitusi (MK)",
            "Komisi Yudisial (KY)",
            "MPR"
        ],
        correctAnswer: 1,
        rationale: "MK berwenang mengadili sengketa kewenangan antar lembaga negara yang kewenangannya diberikan oleh UUD 1945.",
        hint: "Sengketa Lembaga Negara."
    },
    {
        id: 229,
        text: "Dalam asas perundang-undangan, 'Dapat Dilaksanakan' berarti....",
        options: [
            "Peraturan harus dibuat oleh DPR.",
            "Peraturan harus bersifat teknis dan realistis serta tidak bertentangan dengan norma di atasnya.",
            "Peraturan harus disetujui 100% rakyat.",
            "Peraturan tidak boleh diubah."
        ],
        correctAnswer: 1,
        rationale: "Asas 'Dapat Dilaksanakan' menuntut aturan harus realistis, efektif, dan tidak bertentangan dengan sistem hukum yang ada.",
        hint: "Kefektifan dan realistis."
    },
    
    {
        id: 230,
        text: "Setelah amandemen UUD 1945, kedaulatan berada di tangan rakyat dan dilaksanakan menurut....",
        options: [
            "Presiden",
            "MPR",
            "Undang-Undang Dasar",
            "Dewan Pertimbangan Agung"
        ],
        correctAnswer: 2,
        rationale: "Amandemen Pasal 1 ayat (2) mengubah 'di tangan rakyat dan dilaksanakan sepenuhnya oleh MPR' menjadi 'di tangan rakyat dan dilaksanakan menurut Undang-Undang Dasar'.",
        hint: "Pasal 1 ayat (2) UUD 1945."
    },
    {
        id: 231,
        text: "Tujuan utama amandemen UUD 1945 yang telah dilakukan sebanyak empat kali adalah....",
        options: [
            "Mengganti dasar negara Pancasila.",
            "Memperkuat sistem checks and balances dan menghapus kekuasaan yang sentralistik (super body) pada MPR.",
            "Menghapus lembaga-lembaga negara.",
            "Mengubah bentuk negara menjadi federal."
        ],
        correctAnswer: 1,
        rationale: "Amandemen bertujuan membatasi kekuasaan, memperjelas fungsi lembaga negara, dan menjamin HAM.",
        hint: "Memperkuat demokrasi dan HAM."
    },
    {
        id: 232,
        text: "Salah satu kesepakatan dasar dalam amandemen UUD 1945 adalah....",
        options: [
            "Mengganti bentuk negara kesatuan.",
            "Mempertahankan bentuk negara kesatuan Republik Indonesia (NKRI).",
            "Menghapus Pasal-Pasal HAM.",
            "Mengubah Pancasila."
        ],
        correctAnswer: 1,
        rationale: "Mempertahankan NKRI adalah salah satu kesepakatan mutlak dalam amandemen UUD 1945.",
        hint: "Bentuk negara tidak diubah."
    },
    
    {
        id: 233,
        text: "Pasal 27 ayat (3) UUD 1945 mengatur tentang kewajiban warga negara dalam....",
        options: [
            "Mendapat penghidupan yang layak.",
            "Membela negara.",
            "Mendapat pendidikan.",
            "Beragama."
        ],
        correctAnswer: 1,
        rationale: "Pasal 27 ayat (3) menyatakan, 'Setiap warga negara berhak dan wajib ikut serta dalam upaya pembelaan negara.'",
        hint: "Bela negara."
    },
    {
        id: 234,
        text: "Hak untuk berserikat, berkumpul, dan mengeluarkan pendapat dijamin dalam UUD 1945 Pasal....",
        options: [
            "28A",
            "28B",
            "28E",
            "30"
        ],
        correctAnswer: 2,
        rationale: "Pasal 28E mengatur kebebasan sipil, termasuk hak berpendapat dan berserikat.",
        hint: "Pasal Kebebasan Sipil."
    },
    {
        id: 235,
        text: "Perlindungan terhadap hak asasi manusia (HAM) dalam UUD 1945 dibatasi oleh....",
        options: [
            "Kehendak Presiden.",
            "Kewajiban menghormati hak orang lain dan ketentuan UU (Pasal 28J).",
            "Keinginan kelompok mayoritas.",
            "Norma kesopanan saja."
        ],
        correctAnswer: 1,
        rationale: "Pasal 28J UUD 1945 menegaskan bahwa pelaksanaan HAM dibatasi oleh UU untuk menghormati hak orang lain dan ketertiban umum.",
        hint: "Pasal Batasan HAM."
    },
    {
        id: 236,
        text: "Lembaga negara yang berwenang memberikan grasi, amnesti, abolisi, dan rehabilitasi adalah....",
        options: [
            "Mahkamah Agung",
            "DPR",
            "Presiden",
            "Komisi Yudisial"
        ],
        correctAnswer: 2,
        rationale: "Hak prerogatif Presiden di bidang yudikatif (Pasal 14 UUD 1945).",
        hint: "Hak Prerogatif Presiden."
    },
    {
        id: 237,
        text: "Sikap **etnosentrisme** yang berlebihan dapat mengancam persatuan. Etnosentrisme adalah sikap....",
        options: [
            "Mengagungkan budaya asing.",
            "Menganggap suku sendiri sebagai yang paling unggul dan merendahkan suku lain.",
            "Menghargai semua budaya.",
            "Menerima semua perbedaan."
        ],
        correctAnswer: 1,
        rationale: "Etnosentrisme adalah sikap memandang budayanya sendiri sebagai patokan kebenaran, yang berbahaya bagi persatuan.",
        hint: "Rasisme berbasis suku."
    },
    {
        id: 238,
        text: "Pasal 1 ayat (1) UUD 1945 menegaskan bahwa bentuk negara Indonesia adalah....",
        options: [
            "Federal",
            "Kesatuan yang berbentuk Republik",
            "Monarki",
            "Uni"
        ],
        correctAnswer: 1,
        rationale: "Pasal 1 ayat (1): 'Negara Indonesia ialah Negara Kesatuan, yang berbentuk Republik.'",
        hint: "NKRI."
    },
    {
        id: 239,
        text: "Sistem pertahanan dan keamanan Indonesia yang bersifat semesta dan melibatkan seluruh rakyat disebut....",
        options: [
            "Trias Politica",
            "Sistem Pertahanan Keamanan Rakyat Semesta (Sishankamrata)",
            "Otonomi Daerah",
            "Desentralisasi"
        ],
        correctAnswer: 1,
        rationale: "Sishankamrata melibatkan TNI, Polri, dan seluruh rakyat sebagai komponen pendukung.",
        hint: "Keterlibatan seluruh rakyat."
    },
    {
        id: 240,
        text: "Peran Indonesia dalam mendirikan ASEAN pada 8 Agustus 1967 bertujuan untuk mewujudkan....",
        options: [
            "Persaingan ekonomi kawasan.",
            "Kestabilan dan perdamaian di kawasan Asia Tenggara.",
            "Pembentukan satu negara serumpun.",
            "Penolakan terhadap negara Barat."
        ],
        correctAnswer: 1,
        rationale: "Tujuan utama ASEAN adalah kerjasama politik, ekonomi, dan keamanan untuk mencapai stabilitas kawasan.",
        hint: "Organisasi regional Asia Tenggara."
    }
];
