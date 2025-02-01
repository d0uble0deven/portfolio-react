import { useState, useEffect, useRef } from 'react'

import './Home.css';
// header imports
import styles from '../Components/Styles/Header.module.css';

// intro imports
import introStyles from '../Components/Styles/Intro.module.css';

// projects imports
import projStyles from '../Components/Styles/Projects.module.css';

// section imports
import secStyles from '../Components/Styles/Section.module.css';

// articles imports
import artStyles from '../Components/Styles/Articles.module.css';

// imports
import Image from '../Components/Image';
import PageChange from '../Components/PageChange';

import useScrollPercentage from '../Components/useScrollPercentage';
import { Link } from 'react-router-dom';

import '../App.css';
import Loading from '../Components/SVGComponents/Hands';
import DualSection from '../Components/DualSection/DualSection';

import me from '../assets/images/me.jpg';
import PortfolioShowcase from './PortfolioShowcase';


const Home = () => {

  const [scrollRef, scrollPercentage] = useScrollPercentage();
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [secondImage, setSecondImage] = useState("https://ily-girl.mikapikazo.info/assets/image/keyvisual-dark.webp");
  const imageRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);




const scrollRotate = () => {
  // let aboutAnimation = document.querySelector(".about_animation");
  // // let image = document.querySelectorAll("smartphone");

  // // aboutAnimation.style.transform = "translateX("+20-scrollPercentage+"%) "+ "rotate(" + ((scrollPercentage/100)*-45) + "deg)";
  // aboutAnimation.style.transform = "rotate(" + ((scrollPercentage/100)*-45) + "deg)";
  // // aboutAnimation.style.transform = "rotate(" + ((scrollPercentage/100)*-45) + "deg)"+" translateX("+20-scrollPercentage+"%)";
  // // aboutAnimation.style.transform = "rotate(" + ((scrollPercentage/100)*-45) + "deg)"+" translateX("+20-scrollPercentage+"%)";
  // // image.style.transform = "rotate(" + ((20/scrollPercentage)*-45) + "deg)"+" translateX(-"+scrollPercentage/.5+"%)";
  // // {{  transform: "translateX(calc(50% - ("+scrollPercentage+" * (100%)))"+") "+"rotate(calc("+scrollPercentage+" * (-45deg)))"}}
  
  
  // let ilygirlAnimation = document.querySelector(".ilygirl_animation");
  // // ilygirlAnimation.style.transform = "translateX("+20-scrollPercentage+ "%)"+"rotate(" + ((scrollPercentage/100)*-45) + "deg)"; 
  // ilygirlAnimation.style.transform = "rotate(" + ((scrollPercentage/100)*-45) + "deg)"; 
  
  // let profileAnimation = document.querySelector(".profile_animation");
  // // profileAnimation.style.transform = "translateX("+20-scrollPercentage+"%)"+" rotate(" + ((scrollPercentage/100)*-45) + "deg)";
  // profileAnimation.style.transform = "rotate(" + ((scrollPercentage/100)*-45) + "deg)";
}


  return (
    <>
      <PageChange />
      
      <div className="scroll-container" ref={scrollRef} onScroll={scrollRotate} >


        <div className="content-container">
{/* <Loading/> */}

        {/* <header className={styles.header}>
            <div className={styles.titleContainer}>
              <h1 className={styles.titleAnimated}>Dev Govindji</h1>
            </div>
              <p className={styles.desc}>
                We are a South African architecture and design studio with a 
                global reputation for creating innovative spaces.
              </p>
        </header> */}

        <section className="section ilygirl" id="HOME" data-bg-color="rgba(0, 0, 0, 0)" data-highlight-color="rgb(255, 0, 149)" style={{"--scroll": 0.453893}}>
          <header className="header">
            <div className="title-container">
              <h1 className="title-animated">Dev Govindji</h1>
            </div>
            <a href="mailto:dev.govindji.software@gmail.com?subject=Portfolio Site Inquiry&body=Hi Dev, I am interested in working with you.">Software Engineer for hire!</a>
          </header>
          <section className="section ilygirl" id="HOME" data-bg-color="rgba(0, 0, 0, 0)" data-highlight-color="rgb(255, 0, 149)" style={{"--scroll": 0.453893}}>
            <DualSection 
              section1={{
                type: 'svg-hands',
                text: 'This is some sample text for the second section.'
              }}
                section2={{
                  type: 'image',
                  src: me,
                  alt: 'Description of the image'
              }}
            />
          </section>
        </section>

        {/* <section className="section ilygirl" id="ILYGIRL" data-bg-color="rgba(0, 0, 0, 0)" data-highlight-color="rgb(255, 0, 149)" style={{"--scroll": 0.453893}}>
          <DualSection 
              section1={{
                type: 'svg-basquiat',
                text: 'This is some sample text for the second section.'
              }}
              section2={{
                type: 'svg-arrow',
                text: 'This is some sample text for the second section.'
              }}
          />
        </section>

        <section className="section ilygirl" id="ILYGIRL" data-bg-color="rgba(0, 0, 0, 0)" data-highlight-color="rgb(255, 0, 149)" style={{"--scroll": 0.453893}}>
          <DualSection 
            section1={{
              type: 'svg-buffalo',
              text: 'This is some sample text for the second section.'
            }}
              section2={{
                type: 'svg-bronco',
                text: 'This is some sample text for the second section.'
              }}
              />
        </section>

        <section className="section ilygirl" id="ILYGIRL" data-bg-color="rgba(0, 0, 0, 0)" data-highlight-color="rgb(255, 0, 149)" style={{"--scroll": 0.453893}}>
          <DualSection 
            section1={{
              type: 'svg-lion',
              text: 'This is some sample text for the second section.'
            }}
              section2={{
                type: 'svg-longhorn',
                text: 'This is some sample text for the second section.'
              }}
          />
        </section>
        <section className="section ilygirl" id="ILYGIRL" data-bg-color="rgba(0, 0, 0, 0)" data-highlight-color="rgb(255, 0, 149)" style={{"--scroll": 0.453893}}>
          <DualSection 
              section1={{
                type: 'svg-rhino',
                text: 'This is some sample text for the second section.'
              }}
              section2={{
                type: 'svg-owl',
                text: 'This is some sample text for the second section.'
              }}
          />
        </section>
        <section className="section ilygirl" id="ILYGIRL" data-bg-color="rgba(0, 0, 0, 0)" data-highlight-color="rgb(255, 0, 149)" style={{"--scroll": 0.453893}}>
          <DualSection 
            section1={{
              type: 'svg-questionMark',
              text: 'This is some sample text for the second section.'
            }}
              section2={{
                type: 'svg-ram',
                text: 'This is some sample text for the second section.'
              }}
          />
        </section>






        <section className="section ilygirl" id="ILYGIRL" data-bg-color="rgba(0, 0, 0, 0)" data-highlight-color="rgb(255, 0, 149)" style={{"--scroll": 0.453893}}>
          <DualSection 
            section1={{
              type: 'svg-tusks',
              text: 'This is some sample text for the second section.'
            }}
              section2={{
                type: 'image',
                src: '/src/assets/images/me.jpg',
                alt: 'Description of the image'
            }}
          />
        </section> */}

{/* <Loading/> */}

{/* <DualSection 
      section1={{
        type: 'text',
        text: 'This is some sample text for the second section.'
      }}
        section2={{
          type: 'image',
          src: '/src/assets/images/me.jpg',
          alt: 'Description of the image'
      }}
    /> */}

{/* <div className="ticker-wrap">
  <div className="ticker">
    <span className="item-collection-1">
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
    </span>
    <span className="item-collection-2">
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
      <span className="item">Dev Govindji ➜</span>
    </span>
  </div>
</div> */}

        


        <section className="section ilygirl" data-bg-color="rgba(0, 0, 0, 0)" data-highlight-color="rgb(255, 0, 149)" style={{"--scroll": 0.453893}}>
          <DualSection 
            section1={{
              type: 'text',
              text: `Over the last decade, I transitioned from public service to software engineering, where I delivered $7M+ in recurring revenue through enterprise projects and empowered businesses with innovative tools.

                \nIn 2019, I burned out.

                \nSo, I took a year off to bet on myself.`,
            }}
              section2={{
                type: 'model',
                // src: '/src/assets/models/DavidHeadModel.glb',
                src: '/models/DavidHeadModel.gltf',
                // src: '/src/assets/models/DavidHeadModel.gltf',
                // src: '/src/assets/models/spaceship_model.gltf',
                alt: 'spaceship model'
            }}
          />
        </section>
       
        <section className="section ilygirl" data-bg-color="rgba(0, 0, 0, 0)" data-highlight-color="rgb(255, 0, 149)" style={{"--scroll": 0.453893}}>
          <DualSection 
            section1={{
              type: 'video',
              alt: 'Description of the image'
            }}
            section2={{
              type: 'text',
              text: `Early in my career, I played a pivotal role in Phil Murphy’s journey to become the 56th Governor of New Jersey. Starting as an unpaid intern when he was a relatively unknown outsider, I contributed to his election victory and earned an appointment in the Office of the Governor. From organizing town halls and managing field operations to policy research and supervising interns, I embraced every challenge. These experiences sharpened my skills in strategy, leadership, and execution, laying the foundation for my career.

              \n During my year off, I taught myself to code, rediscovered my love for building things, and deepened my connection to family. 
              
              \nI also embarked on a journey of mindfulness through Vipassana meditation, learning the value of clarity and focus.`
            }} 
          />
        </section>
        <section className="section ilygirl" data-bg-color="rgba(0, 0, 0, 0)" data-highlight-color="rgb(255, 0, 149)" style={{"--scroll": 0.453893}}>
          <DualSection 
            section1={{
              type: 'text',
              text: `That year transformed my career and my life. As a software engineer at Q2 eBanking, I led the development of enterprise solutions that generated $7M+ in recurring revenue, enhanced user-centric experiences, and delivered scalable tools that empowered businesses and their customers.
              
              \nI founded LVT8 Technologies, where I built and marketed 3D product prototypes using React Three Fiber and AWS. This venture proved that with grit and a clear vision, I could solve real-world problems across industries.`
            }}
            section2={{
              type: 'svg-tiger',
          }}
          />
        </section>
        <section className="section ilygirl" data-bg-color="rgba(0, 0, 0, 0)" data-highlight-color="rgb(255, 0, 149)" style={{"--scroll": 0.453893}}>
          <DualSection 
            section1={{
              type: 'text',
              text: `My results:

              → Delivered 4+ enterprise projects, driving $7M+ annual recurring revenue at Q2 eBanking.
              → Led company-wide monthly sessions to train and upskill 60+ engineers, driving collaboration and team growth.
              → Built tools that improved debugging efficiency, reducing errors and cutting delivery timelines in half.
              → Founded LVT8 Technologies, creating innovative eCommerce and event solutions for small businesses.

              \nIf you’re looking for someone who can build, lead, and scale, let’s connect.
              
              \nLet’s connect on LinkedIn, explore my GitHub, or dive deeper into my Portfolio.`,
            }}
              section2={{
                type: 'svg-arrow',
                text: 'This is some sample text for the second section.'
            }}
          />
        </section>
       



        {/* <main className={projStyles.main}>
MAIN

        
          <div className={projStyles.container}>
          Project/Grover-Complex
          <DualSection 
      section1={{
        type: 'text',
        text: 'This is some sample text for the second section.'
      }}
      section2={{
        type: 'image',
        src: '/src/assets/images/me.jpg',
        alt: 'Description of the image'
      }}
      />
          </div>



        </main> 



        <div className={secStyles.section}>
        What We Do
          <div className={secStyles.container}>
            <h2 className={secStyles.title}>What We Do</h2>
        
            <DualSection 
      section1={{
        type: 'text',
        text: 'This is some sample text for the second section.'
      }}
        section2={{
          type: 'image',
          src: '/src/assets/images/me.jpg',
          alt: 'Description of the image'
      }}
    />
          </div>

          <img src="https://ik.imagekit.io/x29dtqzji/tr:w-750/sectionImage.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1674739236834" 
          alt="House-Image" className={secStyles.mainImage}/>

          <div className={secStyles.journalContainer}>

          <DualSection 
      section1={{
        type: 'text',
        text: 'This is some sample text for the second section.'
      }}
        section2={{
          type: 'image',
          src: '/src/assets/images/me.jpg',
          alt: 'Description of the image'
      }}
    />
    
          </div>
        </div>


        <div className={artStyles.articles}>
        Article/Architecture-and-change
          <div className={artStyles.container}>
          <DualSection 
      section1={{
        type: 'text',
        text: 'This is some sample text for the second section.'
      }}
        section2={{
          type: 'image',
          src: '/src/assets/images/me.jpg',
          alt: 'Description of the image'
      }}
    />
          </div>

          <div className={artStyles.container}>
            CONTAINER
            <div className={artStyles.articleContainer}>
            Article/Modern-Housing-Trends
            <DualSection 
      section1={{
        type: 'text',
        text: 'This is some sample text for the second section.'
      }}
        section2={{
          type: 'image',
          src: '/src/assets/images/me.jpg',
          alt: 'Description of the image'
      }}
    />
            </div>

            <div className={artStyles.articleContainer}>
            Article/Eco-Friendly-Designing
            <DualSection 
      section1={{
        type: 'text',
        text: 'This is some sample text for the second section.'
      }}
        section2={{
          type: 'image',
          src: '/src/assets/images/me.jpg',
          alt: 'Description of the image'
      }}
    />
            </div>

          </div>
          </div> */}

          
            <section className="section ilygirl" data-bg-color="rgba(0, 0, 0, 0)" data-highlight-color="rgb(255, 0, 149)" style={{"--scroll": 0.453893}}>
              <PortfolioShowcase/>
            </section>
            
          </div>
      </div>
    </>
  )
}

export default Home