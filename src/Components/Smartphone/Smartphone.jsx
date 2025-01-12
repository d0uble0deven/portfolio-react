import styles from './Smartphone.module.css';

import maid_cafe_dance from "../../assets/videos/maid_cafe_dance.mp4"

const Smartphone = () => {
    return (
        <>
            <div className={styles.smartphone}>
            <video src={maid_cafe_dance} autoPlay loop muted playsInline></video>
            </div>
    
        </>
        )
    }
    
    export default Smartphone