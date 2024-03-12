import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useScroll } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { projectData } from '../utils/data'
import ProjectBlock from './ProjectBlock'

type Props = {
    setPage: Function
    transition: Object
    parentRef: React.RefObject<HTMLDivElement>;
}

interface Projects {
    img: string;
    title: string;
    description: string;
    skills: string[];
    link: string;
}   

    const navHeightOffSet = 173;
    const mdBlockHeight = 225;
    const mdMargin = 280;
    const mdScreenBreak = 765;
    

function Projects({setPage, transition}: Props){

    const [projects, setProjects] = useState<Projects[]>([])
    const [spacerDivHeight, setSpacerDivHeight] = useState<number>(0)
    const parentRef = useRef<HTMLDivElement>(null);

    let windowH = window.innerHeight;

    useEffect(() => {
        const spacerDivHeight = screen.width > mdScreenBreak ? screen.height - navHeightOffSet - mdBlockHeight - mdMargin : 0;
        setSpacerDivHeight(spacerDivHeight)
        getProjectdData()
        
    }, [])

    const getProjectdData = async () => {
        const data = await projectData();
        setProjects(data)
    }   


  return (
    <motion.div
        {...transition}
        ref={parentRef}
        id="project-container"
        className={`bg-white relative text-center w-full z-1 pt-20 overflow-auto pb-20
        text-[var(--dark-gray)] scrollbar scrollbar-track-white`}
        style={{height: windowH}}
    >
        <div className='flex sticky bg-white z-20 top-0 pt-5 w-full items-center justify-center mt-0 mx-auto md:mx-0 my-6' >
            <h1 className='font-extralight uppercase tracking-[15px] text-[22px]'>Projects</h1>
        </div>
        
        {projects.length > 0 &&
            projects.map((project, index) => {
                return (
                        <ProjectBlock
                            parentRef={parentRef}
                            key={index}
                            img={project.img}
                            title={project.title}
                            description={project.description}
                            skills={project.skills}
                            link={project.link}
                        />
                    )
                })
        }
        <div style={{width: '100%', height: spacerDivHeight}}>{/**spacer div */}</div>
        
    </motion.div>
  )
}

export default Projects