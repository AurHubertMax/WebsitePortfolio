"use client"

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Major_Mono_Display } from 'next/font/google'
import styles from "./homePage.module.css";


const testSeparateCharsScalingPath = [
  "M 0.607 11.677 L 0 11.677 L 0 0.263 L 0.607 0.263 L 0.607 3.493 Q 2.296 3.493 3.805 4.141 Q 5.314 4.789 6.445 5.945 Q 7.577 7.101 8.184 8.594 L 8.184 0.263 L 8.79 0.263 L 8.79 11.677 L 8.184 11.677 A 7.415 7.415 0 0 0 7.167 7.88 Q 6.15 6.134 4.403 5.117 A 7.415 7.415 0 0 0 0.607 4.1 L 0.607 11.677 Z",
  "M 11.923 7.315 L 11.923 0.263 L 12.53 0.263 L 12.53 7.315 Q 12.53 8.397 13.071 9.315 Q 13.612 10.234 14.53 10.775 Q 15.449 11.316 16.531 11.316 Q 17.614 11.316 18.532 10.775 Q 19.45 10.234 19.992 9.315 Q 20.533 8.397 20.533 7.315 L 20.533 0.263 L 21.14 0.263 L 21.14 7.315 Q 21.14 8.561 20.516 9.619 Q 19.893 10.677 18.835 11.3 Q 17.778 11.923 16.531 11.923 Q 15.285 11.923 14.227 11.3 Q 13.169 10.677 12.546 9.619 Q 11.923 8.561 11.923 7.315 Z",
  "M 29.471 11.677 L 24.682 11.677 L 24.682 0.263 L 29.241 0.263 A 5.822 5.822 0 0 1 29.904 0.298 Q 30.533 0.37 30.963 0.591 A 3.027 3.027 0 0 1 31.798 1.207 A 2.777 2.777 0 0 1 32.152 1.673 A 2.901 2.901 0 0 1 32.57 3.161 A 3.447 3.447 0 0 1 32.57 3.215 Q 32.57 4.018 32.152 4.699 Q 31.734 5.379 30.996 5.773 A 2.906 2.906 0 0 1 32.394 6.795 A 3.544 3.544 0 0 1 32.439 6.855 Q 33.013 7.643 33.013 8.594 Q 33.013 9.447 32.587 10.168 Q 32.16 10.89 31.455 11.283 Q 31.094 11.48 30.652 11.579 Q 30.229 11.672 29.538 11.677 A 10.764 10.764 0 0 1 29.471 11.677 Z M 29.7 6.15 L 25.272 6.15 L 25.272 11.087 L 29.487 11.087 A 9.648 9.648 0 0 0 29.851 11.08 Q 30.223 11.066 30.471 11.021 A 2.812 2.812 0 0 0 30.768 10.951 Q 30.924 10.905 31.057 10.842 A 1.712 1.712 0 0 0 31.094 10.824 Q 31.701 10.513 32.062 9.914 Q 32.423 9.315 32.423 8.61 Q 32.423 7.872 32.046 7.274 Q 31.668 6.675 31.029 6.38 A 2.109 2.109 0 0 0 30.611 6.24 Q 30.399 6.191 30.147 6.169 A 5.1 5.1 0 0 0 29.7 6.15 Z M 29.044 0.869 L 25.272 0.869 L 25.272 5.56 L 29.34 5.56 A 4.509 4.509 0 0 0 29.874 5.53 Q 30.363 5.472 30.701 5.297 Q 31.291 5.002 31.636 4.445 Q 31.98 3.887 31.98 3.215 A 2.44 2.44 0 0 0 31.866 2.456 A 2.133 2.133 0 0 0 31.586 1.894 Q 31.193 1.329 30.586 1.066 Q 30.127 0.869 29.044 0.869 Z",
  "M 36.867 11.677 L 36.867 0.263 L 44.903 0.263 L 44.903 0.869 L 37.474 0.869 L 37.474 5.494 L 43.936 5.494 L 43.936 6.101 L 37.474 6.101 L 37.474 11.07 L 44.903 11.07 L 44.903 11.677 L 36.867 11.677 Z",
  "M 54.76 7.626 L 57.662 11.677 L 56.941 11.677 L 54.136 7.741 L 53.612 7.757 L 49.495 7.757 L 49.495 11.677 L 48.888 11.677 L 48.888 0.263 L 53.234 0.263 A 9.8 9.8 0 0 1 53.747 0.275 Q 54.15 0.296 54.473 0.353 A 4.028 4.028 0 0 1 55.112 0.517 A 3.427 3.427 0 0 1 55.416 0.64 Q 56.4 1.099 56.965 2.001 Q 57.531 2.903 57.531 4.002 Q 57.531 5.281 56.752 6.29 Q 55.973 7.298 54.76 7.626 Z M 49.495 7.151 L 53.776 7.151 Q 54.628 7.151 55.35 6.724 Q 56.072 6.298 56.498 5.576 Q 56.924 4.855 56.924 4.002 Q 56.924 3.051 56.424 2.28 Q 55.924 1.509 55.038 1.132 A 2.87 2.87 0 0 0 54.549 0.985 Q 54.044 0.877 53.336 0.87 A 10.027 10.027 0 0 0 53.234 0.869 L 49.495 0.869 L 49.495 7.151 Z",
  "M 60.467 0.263 L 69.684 0.263 L 69.684 0.869 L 65.37 0.869 L 65.37 11.677 L 64.78 11.677 L 64.78 0.869 L 60.467 0.869 L 60.467 0.263 Z",

  "M 84.739 11.661 L 84.739 0.246 L 85.395 0.246 L 89.38 7.298 L 93.349 0.246 L 93.956 0.246 L 93.956 11.661 L 84.739 11.661 Z M 85.346 1.378 L 85.346 11.07 L 93.349 11.07 L 93.349 1.476 L 89.659 7.971 L 89.085 7.971 L 85.346 1.378 Z",
  "M 96.481 11.677 L 101.172 0.263 L 101.811 0.263 L 106.502 11.677 L 105.846 11.677 L 104.304 7.905 L 98.679 7.905 L 97.121 11.677 L 96.481 11.677 Z M 101.483 1.05 L 98.925 7.315 L 104.058 7.315 L 101.483 1.05 Z",
  "M 108.847 11.677 L 113.226 5.97 L 108.847 0.263 L 109.634 0.263 L 113.619 5.461 L 117.621 0.263 L 118.392 0.263 L 114.013 5.97 L 118.392 11.677 L 117.621 11.677 L 113.619 6.478 L 109.634 11.677 L 108.847 11.677 Z",
  "M 122.065 0.263 L 129.462 0.263 L 129.462 0.869 L 126.05 0.869 L 126.05 11.07 L 129.462 11.07 L 129.462 11.677 L 122.065 11.677 L 122.065 11.07 L 125.46 11.07 L 125.46 0.869 L 122.065 0.869 L 122.065 0.263 Z",
  "M 133.89 1.394 L 133.89 11.677 L 133.283 11.677 L 133.283 0.263 L 133.939 0.263 L 137.924 7.298 L 141.893 0.263 L 142.5 0.263 L 142.5 11.677 L 141.893 11.677 L 141.893 1.476 L 138.203 7.987 L 137.629 7.987 L 133.89 1.394 Z",
  "M 145.419 7.315 L 145.419 0.263 L 146.026 0.263 L 146.026 7.315 Q 146.026 8.397 146.567 9.315 Q 147.108 10.234 148.026 10.775 Q 148.945 11.316 150.027 11.316 Q 151.11 11.316 152.028 10.775 Q 152.946 10.234 153.488 9.315 Q 154.029 8.397 154.029 7.315 L 154.029 0.263 L 154.636 0.263 L 154.636 7.315 Q 154.636 8.561 154.012 9.619 Q 153.389 10.677 152.331 11.3 Q 151.274 11.923 150.027 11.923 Q 148.781 11.923 147.723 11.3 Q 146.665 10.677 146.042 9.619 Q 145.419 8.561 145.419 7.315 Z",
  "M 166.46 3.821 L 165.853 3.821 A 3.337 3.337 0 0 0 165.711 2.832 A 2.89 2.89 0 0 0 165.378 2.116 Q 164.902 1.378 164.082 0.976 A 3.976 3.976 0 0 0 162.6 0.586 A 4.764 4.764 0 0 0 162.262 0.574 Q 161.376 0.574 160.605 0.853 A 3.071 3.071 0 0 0 159.791 1.288 A 2.72 2.72 0 0 0 159.351 1.706 Q 158.867 2.28 158.867 3.149 A 2.184 2.184 0 0 0 158.93 3.689 A 1.542 1.542 0 0 0 159.326 4.404 A 2.679 2.679 0 0 0 160.009 4.901 A 3.548 3.548 0 0 0 160.523 5.117 A 10.757 10.757 0 0 0 161.042 5.274 Q 161.587 5.425 162.338 5.588 A 38.785 38.785 0 0 0 162.59 5.642 A 32.78 32.78 0 0 1 163.225 5.78 Q 164.121 5.984 164.681 6.175 Q 165.427 6.429 165.943 7.019 A 1.948 1.948 0 0 1 166.339 7.755 Q 166.46 8.159 166.46 8.676 A 3.329 3.329 0 0 1 166.352 9.544 A 2.601 2.601 0 0 1 165.894 10.472 A 3.338 3.338 0 0 1 164.622 11.466 A 4.051 4.051 0 0 1 164.394 11.562 A 5.446 5.446 0 0 1 162.775 11.91 A 6.421 6.421 0 0 1 162.36 11.923 A 6.182 6.182 0 0 1 161.118 11.804 A 4.763 4.763 0 0 1 159.966 11.415 A 3.84 3.84 0 0 1 158.863 10.616 A 3.55 3.55 0 0 1 158.383 9.98 A 3.941 3.941 0 0 1 157.856 8.331 A 4.886 4.886 0 0 1 157.834 7.856 L 158.44 7.856 A 3.982 3.982 0 0 0 158.556 8.836 A 3.213 3.213 0 0 0 158.908 9.693 Q 159.375 10.48 160.261 10.914 A 4.12 4.12 0 0 0 161.361 11.266 A 5.711 5.711 0 0 0 162.36 11.349 A 5.195 5.195 0 0 0 163.48 11.234 A 3.657 3.657 0 0 0 164.861 10.627 A 2.393 2.393 0 0 0 165.581 9.82 Q 165.828 9.359 165.851 8.78 A 3.038 3.038 0 0 0 165.853 8.659 A 2.735 2.735 0 0 0 165.808 8.148 Q 165.715 7.658 165.427 7.347 A 2.394 2.394 0 0 0 164.511 6.738 A 2.881 2.881 0 0 0 164.353 6.683 A 9.123 9.123 0 0 0 163.988 6.577 Q 163.571 6.464 162.981 6.336 A 40.447 40.447 0 0 0 162.409 6.216 Q 161.015 5.937 160.138 5.601 A 4.057 4.057 0 0 1 159.442 5.259 A 2.94 2.94 0 0 1 158.76 4.682 A 2.031 2.031 0 0 1 158.309 3.723 A 2.865 2.865 0 0 1 158.26 3.182 A 3.06 3.06 0 0 1 158.418 2.184 A 2.735 2.735 0 0 1 158.76 1.509 Q 159.26 0.787 160.171 0.394 A 4.679 4.679 0 0 1 161.319 0.07 A 6.289 6.289 0 0 1 162.278 0 A 4.738 4.738 0 0 1 163.862 0.261 A 4.417 4.417 0 0 1 164.385 0.484 Q 165.345 0.968 165.902 1.837 A 3.541 3.541 0 0 1 166.454 3.597 A 4.317 4.317 0 0 1 166.46 3.821 Z"
]

