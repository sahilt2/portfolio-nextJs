'use client'
import React from 'react'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/20/solid'
import { SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string
  }

type Props = {}

export default function ContactMe({}: Props) {
    const {
        register,
        handleSubmit,
        // watch,
        // formState: { errors },
      } = useForm<Inputs>();

      const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:thapa.sahil@outlook.com?subject=${formData.subject}&body=${formData.message} (${formData.name}) - ${formData.email}`
      }

    // const onSubmit: SubmitHandler<Inputs> = (formData) => console.log(formData)

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] tect-gray-500 text-2xl'>
            Contact
        </h3>

        <div className='flex flex-col space-y-10 '>
            <h4 className='text-4xl font-semibold text-center'>
                I have got just what you need. {" "}
                <span className='decoration-[#F7AB0A]/50 underline'>Lets Talk</span>
            </h4>

            <div>
                <div className='flex items-center space-x-5'>
                    <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>+358449146698</p>
                </div>
                <div className='flex items-center space-x-5'>
                    <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>Aisatie 8 Helsinki</p>
                </div>
                <div className='flex items-center space-x-5'>
                    <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>thapa.sahil@outlook.com</p>
                </div>
            </div>

            <form 
            onSubmit={handleSubmit(onSubmit)}
            action="" className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                    <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                </div>
                <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
                <textarea {...register('message')} placeholder='Message' className='contactInput'/>
                <button className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
            </form>
        </div>
    </div>
  )
}