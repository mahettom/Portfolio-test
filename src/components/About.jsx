import React from 'react'
import Tilt from 'react-parallax-tilt'
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { services } from '../constants'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'


const ServiceCard = ({ index, title, icon }) => {
  return (

    <Tilt className='xs:w-[260px] w-full'>

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

    </Tilt>
  )
}


const About = () => {


  return (

    <>

      {/* <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn('', '', 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        J'ai été formé pour devenir un developpeur fullstack à Ironhack.
      </motion.p>

      <motion.p variants={fadeIn('', '', 0.1, 1)} className='mt-2 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Et je voudrais maintenant:
      </motion.p> */}

      <div className='flex gap-[4vmin] absolute left-1/2 top-1/2 -translate-y-[50%]'>
        <img className='w-[40vmin] h-[56vmin] object-cover object-center' src="https://images.unsplash.com/photo-1608346128025-1896b97a6fa7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Picture-1" />
        <img className='w-[40vmin] h-[56vmin] object-cover object-center' src="https://images.unsplash.com/photo-1618336753974-aae8e04506aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Picture-2" />
        <img className='w-[40vmin] h-[56vmin] object-cover object-center' src="https://images.unsplash.com/photo-1682578566205-1dc0d51d978c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80" alt="Picture-3" />
        <img className='w-[40vmin] h-[56vmin] object-cover object-center' src="https://images.unsplash.com/photo-1680504960958-f87a8cdb767a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80" alt="Picture-4" />
        <img className='w-[40vmin] h-[56vmin] object-cover object-center' src="https://images.unsplash.com/photo-1598040795256-03d22d952f4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Picture-5" />
      </div>

    </>


    //   <div className='mt-40 flex flex-wrap gap-10'>
    //     {services.map((service, index) => (
    //       <ServiceCard key={service.title} index={index} {...service} />
    //     ))}
    //   </div>
    // </>
  )
}

export default SectionWrapper(About, 'about')