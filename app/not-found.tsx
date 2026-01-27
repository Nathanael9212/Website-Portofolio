import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="errorPage">
      <div className="container">
        <h1 className="errorCode">404</h1>
        <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Page Not Found</h2>
        <p>Halaman yang kamu cari tidak ditemukan atau telah dipindahkan.</p>
        <div style={{ marginTop: '32px' }}>
          <Link href="/" className="btn btnPrimary">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}