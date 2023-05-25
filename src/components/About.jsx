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

      <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        {/* <img src={icon} alt={title} className='w-16 h-16 object-contain' /> */}
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
      </div>

    </>


  )
}


const About = () => {


  return (


    <div className='  overflow-y-scroll flex items-center justify-end gap-10 rounded-2xl h-80 my-36 xs:my-30 bg-gray-100'>

      <div className=' flex flex-col w-7/12 items-center pl-4'>
        <h2 className={`${styles.sectionHeadText} text-primary font-bold ml-[-100px]`}> Vision </h2>

        <p className='mt-10 text-primary font-ledger text-[16px] leading-8'>
          J'ai été formé pour devenir un developpeur fullstack à Ironhack.
          <br /><br />
          Et je voudrais maintenant:
        </p>
      </div>


      <div className=' flex flex-col items-center gap-7 h-full w-full'>

        {objectifs.map((objectif, index) => (
          <ServiceCard key={objectif.title} index={index} {...objectif} />
        ))}

      </div>

    </div>

  )
}

export default SectionWrapper(About, 'about')