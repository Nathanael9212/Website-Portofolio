export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image?: string;
}

export const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Peserta Pelatihan/Seminar di Introduction to Cybersecurity',
    issuer: 'Dicoding x Id Camp',
    date: '2025',
  },
  {
    id: 2,
    title: 'Peserta Pelatihan/Seminar di Mini Class Next JS Real Project',
    issuer: 'Dunia Coding',
    date: '2025',
  },
  {
    id: 3,
    title: 'Peserta Pelatihan/Seminar di Kuliah Tamu 2023 "AI Nexus" Bridging Academia and Industry',
    issuer: 'Himatifa UPN "Veteran" Jawa Timur',
    date: '2023',
  },
];