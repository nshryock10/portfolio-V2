import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { AnyNaptrRecord } from 'dns';
import { title } from 'process';

interface experienceObject{
    logo: string;
    company: string;
    title: string;
    dates: string;
    experience: string[];
    skills: string[]
}

type Props = {
    /*
    logo: string;
    company: string;
    title: string;
    dates: string;
    experience: string[];
    skills: string[];
    */
   experiences: experienceObject[]
}

function ExperienceCard({experiences /*logo, company, title, dates, experience, skills*/}: Props) {
    const [direction, setDirection] = useState<string>('right');
    const [expIndex, setExpIndex] = useState<number>();
    const [logo, setLogo] = useState<string>()
    const [company, setCompany] = useState<string>()
    const [title, setTitle] = useState<string>()
    const [dates, setDates] = useState<string>()
    const [experience, setExperience] = useState<string[]>([])
    const [skills, setSkills] = useState<string[]>([])

    useEffect(() => {
        setExpIndex(0)
        setLogo(experiences[0].logo)
        setCompany(experiences[0].company)
        setTitle(experiences[0].title)
        setDates(experiences[0].dates)
        setExperience(experiences[0].experience)
        setSkills(experiences[0].skills)
    }, [])

    useEffect(() => {
        if(experiences.length >= 0 && expIndex! >= 0 ){
            setLogo(experiences[expIndex!].logo)
            setCompany(experiences[expIndex!].company)
            setTitle(experiences[expIndex!].title)
            setDates(experiences[expIndex!].dates)
            setExperience(experiences[expIndex!].experience)
            setSkills(experiences[expIndex!].skills)
        }
    }, [expIndex])

    const slideVariants = {
        hiddenRight: {
            x: '100%',
            opacity: 1
        },
        hiddenLeft: {
            x: '-100%',
            opacity: 1
        },
        visible:{
            x: 0,
            opacity: 1,
            transition: {
                duration: .75
            }
        },
        exit: {
            opacity: 1,
            scale: 1,
            transtion: {
                duration: 0.25
            }
        }
    }

    const handleLeftClick = () => {
        setDirection('left')
        const currIndex = expIndex ? expIndex : 0;
        if(currIndex > 0){
            setExpIndex(currIndex - 1)
        }else if(currIndex === 0){
            setExpIndex(experiences.length - 1)
        }
    }

    const handleRightClick = () => {
        setDirection('right')
        const currIndex = expIndex ? expIndex : 0;
        if(currIndex < experience.length - 1){
            setExpIndex(currIndex + 1)
        }else if(expIndex === experiences.length - 1){
            setExpIndex(0)
        }
    }
    
  return (
    <div className='flex w-[100%] flex-col items-center justify-center'>
        {skills &&
        <AnimatePresence>
            <motion.div 
                className='flex flex-col mt-10 space-y-7 justify-center items-center w-[90%] text-center bg-gray-50 p-5 
                shadow-lg shadow-slate-300 mb-4 md:w-[70%]'
                key={expIndex}
                variants={slideVariants}
                initial={direction === 'right' ? 'hiddenRight' : 'hiddenLeft'}
                animate="visible"
                exit="exit"
            >
                    <img 
                        className='w-28 h-28 mx-auto aspect-square rounded-full'
                        src={logo} alt={company} 
                    />
                <div className='flex flex-col justify-between mx-5 items-center uppercase'>
                    <h2 className=' text-xl' >{title}</h2>
                    <h4 className='font-bold' >{company}</h4>
                </div>
                <h4>{dates}</h4>
                
                <div className='flex justify-center md:w-[90%] md:px-5' >
                    <ul className='list-disc mx-auto'>
                    {
                        experience &&
                        experience.map((bullet, index) => {
                            return (
                                <li className='text-left' key={index} >{bullet}</li>
                            )
                        })
                    }
                    </ul>
                </div>
                {skills.length > 0 &&
                    <div className='flex flex-wrap md:flex md:flex-row md:justify-start md:items-start md:w-[90%]' >
                        {skills.map((skill, index) => {
                            return(
                                <span key={index} className='text-[14px] text-[var(--gold)] bg-[var(--gold2)] mt-3 mx-1 
                                py-2 px-4 rounded-3xl' >{skill}</span>
                            )
                        })}
                </div>
                }
            </motion.div>
            </AnimatePresence>
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

export default ExperienceCard