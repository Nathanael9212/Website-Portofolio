// data/projects.ts

export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  tech: string[];
  featured: boolean;
  image?: string;
  category: string;
  date: string;
  demoUrl?: string;
  githubUrl?: string;
  longDescription?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'sisambera',
    title: 'Sisambera - Online Food Ordering',
    description: 'Platform pemesanan makanan online untuk restoran yang masih menggunakan sistem manual. Dilengkapi dashboard customer dan admin untuk mengelola pesanan secara digital.',
    tech: ['Laravel', 'MySQL', 'Tailwind CSS', 'JavaScript'],
    featured: true,
    image: '/images/projects/sisambera.png',
    category: 'Website',
    date: '2025-11',
    githubUrl: 'https://github.com/pauluscss19/Sisambera-Native-PHP.git',
    demoUrl: '',
    longDescription: `Sisambera adalah platform pemesanan makanan online yang dibangun untuk mendigitalisasi proses pemesanan pada restoran yang sebelumnya masih mengandalkan sistem manual seperti pencatatan di kertas atau komunikasi langsung.

Latar Belakang:
Restoran masih menggunakan sistem pemesanan manual yang rentan terhadap kesalahan pencatatan, antrian panjang, dan sulitnya memantau status pesanan secara real-time. Hal ini menyebabkan pengalaman pelanggan yang kurang optimal dan beban kerja staf yang tinggi.

Solusi & Implementasi:
Dibangun menggunakan Laravel 11 sebagai framework utama yang menangani sisi frontend maupun backend secara terintegrasi. Sistem dirancang dengan dua sisi utama:

Fitur unggulan:
• Dashboard customer untuk melakukan pemesanan makanan secara online
• Dashboard admin untuk menerima, memproses, dan mengelola status pesanan
• Sistem notifikasi pesanan masuk secara real-time
• Manajemen menu makanan dengan foto dan harga
• Riwayat transaksi dan laporan penjualan
• Tampilan responsif untuk mobile dan desktop

Teknologi:
Dibangun dengan Laravel 11 menggunakan arsitektur MVC untuk memisahkan logika bisnis, tampilan, dan data. MySQL digunakan sebagai database relasional untuk menyimpan data menu, pesanan, dan user. Tailwind CSS untuk tampilan yang modern dan responsif.`
  },
  {
    id: 2,
    slug: 'ngacup-coffee',
    title: 'Ngacup Coffee - Cafe Management',
    description: 'Sistem digitalisasi pemesanan untuk cafe modern. Dilengkapi dashboard pemesanan untuk customer dan dashboard manajemen untuk admin cafe.',
    tech: ['Laravel', 'MySQL', 'Bootstrap', 'JavaScript'],
    featured: true,
    image: '/images/projects/ngacup.png',
    category: 'Website',
    date: '2025-09',
    githubUrl: 'https://github.com/Nathanael9212/Final_Project_Pemweb.git',
    demoUrl: '',
    longDescription: `Ngacup Coffee adalah sistem manajemen digital untuk cafe yang bertujuan mengubah proses pemesanan konvensional menjadi pengalaman digital yang lebih efisien dan modern.

Latar Belakang:
Banyak cafe masih mengandalkan proses pemesanan manual melalui pelayan, yang sering menyebabkan antrian panjang, kesalahan pencatatan pesanan, dan kesulitan dalam memantau stok serta laporan penjualan harian. Digitalisasi menjadi solusi yang tepat untuk meningkatkan efisiensi operasional cafe.

Solusi & Implementasi:
Sistem dibangun dengan Laravel sebagai backbone aplikasi, mencakup dua dashboard utama yang terintegrasi untuk memudahkan operasional cafe dari sisi customer maupun pengelola.

Fitur unggulan:
• Dashboard customer untuk browsing menu dan melakukan pemesanan
• Dashboard admin cafe untuk mengelola pesanan masuk secara real-time
• Katalog menu dengan foto produk dan harga yang dapat dikelola admin
• Sistem status pesanan (pending, proses, selesai)
• Manajemen kategori menu dan ketersediaan produk
• Laporan transaksi harian untuk admin

Teknologi:
Dibangun dengan Laravel sebagai framework PHP utama dengan Bootstrap untuk tampilan frontend yang responsif. MySQL digunakan untuk manajemen data menu, pesanan, dan pengguna.`
  },
  {
    id: 3,
    slug: 'uangku-finance',
    title: 'UangKu - Pencatatan Keuangan',
    description: 'Aplikasi pencatatan keuangan pribadi berbasis React Native + Expo. Catat pemasukan & pengeluaran, lihat grafik, set budget, dan export laporan — tanpa perlu akun atau internet.',
    tech: ['React Native', 'Expo'],
    featured: true,
    image: '/images/projects/uangku.png',
    category: 'Mobile',
    date: '2025-12',
    githubUrl: 'https://github.com/Nathanael9212/UangKu.git',
    demoUrl: 'https://uangku-app-seven.vercel.app/',
    longDescription: `UangKu adalah aplikasi mobile pencatatan keuangan pribadi yang membantu pengguna mencatat pemasukan dan pengeluaran sehari-hari dengan tampilan yang simpel dan mudah digunakan. Data tersimpan langsung di perangkat tanpa perlu akun atau koneksi internet.

Latar Belakang:
Banyak orang kesulitan mengontrol keuangan pribadi karena tidak ada catatan yang terstruktur. Aplikasi keuangan yang ada di pasaran sering terlalu kompleks atau memerlukan registrasi akun. UangKu hadir sebagai solusi ringan, offline-first, dan mudah digunakan oleh siapa saja.

Solusi & Implementasi:
Dibangun dengan React Native + Expo untuk cross-platform (Android & iOS). State management menggunakan Zustand untuk pengelolaan data yang efisien, dengan AsyncStorage sebagai penyimpanan lokal persisten sehingga data tetap aman meski aplikasi ditutup.

Fitur unggulan:
• Catat pemasukan & pengeluaran dengan kategori yang fleksibel
• Ringkasan keuangan per Hari / Minggu / Bulan / Tahun
• Grafik distribusi keuangan untuk analisis visual
• Pencarian transaksi berdasarkan kata kunci, kategori, atau jumlah
• Set budget limit per kategori pengeluaran
• Export laporan ke Excel (.xlsx)
• Offline-first — tidak perlu internet atau akun

Teknologi:
React Native + Expo untuk cross-platform mobile. Zustand sebagai state management yang ringan. AsyncStorage untuk penyimpanan data lokal. date-fns untuk formatting tanggal. Library xlsx untuk fitur export laporan ke Excel.`
  },
  {
    id: 4,
    slug: 'netfplix',
    title: 'Netfplix - Movie Browser',
    description: 'Platform web untuk browsing dan mencari informasi film & serial TV dari database TMDB. Lengkap dengan trailer, cast, rating, dan rekomendasi konten serupa.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
    featured: true,
    image: '/images/projects/movie.png',
    category: 'Website',
    date: '2025-10',
    githubUrl: 'https://github.com/Nathanael9212/movie-web.git',
    demoUrl: 'https://movie-web-5h54.vercel.app/',
    longDescription: `Netfplix adalah platform web yang memungkinkan pengguna menjelajahi ribuan film dan serial TV. Dapatkan informasi lengkap seperti sinopsis, rating, cast, trailer, dan rekomendasi konten serupa — semua dalam satu tempat.

Latar Belakang:
Pengguna sering kesulitan menemukan film atau serial yang sesuai selera karena informasi tersebar di berbagai platform. Netfplix hadir sebagai agregator informasi film yang memanfaatkan TMDB API untuk menyajikan data lengkap dan terkini dalam antarmuka yang bersih dan mudah digunakan.

Solusi & Implementasi:
Dibangun menggunakan Next.js dengan TypeScript untuk performa optimal dan type safety. Mengintegrasikan TMDB API sebagai sumber data utama yang mencakup jutaan judul film dan serial TV dari seluruh dunia.

Fitur unggulan:
• Browse film & TV Show — daftar konten populer dan top rated
• Filter Genre — pilih dari 19+ genre film dan 16+ genre TV
• Filter Rating — cari konten berkualitas dengan rating 6.0+, 7.0+, atau 8.0+
• Pencarian — cari film atau TV show dengan keyword
• Detail lengkap — sinopsis, trailer YouTube, dan daftar cast
• Trending — konten paling populer minggu ini
• Rekomendasi konten serupa di halaman detail

Teknologi:
Dibangun dengan Next.js 14 untuk server-side rendering yang cepat dan SEO-friendly. TypeScript untuk type safety dan developer experience yang lebih baik. Tailwind CSS untuk UI yang modern dan responsif. TMDB API sebagai sumber data film dan serial TV.`
  },
];