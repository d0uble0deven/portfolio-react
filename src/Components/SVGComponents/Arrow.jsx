import React from 'react'

import loadingStyles from './Arrow.module.css';

// import 'src/assets/images/tiger.svg';


const Arrow = () => {

    // const loadingStyles = {
    //     width: '100vw',
    //     height: '100vh',
    //     backgroundColor: '#F06446',
    //     zIndex: '100',
    // }

//     var path = document.querySelector('.arrowPath');  
// console.log('arrowPath:', path);
// if (path) {
//   var length = path.getTotalLength();
//   console.log('arrowPath Length:', length); // Should log the total length
//   path.style.strokeDasharray = length;
//   path.style.strokeDashoffset = length;
// } else {
//   console.error('arrowPath not found!');
// }
  return (
	<>
		<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
			width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
			preserveAspectRatio="xMidYMid meet">

			<g transform="translate(512.000000, 512.000000) scale(-0.100000,-0.100000)"
			fill="#000000" stroke="none">
				<path className={loadingStyles.arrowPath} stroke="white" strokeWidth="25" fill="none" d="M1703 3268 c-644 -646 -803 -810 -813 -841 -11 -34 -10 -43 11 -83
				26 -48 1408 -1452 1464 -1486 59 -35 148 -10 179 50 19 38 29 298 13 334 -12
				28 -185 210 -764 805 -196 202 -323 340 -323 351 0 13 164 178 448 453 246
				238 493 478 549 532 89 87 105 99 127 93 l26 -6 0 -433 c1 -237 5 -452 9 -477
				7 -31 19 -53 42 -74 l33 -29 739 5 c716 6 740 5 758 -13 17 -17 19 -35 19
				-182 0 -151 -2 -165 -20 -182 -18 -16 -63 -18 -592 -27 -571 -8 -732 -15 -438
				-18 85 -1 344 -5 575 -9 235 -4 434 -4 452 1 18 5 41 20 53 35 18 24 20 40 20
				197 0 194 -9 225 -72 244 -20 6 -312 13 -747 16 -501 4 -718 10 -728 17 -10 9
				-13 99 -13 471 0 507 1 499 -63 538 -40 25 -93 25 -132 1 -28 -17 -773 -730
				-1026 -981 -125 -123 -139 -149 -117 -212 8 -22 175 -201 503 -538 270 -278
				515 -531 544 -562 l54 -58 -8 -122 c-7 -121 -14 -148 -41 -148 -22 0 -1469
				1438 -1472 1465 -3 18 42 70 220 257 123 128 331 348 463 488 132 140 328 347
				435 461 297 313 443 469 438 469 -2 0 -364 -361 -805 -802z"/>
			</g>
		</svg>


	</>
    
  )
}

export default Arrow