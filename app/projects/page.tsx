import { Metadata } from 'next';
import { projects } from '@/data/projects';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: 'Projects — Nathanael Kristian',
  description: 'Daftar project yang pernah saya buat.',
};

export default function ProjectsPage() {
  return <ProjectsClient projects={projects} />;
}