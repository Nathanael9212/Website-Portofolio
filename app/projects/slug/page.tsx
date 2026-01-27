import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projects } from '@/data/projects';

interface Props {
  params: { slug: string };
}

// Generate metadata dynamically
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} — Nathanael Kristian`,
    description: project.description,
  };
}

// Generate static paths for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="container" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link href="/projects">← Back to Projects</Link>
      </div>

      {/* Project Header */}
      <div className="projectHeader">
        <h1>{project.title}</h1>
        <p className="lead">{project.description}</p>

        <div className="projTags" style={{ marginTop: '16px' }}>
          {project.tech.map((tech, index) => (
            <span key={index} className="tag">{tech}</span>
          ))}
        </div>
      </div>

      {/* Project Image */}
      <div className="projectImage">
        <div className="projImgPlaceholder" style={{ height: '400px', fontSize: '64px' }}>
          {project.image ? (
            <img src={project.image} alt={project.title} />
          ) : (
            <span>📦</span>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="projectContent">
        <section className="contentSection">
          <h2>Latar Belakang</h2>
          <p>
            Banyak UMKM lokal yang masih mengandalkan pencatatan manual (buku atau Excel tak terstruktur) 
            untuk manajemen stok. Hal ini sering menyebabkan masalah seperti data redundan, kesulitan pelacakan 
            stok, dan risiko human error saat rekapitulasi laporan.
          </p>
          <p>
            Project ini dibuat untuk mendigitalisasi proses tersebut menjadi sistem terpusat berbasis web yang 
            dapat diakses secara real-time, memastikan data stok selalu akurat dan aman.
          </p>
        </section>

        <section className="contentSection">
          <h2>Solusi & Implementasi</h2>
          <p>
            Saya membangun sistem web app menggunakan arsitektur <strong>MVC (Model-View-Controller)</strong> dengan 
            framework Laravel 10. Sistem ini dirancang untuk menangani masalah integritas data dan keamanan akses user.
          </p>

          <h3>Fitur Kunci</h3>
          <ul>
            <li>
              <strong>Manajemen Stok Otomatis:</strong> Logika sistem akan otomatis mengurangi atau menambah stok 
              master saat transaksi terjadi, mencegah selisih perhitungan manual.
            </li>
            <li>
              <strong>Role-Based Access Control (RBAC):</strong> Menggunakan Laravel Gates/Policies untuk membedakan 
              hak akses antara Admin (Full Access) dan Staff (Input Only), menjaga keamanan data sensitif.
            </li>
            <li>
              <strong>Reporting Engine:</strong> Fitur filter laporan dinamis yang terintegrasi dengan library 
              maatwebsite/excel untuk ekspor data bulanan secara instan.
            </li>
          </ul>
        </section>

        <section className="contentSection">
          <h2>Teknologi yang Digunakan</h2>
          <div className="techGrid">
            <div className="techItem">
              <h3>Backend</h3>
              <p>Laravel 10 (PHP 8.2) - Eloquent ORM & Security Features</p>
            </div>
            <div className="techItem">
              <h3>Database</h3>
              <p>MySQL - Relational Database Design</p>
            </div>
            <div className="techItem">
              <h3>Frontend</h3>
              <p>Blade Templating + Tailwind CSS</p>
            </div>
          </div>
        </section>

        <section className="contentSection">
          <h2>Hasil & Impact</h2>
          <p>
            Sistem berhasil diimplementasikan pada 2 UMKM di Surabaya dengan feedback positif. 
            Waktu rekapitulasi laporan berkurang dari 2 jam menjadi 5 menit, dan error rate 
            dalam pencatatan stok turun hingga 95%.
          </p>
        </section>
      </div>

      {/* Navigation to other projects */}
      <div style={{ marginTop: '64px', textAlign: 'center' }}>
        <Link href="/projects" className="btn btnGhost">
          View All Projects
        </Link>
      </div>
    </main>
  );
}