import styles from './Article.module.css';
import { Link } from 'react-router-dom';

const nextArticle = (props) => {


  return (
    <section>
      <Link to={props.nextArticleLink} className={styles.nextSection}>
        <div className={styles.nextImageContainer}>
            <img src={props.src} alt={props.alt} className={styles.nextImage} />
        </div>
        <div className={styles.nextTextContainer}>
            <p className={styles.nextLink}>Next Article</p>
            <h4 className={styles.nextTitle}>{props.nextArticle}</h4>
        </div>
      </Link>
    </section>
  )
}

export default nextArticle