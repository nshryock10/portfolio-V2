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
        {...transition}
        className={`h-screen relative text-center w-full z-1 pt-20 overflow-auto pb-20
        bg-gray-600 text-[var(--dark-gray)]`} >
        <div className='flex items-center justify-between mx-6 md:mx-16 my-6' >
            <button className='bg-transparent border-none' onClick={() => setPage('home')}>
                <ArrowLeftIcon className='w-8 h-8' />
            </button>
            <h1 className='font-extralight uppercase tracking-[15px] text-[22px]'>About</h1>
            <div className='w-6 h-8' ></div>
        </div>
        <div className='flex flex-col justify-center space-y-5 items-center pt-3 
        md:space-y-10 lg:space-y-0 lg:space-x-20 lg:flex-row  md:pt-15 lg:pt-16'>

            <img src={'/headshot.jpeg'} alt='headshot' 
            className='w-[125px] h-[100%] md:w-auto md:h-[400px] rounded-full md:rounded-xl lg:rounded-md object-cover' />
            <div className='flex flex-col items-center w-[85%] md:w-[70%] lg:w-[35%]'>
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
            </div>
            {/* More */}
        </div>
        <Background2 />
    </motion.div>
  )
}

export default About