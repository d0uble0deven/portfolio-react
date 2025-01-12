import React from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={project.image} alt={project.title} className={styles.image} />
      <h3 className={styles.title}>{project.title}</h3>
    </div>
  );
};

export default ProjectCard;

