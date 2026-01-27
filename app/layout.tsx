import type { Metadata } from 'next';
import Header from '@/components/layouts/header';
import Footer from '@/components/layouts/footer';
import ThemeProvider from '@/components/providers/ThemeProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nathanael Kristian — Laravel Developer Portfolio',
  description: 'Mahasiswa Informatika yang fokus membangun website Laravel yang rapi, cepat, dan siap dipakai.',
  openGraph: {
    type: 'website',
    url: 'https://Nathanael Kristian.com/',
    title: 'Nathanael Kristian — Laravel Developer Portfolio',
    description: 'Mahasiswa Informatika UPN Veteran Jawa Timur yang fokus membangun aplikasi web Laravel.',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nathanael Kristian — Laravel Developer Portfolio',
    description: 'Mahasiswa Informatika yang fokus membangun website Laravel yang rapi, cepat, dan siap dipakai.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <div className="topline" />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}