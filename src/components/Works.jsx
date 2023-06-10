import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants/index'
import { styles } from '../styles'
import { github } from '../assets'


const ProjectCard = (project) => {

  const infoToDisplay = project.info

  return (

    <div className={`${project.id === 'Project 1' ? 'bg-secondary' : 'bg-primary'} relative flex flex-col h-2/3 sm:h-4/5 md:min-h-[453px] md:min-w-[670px] lg:min-h-[507px] lg:min-w-[720px] ring-4 ring-tertiary ring-offset-8 ring-offset-amber-700 rounded`}>

      <div className='absolute top-2 right-2'>
        <div onClick={() => window.open(project.source_code_link, '_blank')} className='bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:cursor-pointer'>
          <img
            src={github}
            alt='github'
            className='w-1/2 h-1/2'
          />
        </div>
      </div>

      {!infoToDisplay ?
        <>
          <div onClick={() => window.open(project.source_code_link, '_blank')} className='ring-4 ring-tertiary ring-offset-8 ring-offset-amber-700 rounded'>
            <img src={project.image} alt={project.name} className=' w-4/5 m-auto my-3' />
          </div>

          <p className={`${project.id === 'Project 1' ? 'text-primary' : 'text-secondary'} ${styles.expWorkList} text-center h-1/3 p-4`}>
            {project.description}
          </p>
          <p className='flex justify-around'>
            {project.tags.map((tag, index) =>
              <span className={`${tag.color} text-lg font-semibold`} key={index + 'tags'}>
                {tag.name}
              </span>
            )}
          </p>
        </>

        :

        <ul className='w-full px-6 my-auto'>
          {infoToDisplay.map((info, index) =>
            <li key={index} className={`${project.id === 'Project 1' ? 'text-primary' : 'text-secondary'} ${styles.expWorkList} text-center py-2 text-[0.65rem] text-primary`}>
              {info}
            </li>)}
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
      <motion.div variants={textVariant()} className='mt-5 oldXs:mb-10 xs:mb-20 sm:mb-5 md:mb-20 lg:mb-10'>
        <h2 className={`${styles.sectionHeadText} text-primary`}>Project.</h2>
      </motion.div>

      <div className='flex flex-col md:flex-row lg:flex-row gap-10 bg-secondary'>
        <div className='flex flex-row justify-between md:flex-col md:justify-evenly'>
          {projects.map((project, index) => (
            <button onClick={() => setActualProject(project)} className={`${styles.expWorkSubText} bg-tertiary text-secondary ring-2 ring-tertiary rounded-sm ring-offset-4 ring-offset-orange-700 p-1`} key={`project-${index}`}>
              {project.name}
            </button>
          ))}
        </div>

        <ProjectCard {...actualProject} info={infoToDisplay} />

        <div className='flex flex-row justify-between md:flex-col md:justify-evenly'>
          <button onClick={() => setInfoToDisplay(requirement)} className={`${styles.expWorkSubText} bg-tertiary text-secondary ring-2 ring-tertiary rounded-sm ring-offset-4 ring-offset-orange-700 p-1`}>Requirement</button>
          <button onClick={() => setInfoToDisplay(challenge)} className={`${styles.expWorkSubText}  bg-tertiary text-secondary ring-2 ring-tertiary rounded-sm ring-offset-4 ring-offset-orange-700 p-1`}> Challenge</button>
          <button onClick={() => setInfoToDisplay(improvement)} className={`${styles.expWorkSubText}  bg-tertiary text-secondary ring-2 ring-tertiary rounded-sm ring-offset-4 ring-offset-orange-700 p-1`}> Improvement</button>
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Works, 'project')