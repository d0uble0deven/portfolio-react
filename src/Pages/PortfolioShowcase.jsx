import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import PortfolioData from '../Data/PortfolioData';
import styles from './PortfolioShowcase.module.css';

const PortfolioShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Portfolio</h1>
      <div className={styles.projectGrid}>
        {PortfolioData.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => openModal(project)}
          />
        ))}
      </div>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </div>
  );
};

export default PortfolioShowcase;

