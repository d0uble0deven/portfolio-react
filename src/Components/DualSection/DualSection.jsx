import React, { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import styles from './DualSection.module.css';
import Tiger from '../SVGComponents/Tiger';
import Hands from '../SVGComponents/Hands';
import Tusks from '../SVGComponents/Tusks';
import Snake from '../SVGComponents/Snake';
import Shark from '../SVGComponents/Shark';
import Stallion from '../SVGComponents/Stallion';
import Smartphone from '../Smartphone/Smartphone';

const Model = ({ url }) => {
    const [gltf, setGltf] = useState(null);
    const modelRef = useRef();
    const scroll = useScroll();
  
    useEffect(() => {
      const loader = new GLTFLoader();
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
      loader.setDRACOLoader(dracoLoader);
  
      loader.load(url, (gltfData) => {
        setGltf(gltfData);
      });
  
      return () => {
        if (gltf) {
          gltf.scene.traverse((object) => {
            if (object.isMesh) {
              object.geometry.dispose();
              object.material.dispose();
            }
          });
        }
      };
    }, [url]);
  
    useFrame(() => {
    //   if (modelRef.current && scroll) {
    //     modelRef.current.rotation.y = scroll * Math.PI * 2;
    //   }
    });
  
    if (!gltf) return null;
  
    return <primitive ref={modelRef} object={gltf.scene} />;
  };
  
  const DualSection = ({ section1, section2 }) => {
    const renderContent = (content) => {
      switch (content.type) {
        case 'image':
          return <img src={content.src} alt={content.alt || ''} className={styles.image} />;
        case 'video':
          return (
            <Smartphone/>
            // <video src={content.src} className={styles.video} autoPlay loop muted playsInline>
            //   Your browser does not support the video tag.
            // </video>
          );
        case 'text':
          return (
          <>
          <div className={styles.text}>
            <div>
                <h2 className={styles.line1}>line1</h2>
                <h2 className={styles.line2}>line2</h2>
            </div>
            {content.text}

          </div>
          </>
          );
        case 'svg-hands':
              return <Hands />;
        case 'svg-tiger':
              return <Tiger />;
        case 'svg-tusks':
              return <Tusks />;
        case 'svg-snake':
              return <Snake />;
        case 'svg-shark':
              return <Shark />;
        case 'svg-stallion':
              return <Stallion />;
              // return <Loading />;
            //   return <img src={content.src} alt={content.alt || ''} className={styles.svg} />;
        case 'model':
          return (
            <Canvas className={styles.model}>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <pointLight position={[-10, -10, -10]} />
              <Suspense fallback={null}>
                <Model url={content.src} />
              </Suspense>
            </Canvas>
          );
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
  
  