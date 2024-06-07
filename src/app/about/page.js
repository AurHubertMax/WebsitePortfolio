"use client"

import styles from './aboutPage.module.css';
import { useState } from 'react';
import { motion, useScroll, useInView, useTransform } from 'framer-motion';
import Resume from '@/components/resume';
import { useRef, useEffect } from 'react';
import Image from 'next/image';

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
    const progressBarWidth = useTransform(scrollYProgress, value => `${value * 100}%`);

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
    }, [scrollYProgress]);

    

  return (

    <div className={`${styles.aboutContainer}`} ref={containerRef}>
        <div className={styles.blurBox} />
        {/* SVG */}
        <div className={`${styles.svgContainer} ${scrollYProgress.get() > 0.94 ? styles.svgContainerNoBlur : ''}`}>
            <Resume scrollYProgress={scrollYProgress}/>
        </div>
        
        {/* SVG Progress Bar*/}
        <div className={styles.progressBarContainer}>
            <motion.div
                className={styles.progressBar}
                style={{width: progressBarWidth}}
            >
                {hoverEnabled ? "COMPLETED" : "CRAFTING RESUME"}
            </motion.div>
        </div>

        <div className={styles.textContainer} >
            {/* ABOUT ME */}
            <motion.div className={styles.biographyContainer}
            initial={{x: "-2000px"}} 
            animate={isSkillRefInView ? {x:0} : {}} 
            transition={{delay: 0.2}} 
            >
                <h1 className={styles.biographyTitle}>ABOUT ME</h1>
                <div className={styles.biographyElements}>
                    
                    <p className={styles.biographyText}>
                        I am a recent graduate with a Bachelor of Science in Computer Science from the University of Kansas, and I am passionate about leveraging technology to create 
                        efficient, user-friendly applications. My projects range from a <a className={styles.link} href='https://github.com/DevinRS/Capstone_Project' target="_blank" rel="noopener noreferrer">Machine Learning Web Application</a> that enhances the accessibility of algorithms, to a <a className={styles.link} href='https://github.com/AurHubertMax/WorkoutTracker' target="_blank" rel="noopener noreferrer">Weightlifting Helper Mobile App</a> that aids gym enthusiasts in tracking their progress.
                        <br/><br/>
                        I developed this website to not only showcase my projects and technical skills but to also create a platform where I can connect and collaborate 
                        with others in the field. If you have any questions or are interested in working together, please feel free to <a className={styles.link} href="mailto:ahubertmax@gmail.com">contact me</a>.
                    </p>
                    <Image 
                        className={styles.portrait} 
                        src="/Graduation_photo_cut.jpg" 
                        alt="About Page Portrait" 
                        width={260} 
                        height={450}
                    />
                </div>
            </motion.div>


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
                    <div className={styles.skillsFramework}>Next.js</div>
                    <div className={styles.skillsFramework}>Node.js</div>
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
                            <div className='p-3 text-lg italic'>I enrolled in KU to pursue a Master's in Architectural Design, not realizing how much my interests would change.</div>
                            <div className='p-3 text-sm font-semibold'>2018</div>
                        </motion.div>
                        {/*Center*/}
                        <div className='w-1/6 flex justify-center'>
                            {/*Line*/}
                            <div className='w-1 h-full bg-gray-600 rounded relative' style={{backgroundColor: '#c8a2c8'}}>
                                {/*Node*/}
                                <div className='absolute w-5 h-5 rounded-full ring-4 ring-purple-300 bg-yellow-500 -left-2'></div>
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
                            <div className='w-1 h-full bg-gray-600 rounded relative' style={{backgroundColor: '#c8a2c8'}}>
                                {/*Node*/}
                                <div className='absolute w-5 h-5 rounded-full ring-4 ring-purple-300 bg-yellow-400 -left-2'></div>
                            </div>
                        </div>
                        {/*Right Side*/}
                        <motion.div className='w-1/2 '
                        initial={{x: "3000px"}} 
                        animate={isSkillRefInView ? {x:0} : {}} 
                        transition={{delay: 0.5}} 
                        >
                            <div className={`${styles.timelineList} p-3 font-semibold rounded-b-lg rounded-s-lg`}>First Job as Cashier</div>
                            <div className='p-3 text-lg italic'>I applied for a cashier position at a small market located within the KU dorms, seeking to gain customer service experience and contribute to the campus community.</div>
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
                            <div className='p-3 text-lg italic'>It was during this time that I discovered my passion for creating apps. Though it happened later than expected, I embraced the opportunity to explore this new interest, realizing that it's never too late to pursue what you love.</div>
                            <div className='p-3 text-sm font-semibold'>2020</div>
                        </motion.div>
                        {/*Center*/}
                        <div className='w-1/6 flex justify-center'>
                            {/*Line*/}
                            <div className='w-1 h-full bg-gray-600 rounded relative' style={{backgroundColor: '#c8a2c8'}}>
                                {/*Node*/}
                                <div className='absolute w-5 h-5 rounded-full ring-4 ring-purple-300 bg-yellow-300 -left-2'></div>
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
                            <div className='w-1 h-full bg-gray-600 rounded relative' style={{backgroundColor: '#c8a2c8'}}>
                                {/*Node*/}
                                <div className='absolute w-5 h-5 rounded-full ring-4 ring-purple-300 bg-yellow-200 -left-2'></div>
                            </div>
                        </div>
                        {/*Right Side*/}
                        <motion.div className='w-1/2 '
                        initial={{x: "3000px"}} 
                        animate={isSkillRefInView ? {x:0} : {}} 
                        transition={{delay: 0.5}} 
                        >
                            <div className={`${styles.timelineList} p-3 font-semibold rounded-b-lg rounded-s-lg`}>Joined Lambda Phi Epsilon International Fraternity Inc.</div>
                            <div className='p-3 text-lg italic'>I became a member of Lambda Phi Epsilon and took on several leadership roles to better the organization. In these roles, I focused on strengthening our community, organizing events, and implementing initiatives that promoted growth and engagement among members.</div>
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
                            <div className='p-3 text-lg italic'>I graduated with a B.Sc. in Computer Science, a journey that not only honed my technical skills but also fueled my passion for innovation. Eager to apply my knowledge in real-world settings, I am actively seeking new opportunities that challenge me and allow me to make a meaningful impact.</div>
                            <div className='p-3 text-sm font-semibold'>2024</div>
                        </motion.div>
                        {/*Center*/}
                        <div className='w-1/6 flex justify-center'>
                            {/*Line*/}
                            <div className='w-1 h-full bg-gray-600 rounded relative' style={{backgroundColor: '#c8a2c8'}}>
                                {/*Node*/}
                                <div className='absolute w-5 h-5 rounded-full ring-4 ring-purple-300 bg-yellow-100 -left-2'></div>
                            </div>
                        </div>
                        {/*Right Side*/}
                        <div className='w-1/2 '></div>
                    </div>

                    
                </div>
            </div>

            
        </div>
        <div className={styles.resumeContainer}>
            Get my Resume
            <svg style={{
                width: "50px", 
                height: "50px",
                stroke: "var(--navAboutActive)",
                fill: "#b8b8ff",
                marginTop: "-40px"
            }} viewBox="20 -100 200 200">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.9308339999999999"></g>
                <g id="SVGRepo_iconCarrier">
                    <g>
                        <g>
                            <path style={{fill:"#b8b8ff", transform: "rotate(-45deg)"}} d="M114.588,45.42h28.17L97.338,0l-45.42,45.42h28.516C76.4,98.937,48.529,142.173,12.381,152.686 c5.513,1.605,11.224,2.452,17.071,2.452C73.601,155.139,109.94,107.111,114.588,45.42z"></path>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
        
    </div>
  );
};

export default AboutPage;
