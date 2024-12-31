import styles from './Styles/NavJournal.module.css';
import { Link } from 'react-router-dom';

const ImageItem = (props) => {

  return (
                
    <div className={styles.container}>
      <Link to={props.linkSrc} className={styles.linkStyles}>

        <div className={styles.imageContainer}>
          <img 
            src={props.imgSrc} 
            alt={props.imgAlt} 
            className={styles.Image} 
            style={{height: props.height}} 
          />
        </div>

        <span className={styles.textContainer}>                 
          <h4 className={styles.articleTitle}>{props.title}</h4>
          <p className={styles.link}>{props.link}</p>
        </span>

    </Link>
  </div>
  
  )
}

export default ImageItem