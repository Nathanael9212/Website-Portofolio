import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'My Resume — Nathanael Kristian',
  description: 'Resume dan CV Nathanael Kristian.',
};

export default function ResumePage() {
  return (
    <main className="container" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
      <div className="pageTitle">
        <h1>My Resume</h1>
        <p className="lead">Download resume saya dalam format PDF</p>
      </div>

      <section className="contentSection" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
        <h2>Resume PDF</h2>
        <p style={{ marginBottom: '32px' }}>
          Klik tombol di bawah untuk mengunduh resume saya dalam format PDF.
        </p>
        <a
          href="/public/images/projects/cv.pdf"
          download
          className="btn btnPrimary"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
        >
          <svg className="icon" viewBox="0 0 24 24" fill="currentColor" style={{ width: '18px', height: '18px' }}>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
          Download Resume PDF
        </a>
      </section>
    </main>
  );
}
