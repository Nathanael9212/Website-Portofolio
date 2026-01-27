import { Metadata } from 'next';
import { achievements } from '@/data/achievements';

export const metadata: Metadata = {
  title: 'Achievements — Nathanael Kristian',
  description: 'Pencapaian, penghargaan, dan peran kepemimpinan yang pernah saya jalani.',
};

export default function AchievementsPage() {
  return (
    <main className="container" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
      <div className="pageTitle">
        <h1>Achievements</h1>
        <p className="lead">
          Pencapaian, penghargaan, dan peran kepemimpinan yang pernah saya jalani di berbagai organisasi & kompetisi
        </p>
      </div>

      <div className="timeline">
        {achievements.map((achievement) => (
          <div key={achievement.id} className="tItem">
            <div className="tYear">{achievement.date}</div>
            <div className="tContent">
              <h3>{achievement.title}</h3>
              <p className="tOrg">{achievement.organization}</p>
              {achievement.description && (
                <p className="tDesc">{achievement.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}