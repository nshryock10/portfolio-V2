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
    <div className="relative" >
        
        <div className='relative top-52 left-14 text-[17vw] pt-5'>Nick Shryock
            <ul>
                <li className='text-[var(--dark-gray)] font-extralight absolute top-0 text-[6vw]
                animate-text-slide'>Enthusiastic Developer</li>
                <li className='text-[var(--dark-gray)] font-extralight rotate-[-90deg] text-[6vw] text-left 
                absolute top-[48%] left-[-33%]'>Passionate Learner</li>
                <li className='text-[var(--dark-gray)] font-extralight rotate-[180deg] absolute top-[95%] 
                text-[6vw]'>Drinker of Coffee</li>
                <li className='text-[var(--drak-gray)] font-extralight absolute top-0 text-[6vw]
                hidden' aria-hidden="true" >Enthusiastic Developer</li>    
            </ul>      
        </div>
        
        
    </div>
  )
}

export default   Hero