const githubPath = "M24,2.5a21.5,21.5,0,0,0-6.8,41.9c1.08.2,1.47-.46,1.47-1s0-1.86,0-3.65c-6,1.3-7.24-2.88-7.24-2.88A5.7,5.7,0,0,0,9,33.68c-1.95-1.33.15-1.31.15-1.31a4.52,4.52,0,0,1,3.29,2.22c1.92,3.29,5,2.34,6.26,1.79a4.61,4.61,0,0,1,1.37-2.88c-4.78-.54-9.8-2.38-9.8-10.62a8.29,8.29,0,0,1,2.22-5.77,7.68,7.68,0,0,1,.21-5.69s1.8-.58,5.91,2.2a20.46,20.46,0,0,1,10.76,0c4.11-2.78,5.91-2.2,5.91-2.2a7.74,7.74,0,0,1,.21,5.69,8.28,8.28,0,0,1,2.21,5.77c0,8.26-5,10.07-9.81,10.61a5.12,5.12,0,0,1,1.46,4c0,2.87,0,5.19,0,5.9s.39,1.24,1.48,1A21.5,21.5,0,0,0,24,2.5"



const name = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },

  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "#FAF9F6"
  }
};

const line = {
  hidden: {scaleX: 0},
  visible: {scaleX: 1}
}

const textVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1 }
};

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(1, 1, 1, 0)",
  },

  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(1, 1, 1, 0)",
  }
};

const majorMonoFont = Major_Mono_Display({ 
  subsets: ['latin'],
  weight: '400',
})




export default function Home() {
  const [startAnimation, setStartAnimation] = useState(false);
  const [lineAnimation, setLineAnimation] = useState(false);
  const [welcomMessageVisible, setWelcomeMessageVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWelcomeMessageVisible(false);
      setStartAnimation(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.welcomeMessageContainer}>
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate={welcomMessageVisible ? "visible" : "hidden"}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          Hello! I'm Maximus..
        </motion.p>
      </div>
      <div className={styles.nameContainer}>
        <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox = "0 0 166.7 15"
              className={styles.svgWrapper}>
          {testSeparateCharsScalingPath.map((path, index) => (
          <motion.path
            key={index}
            d={path}
            variants={name}
            initial="hidden"
            animate={startAnimation ? "visible" : "hidden"}
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
            onAnimationComplete={() => {setLineAnimation(true)}}
          />))}
        </motion.svg>
        
      </div>
      <motion.div
        className={styles.lineContainer}
        variants={line}
        initial="hidden"
        animate={lineAnimation ? "visible" : "hidden"}
        transition={{ duration: 2, ease: "easeInOut" }}
        
      />
      <motion.p
        className={styles.descriptionContainer}
        variants={textVariants}
        initial="hidden"
        animate={lineAnimation ? "visible" : "hidden"}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        Programmer • Software Developer • Web Developer
      </motion.p>
      
      <div className={styles.iconContainer}>
        {/* GITHUB */}
        <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 80 80"
              className={styles.iconSvgWrapper}
              whileHover={{ scale: 1.1 }}
              onClick={() => window.open('https://github.com/AurHubertMax?tab=repositories', '_blank')}>
          <motion.path
            d={githubPath}
            variants={icon}
            initial="hidden"
            animate={startAnimation ? "visible" : "hidden"}
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
          />
        </motion.svg>

        {/* GMAIL */}
        <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 80 80"
              className={styles.iconSvgWrapper}
              whileHover={{ scale: 1.1 }}
              onClick={() => window.location.href = 'mailto:ahubertmax@gmail.com'}>
          <motion.path
            d="M6.47,10.71a2,2,0,0,0-2,2h0V35.32a2,2,0,0,0,2,2H41.53a2,2,0,0,0,2-2h0V12.68a2,2,0,0,0-2-2H6.47Zm33.21,3.82L24,26.07,8.32,14.53"
            variants={icon}
            initial="hidden"
            animate={startAnimation ? "visible" : "hidden"}
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
          />
        </motion.svg>
        
        {/* indeed */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 80 80"
          className={styles.iconSvgWrapper}
          whileHover={{ scale: 1.1 }}
          onClick={() => window.open('https://profile.indeed.com/p/aurelianohubertm-9jzvgny', '_blank')}>
        
          <motion.path
            d="M22.7581,27.2667V40.5306c0,3.958,6.9636,3.96,6.9636,0V27.2667A7.7189,7.7189,0,0,1,22.7581,27.2667Z"
            variants={icon}
            initial="hidden"
            animate={startAnimation ? "visible" : "hidden"}
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
          />
          <motion.path
            d="M10.5184,22.7714C12.8476,13.0435,22.1793-2.29,37.4816,7.8109"
            variants={icon}
            initial="hidden"
            animate={startAnimation ? "visible" : "hidden"}
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
          />
          <motion.ellipse
            cx="26.4682"
            cy="16.1456"
            rx="4.1698"
            ry="4.1392"
            variants={icon}
            initial="hidden"
            animate={startAnimation ? "visible" : "hidden"}
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
          />
        </motion.svg>

        {/* linkedin */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 80 80"
          className={styles.iconSvgWrapper}
          whileHover={{ scale: 1.1 }}
          onClick={() => window.open('https://linkedin.com/in/aureliano-hubert-maximus-a85609256', '_blank')}>

          <motion.circle
            cx="15.64"
            cy="13.46"
            r=".75"
            variants={icon}
            initial="hidden"
            animate={startAnimation ? "visible" : "hidden"}
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
          />
          <motion.line
            x1="15.64"
            x2="15.64"
            y1="16.93"
            y2="31.91"
            variants={icon}
            initial="hidden"
            animate={startAnimation ? "visible" : "hidden"}
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
          />
          <motion.path
            d="m33.11 31.91v-9.61a5.83 5.83 0 0 0-5.82-5.82 5.83 5.83 0 0 0-5.83 5.82v9.61"
            variants={icon}
            initial="hidden"
            animate={startAnimation ? "visible" : "hidden"}
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
          />
          <motion.line
            x1="21.46"
            x2="21.46"
            y1="22.3"
            y2="16.93"
            variants={icon}
            initial="hidden"
            animate={startAnimation ? "visible" : "hidden"}
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
          />
          <motion.path
            d="m40.5 5.5h-33a2 2 0 0 0-2 2v33a2 2 0 0 0 2 2h33a2 2 0 0 0 2-2v-33a2 2 0 0 0-2-2z"
            variants={icon}
            initial="hidden"
            animate={startAnimation ? "visible" : "hidden"}
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
          />
        </motion.svg>
        
      </div>
    </div> 
  );
}
