"use client"

import {useRef, useEffect} from 'react'

const Resume = ({scrollYProgress}) => {

    const pathsRef = useRef(null);

    useEffect(() => {
        pathsRef.current = document.querySelectorAll('path');
        fillSvgPaths(pathsRef.current);
        const unsubscribe = scrollYProgress.onChange(() => fillSvgPaths(pathsRef.current));
        return () => unsubscribe();
    }, []); // Empty dependency array means this effect runs once on mount

    function fillSvgPaths(paths) {
        for (let i = 0; i < paths.length; i++) {
            let path = paths[i];
            let pathLength = path.getTotalLength();
            path.style.strokeDasharray = pathLength;
    
            let drawLength = pathLength * scrollYProgress.get();
    
            path.style.transition = 'stroke-dashoffset 1s, stroke-opacity 1s, fill-opacity 1s';
            path.style.strokeDashoffset = pathLength - drawLength;
            path.style.strokeOpacity = scrollYProgress.get();

            
            // Calculate fill opacity
            let fillOpacity = 0;
            if (scrollYProgress.get() > 0.9) {
                fillOpacity = (scrollYProgress.get() - 0.5) * 2;
            }
            path.style.fillOpacity = fillOpacity;

            path.style.fill = "var(--navAboutShadow)";
        }
    }


    return (
        <div className='h-full w-full'>
            <svg style={{
                width: "500px", 
                height: "500px",
                stroke: "var(--navAboutActive)",
                }} viewBox="-48 -48 576.00 576.00">
            <g id="SVGRepo_iconCarrier">
                <g>
                    <g>
                        <path
                        d="M413.648,74.336L341.664,2.352C340.216,0.896,338.216,0,336,0H104C81.944,0,64,17.944,64,40v344c0,22.056,17.944,40,40,40 h88v56h16v-56h120c4.416,0,8-3.576,8-8v-40c0-14.88,10.216-27.432,24-30.984V416v64h16v-56c22.056,0,40-17.944,40-40V80 C416,77.784,415.104,75.784,413.648,74.336z M344,27.312L388.688,72H344V27.312z M400,384c0,13.232-10.768,24-24,24v-72 c0-4.424-3.584-8-8-8c-26.472,0-48,21.528-48,48v32H104c-13.232,0-24-10.768-24-24V40c0-13.232,10.768-24,24-24h224v64 c0,4.424,3.584,8,8,8h64V384z"></path>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M224,48H112c-4.416,0-8,3.576-8,8v112c0,4.424,3.584,8,8,8h32h48h32c4.416,0,8-3.576,8-8V56C232,51.576,228.416,48,224,48 z M184,160h-32v-16c0-8.824,7.176-16,16-16c8.824,0,16,7.176,16,16V160z M160,104c0-4.416,3.592-8,8-8s8,3.584,8,8s-3.592,8-8,8 S160,108.416,160,104z M216,160h-16v-16c0-10.488-5.136-19.72-12.952-25.56c3.064-4.032,4.952-9,4.952-14.44 c0-13.232-10.768-24-24-24s-24,10.768-24,24c0,5.44,1.888,10.408,4.952,14.44C141.136,124.28,136,133.512,136,144v16h-16V64h96 V160z"></path>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M248 72 h40 v16 h-40 Z"></path>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M248 104 h48 v16 h-48 Z"></path>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M312 104 h40 v16 h-40 Z"></path>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M248 136 h104 v16 h-104 Z"></path>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M144 200 h64 v16 h-64 Z"></path>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M224 200 h48 v16 h-48 Z"></path>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M288 200 h80 v16 h-80 Z"></path>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M112 232 h64 v16 h-64 Z"></path>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M192 232 h128 v16 h-128 Z"></path>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M336 232 h32 v16 h-32 Z"></path>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M112 264 h32 v16 h-32 Z"></path>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M160 264 h96 v16 h-96 Z"></path>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M272 264 h96 v16 h-96 Z"></path>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M112 296 h32 v16 h-32 Z"></path>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M160 296 h96 v16 h-96 Z"></path>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M272 296 h96 v16 h-96 Z"></path>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M112 328 h72 v16 h-72 Z"></path>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M200 328 h112 v16 h-112 Z"></path>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M112 360 h32 v16 h-32 Z"></path>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M160 360 h136 v16 h-136 Z"></path>
                    </g>
                </g>
            </g>
            </svg>
        </div>
    )
}

export default Resume