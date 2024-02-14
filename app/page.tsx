"use client"

import Nav2 from './Components/Nav2'
import Hero2 from './Components/Hero2'
import About from './Components/About'
import Projects from './Components/Projects'
import { useState, useRef, useEffect, use } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slideinFromTop = {
  initial: {y: -1000, opacity: 0},
  animate: {y: 0, opacity: 1},
  exit: {y:-1000, opacity: 0, transition: {duration: 0.5}},
  transition: {duration: 0.5}
}

const slideInFromRight = {
  initial: {x: 1000, opacity: 0},
  animate: {x: 0, opacity: 1},
  exit: {x:1000, opacity: 0, transition: {duration: 0.5}},
  transition: {duration: 0.5}
}

export default function Home() {

  //options home, about, projects, experience, contract
  const [page, setPage] = useState('home')

  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<any>(null);
  const [divBottom, setDivBottom] = useState<number>(0)
/*
  useEffect(() => {
    const parent = parentRef.current;
    const child = childRef.current;

    if(!child || !parent){
      console.log('missing ref', child, parent)
      setDivBottom(0)
    }

    const handleScroll = () => {
      console.log('we scrolling')  
      const currentY = child?.getBoundingClientRect().bottom

      console.log('Div Bottom', currentY)
    }
    console.log('adding that scroll event')
    parent?.addEventListener('scroll', handleScroll)

    return(() => { parent?.removeEventListener('scroll', handleScroll)})

  }, [childRef, parentRef])
*/

  return (

    <main className="h-screen snap-y snap-mandatory relative overflow-scroll z-0">
      
      <Nav2 />

      <section className='snap-center'>
        <Hero2 setPage={setPage}/>
      </section>

      <section id='about' className='snap-center'>
        <About setPage={setPage} transition={slideinFromTop} />
      </section>

      <section id='projects' className='snap-center'>
        <Projects  parentRef={parentRef} setPage={setPage} transition={slideInFromRight} />
      </section>

      
      {/* Projects */}
      
      {/* Experience */}

      {/* Contact */}

    </main>
  )
}
