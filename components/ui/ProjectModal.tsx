'use client';

import { useEffect } from 'react';
import { Project } from '@/data/projects';
import {
  SiLaravel, SiMysql, SiPostgresql, SiTailwindcss, SiReact,
  SiNextdotjs, SiGit, SiGithub, SiPostman, SiFigma, SiHtml5,
  SiCss3, SiJavascript, SiVuedotjs, SiBootstrap, SiPhp,
  SiTypescript, SiPython, SiNodedotjs, SiMongodb, SiFirebase,
  SiSupabase, SiExpo, SiRedis,
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

// Map nama tech → icon + warna + background
const techIconMap: Record<string, { icon: React.ReactNode; bg: string }> = {
  'Laravel':        { icon: <SiLaravel size={26} color="#FF2D20" />,     bg: 'rgba(255, 45, 32, 0.1)' },
  'MySQL':          { icon: <SiMysql size={26} color="#4479A1" />,       bg: 'rgba(68, 121, 161, 0.1)' },
  'PostgreSQL':     { icon: <SiPostgresql size={26} color="#336791" />,  bg: 'rgba(51, 103, 145, 0.1)' },
  'Tailwind CSS':   { icon: <SiTailwindcss size={26} color="#06B6D4" />, bg: 'rgba(6, 182, 212, 0.1)' },
  'React':          { icon: <SiReact size={26} color="#61DAFB" />,       bg: 'rgba(97, 218, 251, 0.1)' },
  'React Native':   { icon: <SiReact size={26} color="#61DAFB" />,       bg: 'rgba(97, 218, 251, 0.1)' },
  'Next.js':        { icon: <SiNextdotjs size={26} />,                   bg: 'rgba(255,255,255,0.05)' },
  'Vue.js':         { icon: <SiVuedotjs size={26} color="#4FC08D" />,    bg: 'rgba(79, 192, 141, 0.1)' },
  'Bootstrap':      { icon: <SiBootstrap size={26} color="#7952B3" />,   bg: 'rgba(121, 82, 179, 0.1)' },
  'JavaScript':     { icon: <SiJavascript size={26} color="#F7DF1E" />,  bg: 'rgba(247, 223, 30, 0.1)' },
  'TypeScript':     { icon: <SiTypescript size={26} color="#3178C6" />,  bg: 'rgba(49, 120, 198, 0.1)' },
  'PHP':            { icon: <SiPhp size={26} color="#777BB4" />,         bg: 'rgba(119, 123, 180, 0.1)' },
  'Python':         { icon: <SiPython size={26} color="#3776AB" />,      bg: 'rgba(55, 118, 171, 0.1)' },
  'Node.js':        { icon: <SiNodedotjs size={26} color="#339933" />,   bg: 'rgba(51, 153, 51, 0.1)' },
  'MongoDB':        { icon: <SiMongodb size={26} color="#47A248" />,     bg: 'rgba(71, 162, 72, 0.1)' },
  'Firebase':       { icon: <SiFirebase size={26} color="#FFCA28" />,    bg: 'rgba(255, 202, 40, 0.1)' },
  'Supabase':       { icon: <SiSupabase size={26} color="#3ECF8E" />,    bg: 'rgba(62, 207, 142, 0.1)' },
  'Git':            { icon: <SiGit size={26} color="#F05032" />,         bg: 'rgba(240, 80, 50, 0.1)' },
  'GitHub':         { icon: <SiGithub size={26} />,                      bg: 'rgba(255,255,255,0.05)' },
  'Figma':          { icon: <SiFigma size={26} color="#F24E1E" />,       bg: 'rgba(242, 78, 30, 0.1)' },
  'Postman':        { icon: <SiPostman size={26} color="#FF6C37" />,     bg: 'rgba(255, 108, 55, 0.1)' },
  'VS Code':        { icon: <VscCode size={26} color="#007ACC" />,       bg: 'rgba(0, 122, 204, 0.1)' },
  'HTML':           { icon: <SiHtml5 size={26} color="#E34F26" />,       bg: 'rgba(227, 79, 38, 0.1)' },
  'CSS':            { icon: <SiCss3 size={26} color="#1572B6" />,        bg: 'rgba(21, 114, 182, 0.1)' },
  'Expo':           { icon: <SiExpo size={26} />,                        bg: 'rgba(255,255,255,0.05)' },
  'Redis':          { icon: <SiRedis size={26} color="#DC382D" />,       bg: 'rgba(220, 56, 45, 0.1)' },
  'Zustand':        { icon: <span style={{ fontSize: '18px' }}>🐻</span>, bg: 'rgba(255,200,100,0.1)' },
  'AsyncStorage':   { icon: <span style={{ fontSize: '18px' }}>💾</span>, bg: 'rgba(100,180,255,0.1)' },
  'Chart.js':       { icon: <span style={{ fontSize: '18px' }}>📊</span>, bg: 'rgba(255,99,132,0.1)' },
  'xlsx':           { icon: <span style={{ fontSize: '18px' }}>📄</span>, bg: 'rgba(33,115,70,0.1)' },
};

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const long = project.longDescription || '';

  const getSection = (keyword: string): string => {
    const regex = new RegExp(`${keyword}[:\\s]*\\n([\\s\\S]*?)(?=\\n[A-Z][^•\\n]+:|$)`, 'i');
    const match = long.match(regex);
    return match ? match[1].trim() : '';
  };

  const renderBullets = (text: string) => {
    if (!text) return null;
    return (
      <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: '12px' }}>
        {text.split('\n').filter(l => l.trim()).map((line, i) => (
          <li key={i} style={{
            marginBottom: '10px',
            paddingLeft: '20px',
            position: 'relative',
            color: 'var(--muted)',
            fontSize: '15px',
            lineHeight: '1.7',
          }}>
            <span style={{ position: 'absolute', left: 0, color: 'var(--text)', fontWeight: 700 }}>•</span>
            {line.replace(/^[•\-]\s*/, '')}
          </li>
        ))}
      </ul>
    );
  };

  const renderParagraphs = (text: string) => {
    if (!text) return null;
    return text.split('\n').filter(l => l.trim() && !l.startsWith('•')).map((p, i) => (
      <p key={i} style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: '1.8', marginBottom: '12px' }}>
        {p}
      </p>
    ));
  };

  const fiturText  = getSection('Fitur unggulan');
  const latarText  = getSection('Latar Belakang');
  const solusiText = getSection('(?:Solusi|Teknologi|Tech)');
  const tekText    = getSection('Teknologi');
  const introMatch = long.match(/^([\s\S]*?)(?=\nFitur|\nLatar|\nSolusi|\nTeknologi|\nHasil)/i);
  const introText  = introMatch ? introMatch[1].trim() : '';

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>

        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '14px', right: '14px',
            width: '36px', height: '36px', borderRadius: '50%',
            border: '1px solid var(--border)', background: 'var(--surface2)',
            color: 'var(--text)', cursor: 'pointer', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            fontSize: '20px', zIndex: 10, transition: 'var(--transition)', lineHeight: 1,
          }}
          aria-label="Close modal"
        >×</button>

        {/* Project Image */}
        <div style={{
          width: '100%', aspectRatio: '16/9', maxHeight: '320px',
          overflow: 'hidden', background: 'var(--surface2)',
          borderBottom: '1px solid var(--border)', flexShrink: 0,
        }}>
          {project.image ? (
            <img src={project.image} alt={project.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          ) : (
            <div style={{ width: '100%', height: '100%', display: 'grid', placeItems: 'center', fontSize: '64px' }}>📦</div>
          )}
        </div>

        {/* Content */}
        <div style={{ padding: 'clamp(16px, 4vw, 32px)' }}>

          <h1 style={{
            fontSize: 'clamp(24px, 4vw, 40px)', marginBottom: '10px',
            color: 'var(--text)', fontWeight: 900, paddingRight: '40px', lineHeight: 1.2,
          }}>
            {project.title}
          </h1>

          <p className="lead" style={{ marginBottom: '16px' }}>
            {project.description}
          </p>

          {/* Tech Tags */}
          <div className="projTags" style={{ marginBottom: '28px' }}>
            {project.tech.map((tech, i) => (
              <span key={i} className="tag">{tech}</span>
            ))}
          </div>

          {/* Latar Belakang */}
          <section className="contentSection" style={{ marginBottom: '16px' }}>
            <h2>Latar Belakang</h2>
            {renderParagraphs(latarText || introText)}
          </section>

          {/* Solusi & Implementasi */}
          <section className="contentSection" style={{ marginBottom: '16px' }}>
            <h2>Solusi & Implementasi</h2>
            {renderParagraphs(solusiText || tekText)}
            {fiturText && (
              <>
                <h3 style={{ fontSize: '17px', marginTop: '20px', marginBottom: '8px', color: 'var(--text)', fontWeight: 700 }}>
                  Fitur Unggulan
                </h3>
                {renderBullets(fiturText)}
              </>
            )}
          </section>

          {/* Tech Stack — pakai icon seperti About page */}
          <section className="contentSection" style={{ marginBottom: '16px' }}>
            <h2>Tech Stack</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'grid', gap: '10px' }}>
              {project.tech.map((tech, i) => {
                const techData = techIconMap[tech];
                return (
                  <li key={i} className="techListItem">
                    <div className="techIconBox" style={{ background: techData?.bg || 'rgba(255,255,255,0.05)' }}>
                      {techData?.icon || <span style={{ fontSize: '18px' }}>🔧</span>}
                    </div>
                    <span>{tech}</span>
                  </li>
                );
              })}
            </ul>
          </section>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '12px', marginTop: '24px', flexWrap: 'wrap' }}>
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer"
                className="btn btnGhost"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', flex: '1 1 auto', justifyContent: 'center' }}>
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '16px', height: '16px', flexShrink: 0 }}>
                  <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.8 2.1 3.4 1.5.1-.7.4-1.2.7-1.5-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.9 1.2 2 1.2 3.3 0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z" />
                </svg>
                GitHub
              </a>
            )}
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noreferrer"
                className="btn btnPrimary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', flex: '1 1 auto', justifyContent: 'center' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '16px', height: '16px', flexShrink: 0 }}>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Live Demo
              </a>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}