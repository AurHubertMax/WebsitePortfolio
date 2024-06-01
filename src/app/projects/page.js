"use client"

import React, { useEffect, useState, useRef } from 'react'
import { motion } from "framer-motion";
import styles from './projectsPage.module.css';
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button} from "@nextui-org/react";

const squarePath = "M6 12 H 46 V 90 H 10 Z";
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

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
};
  
const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
};



const ProjectsPage = () => {
    const [animationState, setAnimationState] = useState('visible');

    useEffect(() => {
        if (animationState === 'visible') {
            setTimeout(() => {
                setAnimationState('hidden');
            }, 1000);
        }
    }, [animationState]);

    return (
        <div className={styles.projectsContainer}>
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 200"
                className={styles.iconSvgWrapper}>
                <motion.rect
                    x="6.5" y="12.5" width="39" height="61.5" rx="2" ry="2"
                    variants={icon}
                    initial="hidden"
                    animate={animationState}
                    transition={{
                    default: { duration: 1, ease: "easeInOut" },
                    }}
                />
            </motion.svg>
            <Card className={styles.cardContainer}>
                <CardHeader className={styles.cardHeaderContainer}>
                    <p className={styles.cardTitle}>ML Sandbox</p>
                    <small className={styles.cardDescription}>Machine Learning web application</small>
                    <h4 className={styles.cardDate}>2023 - 2024</h4>
                </CardHeader>
                <CardBody className={styles.cardImageContainer}>
                    <img className={styles.cardImage} src="/MLSandbox/logo.png" alt="stuff" />
                </CardBody>
            </Card>

            <Card>
                test
            </Card>
            <Card>
                test
            </Card>
        </div>
    );
};

export default ProjectsPage;