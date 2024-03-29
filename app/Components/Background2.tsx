import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const Background2 = (props: Props) => {
  return (
    <div className='sticky w-full top-0'>
            <div className={`bg-gradient-to-l from-[var(--gold)] to-transparent py-[1px] px-[400px] opacity-70
            absolute -top-0 right-0 origin-top-right  -rotate-[45deg]
            md:-left-[0%] lg:left-[35%]`} />
            <div className={`bg-gradient-to-l from-[var(--gold)] to-transparent py-[1px] px-[400px] opacity-70
            absolute top-0 right-0 origin-top-right  -rotate-[65deg]
            md:-left-[0%] lg:left-[35%]`} />
            <div className={`bg-gradient-to-l from-[var(--gold)] to-transparent py-[1px] px-[300px] opacity-70
            absolute top-0 -left-[90%] origin-top-right -rotate-[105deg]
            md:left-[10%] lg:left-[44%]`} />
    </div>
  )
}

export default Background2