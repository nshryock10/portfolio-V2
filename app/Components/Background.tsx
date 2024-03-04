import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const Background = (props: Props) => {
  return (
    <div className='absolute top-0 -z-10'>
        <motion.div 
            className='h-screen flex flex-col items-center justify-between mx-auto overflow-hidden z-8 rotate-[45deg]'
            initial={{scaleY: 0,rotate: 0}}
            animate={{ scaleY: 1, rotate: 45 }}
            transition={{ duration: 2 }}
        >
            <div className={`bg-[var(--gold)] py-[1px] p-[1200px] opacity-70`} />
            <div className={`bg-[var(--gold)] py-[1px] p-[1200px] opacity-40`} />
            <div className={`bg-[var(--gold)] py-[1px] p-[1200px] opacity-20`} />
            <div className={`bg-[var(--gold)] py-[1px] p-[1200px] opacity-40`} />
            <div className={`bg-[var(--gold)] py-[1px] p-[1200px] opacity-70`} />
        </motion.div>
    </div>
  )
}

export default Background