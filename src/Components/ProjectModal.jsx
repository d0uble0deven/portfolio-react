import React, { useState } from 'react';
import styles from './ProjectModal.module.css';

const ProjectModal = ({ project, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const nextImage = () => {
    setActiveImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prevIndex) => (prevIndex - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className={styles.modalLayout}>
          <div className={styles.mediaSection}>
            <div className={styles.modalImageContainer}>
              <img
                src={project.images[activeImageIndex]}
                alt={`${project.title} - Image ${activeImageIndex + 1}`}
                className={styles.modalImage}
              />
              <button className={`${styles.imageNavButton} ${styles.prevButton}`} onClick={prevImage} aria-label="Previous image">
                &#10094;
              </button>
              <button className={`${styles.imageNavButton} ${styles.nextButton}`} onClick={nextImage} aria-label="Next image">
                &#10095;
              </button>
            </div>
            <div className={styles.imageThumbnails}>
              {project.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${project.title} - Thumbnail ${index + 1}`}
                  className={`${styles.thumbnail} ${index === activeImageIndex ? styles.activeThumbnail : ''}`}
                  onClick={() => setActiveImageIndex(index)}
                />
              ))}
            </div>
            {project.video && (
              <video className={styles.modalVideo} controls>
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
          <div className={styles.infoSection}>
            <h2 className={styles.modalTitle}>{project.title}</h2>
            <p className={styles.modalDescription}>{project.description}</p>
            <div className={styles.modalLinks}>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.modalLink}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.modalLinkIcon}>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                GitHub
              </a>
              <a href={project.deployed} target="_blank" rel="noopener noreferrer" className={styles.modalLink}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.modalLinkIcon}>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

