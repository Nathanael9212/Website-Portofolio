// data/projects.ts - LENGKAP (Pendek + Panjang)

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
    description: 'Platform pemesanan makanan Sambal Belut dengan sistem Dine In dan Take Away. Dilengkapi menu favorit, keranjang belanja, dan integrasi lokasi.',
    tech: ['Laravel', 'MySQL', 'Tailwind CSS', 'JavaScript'],
    featured: true,
    image: '/images/projects/sisambera.png',
    category: 'Website',
    date: '2025-11',
    longDescription: `Sisambera adalah platform digital untuk UMKM kuliner Sambal Belut Bu Raden yang mempermudah customer memesan makanan secara online. Sistem ini mendukung dua mode pemesanan (Dine In & Take Away) dengan antarmuka yang user-friendly.

Fitur unggulan:
• Katalog menu dengan foto dan harga real-time
• Sistem pemesanan dengan pilihan Dine In atau Take Away
• Keranjang belanja dengan kalkulasi otomatis
• Badge "Recommended" untuk menu favorit
• Responsive design untuk mobile dan desktop
• Admin panel untuk manage menu dan pesanan

Latar Belakang:
Banyak UMKM kuliner masih mengandalkan pemesanan via WhatsApp atau telepon yang tidak efisien. Sisambera hadir untuk digitalisasi proses pemesanan dengan sistem yang rapi, cepat, dan mudah digunakan.

Teknologi:
Backend dibangun dengan Laravel 10 untuk handle business logic, authentication, dan database operations. Frontend menggunakan Tailwind CSS untuk desain yang modern dan responsive.

Hasil:
Sistem berhasil meningkatkan efisiensi pemesanan hingga 60% dan mengurangi kesalahan order manual.`
  },
  {
    id: 2,
    slug: 'ngacup-coffee',
    title: 'Ngacup Coffee - Cafe Management System',
    description: 'Website coffee shop premium dengan katalog menu interaktif, sistem rekomendasi, dan e-commerce terintegrasi untuk bisnis kopi modern.',
    tech: ['Laravel', 'MySQL', 'Bootstrap', 'JavaScript'],
    featured: true,
    image: '/images/projects/ngacup.png',
    category: 'Website',
    date: '2025-09',
    longDescription: `Ngacup Coffee adalah sistem manajemen website untuk coffee shop yang menyajikan pengalaman premium bagi customer. Desain elegan dengan fokus pada presentasi produk yang menarik.

Fitur unggulan:
• Hero section dengan tagline branding yang kuat
• Menu populer dengan foto produk berkualitas tinggi
• Sistem rekomendasi menu (Recommended badge)
• Pricing Hot & Cold untuk setiap item
• Detail menu modal dengan deskripsi lengkap
• Navigation menu yang smooth
• Footer dengan informasi kontak dan jam operasional

Latar Belakang:
Coffee shop modern membutuhkan branding yang kuat melalui website profesional. Ngacup Coffee dirancang untuk memberikan first impression yang premium.

Teknologi:
Dibangun dengan Laravel untuk backend management dan Bootstrap untuk frontend yang responsive. Fokus pada image optimization dan loading speed.

Hasil:
Website berhasil meningkatkan brand awareness dan mempermudah customer mengetahui menu lengkap sebelum berkunjung.`
  },
  {
    id: 3,
    slug: 'uangku-finance',
    title: 'UangKu - Personal Finance Tracker',
    description: 'Aplikasi pencatat keuangan pribadi dengan dashboard interaktif, filter multi-parameter, ekspor laporan, dan manajemen kategori yang fleksibel.',
    tech: ['React Native', 'MySQL', 'Chart.js', 'Tailwind CSS'],
    featured: true,
    image: '/images/projects/uangku.png',
    category: 'Mobile',
    date: '2025-12',
    longDescription: `UangKu adalah aplikasi web untuk mengelola keuangan pribadi dengan mudah dan terstruktur. Dirancang untuk membantu user melacak pemasukan, pengeluaran, dan saldo secara real-time.

Fitur unggulan:
• Dashboard dengan 3 card summary (Pemasukan, Pengeluaran, Saldo)
• List transaksi dengan tanggal dan kategori yang jelas
• Filter multi-parameter (Tanggal, Kategori, Jumlah, Deskripsi)
• Ekspor laporan ke Excel/PDF dengan format yang rapi
• Manajemen kategori transaksi yang custom
• Statistik visual dengan Chart.js untuk analisis bulanan
• Responsive mobile-first design
• Dark theme support

Latar Belakang:
Banyak mahasiswa dan pekerja kesulitan melacak pengeluaran bulanan secara manual. UangKu hadir sebagai solusi digital yang mudah digunakan.

Teknologi:
Backend menggunakan Laravel dengan Eloquent ORM untuk manajemen data transaksi. Chart.js diintegrasikan untuk visualisasi grafik. Tailwind CSS untuk UI yang clean dan responsive.

Hasil:
User dapat lebih disiplin dalam mengatur keuangan dengan melihat summary real-time. Fitur filter dan ekspor memudahkan membuat laporan dalam hitungan detik.`
  },
];
