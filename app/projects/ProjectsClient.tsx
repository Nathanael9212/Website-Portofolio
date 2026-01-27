'use client';

import { useState } from 'react';
import { Project } from '@/data/projects';
import ProjectCard from '@/components/sections/ProjectCard';
import ProjectModal from '@/components/ui/ProjectModal';

interface ProjectsClientProps {
  projects: Project[];
}

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  const [filter, setFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ['All', 'Website', 'Mobile', 'System'];
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <main className="container" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="pageTitle">
          <h1>Projects</h1>
          <p className="lead">Daftar project yang pernah saya buat</p>
        </div>

        <div className="filterChips">
          {categories.map((category) => (
            <button
              key={category}
              className={`chipBtn ${filter === category ? 'isActive' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={() => handleProjectClick(project)}
              />
            ))
          ) : (
            <p style={{ gridColumn: '1 / -1', textAlign: 'center', color: 'var(--muted)', padding: '48px' }}>
              No projects found in this category.
            </p>
          )}
        </div>
      </main>

      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
