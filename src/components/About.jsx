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
    <>
      <div className='  flex items-center h-screen w-screen mt-[-70px] mb-[-70px]'>
        <div className=' relative flex items-center md:justify-start xs:justify-center w-6/12 md:w-10/12 h-96 rounded-2xl bg-gray-100 text-center'>

          <div className=' w-9/12 '>
            <h2 className={`${styles.sectionHeadText} text-primary font-bold text-center`}> Vision </h2>

            <p className='mt-10 text-primary font-ledger text-[16px] xs:text-[14px] leading-8'>
              J'ai été formé pour devenir un developpeur fullstack à Ironhack.
              <br /><br />
              Et je voudrais maintenant:
            </p>
          </div>
        </div>
      </div>

      <div className='absolute overflow-visible top-48 left-80 flex flex-col gap-4 h-96  md:flex-row md:w-full md:top-52 md:left-10 md:overflow-x-auto md:px-56'>

        {objectifs.map((objectif, index) => (
          <ServiceCard key={objectif.title} index={index} {...objectif} />
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')