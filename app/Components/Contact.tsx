import React from 'react'
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form"

type Props = {}

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
  }

const Contact = (props: Props) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto: shryockwebdesign@gmail.com?subject=${formData.subject}
        &body=Hi my name is ${formData.name},\n ${formData.message}`
    }
  return (
    <div className='h-screen bg-white z-20 pt-20 box-border mx-5 flex flex-col items-center text-[var(--dark-gray)]
    space-y-7'>
        <div className='flex sticky bg-white z-20 top-0 pt-5 w-full items-center justify-center mt-0 mx-6 md:mx-0 my-6' >
            <h1 className='font-extralight uppercase tracking-[15px] text-[22px]'>Contact</h1>
        </div>
        <div className='w-full h-40 md:h-56 relative overflow-hidden text-center'>
            <img src={"/contact.jpg"} alt="contact" className='w-full h-auto overflow-hidden object-cover
            absolute md:-top-20' />
            <div className=' absolute top-0 w-full h-full bg-[var(--gold)] opacity-65' />
            <h4 className='text-3xl text-center absolute top-[20%] md:top-[40%] md:left-[32%] text-white '>
                {"Help me help you. Let's get in touch"}
            </h4>
        </div>
        <div className='flex flex-col justify-center items-center text-center mx-auto space-y-10 w-full'>
            
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-full max-w-sm' >
                <div className='flex space-x-2 justify-center'>
                    <input {...register('name')} className='contactInput w-1/2' type="text"
                    placeholder='Name' />
                    <input {...register('email')} className='contactInput w-1/2' type="email" 
                    placeholder='Email'/>
                </div>
                <input {...register('subject')} className='contactInput' type="text" 
                placeholder='Subject'/>

                <textarea {...register('message')} className='contactInput' placeholder='Message' />

                <button className='bg-[var(--gold)] py-3 rounded-sm hover:shadow-md hover:shadow-[var(--gold2)] ' type='submit' >Submit</button>
                
            </form>
        </div>
    </div>
  )
}

export default Contact