import React, { useEffect } from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion'
import Background2 from './Background2'

type Props = {
    setPage: Function
    transition: Object
}

function About({setPage, transition}: Props) {

  return (
    <motion.div 
        className={`h-screen relative text-center w-full z-1 pt-20 overflow-auto pb-20
        bg-white text-[var(--dark-gray)] overflow-x-hidden scrollbar scrollbar-track-white`} >
        <Background2 />
        <div className='flex items-center justify-center mx-6 md:mx-16 my-6' >
            <h1 className='font-extralight uppercase tracking-[15px] text-[22px]'>About</h1>
        </div>
        <div className='flex flex-col justify-center space-y-5 items-center pt-3 
        md:space-y-10 lg:space-y-0 lg:space-x-20 lg:flex-row  md:pt-15 lg:pt-16'>

            <motion.img src={'/headshot.jpeg'} alt='headshot' 
            initial={{ x:-200, opacity:0}}
            whileInView={{x:0, opacity: 1}}
            transition={{duration: 1}}
            viewport={{once: true}}
            className='w-[195px] h-[100%] md:w-auto md:h-[400px] rounded-full md:rounded-xl lg:rounded-md object-cover' 
            />
            <motion.div
                initial={{ x:300, opacity:0}}
                whileInView={{x:0, opacity: 1}}
                transition={{duration: 1}}
                viewport={{once: true}}
                className='flex flex-col items-center w-[85%] md:w-[70%] lg:w-[35%]'
            >
                <p className='w-full text-center md:text-left'>
                    {`Here's the short version: I began my coding journey in 2017, initially developing Excel macros to analyze and 
                    present data in a digestible format. This experience sparked my curiosity and opened my eyes to the vast 
                    possibilities of applying coding skills across various domains, from personal finance and fitness to daily habits 
                    and beyond. This realization led me to delve into web development, particularly front-end development, where I 
                    obtained a certificate from Codecademy.com.
                    What started as a curiosity quickly transformed into enthusiasm, and now I'm fully committed to transitioning from 
                    a hobbyist to a professional in the field. My journey isn't just about meeting obligations; it's about finding 
                    enjoyment in the process. I'm fueled by a relentless desire to learn and explore new avenues, including full-stack 
                    development, UX/UI design, and mobile application development. 
                    
                    I'm eager to connect and discuss how I can contribute to your projects or organization.`}
                </p>
                
                <Link href="#contact">
                <button className='bg-[var(--gold)] border-none rounded-md w-40 h-10 mt-5' >
                        Connect
                </button>
                </Link>
            </motion.div>
            {/* More */}
        </div>
       
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
        >
           
        </motion.div>
    </motion.div>
  )
}

export default About