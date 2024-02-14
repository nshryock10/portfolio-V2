"use client"

import React from 'react'
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon, UserIcon, 
    CodeBracketIcon, DocumentTextIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion';
import Background from './Background';
import NavSquare from '../NavSquare';

type Props = {
    setPage: Function
}

function Hero2({setPage}: Props) {


  return (
    <div className='h-screen flex items-center justify-center text-center w-full overflow-hidden'>
        <Background/>
        <NavSquare />
        <div 
            className='relative p-0 text-[var(--dark-gray)]'
        >
        <motion.div
            className='text-[70px] font-thin'
            initial={{ opacity:0, scale: 0.5 }}
            whileInView={{opacity:1, scale: 1 }}
            transition={{duration: 1.3, delay: 1.5 }}
            viewport={{once: true}}
        >
            NS
        </motion.div>
            <motion.div
                className='w-[40px] h-[40px]  absolute -top-3 right-20'
                initial={{ x: 48,y: 40, }}
                animate={{ x:0, y:0 }}
                transition={{ duration: 1.5}}
            >
                <ChevronLeftIcon className='rotate-[45deg]  animate-pulse' />
            </motion.div>
            <motion.div
                className='w-[40px] h-[40px] absolute top-20 left-20'
                initial={{ x: -44,y: -40, }}
                animate={{ x: 0, y:0 }}
                transition={{ duration: 1.5 }}
            >
                <ChevronRightIcon className='rotate-[45deg] animate-pulse' />
            </motion.div>
            <motion.div 
                className='absolute -top-[100%] -left-[100%] md:-top-[150%] md:-left-[150%]'
                initial={{opacity: 0, scale:0.5}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 2, delay: 3}}
            >
                <div className='relative text-center w-[300px] h-[300px] md:w-[400px] md:h-[400px]'>
                    <div className='group mx-auto pt-3 md:top-0'>
                        <Link href='#about'>
                            <button onClick={() => setPage('about')} className='bg-none border-none '>
                                <UserIcon className='w-[20px] h-[20px] md:w-[30px] md:h-[30px]' />
                            </button>
                        </Link>
                        <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out'>
                            <motion.p className='uppercase font-thin tracking-[5px] md:tracking-[10px] mt-3'
                            >About
                            </motion.p>
                        </div>
                    </div>
                    <div className='group absolute -right-[18%] md:-right-[20%] top-[50%]'>
                        <Link href="#projects">
                            <button onClick={() => setPage('projects')} className='bg-none border-none ' >
                                <CodeBracketIcon className='w-[20px] h-[20px] md:w-[30px] md:h-[30px]' />
                            </button>
                        </Link>
                        <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out'>
                            <motion.p className='uppercase font-thin tracking-[5px] md:tracking-[10px] mt-3'
                            >Projects
                            </motion.p>
                        </div>
                    </div>
                    <div className='group absolute -left-[21%] md:-left-[22%] top-[50%]'>
                        <Link href='#experience' >
                            <button className='bg-none border-none'>
                                <DocumentTextIcon className='w-[20px] h-[20px] md:w-[30px] md:h-[30px]' />
                            </button>
                        </Link>
                        <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out'>
                            <motion.p className='uppercase font-thin tracking-[5px] md:tracking-[10px] mt-3'
                            >Experience
                            </motion.p>
                        </div>
                    </div>
                    <div className='group absolute left-[32%] -bottom-[12%] md:-bottom-[12%]'>
                        <Link href="#contact">
                            <button className='bg-none border-none '>
                                <EnvelopeIcon className='w-[20px] h-[20px] md:w-[30px] md:h-[30px]' />
                            </button>
                        </Link>
                        <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out'>
                            <motion.p className='uppercase font-thin tracking-[5px] md:tracking-[10px] mt-3'
                            >Contact
                            </motion.p>
                        </div>
                    </div>
                </div>
            </motion.div>
            
        </div> 
    </div>
  )
}

export default Hero2