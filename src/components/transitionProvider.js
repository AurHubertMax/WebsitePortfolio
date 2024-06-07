"use client"

import { AnimatePresence } from "framer-motion"
import { motion } from 'framer-motion'
import Navbar from '@/components/navbar'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState, useRef } from 'react'

const getColor = (path) => {
    switch(path) {
        case '/':
            return '#ca5c17';
        case '/about':
            return '#9898e4';
        case '/projects':
            return '#2356cf';
        default:
            return '#ca5c17';
    }
}

const TransitionProvider = ({ children }) => {
    const pathName = usePathname();
    const [isAnimating, setIsAnimating] = useState(true);

    
    const [backgroundColor, setBackgroundColor] = useState(getColor(pathName));
    
    useEffect(() => {
        setIsAnimating(true);
        const timer = setTimeout(() => {
            setIsAnimating(false);
        }, 500); 
        console.log('timer set');
        return () => clearTimeout(timer);
    }, [pathName]);
    

    const handleAnimationComplete = () => {
        setBackgroundColor(getColor(pathName));
    }

    const containerRef = useRef();
    const navbarRef = useRef();
    const AnimatePresenceRef = useRef();

    useEffect(() => {
        const container = containerRef.current;
        const navbar = navbarRef.current;
        const AnimatePresence = AnimatePresenceRef.current;

        const handleMouseMove = (e) => {
            let xRotation = (0.5 - e.clientY / window.innerHeight ) * 20;
            let yRotation = (0.5 - e.clientX / window.innerWidth ) * -20;
        
            xRotation = Math.max(Math.min(xRotation, 10), -10);
            yRotation = Math.max(Math.min(yRotation, 10), -10);

            const translateY = Math.abs(xRotation) * 0.5;
            container.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
        
            navbar.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg) translateY(${translateY}px)`;
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        }
    }, [pathName]);



    return (
        <AnimatePresence>
            <div className='navbar' ref={navbarRef}>
                <Navbar />
            </div>
            
            <div className='outer-container'>
                <div key={pathName} className='container' ref={containerRef}>
                    <motion.div className="transitionbox"
                        style={{transformOrigin: "top left", borderRadius: "10px", backgroundColor: getColor(pathName)}}
                        initial={{ scaleX: 0, scaleY: 0, opacity: 1 }}
                        animate={{ scaleX: 1, scaleY: 1, opacity: 0 }}
                        transition={{ 
                            scaleX: {duration: 0.1, ease: "easeIn"},
                            scaleY: {duration: 0.1, ease: "easeIn"}, 
                            opacity: { delay: 0.4, duration: 0 },
                        }}
                        onAnimationComplete={handleAnimationComplete}
                    />

                    <motion.div className="transitionbox"
                        style={{transformOrigin: "bottom right", borderRadius: "10px", backgroundColor: getColor(pathName), zIndex: 60}}
                        initial={{ scaleX: 1, scaleY: 1, opacity: 0 }}
                        animate={{ scaleX: 0, scaleY: 0, opacity: 1 }}
                        transition={{ 
                            scaleX: {delay: 0.5, duration: 0.1, ease: "easeIn"},
                            scaleY: {delay: 0.5, duration: 0.1, ease: "easeIn"}, 
                            opacity: { delay: 0.4, duration: 0 },
                        }}
                    />
                    
                    <main>    
                        
                        {!isAnimating && <div className='textContainer'>{children}</div>}
                         
                    </main>
                </div>
            </div>
        </AnimatePresence>
    )
}


export default TransitionProvider;