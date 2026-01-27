import { Metadata } from 'next';
import { certificates } from '@/data/certificates';

export const metadata: Metadata = {
  title: 'Certificates — Nathanael Kristian',
  description: 'Sertifikat dan kursus yang pernah saya selesaikan.',
};

export default function CertificatesPage() {
  return (
    <main className="container" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
      <div className="pageTitle">
        <h1>Certificates</h1>
        <p className="lead">Sertifikat dan kursus yang pernah saya selesaikan</p>
      </div>

      <div className="grid">
        {certificates.map((cert) => (
          <div key={cert.id} className="certCard">
            <div className="certIcon">🏆</div>
            <div className="certContent">
              <h3 className="certTitle">{cert.title}</h3>
              <p className="certIssuer">{cert.issuer}</p>
              <span className="certDate">{cert.date}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}