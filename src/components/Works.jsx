import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { fadeIn, textVariant } from '../utils/motion'
import { projects } from '../constants/index'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { github } from '../assets'




const ProjectCard = (project) => {

  const infoToDisplay = project.info

  console.log(infoToDisplay)

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

      {!infoToDisplay

        ?

        <div>
          <p className='text-primary font-ledger text-[16px] text-center'>{project.description}</p>
          <img src={project.image} alt={project.name} className='w-1/3 h-full object-cover rounded-2xl m-auto' />
        </div>

        :

        <ul className='text-primary font-ledger text-[16px]'>
          {infoToDisplay.map((info, index) => <li key={index} className='text-primary font-ledger text-[16px]'>{info}</li>)}
        </ul >

      }
    </>
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
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-primary`}>My work</p>
        <h2 className={`${styles.sectionHeadText} text-primary`}>Project.</h2>
      </motion.div>


      <div className='flex flex-row py-36'>

        <div className='flex flex-col justify-evenly items-center'>
          {projects.map((project, index) => (
            <button onClick={() => setActualProject(project)} className='font-ledger text-primary w-56 p-5 border-4 rounded-md shadow-inner' key={`project-${index}`}>{project.name}</button>
          ))}
        </div>

        <div className='flex flex-col'>
          <ProjectCard {...actualProject} info={infoToDisplay} />
        </div>

        <div className='flex flex-col justify-evenly'>
          <button onClick={() => setInfoToDisplay(requirement)} className='font-ledger text-primary p-5 border-4 rounded-md shadow-inner'>Requirement</button>
          <button onClick={() => setInfoToDisplay(challenge)} className='font-ledger text-primary p-5 border-4 rounded-md shadow-inner'>Challenge</button>
          <button onClick={() => setInfoToDisplay(improvement)} className='font-ledger text-primary p-5 border-4 rounded-md shadow-inner'>Improvement</button>
        </div>

      </div>
    </>
  )
}

export default SectionWrapper(Works, '')