import styles from './Smartphone.module.css';

const Smartphone = () => {
    return (
        <>
            <div className={styles.smartphone}>
            <video src="src/assets/videos/maid_cafe_dance.mp4" autoPlay loop muted playsInline></video>
            </div>
    
        </>
        )
    }
    
    export default Smartphone