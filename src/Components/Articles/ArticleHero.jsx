import styles from './Article.module.css';

const ArticleHero = (props) => {

  return (

    <section className={styles.section}>
        <div className={styles.textContainer}>
            <h2 className={styles.articleTitle}>{props.title}</h2>
            <p className={styles.articleDesc}>
              {props.paragraphOne}
              <br/> 
              <br/>
              {props.paragraphTwo}
            </p>
            <p className={styles.articleAuthor}><b>Written by</b><br/>{props.author}</p>
        </div>
        <div className={styles.imageContainer}>
            <img src={props.src} alt={props.alt} className={styles.articleImage} />
        </div>
    </section>

  )
}

export default ArticleHero