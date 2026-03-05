import { Metadata } from 'next';
import { achievements } from '@/data/achievements';
import { certificates } from '@/data/certificates';
import Image from 'next/image';
import {
  SiLaravel,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiVuedotjs,
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

export const metadata: Metadata = {
  title: 'About — Nathanael Kristian',
  description: 'Background, skills, dan tech stack yang saya gunakan.',
};

export default function AboutPage() {
  return (
    <main className="container" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
      <div className="pageTitle">
        <h1>About Me</h1>
        <p className="lead">Background, skills, dan tech stack yang saya gunakan</p>
      </div>

      <section className="contentSection">
        <h2>Background</h2>

        {/* Responsive grid: pakai class aboutGrid */}
        <div className="aboutGrid">

          {/* Text */}
          <div>
            <p>
              Mahasiswa Informatika di UPN Veteran Jawa Timur yang fokus membangun aplikasi web berbasis Laravel dengan pendekatan praktis dan efisien.
              Saya percaya bahwa aplikasi yang baik bukan hanya 'jadi', tapi 'kepakai'—maka dari itu saya selalu memperhatikan struktur kode yang bersih, database yang teroptimasi, dan UI yang konsisten agar sistem bisa digunakan dalam jangka panjang.
            </p>
            <p>
              Saat ini aktif mengerjakan project kuliah, membangun portfolio, dan terbuka untuk kolaborasi freelance—terutama untuk UMKM yang butuh digitalisasi seperti website profil, landing page promosi, atau sistem manajemen sederhana (inventory, kasir, pembukuan).
            </p>
          </div>

          {/* Foto — blob style sama seperti Hero */}
          <div className="aboutPhotoWrap">
            <div className="aboutPhotoFrame">
              <div className="aboutPhoto">
                <Image
                  src="/images/fotoku11.png"
                  alt="Nathanael Kristian"
                  width={175}
                  height={226}
                  style={{ objectFit: 'cover', objectPosition: 'center 15%' }}
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="contentSection">
        <h2>Tech Stack</h2>
        <div className="techGrid">

          {/* Backend */}
          <div className="techItem">
            <h3>Backend</h3>
            <ul className="techList">
              <li className="techListItem">
                <div className="techIconBox" style={{ background: 'rgba(255, 45, 32, 0.1)' }}>
                  <SiLaravel size={26} color="#FF2D20" />
                </div>
                <span>Laravel (PHP)</span>
              </li>
              <li className="techListItem">
                <div className="techIconBox" style={{ background: 'rgba(68, 121, 161, 0.1)' }}>
                  <SiMysql size={26} color="#4479A1" />
                </div>
                <span>MySQL</span>
              </li>
              <li className="techListItem">
                <div className="techIconBox" style={{ background: 'rgba(51, 103, 145, 0.1)' }}>
                  <SiPostgresql size={26} color="#336791" />
                </div>
                <span>PostgreSQL</span>
              </li>
            </ul>
          </div>

          {/* Frontend */}
          <div className="techItem">
            <h3>Frontend</h3>
            <ul className="techList">
              <li className="techListItem">
                <div className="techIconBox" style={{ background: 'rgba(227, 79, 38, 0.1)' }}>
                  <SiHtml5 size={20} color="#E34F26" />
                  <SiCss3 size={20} color="#1572B6" />
                  <SiJavascript size={20} color="#F7DF1E" />
                </div>
                <span>HTML, CSS, JS</span>
              </li>
              <li className="techListItem">
                <div className="techIconBox" style={{ background: 'rgba(6, 182, 212, 0.1)' }}>
                  <SiTailwindcss size={26} color="#06B6D4" />
                </div>
                <span>Tailwind CSS</span>
              </li>
              <li className="techListItem">
                <div className="techIconBox" style={{ background: 'rgba(97, 218, 251, 0.1)' }}>
                  <SiReact size={22} color="#61DAFB" />
                  <SiVuedotjs size={22} color="#4FC08D" />
                </div>
                <span>React / Vue.js</span>
              </li>
              <li className="techListItem">
                <div className="techIconBox" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                  <SiNextdotjs size={26} style={{ color: 'var(--text)' }} />
                </div>
                <span>Next.js</span>
              </li>
            </ul>
          </div>

          {/* Tools */}
          <div className="techItem">
            <h3>Tools</h3>
            <ul className="techList">
              <li className="techListItem">
                <div className="techIconBox" style={{ background: 'rgba(240, 80, 50, 0.1)' }}>
                  <SiGit size={22} color="#F05032" />
                  <SiGithub size={22} style={{ color: 'var(--text)', marginLeft: '4px' }} />
                </div>
                <span>Git & GitHub</span>
              </li>
              <li className="techListItem">
                <div className="techIconBox" style={{ background: 'rgba(0, 122, 204, 0.1)' }}>
                  <VscCode size={26} color="#007ACC" />
                </div>
                <span>VS Code</span>
              </li>
              <li className="techListItem">
                <div className="techIconBox" style={{ background: 'rgba(255, 108, 55, 0.1)' }}>
                  <SiPostman size={26} color="#FF6C37" />
                </div>
                <span>Postman</span>
              </li>
              <li className="techListItem">
                <div className="techIconBox" style={{ background: 'rgba(242, 78, 30, 0.1)' }}>
                  <SiFigma size={26} color="#F24E1E" />
                </div>
                <span>Figma</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      <section className="contentSection">
        <h2>Achievements</h2>
        <div className="timeline">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="tItem">
              <div className="tYear">{achievement.date}</div>
              <div className="tContent">
                <h3>{achievement.title}</h3>
                <div className="tOrg">{achievement.organization}</div>
                {achievement.description && (
                  <p className="tDesc">{achievement.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="contentSection">
        <h2>Certificates</h2>
        <div style={{ display: 'grid', gap: '16px', marginTop: '20px' }}>
          {certificates.map((cert) => (
            <div key={cert.id} className="certCard">
              <div className="certIcon">📜</div>
              <div className="certContent">
                <h3 className="certTitle">{cert.title}</h3>
                <div className="certIssuer">{cert.issuer}</div>
                <span className="certDate">{cert.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}