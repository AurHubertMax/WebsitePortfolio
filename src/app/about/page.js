"use client"

import styles from './aboutPage.module.css';
import { useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import Resume from '@/components/resume';
import { useRef, useEffect } from 'react';

const AboutPage = () => {
    const [scrollYProgressValue, setScrollYProgressValue] = useState(0);

    const containerRef = useRef()
    const {scrollYProgress} = useScroll({container:containerRef})
    
    
    useEffect(() => {
        return scrollYProgress.onChange(v => setScrollYProgressValue(v));
    }, [scrollYProgress]);


    const [isClickable, setIsClickable] = useState(false);
    useEffect(() => {
        setIsClickable(scrollYProgress.get() === 0.99);
    }, [scrollYProgress]);

  return (

    <div className={`${styles.aboutContainer}`} ref={containerRef}>
        <div className={styles.textContainer} >
            {/* ABOUT ME */}
            <div className={styles.biography}>
                <h1 className={styles.biographyTitle}>WHO AM I</h1>
                <p className={styles.biographyText}>
                    I am a full-stack developer, with a passion for front-end development. 
                    I have experience with a variety of technologies, including React, Node.js, 
                    and MongoDB. I am currently working as a freelancer, and am always looking for new projects to work on. 
                    I am also interested in learning new technologies and expanding my skillset.
                </p>
                
            </div>
            {/* SKILLS */}
            <div className={styles.skills}>
                <h1 className={styles.skillsTitle}>SKILLS</h1>
                <div className={styles.skillsList}>
                    <div className={styles.skillsLanguage}>JavaScript</div>
                    <div className={styles.skillsLanguage}>C++</div>
                    <div className={styles.skillsLanguage}>Python</div>
                    <div className={styles.skillsLanguage}>C</div>
                    <div className={styles.skillsLanguage}>SQL</div>
                    <div className={styles.skillsLanguage}>C#</div>
                    <div className={styles.skillsLanguage}>HTML</div>
                    <div className={styles.skillsLanguage}>CSS</div>

                    <div className={styles.skillsFramework}>React-Native</div>
                    <div className={styles.skillsFramework}>React</div>
                    <div className={styles.skillsFramework}>NextJS</div>
                    <div className={styles.skillsFramework}>PostgreSQL</div>
                    <div className={styles.skillsFramework}>EC2</div>
                    <div className={styles.skillsFramework}>AWS</div>
                    <div className={styles.skillsFramework}>Git</div>

                </div>
            </div>
            {/* TIMELINE */}
            <div className={styles.timeline}>
                {/* Timeline Title */}
                <h1 className={styles.timelineTitle}>TIMELINE</h1>
                {/* Experience List */} 
                <div className=''>
                    {/* Experience Item 1 */}
                    <div className='flex justify-between h-48'>
                        {/*Left Side*/}
                        <div className='w-1/2 '>
                            <div className={`${styles.timelineList} p-3 font-semibold rounded-b-lg rounded-s-lg`}>Pursued Masters in Architecture</div>
                            <div className='p-3 text-sm italic'>I enrolled in KU pursuing a Masters in Architectural Design, little did I know how my interests will change</div>
                            <div className='p-3 text-sm font-semibold'>2018</div>
                        </div>
                        {/*Center*/}
                        <div className='w-1/6 flex justify-center'>
                            {/*Line*/}
                            <div className='w-1 h-full bg-gray-600 rounded relative'>
                                {/*Node*/}
                                <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                            </div>
                        </div>
                        {/*Right Side*/}
                        <div className='w-1/2 '></div>
                    </div>

                    {/* Experience Item 2 */}
                    <div className='flex justify-between h-48'>
                        {/*Left Side*/}
                        <div className='w-1/2 '>
                            
                        </div>
                        {/*Center*/}
                        <div className='w-1/6 flex justify-center'>
                            {/*Line*/}
                            <div className='w-1 h-full bg-gray-600 rounded relative'>
                                {/*Node*/}
                                <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                            </div>
                        </div>
                        {/*Right Side*/}
                        <div className='w-1/2 '>
                            <div className={`${styles.timelineList} p-3 font-semibold rounded-b-lg rounded-s-lg`}>First Job as Cashier</div>
                            <div className='p-3 text-sm italic'>Applied to a cashier position in a small market in KU dorms</div>
                            <div className='p-3 text-sm font-semibold'>2018</div>
                        </div>
                    </div>

                    {/* Experience Item 3 */}
                    <div className='flex justify-between h-48'>
                        {/*Left Side*/}
                        <div className='w-1/2 '>
                            <div className={`${styles.timelineList} p-3 font-semibold rounded-b-lg rounded-s-lg`}>Switched Majors to Computer Science</div>
                            <div className='p-3 text-sm italic'>I found my passion for creating apps at this time, better late than never!</div>
                            <div className='p-3 text-sm font-semibold'>2020</div>
                        </div>
                        {/*Center*/}
                        <div className='w-1/6 flex justify-center'>
                            {/*Line*/}
                            <div className='w-1 h-full bg-gray-600 rounded relative'>
                                {/*Node*/}
                                <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                            </div>
                        </div>
                        {/*Right Side*/}
                        <div className='w-1/2 '></div>
                    </div>

                    {/* Experience Item 4 */}
                    <div className='flex justify-between h-48'>
                        {/*Left Side*/}
                        <div className='w-1/2 '>
                            
                        </div>
                        {/*Center*/}
                        <div className='w-1/6 flex justify-center'>
                            {/*Line*/}
                            <div className='w-1 h-full bg-gray-600 rounded relative'>
                                {/*Node*/}
                                <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                            </div>
                        </div>
                        {/*Right Side*/}
                        <div className='w-1/2 '>
                            <div className={`${styles.timelineList} p-3 font-semibold rounded-b-lg rounded-s-lg`}>Joined Lambda Phi Epsilon International Fraternity Inc.</div>
                            <div className='p-3 text-sm italic'>Became a part of Lambda Phi Epsilon, and took leadership roles to better the organization</div>
                            <div className='p-3 text-sm font-semibold'>2022</div>
                        </div>
                    </div>

                    {/* Experience Item 5 */}
                    <div className='flex justify-between h-48'>
                        {/*Left Side*/}
                        <div className='w-1/2 '>
                            <div className={`${styles.timelineList} p-3 font-semibold rounded-b-lg rounded-s-lg`}>Graduated with a Bachelor of Science in Computer Science</div>
                            <div className='p-3 text-sm italic'>Graduated with a B.Sc. in Computer Science and actively seeking new opportunities to apply my skills and knowledge.</div>
                            <div className='p-3 text-sm font-semibold'>2024</div>
                        </div>
                        {/*Center*/}
                        <div className='w-1/6 flex justify-center'>
                            {/*Line*/}
                            <div className='w-1 h-full bg-gray-600 rounded relative'>
                                {/*Node*/}
                                <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                            </div>
                        </div>
                        {/*Right Side*/}
                        <div className='w-1/2 '></div>
                    </div>

                    
                </div>
            </div>
            <p className='opacity-0'>Filler</p>
            <p className='opacity-0'>Filler</p>
        </div>
        {/* SVG */}
        <div className={styles.svgContainer}>
            <Resume scrollYProgress={scrollYProgress} />
        </div>
    </div>
  );
};

export default AboutPage;

//'hidden sticky top-0 z-50 flex lg:block w-1/3 xl:1/2 mr-10 -ml-10'