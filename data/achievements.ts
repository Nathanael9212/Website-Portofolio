export interface Achievement {
  id: number;
  title: string;
  organization: string;
  date: string;
  description?: string;
}

export const achievements: Achievement[] = [
  {
    id: 1,
    title: 'Ketua Komisi Pemuda Remaja',
    organization: 'Ngagel Youth community',
    date: 'April 2024 - Maret 2026',
  },
  {
    id: 2,
    title: 'Ketua Divisi Humas - ABDI DESA FASILKOM LEGO',
    organization: 'Fakultas Ilmu Komputer, UPN "Veteran" Jawa Timur',
    date: 'Agustus 2024 - November 2024 ',
  },
  {
    id: 3,
    title: 'Panitia Fasilom Fest 2024 - FASILKOM FEST ',
    organization: 'Fakultas Ilmu Komputer, UPN "Veteran" Jawa Timur',
    date: 'November 2024 - Januari 2025',
  },
];