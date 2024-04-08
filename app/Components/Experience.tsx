import React, {useEffect, useState} from 'react'
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
    const [isLoading, setIsLoading] = useState<boolean>();
    

    useEffect(() => {
        setIsLoading(true)
        getExperienceData();
    }, [])

    //Move arrows and index state to experience card

    const getExperienceData = async () => {
        const expData = await experienceData();
        setExperience(expData);
        //setExpIndex(0)
        setIsLoading(false)
    }

    


  return (
    <div className='h-[100dvh] relative overflow-auto text-[var(--dark-gray)] flex flex-col justify-between items-center pt-0
    text-center w-full snap-mandatory scrollbar scrollbar-track-white'>
        
        <div className='fixed top-[35%] -z-10 right-0 w-full overflow-y-hidden'>
            <Background3 />
        </div>
        <div className='flex sticky bg-white z-20 top-0 pt-14 w-full items-center justify-center mt-0 mx-6 md:mx-0 my-6' >
            <h1 className='font-extralight uppercase tracking-[15px] text-[22px]'>Experience</h1>
        </div>
        {experience.length! >0 &&
            <ExperienceCard 
                experiences ={experience}
            />
        }
    </div>
  )
}

export default Experience