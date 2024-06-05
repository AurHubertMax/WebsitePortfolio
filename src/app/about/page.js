"use client"

import styles from './aboutPage.module.css';
import { useState } from 'react';
import { motion, useScroll, useInView } from 'framer-motion';
import Resume from '@/components/resume';
import { useRef, useEffect } from 'react';

const box = {
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

const AboutPage = () => {

    const [hoverEnabled, setHoverEnabled] = useState(false);

    const containerRef = useRef()
    const {scrollYProgress} = useScroll({container:containerRef})

    const skillRef = useRef();
    const isSkillRefInView = useInView(skillRef, {once: true}, {margin: "-500px"})

    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange(() => {
            if (scrollYProgress.get() > 0.99) {
                setHoverEnabled(true);
            }
            else {
                setHoverEnabled(false);
            }
        });
        return () => unsubscribe();
    }, []);

    

  return (

    <div className={`${styles.aboutContainer}`} ref={containerRef}>
        <div className={styles.textContainer} >
            {/* ABOUT ME */}
            <div className={styles.biography}>
                <h1 className={styles.biographyTitle}>ABOUT ME</h1>
                <p className={styles.biographyText}>
                    I am a recent graduate with a Bachelor of Science in Computer Science from the University of Kansas, and I am passionate about leveraging technology to create 
                    efficient, user-friendly applications. My projects range from a <a className={styles.link} href='https://github.com/DevinRS/Capstone_Project' target="_blank" rel="noopener noreferrer">Machine Learning Web Application </a> 
                    that enhances the accessibility of algorithms, to a <a className={styles.link} href='https://github.com/AurHubertMax/WorkoutTracker' target="_blank" rel="noopener noreferrer">Weightlifting Helper Mobile App</a> that aids gym enthusiasts in tracking their progress.
                    <br/><br/>
                    I developed this website to not only showcase my projects and technical skills but to also create a platform where I can connect and collaborate 
                    with others in the field. If you have any questions or are interested in working together, please feel free to 
                    <a className={styles.link} href="mailto:ahubertmax@gmail.com"> contact me</a>.
                </p>
                
            </div>
            {/* SKILLS */}
            <div className={styles.skills} ref={skillRef}>
                <motion.path
                    variants={box}
                    initial="hidden"
                    d="M10 10 H310 V110 H10 Z"
                    animate={isSkillRefInView ? "visible" : "hidden"}
                    transition={{
                        default: { duration: 2, ease: "easeInOut" },
                        fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                    }}
                >
                </motion.path>
                <motion.h1 
                initial={{x: "-300px"}} 
                animate={isSkillRefInView ? {x:0} : {}} 
                transition={{delay: 0.2}} 
                className={styles.skillsTitle}>SKILLS</motion.h1>

                <motion.div 
                className={styles.skillsList}
                initial={{x: "-1000px"}} 
                animate={isSkillRefInView ? {x:0} : {}} 
                transition={{delay: 0.2}} 
                >
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

                </motion.div>
            </div>
            {/* TIMELINE */}
            <div className={styles.timeline}>
                
                {/* Timeline Title */}
                <motion.h1 className={styles.timelineTitle}
                initial={{x: "-300px"}} 
                animate={isSkillRefInView ? {x:0} : {}} 
                transition={{delay: 0.2}} 
                >TIMELINE</motion.h1>

                {/* Experience List */} 
                <div className=''>
                    {/* Experience Item 1 */}
                    <div className='flex justify-between h-48'>
                        {/*Left Side*/}
                        <motion.div className='w-1/2 '
                        initial={{x: "-1000px"}} 
                        animate={isSkillRefInView ? {x:0} : {}} 
                        transition={{delay: 0.5}} 
                        >
                            <div className={`${styles.timelineList} p-3 font-semibold rounded-b-lg rounded-s-lg`}>Pursued Masters in Architecture</div>
                            <div className='p-3 text-sm italic'>I enrolled in KU pursuing a Masters in Architectural Design, little did I know how my interests will change</div>
                            <div className='p-3 text-sm font-semibold'>2018</div>
                        </motion.div>
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
                        <motion.div className='w-1/2 '
                        initial={{x: "3000px"}} 
                        animate={isSkillRefInView ? {x:0} : {}} 
                        transition={{delay: 0.5}} 
                        >
                            <div className={`${styles.timelineList} p-3 font-semibold rounded-b-lg rounded-s-lg`}>First Job as Cashier</div>
                            <div className='p-3 text-sm italic'>Applied to a cashier position in a small market in KU dorms</div>
                            <div className='p-3 text-sm font-semibold'>2018</div>
                        </motion.div>
                    </div>

                    {/* Experience Item 3 */}
                    <div className='flex justify-between h-48'>
                        {/*Left Side*/}
                        <motion.div className='w-1/2 '
                        initial={{x: "3000px"}} 
                        animate={isSkillRefInView ? {x:0} : {}} 
                        transition={{delay: 0.5}} 
                        >
                            <div className={`${styles.timelineList} p-3 font-semibold rounded-b-lg rounded-s-lg`}>Switched Majors to Computer Science</div>
                            <div className='p-3 text-sm italic'>I found my passion for creating apps at this time, better late than never!</div>
                            <div className='p-3 text-sm font-semibold'>2020</div>
                        </motion.div>
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
                        <motion.div className='w-1/2 '
                        initial={{x: "3000px"}} 
                        animate={isSkillRefInView ? {x:0} : {}} 
                        transition={{delay: 0.5}} 
                        >
                            <div className={`${styles.timelineList} p-3 font-semibold rounded-b-lg rounded-s-lg`}>Joined Lambda Phi Epsilon International Fraternity Inc.</div>
                            <div className='p-3 text-sm italic'>Became a part of Lambda Phi Epsilon, and took leadership roles to better the organization</div>
                            <div className='p-3 text-sm font-semibold'>2022</div>
                        </motion.div>
                    </div>

                    {/* Experience Item 5 */}
                    <div className='flex justify-between h-48'>
                        {/*Left Side*/}
                        <motion.div className='w-1/2 '
                        initial={{x: "3000px"}} 
                        animate={isSkillRefInView ? {x:0} : {}} 
                        transition={{delay: 0.5}} 
                        >
                            <div className={`${styles.timelineList} p-3 font-semibold rounded-b-lg rounded-s-lg`}>Graduated with a Bachelor of Science in Computer Science</div>
                            <div className='p-3 text-sm italic'>Graduated with a B.Sc. in Computer Science and actively seeking new opportunities to apply my skills and knowledge.</div>
                            <div className='p-3 text-sm font-semibold'>2024</div>
                        </motion.div>
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

        </div>
        {/* SVG */}
        
        <div className={styles.svgContainer}>

            <Resume scrollYProgress={scrollYProgress} />
            
        </div>
        <div>
            <img className={styles.portrait} src="/Graduation_photo_cut.jpg" alt="About Page SVG" />
        </div>
    </div>
  );
};

export default AboutPage;

//'hidden sticky top-0 z-50 flex lg:block w-1/3 xl:1/2 mr-10 -ml-10'
//../../public/Aureliano_Hubert_Maximus_Resume_2024.pdf