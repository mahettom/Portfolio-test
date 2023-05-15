import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { fadeIn, textVariant } from '../utils/motion'
import { projects } from '../constants/index'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { github } from '../assets'


const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {


  return (

    <motion.div variants={fadeIn('up', 'spring', index + 1, 0.75)}>

      <div className='relative w-full'>
        <div className='absolute inset-0 flex justify-end m-3 xs:right-2 sm:right-4 md:right-5'>
          <div onClick={() => window.open(source_code_link, '_blank')} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
            <img
              src={github}
              alt='github'
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
        </div>
      </div>

      <div className='mt-5'>
        {/* <h3 className='text-primary font-bold text-[24px]'>{name}</h3> */}
        <p className='mt-2 text-primary text-[14px]'>{description}</p>
        <img src={image} alt={name} className='w-3/5 h-full object-cover rounded-2xl' />
      </div>


      <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            {tag.name}
          </p>
        ))}
      </div>

    </motion.div>

  )
}



const Works = () => {

  const [actualProject, setActualProject] = useState(projects[0])



  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-primary`}>My work</p>
        <h2 className={`${styles.sectionHeadText} text-primary`}>Project.</h2>
      </motion.div>

      <div className='flex flex-row'>
        <div className='flex flex-col justify-evenly bg-black p-2 rounded-l rounded-r xs:mt-10 sm:mt-15'>
          {projects.map((project, index) => (
            <button variants={fadeIn('', '', 0.1, 1)} onClick={() => setActualProject(project)} className='bg-black font-ledger p-4' key={`project-${index}`}>{project.name}</button>
          ))}
        </div>

        <div className='xs:mt-3 md:mt-10 mt-15 flex flex-wrap gap-7'>
          <ProjectCard {...actualProject} />
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Works, '')