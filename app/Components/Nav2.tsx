"use client"

import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion';

type Props = {}

function Nav2({}: Props) {

    const iconWidth = 50;
    const iconDims = {width: `${iconWidth}px`, height: `${iconWidth}px`}


  return (
    <header className='sticky bg-white h-20 top-0 flex z-20 '>
        <div className='flex pt-5 mx-auto items-center'>
            <motion.div 
                initial={{ x:-500, opacity: 0,scale: 0.5 }}
                animate={{ x:0, opacity: 1, scale: 1 }}
                transition={{ duration: 1,delay: 1.5 }}  
            >
                <SocialIcon 
                    url="https://instagram.com/nickshryock10"
                    fgColor='var(--dark-gray)'
                    bgColor='transparent'
                    style={iconDims}
                    rel="noopener noreferrer"
                />
            </motion.div>
            <motion.div
                initial={{ y:-100, opacity: 0, scale: 0.5 }}
                  animate={{ y:0, opacity: 1, scale: 1}}
                  transition={{ duration: 1, delay: 1.5 }}
            >
                <SocialIcon 
                    url="https://www.linkedin.com/in/nickshryock"
                    fgColor='var(--dark-gray)'
                    bgColor='transparent'
                    style={iconDims}
                />
            </motion.div>
            <motion.div
                initial={{ x:500, opacity: 0, scale: 0.5}}
                  animate={{ x:0, opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
            >
                <SocialIcon 
                    network="email"
                    fgColor='var(--dark-gray)'
                    bgColor='transparent'
                    style={iconDims}
                />
            </motion.div>
        </div>
    </header>
  )
}

export default Nav2