import React, { useEffect, useState, useRef } from 'react'
// import Tilt from 'react-parallax-tilt'
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { objectifs } from '../constants'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'


const ServiceCard = ({ index, title, icon }) => {
  return (

    // <Tilt className='xs:w-[260px] w-full'>

    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>

      <div
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        option={{
          max: 45,
          scale: 1,
          speed: 450
        }}
      >
        <img src={icon} alt={title} className='w-16 h-16 object-contain' />
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
      </div>

    </motion.div>

    // {/* </Tilt> */}
  )
}


const About = () => {


  return (

    <>



      <div className='bg-gray-100 flex items-center gap-10 h-80 rounded-2xl mt-36 xs:mt-30'>

        <div variants={textVariant()} className='flex flex-col w-8/12 items-center p-36'>

          <h2 className={`${styles.sectionHeadText} text-primary font-bold ml-[-100px]`}> Vision </h2>

          <p className='mt-10 text-primary font-ledger text-[16px] leading-8'>
            J'ai été formé pour devenir un developpeur fullstack à Ironhack.
            <br /><br />
            Et je voudrais maintenant:
          </p>


        </div>






        {/* {objectifs.map((objectif, index) => (
          <ServiceCard key={objectif.title} index={index} {...objectif} />
        ))} */}


      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')