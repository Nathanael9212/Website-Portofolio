'use client';

import { useEffect } from 'react';
import { Project } from '@/data/projects';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div 
      className="modalOverlay"
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '20px',
        overflowY: 'auto'
      }}
    >
      <div 
        className="modalContent"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: 'var(--surface)',
          borderRadius: 'var(--radius)',
          maxWidth: '900px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
          border: '1px solid var(--border)',
          boxShadow: 'var(--shadow-lg)'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            border: '1px solid var(--border)',
            background: 'var(--surface)',
            color: 'var(--text)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            zIndex: 10,
            transition: 'var(--transition)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--surface2)';
            e.currentTarget.style.borderColor = 'var(--text)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--surface)';
            e.currentTarget.style.borderColor = 'var(--border)';
          }}
        >
          ×
        </button>

        {/* Project Image */}
        <div style={{ marginBottom: '32px' }}>
          <div className="projImgPlaceholder" style={{ height: '400px', fontSize: '64px' }}>
            {project.image ? (
              <img src={project.image} alt={project.title} />
            ) : (
              <span>📦</span>
            )}
          </div>
        </div>

        {/* Project Content */}
        <div style={{ padding: '0 32px 32px' }}>
          <h1 style={{ fontSize: 'clamp(32px, 4vw, 48px)', marginBottom: '12px', color: 'var(--text)', fontWeight: 900 }}>
            {project.title}
          </h1>
          <p className="lead" style={{ marginBottom: '20px' }}>{project.description}</p>

          <div className="projTags" style={{ marginBottom: '32px' }}>
            {project.tech.map((tech, index) => (
              <span key={index} className="tag">{tech}</span>
            ))}
          </div>

          <section className="contentSection" style={{ marginBottom: '24px' }}>
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

          <section className="contentSection" style={{ marginBottom: '24px' }}>
            <h2>Solusi & Implementasi</h2>
            <p>
              Saya membangun sistem web app menggunakan arsitektur <strong>MVC (Model-View-Controller)</strong> dengan 
              framework Laravel 10. Sistem ini dirancang untuk menangani masalah integritas data dan keamanan akses user.
            </p>

            <h3 style={{ fontSize: '20px', marginTop: '24px', marginBottom: '12px', color: 'var(--text)', fontWeight: 700 }}>
              Fitur Kunci
            </h3>
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
              <li style={{ marginBottom: '12px', paddingLeft: '24px', position: 'relative' }}>
                <strong style={{ color: 'var(--text)' }}>Manajemen Stok Otomatis:</strong> Logika sistem akan otomatis mengurangi atau menambah stok 
                master saat transaksi terjadi, mencegah selisih perhitungan manual.
              </li>
              <li style={{ marginBottom: '12px', paddingLeft: '24px', position: 'relative' }}>
                <strong style={{ color: 'var(--text)' }}>Role-Based Access Control (RBAC):</strong> Menggunakan Laravel Gates/Policies untuk membedakan 
                hak akses antara Admin (Full Access) dan Staff (Input Only), menjaga keamanan data sensitif.
              </li>
              <li style={{ marginBottom: '12px', paddingLeft: '24px', position: 'relative' }}>
                <strong style={{ color: 'var(--text)' }}>Reporting Engine:</strong> Fitur filter laporan dinamis yang terintegrasi dengan library 
                maatwebsite/excel untuk ekspor data bulanan secara instan.
              </li>
            </ul>
          </section>

          <section className="contentSection">
            <h2>Teknologi yang Digunakan</h2>
            <div className="techGrid">
              <div className="techItem">
                <h3>Backend</h3>
                <p style={{ color: 'var(--muted)', margin: 0 }}>Laravel 10 (PHP 8.2) - Eloquent ORM & Security Features</p>
              </div>
              <div className="techItem">
                <h3>Database</h3>
                <p style={{ color: 'var(--muted)', margin: 0 }}>MySQL - Relational Database Design</p>
              </div>
              <div className="techItem">
                <h3>Frontend</h3>
                <p style={{ color: 'var(--muted)', margin: 0 }}>Blade Templating + Tailwind CSS</p>
              </div>
            </div>
          </section>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '12px', marginTop: '32px', flexWrap: 'wrap' }}>
            <a 
              href={`https://github.com/username/${project.slug}`} 
              target="_blank" 
              rel="noreferrer"
              className="btn btnGhost"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <svg className="icon" viewBox="0 0 24 24" fill="currentColor" style={{ width: '18px', height: '18px' }}>
                <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.8 2.1 3.4 1.5.1-.7.4-1.2.7-1.5-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.9 1.2 2 1.2 3.3 0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z" />
              </svg>
              GitHub
            </a>
            <a 
              href={`https://${project.slug}.vercel.app`} 
              target="_blank" 
              rel="noreferrer"
              className="btn btnPrimary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <svg className="icon" viewBox="0 0 24 24" fill="currentColor" style={{ width: '18px', height: '18px' }}>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3l-5-5"/>
              </svg>
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
