import React, { useEffect } from 'react'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
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
        bg-white text-[var(--dark-gray)]`} >
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
                <p className='w-full text-center md:text-left'
                >Heres the short version: I started coding in 2017 where I was developing excel macros to analyze and display
                data in a digestable way. That was the catalyst. From there I saw all the possibilities where this new skill
                could be applied; personal finance assistance, fitness, daily habits, and so much more. This is where I turned to 
                <span className='text-bold font-bold text-[var(--gold)]'> web development </span>. I dove in head first into 
                <span className='text-bold font-bold text-[var(--gold)]'> front end</span> web development where I got a certificate 
                from Codecademy.com. My curiosity turned into an enthusiasm and now I am focused on going from hobisit to professional.
                <br/> <br/> This isn't simply something I do out of obligation but enjoyment. My desire to learn is being fed by exploration into
                <span className='text-bold font-bold text-[var(--gold)]'> full stack development, UX/UI, and mobile application development.</span> 
                <br/> <br/> I would love to connect about how I help you or your organization. </p>
                <button className='bg-[var(--gold)] border-none rounded-md w-40 h-10 mt-5' >Connect</button>
            </motion.div>
            {/* More */}
        </div>
        <Background2 />
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
        >
           
        </motion.div>
    </motion.div>
  )
}

export default About