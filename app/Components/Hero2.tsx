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

    /*
        <div className='relative p-0 text-[var(--dark-gray)]'>
            <motion.div 
                className='text-[var(--dark-gray)] absolute w-[500px] mx-auto top-[30%] left-[10%] '
                initial={{opacity: 0, scale:0.5}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 2, delay: 3}}
            >
                <div className='relative text-center w-[325px] h-[325px] md:w-[400px] md:h-[400px]'>
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

    */


  return (
    <div className='h-[100dvh] flex flex-col items-center justify-center text-center w-full overflow-hidden bg-white -z-8'>
      <Background />
       {/* <NavSquare /> */}
        <div 
            className='relative p-0 text-[var(--dark-gray)] w-[375px] h-[100px]'
        >
            <motion.div
                className='text-[70px] font-thin mx-auto w-full'
                initial={{ opacity:0, scale: 0.5 }}
                whileInView={{opacity:1, scale: 1 }}
                transition={{duration: 1.3, delay: 1.5 }}
                viewport={{once: true}}
            >
                NS
            
            </motion.div>
            <motion.div
                className='w-[40px] h-[40px] absolute top-[73%] right-[58%]'
                initial={{ x: 52,y: -36, }}
                animate={{ x:0, y:0 }}
                transition={{ duration: 1.5}}
            >
                <ChevronLeftIcon className='-rotate-[45deg]  animate-pulse' />
            </motion.div>
            <motion.div
                className='w-[40px] h-[40px] absolute bottom-[70%] left-[57.5%]'
                initial={{ x: -36,y: 36, }}
                animate={{ x:0, y:0 }}
                transition={{ duration: 1.5 }}
            >
                <ChevronRightIcon className='-rotate-[45deg] animate-pulse' />
            </motion.div>
        </div>
        <div className='relative p-0 text-[var(--dark-gray)]'>
            <motion.div className='pt-8'
                initial={{ opacity:0, scale: 1 }}
                whileInView={{opacity:1, scale: 1 }}
                transition={{duration: 1.8, delay: 1.5 }}
                viewport={{once: true}}
            >
                <p className='text-lg uppercase font-light w-[75%] mx-auto md:w-full' >
                    Software Developer and Product Enthusiast
                </p>
            </motion.div>
        </div>
        <motion.div 
            className='text-[var(--dark-gray)] flex flex-row justify-between items-center w-[90%] px-5 pt-10 top-[30%] 
            left-[10%] z-20 md:pt-20 md:w-[40%]'
            initial={{opacity: 0, scale:0.5}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 2, delay: 3}}
        >
                <div className='group w-[20%] md:w-[40%]'>
                    <Link href='#about'>
                        <button onClick={() => setPage('about')} className='bg-none border-none p-4 shadow-md shadow-slate-300 md:shadow-transparent rounded-md'>
                            <UserIcon className='w-[20px] h-[20px] md:w-[30px] md:h-[30px]' />
                        </button>
                    </Link>
                    <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out'>
                        <motion.p className='uppercase font-thin tracking-[5px] md:tracking-[10px] mt-3'
                        >About
                        </motion.p>
                    </div>
                </div>
                <div className='group w-[20%] md:w-[40%]'>
                    <Link href="#projects">
                        <button onClick={() => setPage('projects')} className='bg-none border-none p-4 shadow-md shadow-slate-300 md:shadow-transparent rounded-md' >
                            <CodeBracketIcon className='w-[20px] h-[20px] md:w-[30px] md:h-[30px]' />
                        </button>
                    </Link>
                    <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out'>
                        <motion.p className='uppercase font-thin tracking-[5px] md:tracking-[10px] mt-3'>
                            Projects
                        </motion.p>
                    </div>
                </div>
                <div className='group w-[20%] md:w-[40%]'>
                    <Link href='#experience' >
                        <button className='bg-none border-none p-4 shadow-md shadow-slate-300 md:shadow-transparent rounded-md'>
                            <DocumentTextIcon className='w-[20px] h-[20px] md:w-[30px] md:h-[30px]' />
                        </button>
                    </Link>
                    <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out '>
                        <motion.p className='uppercase font-thin tracking-[5px] md:tracking-[10px] mt-3'
                        >Experience
                        </motion.p>
                    </div>
                </div>
                <div className='group w-[20%] md:w-[40%]'>
                    <Link href="#contact">
                        <button className='bg-none border-none p-4 shadow-md shadow-slate-300 md:shadow-transparent rounded-md'>
                            <EnvelopeIcon className='w-[20px] h-[20px] md:w-[30px] md:h-[30px]' />
                        </button>
                    </Link>
                    <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out'>
                        <motion.p className='uppercase font-thin tracking-[5px] md:tracking-[10px] mt-3'
                        >Contact
                        </motion.p>
                    </div>
                </div>
            
        </motion.div>
    </div>
  )
}

export default Hero2