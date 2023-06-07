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

    <div className={`${project.id === 'Project 1' ? 'bg-secondary' : 'bg-primary'} relative flex flex-col gap-10 justify-evenly items-center h-80 w-full ring-4 ring-tertiary ring-offset-8 ring-offset-amber-700 rounded`}>

      <div className='absolute top-2 right-2 flex justify-end'>
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

        <>
          <div onClick={() => window.open(project.source_code_link, '_blank')} className='ring-4 ring-tertiary ring-offset-8 ring-offset-amber-700 rounded'>
            <img src={project.image} alt={project.name} className=' w-4/5 m-auto my-3' />
          </div>

          <p className={`${project.id === 'Project 1' ? 'text-primary' : 'text-secondary'} ${styles.expWorkList} h-1/3 m-2`}>{project.description}</p>
        </>

        :

        <ul className='flex flex-col justify-evenly list-disc px-6 h-80'>
          {infoToDisplay.map((info, index) => <li key={index} className={`${project.id === 'Project 1' ? 'text-primary' : 'text-secondary'} ${styles.expWorkList} text-[0.65rem] text-primary`}>{info}</li>)}
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
    <div className='flex flex-col justify-center items-center'>
      <motion.div variants={textVariant()} className=' my-7 xs:m-16'>
        <h2 className={`${styles.sectionHeadText} text-primary`}>Project.</h2>
      </motion.div>


      <div className='flex flex-col gap-10 bg-secondary'>

        <div className='flex flex-row justify-between'>
          {projects.map((project, index) => (
            <button onClick={() => setActualProject(project)} className={`${styles.expWorkSubText} bg-tertiary text-secondary ring-2 ring-tertiary rounded-sm ring-offset-4 ring-offset-orange-700 p-1`} key={`project-${index}`}>{project.name}</button>
          ))}
        </div>


        <ProjectCard {...actualProject} info={infoToDisplay} />


        <div className='flex flex-row justify-between'>
          <button onClick={() => setInfoToDisplay(requirement)} className={`${styles.expWorkSubText} bg-tertiary text-secondary ring-2 ring-tertiary rounded-sm ring-offset-4 ring-offset-orange-700 p-1`}>Requirement</button>
          <button onClick={() => setInfoToDisplay(challenge)} className={`${styles.expWorkSubText}  bg-tertiary text-secondary ring-2 ring-tertiary rounded-sm ring-offset-4 ring-offset-orange-700 p-1`}> Challenge</button>
          <button onClick={() => setInfoToDisplay(improvement)} className={`${styles.expWorkSubText}  bg-tertiary text-secondary ring-2 ring-tertiary rounded-sm ring-offset-4 ring-offset-orange-700 p-1`}> Improvement</button>
        </div>

      </div>
    </div>
  )
}

export default SectionWrapper(Works, '')