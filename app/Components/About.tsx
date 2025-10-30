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
        className={`h-screen relative text-center w-full z-1 pt-0 overflow-auto pb-20
        bg-white text-[var(--dark-gray)] overflow-x-hidden scrollbar scrollbar-track-white`} >
        <Background2 />
        <div className='flex sticky top-0 bg-white pt-14 mt-0 items-center justify-center mx-6 md:mx-16 my-6' >
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
                    {`What makes the best leaders in product development? Vision.
                    \n \n
                    By no means am I calling myself the best of the best in leading product development teams, but I have worked with a lot of 
                    greats and the common thread I saw was that they all had a vision for how each team was contributing to the broader objective. 
                    In my years of leading teams that has been the trait I have carried through in how I lead. I have a desire to make big impact and
                    if you lose the vision when you're in the weeds it's easy to lose sight of where you're headed and miss the opportunity for that impact. 
                    \n \n
                    My 8 years of professional experience have all been in product development roles with the goal of launch complex medical devices that 
                    will save and improve the lives of the patients that need help. Medical device development has required me to develop an expertise in learning
                    how to collaborate with others and learn how to accomplish big objectives through a team. With long development cycles and many balls being
                    juggled at the same time I have had to develop roadmaps to breakdown development into bite sized chunks and deliver results on a regular basis.
                    Like all development projects, things change and I've become proficient at maintaining that vision to make sure these changes ultimately 
                    help my teams in achieving that goal. 
                    \n \n
                    While my professional experience has been in medical device development, I have also developed an enthusiasm for learning how to solve everyday
                    problems with software development. I learned front-end development through Codecademy.com and have been able to deploy several projects of growing
                    complexity. Check out some of these projects to see how I am using this technical depth to aid in Product Management. 
                    \n \n                    
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