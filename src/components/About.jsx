import React, { useEffect, useState, useRef } from 'react'
// import Tilt from 'react-parallax-tilt'
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { objectifs } from '../constants'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'


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

    <div className='flex justify-start items-start h-[100dvh] w-[100dvw]'>

      <div className='relative flex flex-col justify-center bg-gray-100 text-center w-10/12 h-96 rounded-2xl xs:justify-start xs:h-52 xs:mt-20 oldXs:justify-start oldXs:h-52 oldXs:mt-14'>

        <h2 className={`${styles.sectionHeadText} text-primary font-bold m-2 oldXs:text-xl xs:text-xl lg:m-5 md:m-5`}> Objectif </h2>

        <p className='text-primary font-ledger leading-8 text-[16px] mt-4 xs:text-[14px] oldXs:text-[14px]'>
          J'ai été formé pour devenir un developpeur fullstack à Ironhack.
          <br /><br />
          Et je voudrais maintenant:
        </p>

      </div>

      <div className='absolute top-96 flex flex-row gap-4 overflow-x-auto w-full xs:top-[25rem] oldXs:top-[22.5rem] '>
        {objectifs.map((objectif, index) => (
          <ServiceCard key={objectif.title} index={index} {...objectif} />
        ))}
      </div>

      <div className="absolute bottom-32 w-full flex justify-center items-center md:hidden lg:hidden xl:hidden">

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

    </div>

  )
}

export default SectionWrapper(About, 'about')