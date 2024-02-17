import React, { useState, useEffect, useRef} from 'react'
import { 
    motion, 
    useAnimation,
    useScroll
} from 'framer-motion'
import { handleClientScriptLoad } from 'next/script';

type Props = {
    img: string;
    title: string;
    description: string;
    skills: string[];
    parentRef: React.RefObject<HTMLDivElement> | null;
}

function ProjectBlock({img, title, description, skills, parentRef}: Props) {

    const [position, setPosition] = useState<number>(0)
    const [bottom, setBottom] = useState<number>(0)
    const [elementOpacity, setElementOpacity] = useState<number>(1)

    const divRef = useRef<HTMLDivElement>(null)

    const navHeightOffSet = 173;
    const mdScreenBreak = 765;
    const mdBlockHeight = 225;
    let blockHeight = screen.height - navHeightOffSet;
    if(screen.width < mdScreenBreak){
        blockHeight = screen.height - navHeightOffSet;
    }else{
        blockHeight = 375
    }
    useEffect(() => {

        const handleScroll = () => {
            const bottom = divRef.current?.getBoundingClientRect().bottom
            
            if(divRef.current) console.log(divRef.current.offsetHeight)
            if(divRef.current && bottom){
                const opacityRatio = bottom / (divRef.current?.offsetHeight + navHeightOffSet);
                
                //if bottom  < height --> set to ratio (leaving page)
                //if bottom < height --> set to inverse ratio (entering page)
                if(bottom < divRef.current.offsetHeight){
                    setElementOpacity(opacityRatio)
                }else if(bottom > divRef.current.offsetHeight){
                    //old range 1.8 to 1
                    //new range 0 to 1
                    // y = (x - xmin) / (xmax - xmin) * (ymax - ymin) + ymin
                    // y = ((x - 1.8) / (1 - 1.8)) * (1 - 0) + 0
                    // y= -1.25 * (opacityRatio - 1.8)
                    let op = -1.25 * (opacityRatio - 1.8);
                    setElementOpacity(op) //FIND EQUATION TO ADJUST RANGE FROM 0 TO 1 FROM 0.5 TO 1
                }
            }
        }
        if(parentRef?.current){ 
            parentRef.current.addEventListener('scroll', handleScroll)
        }

        handleScroll()

        return(() => { window.removeEventListener('scroll', handleScroll)})

    }, [parentRef])

    if(blockHeight) { 
    return (
        <motion.div className='md:h-[50%] md:bg-gray-100 md:ml-56 md:my-14 md:flex md:flex-col md:justify-center md:items-center
        md:rounded-l-xl md:border-none md:shadow-lg' 
        style={{height: blockHeight, opacity: elementOpacity}}
            initial={{x: 2, scale: 0.75}}
            whileInView={{x: 1, scale: 1}}
            transition={{duration: 1.5}}
        >
            <motion.div
                style={{opacity: elementOpacity, height: screen.width < mdScreenBreak ? blockHeight : mdBlockHeight}}
                ref={divRef}
                className={`flex flex-col justify-around overflow-hidden items-center mx-5 mb-10 
                md:flex-row md:mb-5`}
            >
                {/** IMG */}
                <img src={img} alt='project image' 
                    className='h-[35%] max-w-[100%] aspect-square rounded-md object-cover
                    md:h-[225px]' 
                    />
                <div className='flex-col md:text-left md:ml-14'>
                    <h2  className='tracking-wide text-[24px] font-bold text-[dark-gray] md:mb-5'>{title}</h2>
                    <p className='text-[18px]'>{description}</p>
                </div>
                    <div className='flex flex-row justify-center items-start flex-wrap md:hidden' >
                        {skills.length > 0 &&
                            skills.map((skill, index) => {
                                return(
                                    <span key={index} className='text-[14px] text-[var(--gold)] bg-[var(--gold2)] mt-3 mx-2 py-2 px-4 rounded-3xl' >{skill}</span>
                                )
                            })
                        }   
                    </div>
                
            </motion.div>
            <div className='flex-row justify-start items-start flex-wrap hidden md:flex md:mx-5'
            style={{opacity: elementOpacity}} >
                {skills.length > 0 &&
                    skills.map((skill, index) => {
                        return(
                            <span key={index} className='text-[14px] text-[var(--gold)] bg-[var(--gold2)] mt-3 mx-2 py-2 px-4 rounded-3xl' >{skill}</span>
                        )
                    })
                }   
            </div>
            
        </motion.div>
        )
    } else{ return(<div>Loading...</div>)}
}

export default ProjectBlock