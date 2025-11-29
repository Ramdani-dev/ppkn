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
    }
];