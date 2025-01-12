import React from 'react';
import styles from './ProjectModal.module.css';

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2 className={styles.title}>{project.title}</h2>
        <div className={styles.mediaContainer}>
          {project.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${project.title} - Image ${index + 1}`}
              className={styles.image}
            />
          ))}
          {project.video && (
            <video className={styles.video} controls>
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        <div className={styles.links}>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
            GitHub
          </a>
          <a href={project.deployed} target="_blank" rel="noopener noreferrer" className={styles.link}>
            Deployed App
          </a>
        </div>
        <p className={styles.description}>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectModal;

