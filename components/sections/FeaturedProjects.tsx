'use client';

import { useState } from 'react';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { Project } from '@/data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from '@/components/ui/ProjectModal';

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const featuredProjects = projects.filter(p => p.featured);

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
      <section className="container" style={{ paddingTop: '48px', paddingBottom: '64px' }}>
        <div className="sectionHeader">
          <h2>Featured Projects</h2>
          <Link href="/projects" className="btnGhost">
            See all →
          </Link>
        </div>

        <div className="grid3">
          {featuredProjects.slice(0, 3).map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>
      </section>

      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}