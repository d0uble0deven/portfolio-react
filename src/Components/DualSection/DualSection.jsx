import React, { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import styles from './DualSection.module.css';
import Loading from '../Project/Loading';

// const Model = ({ url }) => {
//   const gltf = useLoader(GLTFLoader, url);
//   return <primitive object={gltf.scene} />;
// };

const DualSection = ({ section1, section2 }) => {
    const renderContent = (content) => {
        switch (content.type) {
          case 'image':
            return <img src={content.src} alt={content.alt || ''} className={styles.image} />;
          case 'video':
            return (
              <video src={content.src} className={styles.video} autoPlay loop muted playsInline>
                Your browser does not support the video tag.
              </video>
            );
          case 'text':
            return <div className={styles.text}>{content.text}</div>;
          case 'svg':
              // return <img src={content.src} alt={content.alt || ''} className={styles.svg} />;
            return <Loading />;
        //   case 'model':
        //     return (
        //       <Canvas className={styles.model}>
        //         <ambientLight intensity={0.5} />
        //         <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        //         <pointLight position={[-10, -10, -10]} />
        //         <Suspense fallback={null}>
        //           <Model url={content.src} />
        //           <OrbitControls />
        //         </Suspense>
        //       </Canvas>
        //     );
          default:
            return null;
        }
      };
    
      return (
        <div className={styles.container} style={{ height: '100vh', width: '100vw' }}>
          <div className={styles.section}>{renderContent(section1)}</div>
          <div className={styles.section}>{renderContent(section2)}</div>
        </div>
      );
};

export default DualSection;

