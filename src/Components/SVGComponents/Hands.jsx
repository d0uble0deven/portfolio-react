import React, { useEffect } from "react";
import loadingStyles from "./Hands.module.css";

const Hands = () => {
  useEffect(() => {
    const path = document.querySelector(`.${loadingStyles.handsPath}`);
    if (path) {
      const length = path.getTotalLength();
      console.log("handsPath Length:", length);

      // Apply styles dynamically
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;

      // Explicitly trigger animation in Safari
      setTimeout(() => {
        path.style.strokeDashoffset = "0";
      }, 100);

      // Force Safari to repaint by toggling styles
      path.style.strokeWidth = "4.9999";
      setTimeout(() => {
        path.style.strokeWidth = "5";
      }, 200);
    } else {
      console.error("handsPath not found!");
    }
  }, []);

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1205 632.2"
        style={{
          overflow: "visible", // Prevent Safari from clipping the view
          transform: "translateZ(0)", // Force hardware acceleration
        }}
      >
        <path
          style={{
            strokeDasharray: "8085.54",
            strokeDashoffset: "8085.54",
            animation: "dash 5s ease-in-out infinite alternate",
            WebkitAnimation: "dash 5s ease-in-out infinite alternate",
            willChange: "stroke-dashoffset",
          }}
          className={loadingStyles.handsPath}
          stroke="white"
          strokeWidth="5"
          fill="none"
          d="M2.5,627.1c0.3-0.8,414.1,1.1,414.4,0.3c19.8-48.8,28.1-111.6,30.9-163.5c1.6-30.4-10.5-54.6-33.8-74.4
              c-37.3-31.8-81.1-59.4-125.7-79.2c-45.9-20.4-16.2-76.5-2.2-111.6c7.4-18.4,11.3-42.5,22.1-59c13.3-20.3,33-39.2,51.8-54.5
              c16.4-13.4,31.9-25.4,46.2-41c9.5-10.4,29.3-38.9,46-37.6c37.5,3-11.3,72.3-20,82.7c-8.9,10.7-41,49-60.5,85
              c0.6-40.2,31.2-55.9,58.2-95.1c74.8-108.5,95.1-71,78.1-31c-31.7,74.7-73,116.3-83.9,130.6c-8.7,11.3-15.6,30.5-28.3,37.2
              c-1.4-14.5,12.4-31.7,19.3-43.5c19.8-34.5,11.1-24.2,49.5-57c20-17.1,34.8-55,51.7-51.9c13.6,2.5,2.3,30.4-1,37.2
              c-14.2,29.5-61.7,72.3-86.8,123.4c21.3-26,54.7-97.8,71.9-102.5c29.9,0.6,9.9,45.9-8.8,58.6c-15.6,10.6-13.1,45.4-34.4,66.8
              c20.5,11.6,59.4,22,82.8,24.6c29.6,3.3,36.3,35.5,37.3,72c0.8,30.4-5.1,56,1.3,86.7c6.4,30.7,15.4,62.8,7.1,94
              c-5,18.8-19.7,47.7-43.6,37.6c-19.8-8.4-26.7-38.5-29.7-57.2c-3.7-23.4-3.1-47.2-3.2-70.8c-0.1-20.6,16.8-76.4-12.8-75.2
              c-19.6,0.8-38.6-6.6-56.9-10c-6.5-1.2-43.3-11.7-49.6-10.1c-35.1,9.1-50.7-44.1-64.2-67.3c-11.1-19-26.9-32.3-29.3-54.7
              c-1.8-16.9-1.5-30.7-5.7-47.3c-2.3-9.5-6.8-33.2-0.5-42.9c22.2-34.2,97.4,57,73.1,89.4c14.6,7.1,29.1,1.4,39.5,35.2
              c9.5,3.1,14.2,1,24.1,2c10.4,1,88.8,32.2,98.6,35.7c20.1,7.2,123.1,68.1,140,58c39.3-23.6,46.5-90,165.3-97.3
              c17.7-1.1,26-11.8,38.4-23.3c11-10.2,17.6-12.3,17.6-27.5c0-17.2-9.4-52.5-2.9-70c3.3-8.9,14.7-26.1,25.5-25.6
              c14.7,0.6,23,46,26,57.1c5.4,19.9,12.4,35.4,8.1,56.2c-4.6,22.1-16.1,45.4-23.2,67c-15.1,46-44.8,57-82.9,80.9
              c-41.6,26-41.4,61.5-38.8,106.2c0.9,14.8,3.6,45.8-18.7,41.9c-18.4-3.3-29.1-30.4-31.4-45.7c-7.2-47.7,31.5-92.3,69.8-115.1
              c18.5-11,38.9-19,59.4-25.1c17.8-5.3,42.8-8.8,54.2-25.4c18.6-27.1-4.6-90.3-11.4-119.3c-11.4-48.8-46.9-90.7-78.9-128.2
              c-7.7-9-67.1-73.4-72.7-33.7c-2.6,18.6,15,36.6,25.7,48.9c16.2,18.7,13.4,34.1,21.7,55.6c7.4,19.1,21.3,34.3,28,54.5
              c5.8,17.5,1.6,23.9,17.8,19.4"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="8085"
            to="0"
            dur="5s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </>
  );
};

export default Hands;
