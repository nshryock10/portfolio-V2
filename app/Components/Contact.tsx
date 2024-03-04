import React from 'react'
import { EnvelopeIcon } from '@heroicons/react/24/solid'

type Props = {}

const Contact = (props: Props) => {
  return (
    <div className='h-screen bg-white z-20 pt-20 box-border mx-5 flex flex-col items-center text-[var(--dark-gray)]'>
        <div className='flex sticky bg-white z-20 top-0 pt-5 w-full items-center justify-center mt-0 mx-6 md:mx-0 my-6' >
            <h1 className='font-extralight uppercase tracking-[15px] text-[22px]'>Contact</h1>
        </div>
        <div className='flex flex-col justify-center items-center text-center mx-auto space-y-10 w-full'>
            <h4 className='text-3xl text-center '>
                Help me help you. Let's get in touch
            </h4>
            <div className='flex justify-center space-x-5' >
                <EnvelopeIcon className='w-7 h-7 text-[var(--gold)]' />
                <p className='text-xl font-extralight' >shryockwebdesign@gmail.com</p>
            </div>
            <form className='flex flex-col space-y-2 w-full max-w-sm' >
                <div className='flex space-x-2 justify-center'>
                    <input className='contactInput w-1/2' type="text"
                    placeholder='Name' />
                    <input className='contactInput w-1/2' type="email" 
                    placeholder='Email'/>
                </div>
                <input className='contactInput' type="text" 
                placeholder='Subject'/>

                <textarea className='contactInput' placeholder='Message' />

                <button className='bg-[var(--gold)] py-3 rounded-sm' type='submit' >Submit</button>
                
            </form>
        </div>
    </div>
  )
}

export default Contact