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
import Arrow from '../SVGComponents/Arrow';
import Basquiat from '../SVGComponents/Basquiat';
import Bronco from '../SVGComponents/Bronco';
import Buffalo from '../SVGComponents/Buffalo';
import CityScape from '../SVGComponents/CityScape';
import Daisy from '../SVGComponents/Daisy';
import Elephant from '../SVGComponents/Elephant';
import Gorilla from '../SVGComponents/Gorilla';
import Grizzly from '../SVGComponents/Grizzly';
import Lion from '../SVGComponents/Lion';
import Longhorn from '../SVGComponents/Longhorn';
import Monkey from '../SVGComponents/Monkey';
import Owl from '../SVGComponents/Owl';
import QuestionMark from '../SVGComponents/QuestionMark';
import Ram from '../SVGComponents/Ram';
import Rhino from '../SVGComponents/Rhino';
import Rooster from '../SVGComponents/Rooster';
import SeaHorse from '../SVGComponents/SeaHorse';
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
            {/* <div>
                <h2 className={styles.line1}>line1</h2>
                <h2 className={styles.line2}>line2</h2>
            </div> */}
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
        case 'svg-arrow':
              return <Arrow />;
        case 'svg-basquiat':
              return <Basquiat />;
        case 'svg-bronco':
              return <Bronco />;
        case 'svg-buffalo':
              return <Buffalo />;
        case 'svg-cityScape':
              return <CityScape />;
        case 'svg-daisy':
              return <Daisy />;
        case 'svg-elephant':
              return <Elephant />;
        case 'svg-gorilla':
              return <Gorilla />;
        case 'svg-grizzly':
              return <Grizzly />;
        case 'svg-lion':
              return <Lion />;
        case 'svg-longhorn':
              return <Longhorn />;
        case 'svg-monkey':
              return <Monkey />;
        case 'svg-owl':
              return <Owl />;
        case 'svg-questionMark':
              return <QuestionMark />;
        case 'svg-ram':
              return <Ram />;
        case 'svg-rhino':
              return <Rhino />;
        case 'svg-rooster':
              return <Rooster />;
        case 'svg-seaHorse':
              return <SeaHorse />;
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
  
  