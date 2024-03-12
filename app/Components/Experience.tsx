import React, {useEffect, useState} from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { experienceData } from '../utils/data';
import ExperienceCard from './ExperienceCard';
import { motion } from 'framer-motion';
import Background3 from './Background3';

type Props = {}

interface Experience {
    logo: string;
    company: string;
    title: string;
    dates: string;
    experience: string[];
    skills: string[]

}

function Experience({}: Props) {

    const [experience, setExperience] = useState<Experience[]>([])
    const [expIndex, setExpIndex] = useState<number>();
    const [isLoading, setIsLoading] = useState<boolean>();

    let windowH = window.innerHeight;

    useEffect(() => {
        setIsLoading(true)
        getExperienceData();
    }, [])

    const getExperienceData = async () => {
        const expData = await experienceData();
        setExperience(expData);
        setExpIndex(0)
        setIsLoading(false)
    }

    const handleLeftClick = () => {
        const currIndex = expIndex ? expIndex : 0;
        if(currIndex > 0){
            setExpIndex(currIndex - 1)
        }else if(currIndex === 0){
            setExpIndex(experience.length - 1)
        }
    }

    const handleRightClick = () => {
        const currIndex = expIndex ? expIndex : 0;
        if(currIndex < experience.length - 1){
            setExpIndex(currIndex + 1)
        }else if(expIndex === experience.length - 1){
            setExpIndex(0)
        }
    }


  return (
    <div className=' relative overflow-auto text-[var(--dark-gray)] flex flex-col justify-between items-center pt-20
    text-center w-full snap-mandatory scrollbar scrollbar-track-white'
    style={{height: windowH}}>
        
        <div className='fixed top-[35%] -z-10 right-0 w-full overflow-y-hidden'>
            <Background3 />
        </div>
        <div className='flex sticky bg-white z-20 top-0 pt-5 w-full items-center justify-center mt-0 mx-6 md:mx-0 my-6' >
            <h1 className='font-extralight uppercase tracking-[15px] text-[22px]'>Experience</h1>
        </div>
            {expIndex! >=0 &&
                        <ExperienceCard 
                            logo={experience[expIndex!].logo}
                            company={experience[expIndex!].company}
                            title={experience[expIndex!].title}
                            dates={experience[expIndex!].dates}
                            experience={experience[expIndex!].experience}
                            skills={experience[expIndex!].skills}
                        />
            }
            <div className='flex w-full justify-center h-[75px] bg-white sticky bottom-0 space-x-10 py-5'>
                <motion.div className='w-[40px] h-[40px] rounded-full text-center p-1' 
                onClick={handleLeftClick}
                whileHover={{scale: 1.2, x: -10}}>
                    <ArrowLeftIcon />
                </motion.div>
                <motion.div className='w-[40px] h-[40px] rounded-full text-center p-1' 
                onClick={handleRightClick}
                whileHover={{scale: 1.2, x: 10}}>
                    <ArrowRightIcon />
                </motion.div>
            </div>
          
    </div>
  )
}

export default Experience