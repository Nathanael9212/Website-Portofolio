'use client';

import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div className="projCard" onClick={onClick} style={{ cursor: 'pointer' }}>
      <div className="projImg">
        <div className="projImgPlaceholder">
          {project.image ? (
            <img src={project.image} alt={project.title} />
          ) : (
            <span>📦</span>
          )}
        </div>
      </div>

      <div className="projContent">
        <h3 className="projTitle">{project.title}</h3>
        <p className="projDesc">{project.description}</p>

        <div className="projTags">
          {project.tech.map((tech, index) => (
            <span key={index} className="tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
}