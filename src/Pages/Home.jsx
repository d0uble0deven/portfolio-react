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
import Loading from '../Components/Project/Loading';
import DualSection from '../Components/DualSection/DualSection';


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


  // index.js
// window.onscroll = function () {
//   scrollRotate();
// };

const scrollRotate = () => {
  let aboutAnimation = document.querySelector(".about_animation");
  // let image = document.querySelectorAll("smartphone");

  // aboutAnimation.style.transform = "translateX("+20-scrollPercentage+"%) "+ "rotate(" + ((scrollPercentage/100)*-45) + "deg)";
  aboutAnimation.style.transform = "rotate(" + ((scrollPercentage/100)*-45) + "deg)";
  // aboutAnimation.style.transform = "rotate(" + ((scrollPercentage/100)*-45) + "deg)"+" translateX("+20-scrollPercentage+"%)";
  // aboutAnimation.style.transform = "rotate(" + ((scrollPercentage/100)*-45) + "deg)"+" translateX("+20-scrollPercentage+"%)";
  // image.style.transform = "rotate(" + ((20/scrollPercentage)*-45) + "deg)"+" translateX(-"+scrollPercentage/.5+"%)";
  // {{  transform: "translateX(calc(50% - ("+scrollPercentage+" * (100%)))"+") "+"rotate(calc("+scrollPercentage+" * (-45deg)))"}}
  
  
  let ilygirlAnimation = document.querySelector(".ilygirl_animation");
  // ilygirlAnimation.style.transform = "translateX("+20-scrollPercentage+ "%)"+"rotate(" + ((scrollPercentage/100)*-45) + "deg)"; 
  ilygirlAnimation.style.transform = "rotate(" + ((scrollPercentage/100)*-45) + "deg)"; 
  
  let profileAnimation = document.querySelector(".profile_animation");
  // profileAnimation.style.transform = "translateX("+20-scrollPercentage+"%)"+" rotate(" + ((scrollPercentage/100)*-45) + "deg)";
  profileAnimation.style.transform = "rotate(" + ((scrollPercentage/100)*-45) + "deg)";
}


  return (
    <>
      <PageChange />
      
      <div className="scroll-container" ref={scrollRef} onScroll={scrollRotate} >


        <div className="content-container">
{/* <Loading/> */}

        <header className={styles.header}>
          {/* <a href="/"><img src={logo} alt="logo" className={styles.logo} /></a> */}
            {/* <div className={styles.imageContainer}>
              <div className={styles.imageWrapper}>
              */}
              {/* <img 
                  src={secondImage}
                  alt="Second image"
                  className={styles.secondImage}
                /> */}
                {/*
                <img 
                  ref={imageRef}
                  className={styles.imageAnimated} 
                  // src="https://ik.imagekit.io/x29dtqzji/tr:w-1600,h-1000/headerImg__1_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1674578566091"
                  // srcSet='https://ik.imagekit.io/x29dtqzji/tr:w-450,h-1000/headerImg__1_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1674578566091 400w,
                  // https://ik.imagekit.io/x29dtqzji/tr:w-800,h-1000/headerImg__1_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1674578566091 800w,
                  // https://ik.imagekit.io/x29dtqzji/tr:w-1600,h-1000/headerImg__1_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1674578566091 1400w'
                  // src="https://ily-girl.mikapikazo.info/assets/image/keyvisual-light.webp"
                  // src="https://images.ctfassets.net/adaoj5ok2j3t/7q74IFSk5q84yg6mwAOa2y/3dd7376fb0ffe6f36999c820aa60a0c0/vicnga3gl_1920x1200.jpg?fm=webp&w=3000&q=75"
                  // src="src/assets/images/adventures.webp"
                  src="src/assets/images/IcarusCrash.webp"
                  sizes='(max-width: 400px) 400px, (max-width: 800px) 800px, 1400px'
                  alt="header-house-image"
                  style={{
                    maskImage: `radial-gradient(circle 400px at ${mousePosition.x}% ${mousePosition.y}%, transparent 0%, white 100%)`,
                    WebkitMaskImage: `radial-gradient(circle 400px at ${mousePosition.x}% ${mousePosition.y}%, transparent 0%, white 100%)`,
                    maskPosition: '0 0',
                    WebkitMaskPosition: '0 0',
                    cursor: 'crosshair',
                  }}
                />
              </div>
            </div>
            */}
            <div className={styles.titleContainer}>
              <h1 className={styles.titleAnimated}>Dev Govindji</h1>
            </div>
              <p className={styles.desc}>
                We are a South African architecture and design studio with a 
                global reputation for creating innovative spaces.
              </p>
        </header>

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

<div className="ticker-wrap">
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
</div>

        
        <section className={introStyles.intro}>
        INTRO
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
            <div className={introStyles.topContainer}>
            <h2 className={introStyles.title}>Introduction</h2>
            <img src="https://ik.imagekit.io/x29dtqzji/tr:w-700,h-800/introImage.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1674738239454" 
            alt="house-image" 
            className={introStyles.introImage} 
            />
            </div>

            <div className={introStyles.bottomContainer}>
            <h3 className={introStyles.heading}>Established 2022</h3>
            <p className={introStyles.desc}>We are an architectural studio that believes in going further. 
                Being bold. Exploring the new. Where the surprising delights the 
                mind. Where people love to live, work and play. Let's start 
                building beyond.</p>
            {/* <Link to="/About" className={introStyles.link}>
                <p>Learn More About Us</p>
            </Link> */}
            </div>

        </section>

        <section className="section ilygirl" id="ILYGIRL" data-bg-color="rgba(0, 0, 0, 0)" data-highlight-color="rgb(255, 0, 149)" style={{"--scroll": 0.453893}}>
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
        </section>
        <section className="section ilygirl" id="ILYGIRL" data-bg-color="rgba(0, 0, 0, 0)" data-highlight-color="rgb(255, 0, 149)" style={{"--scroll": 0.453893}}>
          <DualSection 
            section1={{
              type: 'svg',
              text: 'This is some sample text for the second section.'
            }}
            section2={{
                type: 'text',
                text: 'This is some sample text for the second section.'
            }}
          />
        </section>


          <section className="section ilygirl" id="ILYGIRL" data-bg-color="rgba(0, 0, 0, 0)" data-highlight-color="rgb(255, 0, 149)" style={{"--scroll": 0.453893}}>
          <div className="section_inner ilygirl_content">
            <h2 className="ilygirl_title f-display">
              <div className="line1">ILY</div>
              <div className="line2">GIRL</div>
            </h2>
            <div className="ilygirl_animation smartphone">
              <video src="src/assets/videos/maid_cafe_dance.mp4" autoPlay loop muted playsInline></video>
              {/* <video src="https://ily-girl.mikapikazo.info/assets/video/ILYG_anime_1.mp4" autoPlay loop="true" muted="true" playsInline="true"></video> */}
            </div>

            <p className="ilygirl_text" x-data="">“ILY GIRL”<br/>
              Where did “I” come from?<br/>
              Is the version of myself that others tell me I am the real me?<br/>
              Or should I be the version of myself that I envision?<br/>
              <br/>
              Is this legal? Is that illegal?<br/>
              This is no good, that is no good.<br/>
              This is not the real me.<br/>
              That is the real me.<br/>
              <br/>
              I LOVE YOU, GIRL.<br/>
              I'm going to live a daily life that sparkles through editing,<br/>
              where the real me can‘t be seen.
            </p>
          </div>
          </section>

          <section className="section about" id="About" data-bg-color="rgba(0, 0, 0, 0)" data-highlight-color="rgb(149, 255, 0)" style={{"--scroll": 0.509148}}>
            <div className="section_inner about_content">
              <h2 className="about_title f-display">
                About
              </h2>
              <div className="about_animation smartphone">
                {/* <video src="/assets/video/ILYG_anime_2.mp4" loop="true" muted="true" playsInline="true"></video> */}
                <video src="src/assets/videos/mxcd_cooking.mp4" autoPlay loop muted playsInline></video>
              </div>
                  <p className="about_text" x-data="" x-show="$store.ui.lang === 'en'">
                    Illustrator/Mika Pikazo
                    <br/>
                  This exhibition will be held in Harajuku, which holds special memories for me.
                  <br/>
                  When I was a child, my parents brought me here for the first time,
                  <br/>
                  and I saw Harajuku as a place full of creativity, overflowing with dreams and hope. I still believe it is.
                  <br/>
                  The image of the idol people aspire to be and the content created through diverse motives.
                  <br/>
                  For both children and grown-ups, Harajuku is a place they come to seek something fun.
                  <br/>
                  <br/>
                  “ILY GIRL” explores not only illustrations and animations,
                  <br/>
                  but also the potential of “installations”, turning the entire space into an artwork
                  <br/>
                  and expressing the changes in emotions throughout the space.
                  <br/>
                  The form of a single artwork in front of you and the form that emerges through the space.
                  <br/>
                  <br/>
                  I created this exhibition to explore the emotions of a person‘s outward and inward selves,
                  <br/>
                  the real oneself  and the idolized oneself.
                  <br/>
                  I would be delighted if you could experience it in person.
                  <br/>
                  Thank you very much.
              </p>
            </div>
          </section>


          <section className="section profile" id="Profile" data-bg-color="rgba(0, 0, 0, 0)" data-highlight-color="rgb(0, 128, 255)" style={{"--scroll": 1}}>
            <div className="section_inner profile_content">
              <h2 className="profile_title f-display">
                <div className="line1">Mika</div>
                <div className="line2">Pikazo</div>
              </h2>
              <div className="profile_animation smartphone">
              {/* <div className="profile_animation smartphone" style={{  transform: "translateX(calc(("+scrollPercentage/100+"-50%) * (100%))"+") "+"rotate(calc("+scrollPercentage/100+" * (-45deg)))"}}> */}
              {/* <div className="profile_animation smartphone" style={{  transform: "translateX(calc(50% - "+Math.abs(scrollPercentage/100)+" * (100%))"+") "+"rotate(calc("+Math.abs(scrollPercentage/100)+" * (-45deg)))"}}> */}
              {/* <div className="profile_animation smartphone" style={{  transform: "translateX(calc(50% - ("+scrollPercentage+" * (100%)))"+") "+"rotate(calc("+scrollPercentage+" * (-45deg)))"}}> */}
                <video src="src/assets/videos/mxcd_cooking.mp4" autoPlay loop muted playsInline></video>
              </div>
              <div className="profile_textWrap">
                <div className="profile_textColumns" x-data="" x-show="$store.ui.lang === 'en'">
                  <p className="profile_text">Born in Tokyo, Japan in 1993. After graduating from high school, Mika developed an interest in South American visual technology, advertising design, and music which led her to reside in Brazil for approximately 2 and a half years. Upon returning to Japan, Mika began her career as an illustrator, focusing on character design and illustration. In 2022, she expanded her artistic pursuits to include animation production and developed a fascination with spatial installations through her exhibitions.
                  </p>
                  <p className="profile_text">
                      In 2019, Mika held her first commercial art book and exhibition, “MikaPikaZo”, followed by the second exhibition, “REVENGE POP”, at the end of 2022. Both were well-received, attracting a total of approximately 30,000 visitors.
                    <br/>
                      Mika has been involved in various projects, including character design for Nintendo's “Fire Emblem Engage”, character design for VTuber “Hakos Baelz” and “Kaguya Luna”, cover illustration for the pixiv supervised art book “VISIONS 2023”, collaboration illustration for the 150th anniversary of the Tokyo National Museum, character design for “Fate/Grand Order” (Sei Shōnagon), outdoor advertising visuals for Ado's 1st album “Kyougen”, cover illustrations for “anan” magazine, and Hatsune Miku “Magical Mirai 2018” and “DENONBU”, among others.
                  </p>
                </div>
                <div className="twitterLink">
                  <a className="link" href="https://twitter.com/MikaPikaZo" target="_blank" rel="noopener">
                    <div className="twitterLink_logo">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z">
                        </path>
                      </svg>
                    </div>
                    <div className="twitterLink_text">@MikaPikaZo</div>
                  </a>
                </div>
              </div>
            </div>
          </section>


{/*
        <main className={projStyles.main}>
MAIN
          <div className={projStyles.container}>
          Project/Malbury-Ocean-View
          <Link className={projStyles.linkStyle} to="Project/Malbury-Ocean-View">

            <Image 
              width='100%' 
              height="530px" 
              src="https://ik.imagekit.io/x29dtqzji/tr:w-900/projectImage4.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1674738239477"
              imagealt="house-image" 
            
              title="Malbury Ocean View"
              link="View Project"
              color="black"
              displayTexts="inline-block" 
            />

          </Link>
          </div>
        
          <div className={projStyles.container}>
          Project/Grover-Complex
          <Link className={projStyles.linkStyle} to="Project/Grover-Complex">

            <Image 
              width='100%' 
              height="530px" 
              src="https://ik.imagekit.io/x29dtqzji/tr:w-900/projectImage5.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1674738239418" 
              imagealt="house-image" 
             
              title="Grover Complex"
              link="View Project"
              color="black"
              displayTexts="inline-block"
            />

          </Link>
          </div>

          <div className={projStyles.container}>
          Project/Wineland-Golf-Field
          <Link className={projStyles.linkStyle} to="Project/Wineland-Golf-Field">

            <Image 
              width='100%' 
              height="530px" 
              src="https://ik.imagekit.io/x29dtqzji/tr:w-900/projectImage6.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1674738298379"
              imagealt="house-image"    
             
              title="Wineland Golf Field"
              link="View Project"
              color="black"
              displayTexts="inline-block"
            />   

          </Link>
          </div>

        </main> */}



        <div className={secStyles.section}>
        What We Do
          <div className={secStyles.container}>
            <h2 className={secStyles.title}>What We Do</h2>
        
            <p className={secStyles.heading}>
              Collaborating to create the 
              surprising with innovation that 
              inspires. Let's work towards 
              something bigger and brighter.
            </p>

            <span className={secStyles.descLink}>Focusing on <span className={secStyles.a}>Commercial</span> & <span className={secStyles.a}>Residential</span> Projects</span>
            <Link to="/Project">
            <p className={secStyles.projectLink}>View All Projects</p>
            </Link>
          </div>

          <img src="https://ik.imagekit.io/x29dtqzji/tr:w-750/sectionImage.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1674739236834" 
          alt="House-Image" className={secStyles.mainImage}/>

          <div className={secStyles.journalContainer}>

            <p className={secStyles.journalHeading}>Collaborating to create the 
              surprising with innovation that 
              inspires. Let's work towards 
              something bigger and brighter.
            </p>
            <Link to="/Journal" className={secStyles.journalLink}>
              <p className={secStyles.articleLink}>View All Articles</p>
            </Link>
            <h3 className={secStyles.animatedTitle}>Journal</h3>
          </div>
        </div>


        <div className={artStyles.articles}>
        Article/Architecture-and-change
          <div className={artStyles.container}>
          <Link to="Article/Architecture-and-change" className={artStyles.linkStyles}>

            <Image 
              width='100%' 
              height="530px" 
              src="https://ik.imagekit.io/x29dtqzji/tr:w-700/articleImage2.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1674739237050" 
              imagealt="house-image" 
        
              displayTexts="inline-block" 
              title="Architecture and Change"
              link="View Article" 
              color="white"
            />

          </Link>
          </div>

          <div className={artStyles.container}>
            CONTAINER
            <div className={artStyles.articleContainer}>
            Article/Modern-Housing-Trends
            <Link to="Article/Modern-Housing-Trends" className={artStyles.linkStyles}>

              <Image width='100%' 
                height="222px" 
                src="https://ik.imagekit.io/x29dtqzji/tr:w-600/projectImage2.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1674739236661"
                imagealt="house-image" 

                displayTexts="inline-block" 
                title="Modern Housing Trends"
                link="View Article"
                color="white"
              />

            </Link>
            </div>

            <div className={artStyles.articleContainer}>
            Article/Eco-Friendly-Designing
            <Link to="Article/Eco-Friendly-Designing" className={artStyles.linkStyles}>

              <Image 
                width='100%' 
                height="222px" 
                src="https://ik.imagekit.io/x29dtqzji/tr:w-600/projectImage3.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1674739237239"
                imagealt="house-image"
                displayTexts="inline-block" 
                title="Eco Friendly Designing"
                link="View Article"
                color="white"
              />
          
            </Link>
            </div>

          </div>
        </div>
        

        </div>
      </div>
    </>
  )
}

export default Home