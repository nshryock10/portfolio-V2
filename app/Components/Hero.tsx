"use client"

import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'

type Props = {}

function   Hero({}: Props) {

    const [text1, count1] = useTypewriter({
        words: ['Enthusiastic Developer'],
        loop: true,
        delaySpeed: 4000,
    })

    const [text2, count2] = useTypewriter({
        words: ['Passionate Learner'],
        loop: true,
        delaySpeed: 4000,
    })

    
    const [text3, count3] = useTypewriter({
        words: ['Drinker of Coffee'],
        loop: true,
        delaySpeed: 4000,
    })

  return (
    <div className="relative h-screen" >
        <div className='relative top-52 left-14 text-[17vw] pt-5 text-black z-10'>Nick Shryock
                <h2  className='text-[var(--dark-gray)] font-extralight absolute top-0 text-[6vw]
                animate-text-slide delay-3000'>Enthusiastic Developer</h2 >
                <h2  className='text-[var(--dark-gray)] font-extralight rotate-[-90deg] text-[6vw] text-left 
                absolute top-[48%] left-[-33%] animate-text-slide2 delay-[3s]'>Passionate Learner</h2 >
                <h2 className='text-[var(--dark-gray)] font-extralight rotate-[180deg] absolute top-[95%] 
                text-[6vw] animate-text-slide3'>Drinker of Coffee</h2 >
                <h2 className='text-[var(--drak-gray)] font-extralight absolute top-0 text-[6vw]
                hidden' aria-hidden="true" >Enthusiastic Developer</h2 >
        </div>
        
        <div className='overflow -skew-y-12 z-0 relative top-[-10%]'> 
            <div className='w-full bg-[#ffeb85b9] h-[400px] md:h-[650px] -z-10 absolute top-[0%]' />
            <img src={'/mountains.jpg'} className='w-full  h-[400px] md:h-[650px] -z-20 absolute top-[0%]' />
        </div>
    </div>
  )
}

export default   Hero