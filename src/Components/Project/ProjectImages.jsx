

const ProjectImages = (props) => {

    const isMobile = window.innerWidth < 768;
  
    const containerStyles = {
      width: isMobile ? props.width : 'calc(100vw - 3rem - 300px)',
      height: isMobile ? props.height : '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor:'#333'
    };
  
    const imageStyles = {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  
    return (
      <div style={containerStyles}>
          <img src={props.src} alt={props.alt} style={imageStyles} />
      </div>
    )
  }
  
  export default ProjectImages
  