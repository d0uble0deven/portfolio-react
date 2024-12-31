import '../App.css';
import { useEffect, useState } from 'react';

const PageChange = () => {

  const [playAnimation, setPlayAnimation] = useState(false);

    
    useEffect(() => {
    const onPageLoad = () => {
      setPlayAnimation(true);
    };

    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      
      return () => window.removeEventListener('load', onPageLoad);
    }
    alert('Page changed successfully');
    }, []);

  return (

    <>
      <div className={playAnimation === true ? 'animated-box-1' : 'box1'}></div>
      <div className={playAnimation === true ? 'animated-box-2' : 'box2'}></div>
      <div className={playAnimation === true ? 'animated-box-3' : 'box3'}></div>
    </>

  )
}

export default PageChange