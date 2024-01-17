"use client";

import React, { useState } from 'react'
import { UserIcon, CodeBracketIcon, DocumentTextIcon, 
    EnvelopeIcon, HomeIcon } from '@heroicons/react/24/outline'
import Home from '../page';


type Props = {}

export default function 
({}: Props) {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <div  className='absolute z-50 top-0 '>
        <button onClick={() => setIsOpen(!isOpen)} className='h-[20px] flex flex-col justify-around absolute z-10 top-10 left-10
        md:hidden' > 
            <div className={`px-[17px] py-[1.5px] rounded-md bg-black rotate-0 transition-transform
             ${isOpen ? "rotate-[45deg]" : "rotate-0"}`} />
            <div className={`px-[12px] py-[1.5px] rounded-md bg-black rotate-0 transition-transform origin-[3.7px_-2.5px]
             ${isOpen ? "rotate-[-45deg]" : "rotate-0"} ${isOpen ? "px-[17px]" : "px-[12px]"}`}  />
        </button>
        <div className={`flex flex-col relative justify-start h-screen p-11 bg-[rgb(var(--background-end-rgb))] 
        w-[90%] border-[var(--gold)] border-r-2 transition-all duration-500 ${!isOpen ? "left-[-765px]" : "left-0"} 
        md:left-0  md:w-[150px] lg:w-[400px] md:justify-around`}>
            <img src={'/headshot.jpeg'} alt="headshot" className='w-[250px] h-[250px] object-cover rounded-full
            mx-auto hidden lg:block'/>
            <div className='flex items-center space-x-2 pt-20 md:pt-0 translate-x-0 hover:translate-x-5 hover:text(var(--gold)) duration-500'>
                <HomeIcon className='w-15 h-15 pr-5 text-[var(--dark-gray)] hidden md:block lg:w-11 lg:h-11'/>
                <p className='text-[var(--dark-gray)] text-center text-2xl font-extralight uppercase 
                tracking-[10px] block md:hidden lg:block'>Home</p>
            </div>
            <div className='flex items-center space-x-2 pt-10 md:pt-0 translate-x-0 hover:translate-x-5 hover:text(var(--gold)) duration-500'>
                <UserIcon className='w-15 h-15 pr-5 text-[var(--dark-gray)] hidden md:block lg:w-11 lg:h-11'/>
                <p className='text-[var(--dark-gray)] text-center text-2xl font-extralight uppercase 
                tracking-[10px] block md:hidden lg:block'>About</p>
            </div>
            <div className='flex items-center space-x-2 pt-10 md:pt-0 translate-x-0 hover:translate-x-5 duration-500'>
                <CodeBracketIcon className='w-15 h-15 pr-5 text-[var(--dark-gray)] hidden md:block lg:w-11 lg:h-11'/>
                <p className='text-[var(--dark-gray)] text-center text-2xl font-extralight uppercase 
                tracking-[10px] block md:hidden lg:block'>Projects</p>
            </div>
            <div className='flex items-center space-x-2 pt-10 md:pt-0 translate-x-0 hover:translate-x-5 duration-500'>
                <DocumentTextIcon className='w-15 h-15 pr-5 text-[var(--dark-gray)] hidden md:block lg:w-11 lg:h-11'/>
                <p className='text-[var(--dark-gray)] text-center text-2xl font-extralight uppercase 
                tracking-[10px] block md:hidden lg:block'>Experience</p>
            </div>
            <div className='flex items-center space-x-2 pt-10 md:pt-0 translate-x-0 hover:translate-x-5 duration-500'>
                <EnvelopeIcon className='w-15 h-15 pr-5 text-[var(--dark-gray)] hidden md:block lg:w-11 lg:h-11'/>
                <p className='text-[var(--dark-gray)] text-center text-2xl font-extralight uppercase 
                tracking-[10px] block md:hidden lg:block'>Contact</p>
            </div>
        </div>
    </div>
  )
}