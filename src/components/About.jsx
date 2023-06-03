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

      <div className=' flex-none bg-tertiary rounded-3xl h-52 w-36 md:w-60'>
        {/* <img src={icon} alt={title} className='w-16 h-16 object-contain' /> */}
        <h3 className='text-white text-[20px] font-bold'>{title}</h3>
      </div>

    </>


  )
}


const About = () => {


  return (

    <div className='flex items-start h-[100dvh] w-[100dvw]'>

      <div className='relative flex flex-col justify-center bg-gray-100 text-center w-10/12 h-96 rounded-2xl xs:justify-start xs:h-52 xs:mt-20 oldXs:justify-start oldXs:h-52 oldXs:mt-14'>

        <h2 className={`${styles.sectionHeadText} text-primary font-bold oldXs:hidden`}> Vision </h2>

        <p className='text-primary font-ledger leading-8 text-[16px] mt-10 xs:text-[14px] oldXs:text-[14px]'>
          J'ai été formé pour devenir un developpeur fullstack à Ironhack.
          <br /><br />
          Et je voudrais maintenant:
        </p>

      </div>

      <div className='absolute top-96 flex flex-row gap-4 overflow-x-auto z-20 w-full h-96'>
        {objectifs.map((objectif, index) => (
          <ServiceCard key={objectif.title} index={index} {...objectif} />
        ))}
      </div>

    </div>

  )
}

export default SectionWrapper(About, 'about')