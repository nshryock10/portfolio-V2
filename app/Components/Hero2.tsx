"use client"

import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion';
import Background from './Background';

type Props = {}

function Hero2({}: Props) {
  return (
    <div className='h-screen flex items-center justify-center text-center w-full overflow-hidden'>
        <Background/>
        <div 
            className='relative p-0 text-[var(--dark-gray)]'
        >
        <motion.div
            className='text-[70px] font-thin'
            initial={{
                opacity:0,
                scale: 0.5
            }}
            animate={{
                opacity:1,
                scale: 1
            }}
            transition={{
                duration: 1.3,
                delay: 1.5
            }}
        >
            NS
        </motion.div>
            <motion.div
                className='w-[40px] h-[40px]  absolute -top-3 right-20'
                initial={{
                    x: 48,
                    y: 40,
                }}
                animate={{
                    x:0,
                    y:0
                }}
                transition={{
                    duration: 1.5
                }}
            >
                <ChevronLeftIcon className='rotate-[45deg]  animate-pulse' />
            </motion.div>
            <motion.div
                className='w-[40px] h-[40px] absolute top-20 left-20'
                initial={{
                    x: -44,
                    y: -40,
                    
                }}
                animate={{
                    x: 0,
                    y:0
                }}
                transition={{
                    duration: 1.5
                }}
            >
                <ChevronRightIcon className=' rotate-[45deg] animate-pulse' />
            </motion.div>
        </div> 
    </div>
  )
}

export default Hero2