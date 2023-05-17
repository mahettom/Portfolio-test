import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { fadeIn, textVariant } from '../utils/motion'
import { projects } from '../constants/index'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { github } from '../assets'


const ProjectCard = ({ name, id, week, description, requirement, challenge, improvement, image, source_code_link, tags }) => {

  const actualProject = { name, id, week, description, requirement, challenge, improvement, image, source_code_link, tags }

  const [toDisplay, setToDisplay] = useState(null)


  return (

    <>
      <div className='relative w-full'>
        <div className='absolute flex justify-end xs:right-2 sm:right-4 md:right-5'>

          <div onClick={() => window.open(source_code_link, '_blank')} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
            <img
              src={github}
              alt='github'
              className='w-1/2 h-1/2 object-contain'
            />
          </div>

        </div>
      </div>


      {/* Think about how to render */}
      {/* Need to be scalable and clean */}



      <div className=''>
        <p className='text-primary font-ledger text-[16px] text-center'>{description}</p>
        <img src={image} alt={name} className='w-1/3 h-full object-cover rounded-2xl m-auto' />
      </div>

      <div className='flex flex-col justify-evenly'>
        {actualProject.forEach((point) => {
          <h1>point</h1>
        })}
      </div>




    </>


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


      <div className='flex flex-row py-36'>

        <div className='flex flex-col justify-evenly'>
          {projects.map((project, index) => (
            <button variants={fadeIn('', '', 0.1, 1)} onClick={() => setActualProject(project)} className='font-ledger text-primary p-5 border-4 rounded-md shadow-inner' key={`project-${index}`}>{project.name}</button>
          ))}
        </div>

        <div className='flex flex-col'>
          <ProjectCard {...actualProject} />
        </div>

      </div>
    </>
  )
}

export default SectionWrapper(Works, '')