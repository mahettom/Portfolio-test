import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { fadeIn, textVariant } from '../utils/motion'
import { projects } from '../constants/index'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { github } from '../assets'




const ProjectCard = (project) => {

  const infoToDisplay = project.info

  return (

    <div className='relative flex flex-col h-80 w-full'>

      <div className='absolute flex justify-end xs:right-2 sm:right-4 md:right-5'>
        <div onClick={() => window.open(project.source_code_link, '_blank')} className='bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:cursor-pointer'>
          <img
            src={github}
            alt='github'
            className='w-1/2 h-1/2 object-contain'
          />
        </div>
      </div>


      {!infoToDisplay

        ?

        <div onClick={() => window.open(project.source_code_link, '_blank')}>
          <img src={project.image} alt={project.name} className='w-1/3 h-full object-cover rounded-2xl m-auto' />
          <p className={`${styles.expWorkList} text-primary`}>{project.description}</p>
        </div>

        :

        <ul className='list-disc px-6 text-primary font-ledger text-[16px]'>
          {infoToDisplay.map((info, index) => <li key={index} className={`${styles.expWorkList} text-[0.65rem] text-primary`}>{info}</li>)}
        </ul >

      }
    </div>
  )
}



const Works = () => {

  const [actualProject, setActualProject] = useState(projects[0])
  const [requirement, setRequirement] = useState(actualProject.requirement)
  const [improvement, setImprovement] = useState(actualProject.improvement)
  const [challenge, setChallenge] = useState(actualProject.challenge)
  const [infoToDisplay, setInfoToDisplay] = useState(null)

  useEffect(() => {

    setInfoToDisplay(null)
    setRequirement(actualProject.requirement)
    setChallenge(actualProject.challenge)
    setImprovement(actualProject.improvement)

  }, [actualProject])


  return (
    <>
      <motion.div variants={textVariant()} className='m-4'>
        <h2 className={`${styles.sectionHeadText} text-primary`}>Project.</h2>
      </motion.div>


      <div className='flex flex-col gap-4'>

        <div className='flex flex-row justify-evenly items-center'>
          {projects.map((project, index) => (
            <button onClick={() => setActualProject(project)} className={`${styles.expWorkSubText} text-primary border-4 shadow-inner border-double p-2`} key={`project-${index}`}>{project.name}</button>
          ))}
        </div>


        <ProjectCard {...actualProject} info={infoToDisplay} />


        <div className='flex flex-row justify-evenly'>
          <button onClick={() => setInfoToDisplay(requirement)} className={`${styles.expWorkSubText} text-primary border-4 shadow-inner border-double p-2`}>Requirement</button>
          <button onClick={() => setInfoToDisplay(challenge)} className={`${styles.expWorkSubText} text-primary border-4 shadow-inner border-double p-2`}> Challenge</button>
          <button onClick={() => setInfoToDisplay(improvement)} className={`${styles.expWorkSubText} text-primary border-4 shadow-inner border-double p-2`}> Improvement</button>
        </div>

      </div>
    </>
  )
}

export default SectionWrapper(Works, '')