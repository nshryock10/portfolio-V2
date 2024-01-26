"use client"

import Nav2 from './Components/Nav2'
import Hero2 from './Components/Hero2'
import About from './Components/About'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slideinFromTop = {
  initial: {y: -1000, opacity: 0},
  animate: {y: 0, opacity: 1},
  exit: {y:-1000, opacity: 0, transition: {duration: 0.5}},
  transition: {duration: 0.5}
}

export default function Home() {

  //options home, about, projects, experience, contract
  const [page, setPage] = useState('home')

  return (

    <main className="h-screen snap-y snap-mandatory relative overflow-scroll z-0">
      
      <Nav2 />

      <section className='snap-center'>
        <Hero2 setPage={setPage}/>
      </section>

      <section className={`snap-center`}>
        <AnimatePresence>
          {page && 
            <motion.div key={page} className='absolte' >
              {page === 'about' && <About setPage={setPage} transition={slideinFromTop} />}
            </motion.div>
          }
        </AnimatePresence>
      </section>
      
      {/* Projects */}
      
      {/* Experience */}

      {/* Contact */}

    </main>
  )
}
