"use client"

import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import styles from './projectsPage.module.css';
import {Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from 'next/image';


const item = {
    hidden: {y: 20, opacity: 0},
    visible: {y: 0, opacity: 1}
}





const ProjectsPage = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [animationEnded, setAnimationEnded] = useState(false);

    useEffect(() => {
        if (animationEnded === false) {
            setTimeout(() => {
                setAnimationEnded(true);
            }, 1300);
        }
    }, [animationEnded]);

    


    return (
        <div className={styles.projectsContainer}>
            {/* CARD 1 */}
            <motion.div
                variants={item}
                initial='hidden'
                animate='visible'
                transition={{ delay: 0.3, duration: 0.2}}
            >
                <Card 
                    className={`${styles.cardContainer} ${hoveredCard !== null && (hoveredCard === 3 || hoveredCard === 4) ? styles.invisible : ''}`}
                    style={{ pointerEvents: animationEnded ? 'auto' : 'none' }} 
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
                    <p className={styles.cardExtensionTechLeft}>Python  PostgreSQL  AWS  EC2 Streamlit</p>
                    <br />
                    <div className={styles.card1Pictures}>
                        
                        <img className={styles.cardImage} src="/MLSandbox/Picture2.png" alt="stuff" />
                        <img className={styles.cardImage} src="/MLSandbox/Picture1.png" alt="stuff" />
                    </div>
                </div>
            </motion.div>
            

            {/* CARD 2 */}
            <motion.div
                variants={item}
                initial='hidden'
                animate='visible'
                transition={{ delay: 0.5, duration: 0.2}}
            >
                <Card 
                    className={`${styles.cardContainer} ${hoveredCard !== null && hoveredCard !== 2 ? styles.invisible : ''}`}
                    style={{ pointerEvents: animationEnded ? 'auto' : 'none' }} 
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
                    <p className={styles.cardExtensionTechLeft}>React-Native JavaScript Node.js</p>
                    <br />
                    <div className={styles.card2Pictures}>
                        
                        <img className={styles.cardImage} src="/Gym_Rat/homeScreenSC.png" alt="stuff" />
                        <img className={styles.cardImage} src="/Gym_Rat/completeSC.png" alt="stuff" />
                        <img className={styles.cardImage} src="/Gym_Rat/progressScreenSC.png" alt="stuff" />
                    </div>
                </div>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
                variants={item}
                initial='hidden'
                animate='visible'
                transition={{ delay: 0.7, duration: 0.2}}
            >
                <Card 
                    className={`${styles.cardContainer} ${hoveredCard !== null && hoveredCard !== 3 ? styles.invisible : ''}`}
                    style={{ pointerEvents: animationEnded ? 'auto' : 'none' }} 
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
                    <p className={styles.cardExtensionTechRight1}>Python Scripting</p>
                    <br />
                    <div className={styles.card3Pictures}>
                        
                        <img className={styles.cardImage} src="/studyRoomBooker/image.png" alt="stuff" />
                    </div>
                </div>
            </motion.div>

            {/* CARD 4 */}          
            <motion.div
                variants={item}
                initial='hidden'
                animate='visible'
                transition={{ delay: 0.9, duration: 0.2}}
            >
                <Card 
                    className={`${styles.cardContainer} ${hoveredCard !== null && (hoveredCard === 1 || hoveredCard === 2) ? styles.invisible : ''}`}
                    style={{ pointerEvents: animationEnded ? 'auto' : 'none' }} 
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
                    <p className={styles.cardExtensionTechRight2}>HTML JavaScript CSS</p>
                    <br />
                    <div className={styles.card4Pictures}>
                        <img className={styles.cardImage} src="/aDarkMoon/endlessSpaceSC2.png" alt="stuff" />
                    </div>
                </div>
            </motion.div>
            
        </div>
    );
};

export default ProjectsPage;