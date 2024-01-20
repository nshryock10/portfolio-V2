import Image from 'next/image'
import Hero from './Components/Hero'
import Nav from './Components/Nav'
import Nav2 from './Components/Nav2'
import Hero2 from './Components/Hero2'

export default function Home() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-scroll z-0">
      
      {/* Nav */}
      {/*<Nav /> */}
      <Nav2 />

      {/* Hero */}
      {/*<Hero /> */}
      <section className='snap-center'>
        <Hero2 />
      </section>

      {/* About */}
      
      {/* Projects */}
      
      {/* Experience */}

      {/* Contact */}

    </main>
  )
}
