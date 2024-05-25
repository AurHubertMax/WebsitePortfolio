"use client"

import { AnimatePresence } from "framer-motion"
import { motion } from 'framer-motion'
import Navbar from '@/components/navbar'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'


const TransitionProvider = ({ children }) => {
    const pathName = usePathname();
    const [isAnimating, setIsAnimating] = useState(true);

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

    return (
        <AnimatePresence>
            <div className='navbar'>
                <Navbar />
            </div>
            <div className='outer-container'>
                <div key={pathName} className='container' >
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