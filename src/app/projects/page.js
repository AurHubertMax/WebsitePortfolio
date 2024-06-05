"use client"

import React, { useEffect, useState, useRef } from 'react'
import { motion, useAnimate } from "framer-motion";
import styles from './projectsPage.module.css';
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button} from "@nextui-org/react";

const icon = {
    start: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(1, 1, 1, 0)",
    },
  
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(1, 1, 1, 0)",
    },

    end: {
        opacity: 0,
        pathLength: 1,
        fill: "rgba(1, 1, 1, 0)",
    }
  };





const ProjectsPage = () => {
    const [animationState1, setAnimationState1] = useState('visible');
    const [animationState2, setAnimationState2] = useState('visible');
    const [animationState3, setAnimationState3] = useState('visible');
    const [animationState4, setAnimationState4] = useState('visible');
    const [hoveredCard, setHoveredCard] = useState(null);
    const [cardTransform, setCardTransform] = useState('');

    useEffect(() => {
        if (animationState1 === 'visible') {
            setTimeout(() => {
                setAnimationState1('end');
            }, 1000);
        }
        if (animationState2 === 'visible') {
            setTimeout(() => {
                setAnimationState2('end');
            }, 1000);
        }
        if (animationState3 === 'visible') {
            setTimeout(() => {
                setAnimationState3('end');
            }, 1000);
        }
        if (animationState4 === 'visible') {
            setTimeout(() => {
                setAnimationState4('end');
            }, 1000);
        }
    }, [animationState1, animationState2, animationState3, animationState4]);


    return (
        <div className={styles.projectsContainer}>
            {/* CARD 1 */}
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 200"
                className={styles.iconSvgWrapper}>
                <motion.rect
                    x="6.5" y="39" width="39" height="53" rx="2" ry="2"
                    variants={icon}
                    initial="start"
                    animate={animationState1}
                    transition={{
                    default: { duration: 1, ease: "easeInOut", delay: 0 },
                    }}
                />
            </motion.svg>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1}}
            >
                <Card 
                    className={`${styles.cardContainer} ${hoveredCard !== null && (hoveredCard === 3 || hoveredCard === 4) ? styles.invisible : ''}`}
                    isPressable
                    onPress={() => 
                        window.open('https://github.com/DevinRS/Capstone_Project', '_blank')
                    }
                    onMouseEnter={() => setHoveredCard(1)}
                    onMouseLeave={() => setHoveredCard(null)}
                    
                >
                    <CardHeader className={styles.cardHeaderContainer}>
                        <p className={styles.cardTitle}>ML Sandbox</p>
                        <h4 className={styles.cardDate}>2023 - 2024</h4>
                    </CardHeader>
                    <CardBody className={styles.cardImageContainer}>
                        <img className={styles.cardImage} src="/MLSandbox/logo.png" alt="stuff" />
                    </CardBody>
                </Card>
                <div className={`${styles.card1Border} ${hoveredCard !== 1 ? styles.invisible : ''}`}/>
                <div className={`${styles.card1TextContainer} ${hoveredCard !== 1 ? styles.invisible : ''}`}>
                    <h1 className={styles.cardExtensionDesc}>A comprehensive web application designed to simplify and expedite the process of training and deploying Machine Learning models, providing users with an intuitive interface and powerful tools to manage their ML projects efficiently.</h1>
                    <br />
                    <p className={styles.cardExtensionTech}>Python  PostgreSQL  AWS  EC2 Streamlit</p>
                    <br />
                    <div className={styles.card1Pictures}>
                        
                        <img className={styles.cardImage} src="/MLSandbox/Picture2.png" alt="stuff" />
                        <img className={styles.cardImage} src="/MLSandbox/Picture1.png" alt="stuff" />
                    </div>
                </div>
            </motion.div>
            

            {/* CARD 2 */}
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 200"
                className={styles.iconSvgWrapper}>
                <motion.rect
                    x="55.7" y="39" width="39" height="53" rx="2" ry="2"
                    variants={icon}
                    initial="start"
                    animate={animationState2}
                    transition={{
                    default: { duration: 1, ease: "easeInOut", delay: 0.1 },
                    }}
                />
            </motion.svg>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3, duration: 1}}
            >
                <Card 
                    className={`${styles.cardContainer} ${hoveredCard !== null && hoveredCard !== 2 ? styles.invisible : ''}`}
                    isPressable
                    onPress={() => 
                        window.open('https://github.com/AurHubertMax/WorkoutTracker', '_blank')
                    }
                    onMouseEnter={() => setHoveredCard(2)}
                    onMouseLeave={() => setHoveredCard(null)}
                    
                >
                    <CardHeader className={styles.cardHeaderContainer}>
                        <p className={styles.cardTitle}>Gym Rat</p>
                        <h4 className={styles.cardDate}>2023</h4>
                    </CardHeader>
                    <CardBody className={styles.cardImageContainer}>
                        <img className={styles.cardImage} src="/Gym_Rat/LogoV1-removebg-preview.png" alt="stuff" />
                    </CardBody>
                </Card>
                <div className={`${styles.card2Border} ${hoveredCard !== 2 ? styles.invisible : ''}`}/>
                <div className={`${styles.card2TextContainer} ${hoveredCard !== 2 ? styles.invisible : ''}`}>
                    <h1 className={styles.cardExtensionDesc}>A robust mobile application designed to track and analyze weightlifting progress, offering users detailed insights and personalized recommendations to optimize their training and achieve their fitness goals.</h1>
                    <br />
                    <p className={styles.cardExtensionTech}>React-Native JavaScript Node.js</p>
                    <br />
                    <div className={styles.card2Pictures}>
                        
                        <img className={styles.cardImage} src="/Gym_Rat/homeScreenSC.png" alt="stuff" />
                        <img className={styles.cardImage} src="/Gym_Rat/completeSC.png" alt="stuff" />
                        <img className={styles.cardImage} src="/Gym_Rat/progressScreenSC.png" alt="stuff" />
                    </div>
                </div>
            </motion.div>

            {/* CARD 3 */}
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 200"
                className={styles.iconSvgWrapper}>
                <motion.rect
                    x="104" y="39" width="42" height="53" rx="2" ry="2"
                    variants={icon}
                    initial="start"
                    animate={animationState3}
                    transition={{
                    default: { duration: 1, ease: "easeInOut", delay: 0.2 },
                    }}
                />
            </motion.svg>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 1}}
            >
                <Card 
                    className={`${styles.cardContainer} ${hoveredCard !== null && hoveredCard !== 3 ? styles.invisible : ''}`}
                    isPressable
                    onPress={() => 
                        window.open('https://github.com/AurHubertMax/study-room-booker', '_blank')
                    }
                    onMouseEnter={() => setHoveredCard(3)}
                    onMouseLeave={() => setHoveredCard(null)}
                    
                >
                    <CardHeader className={styles.cardHeaderContainer}>
                        <p className={styles.cardTitle}>Study Room Booker</p>
                        <h4 className={styles.cardDate}>2023</h4>
                    </CardHeader>
                    <CardBody className={styles.cardImageContainer}>
                        <img className={styles.cardImage} src="/studyRoomBooker/AnschutzLibraryKU.webp" alt="stuff" />
                    </CardBody>
                </Card>
                <div className={`${styles.card3Border} ${hoveredCard !== 3 ? styles.invisible : ''}`}/>
                <div className={`${styles.card3TextContainer} ${hoveredCard !== 3 ? styles.invisible : ''}`}>
                    <h1 className={styles.cardExtensionDesc}>A Python-based desktop application that automates the study room reservation process, streamlining bookings and ensuring efficient use of study spaces through an intuitive and user-friendly interface. </h1>
                    <br />
                    <p className={styles.cardExtensionTech}>Python Scripting</p>
                    <br />
                    <div className={styles.card3Pictures}>
                        
                        <img className={styles.cardImage} src="/studyRoomBooker/image.png" alt="stuff" />
                    </div>
                </div>
            </motion.div>

            {/* CARD 4 */}
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 200"
                className={styles.iconSvgWrapper}>
                <motion.rect
                    x="154.5" y="39" width="39" height="53" rx="2" ry="2"
                    variants={icon}
                    initial="start"
                    animate={animationState4}
                    transition={{
                    default: { duration: 1, ease: "easeInOut", delay: 0.3 },
                    }}
                />
            </motion.svg>            
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1}}
            >
                <Card 
                    className={`${styles.cardContainer} ${hoveredCard !== null && (hoveredCard === 1 || hoveredCard === 2) ? styles.invisible : ''}`}
                    isPressable
                    onPress={() => 
                        window.open('https://github.com/harveyji1/A-Dark-Moon', '_blank')
                    }
                    onMouseEnter={() => setHoveredCard(4)}
                    onMouseLeave={() => setHoveredCard(null)}
                    
                >
                    <CardHeader className={styles.cardHeaderContainer}>
                        <p className={styles.cardTitle}>A Dark Moon</p>
                        <h4 className={styles.cardDate}>2022</h4>
                    </CardHeader>
                    <CardBody className={styles.cardImageContainer}>
                        <img className={styles.cardImage} src="/aDarkMoon/icon.png" alt="stuff" />
                    </CardBody>
                </Card>
                <div className={`${styles.card4Border} ${hoveredCard !== 4 ? styles.invisible : ''}`}/>
                <div className={`${styles.card4TextContainer} ${hoveredCard !== 4 ? styles.invisible : ''}`}>
                    <h1 className={styles.cardExtensionDesc}>A lightweight, text-based adventure and resource management browser game, offering players an engaging and immersive experience with minimal system requirements and a focus on strategic decision-making.</h1>
                    <br />
                    <p className={styles.cardExtensionTech}>HTML JavaScript CSS</p>
                    <br />
                    <div className={styles.card4Pictures}>
                        
                        {/*<img className={styles.cardImage} src="/aDarkMoon/homeSC2.png" alt="stuff" />*/}
                        <img className={styles.cardImage} src="/aDarkMoon/endlessSpaceSC2.png" alt="stuff" />
                    </div>
                </div>
            </motion.div>
            
        </div>
    );
};

export default ProjectsPage;