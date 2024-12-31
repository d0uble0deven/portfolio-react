import { useInView } from 'react-intersection-observer';
import '../App.css';

const Image = (props) => {

  const isMobile = window.innerWidth < 768;

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: .40,
    triggerOnce: true
  });

  const mainContainerStyles = {
    padding: props.padding
  };

  const containerStyles = {
    width: isMobile ? 'calc(100vw - 2.6rem)' : props.width,
    height: isMobile ? '400px' : props.height,
    overflow: 'hidden',    
  };

  const imageStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transform: `${inView ? 'scale(1)' : 'scale(1.5)'}`,
    transition: 'all 1s ease'
  };

  const textContainerStyle = {
    display: props.displayTexts,
    position: 'relative',
    width: '100%',
    height: 'auto'
  };
    
  const titleStyles = {
    fontWeight: '600',
    padding: '12px 0 8px 0',
    color: isMobile ? props.color : 'black',
    fontFamily: 'sans-serif',
    fontSize: '1rem'
  };
    
  const linkStyles = {
    color: isMobile ? props.color : 'black',
    textDecoration: isMobile ? `${props.color} underline` : 'black underline',
    fontFamily: 'the-serif',
    fontSize: '14px'
  };

  return (
    <div style={mainContainerStyles}>

      <div style={containerStyles} ref={ref}>
        <img 
          src={props.src} 
          alt={props.imagealt} 
          style={imageStyles} 
        />
      </div>

      <div style={textContainerStyle}>
        <h4 style={titleStyles}>{props.title}</h4>
        <p style={linkStyles}>{props.link}</p>
      </div>

    </div>
  )
}

export default Image