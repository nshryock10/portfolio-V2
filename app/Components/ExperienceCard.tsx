import React from 'react'

type Props = {
    logo: string;
    company: string;
    title: string;
    dates: string;
    experience: string[];
    skills: string[];
}

function ExperienceCard({logo, company, title, dates, experience, skills}: Props) {
  return (
    <div className='flex flex-col mt-10 space-y-7 justify-center items-center w-[90%] text-center bg-gray-50 p-5 shadow-lg 
    shadow-slate-300 mb-4 md:w-[70%]'>
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
    </div>
  )
}

export default ExperienceCard