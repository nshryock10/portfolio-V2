"use client"

import Nav2 from './Components/Nav2';
import Hero2 from './Components/Hero2';
import About from './Components/About';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import { useState, useRef} from 'react';
import Link from 'next/link';
import { ChevronUpIcon } from '@heroicons/react/24/outline';

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

  return (

    <main className="h-[100dvh] relative snap-y snap-mandatory overflow-scroll z-0 overflow-y-scroll overflow-x-hidden
    scrollbar scrollbar-track-white scrollbar-thumb-[#ba9b03]">
      
      <Nav2 />

      <section id='hero' className='snap-center'>
        <Hero2 setPage={setPage}/>
      </section>

      <section id='about' className=' snap-center'>
        <About setPage={setPage} transition={slideinFromTop} />
      </section>

      <section id='projects' className='h-[100%] snap-center'>
        <Projects  parentRef={parentRef} setPage={setPage} transition={slideInFromRight} />
      </section>
      
      {/* Experience */}
      <section id='experience' className='h-[100%] snap-center'>
        <Experience  />
      </section>

      <section id='contact' className='h-[100%] snap-center bg-white'>
        <Contact  />
      </section>

      
        <footer className='sticky bottom-20 w-full px-5 cursor-pointer'>
          <div className='flex justify-end'>
            <Link href='#hero'>
              <ChevronUpIcon className='w-10 h-10 bg-gray-200 rounded-full p-1 text-gray-400 hover:bg-[var(--gold)]' />
            </Link>
          </div>
        </footer>
      

    </main>
  )
}
