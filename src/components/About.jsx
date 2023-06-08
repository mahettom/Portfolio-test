import React, { useEffect, useState, useRef } from 'react'
import { SectionWrapper } from '../hoc'
import { objectifs } from '../constants'
import { motion } from 'framer-motion'
import { styles } from '../styles'


const ServiceCard = ({ index, title, icon }) => {

  return (
    <>
      <div className={`${styles.sectionSubText} flex-none bg-tertiary rounded-tr-3xl rounded-bl-3xl p-2 h-52 w-80 md:h-64 md:w-72`}>
        {/* <img src={icon} alt={title} className='w-16 h-16 object-contain' /> */}
        <h3 className='text-white text-[20px] font-bold'>{title}</h3>
      </div>
    </>
  )
}

const About = () => {

  return (
    <>
      <div className='relative flex flex-col mx-auto h-60 w-10/12 p-2 mt-24 rounded-2xl bg-gray-100 md:mt-10 lg:mt-10'>

        <h2 className={`${styles.sectionHeadText} text-primary m-4 font-bold oldXs:text-xl xs:text-xl sm:text-xl lg:m-7 md:m-7`}>
          My Goals
        </h2>

        <p className='text-primary font-ledger leading-8 text-[16px] mt-4 ml-2 xs:text-[14px] oldXs:text-[14px]'>
          I was trained to become a fullstack developer at Ironhack.
          <br /><br />
          And I would like now:
        </p>

      </div>

      <div className='absolute top-[500px] left-10 flex flex-row gap-4 overflow-x-auto w-full md:top-96 md:left-32 lg:top-96 lg:left-36 '>
        {objectifs.map((objectif, index) => (
          <ServiceCard key={objectif.title} index={index} {...objectif} />
        ))}
      </div>

      {/* SWIPE ANIMATION ———————*/}

      <div className="md:hidden lg:hidden xl:hidden absolute bottom-[-2rem] xs:right-8 sm:right-16 w-full flex justify-center items-center">
        <div className="w-[64px] h-[35px] rounded-3xl border-4 border-gray-300 flex justify-start items-center p-2 ">
          <motion.div
            animate={{
              x: [30, 0, 30]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className='w-3 h-3 rounded-full bg-gray-300'
          />
        </div>

      </div>

    </>

  )
}

export default SectionWrapper(About, 'about')