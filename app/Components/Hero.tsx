"use client"

import React, { useEffect, useState } from 'react'

type Props = {}

function   Hero({}: Props) {

    useEffect(() => {
        const text1 = document.getElementById('text1');
        const text1P = document.getElementById('text1P');
        const text2 = document.getElementById('text2');
        const text2P = document.getElementById('text2P');
        const text3 = document.getElementById('text3');
        const text3P = document.getElementById('text3P');
        if(text1 && text1P){
            text1P.style.width = text1?.clientWidth + 'px';
            text1P.style.height = text1?.clientHeight + 'px';
        }

        if(text2 && text2P){
            text2P.style.width = text2?.clientWidth + 'px';
            text2P.style.height = text2?.clientHeight + 'px';
        }

        if(text3 && text3P){
            text3P.style.width = text3?.clientWidth + 'px';
            text3P.style.height = text3?.clientHeight + 'px';
        }
    
    }, [])

  return (
    <div className="relative h-screen box-border md:ml-[var(--md-nav-width)] lg:ml-[var(--lg-nav-width)]" >
        <div className='relative top-52 pl-20 pt-5 z-10 md:top-96 md:pl-32'>
            <p className=' text-[60px] text-black md:text-[90px]'>Nick</p>
            <p className=' text-[60px] text-black md:text-[90px]'>Shryock</p>
            <div id="text1P" className={`z-20 absolute top-0 overflow-hidden`}>
                <h2 id="text1" className='text-[var(--dark-gray)] whitespace-nowrap font-extralight p-0 m-0 absolute 
                top-0 text-[24px] animate-text-slide
                md:text-[36px]'>Enthusiastic Developer</h2 >
            </div>
            <div id="text2P" className={`z-20 absolute top-[48%] left-[-45px] overflow-hidden rotate-[-90deg]
            md:left-[-65px]`} >
                <h2 id="text2" className='text-[var(--dark-gray)] whitespace-nowrap font-extralight 
                text-[24px] text-left animate-text-slide2
                md:text-[36px]'>Passionate Learner</h2 >
            </div>
            <div id="text3P" className={`z-20  absolute top-[95%] whitespace-nowrap  overflow-hidden`}>
                <h2 id="text3" className='text-[var(--dark-gray)] font-extralight rotate-[180deg] text-[24px] 
                animate-text-slide3
                md:text-[36px]'>Drinker of Coffee</h2 >
            </div>    
        </div>
        
        <div className='overflow -skew-y-12 z-0 relative -top-20 
        md:-top-30'> 
            <div className='w-full bg-[#ffeb85b9] h-[400px] -z-10 absolute top-[0%]
            md:h-[650px] lg:h-[750px]' />
            <img src={'/mountains.jpg'} className='w-full object-cover h-[400px] md:h-[650px] lg:h-[750px] -z-20 absolute top-[0%]' />
        </div>
    </div>
  )
}

export default   Hero