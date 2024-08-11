'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
    initial={{
       opacity: 0,
    }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About
        </h3>
        <motion.img
          initial={{
              x: -200,
              opacity: 0
        }}
        transition={{
            duration: 1.2
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src='/profile.jpg'
        alt='Sahil Thapa'
        width={200}
        height={200}
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95  xl:w-[500px] xl:h-[600px] xl:rounded-xl' 
        />
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span>{" "}background</h4>
            <p className='text-base'>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
        </div>
    </motion.div>
  )
}