import styles from './Project.module.css';

const ProjectSidebar = (props) => {

  return (

    <aside className={styles.aside}>
        <div className={styles.headingContainer}>
            <h2 className={styles.projectTitle}>{props.title}</h2>
            <p className={styles.projectDesc}>{props.desc}</p>
        </div>
        <div className={styles.footerContainer}>
            <h4 className={styles.location}><i>Location<br/>{props.location}</i></h4>
            <h4 className={styles.completion}><i>Completion<br/>{props.completion}</i></h4>
        </div>
        <div className={styles.nextProjectContainer}>
            <a href="/">
                <p>Next Project</p>
                <h5>{props.nextProjectTitle}</h5>
            </a>
        </div>
    </aside>

  )
}

export default ProjectSidebar