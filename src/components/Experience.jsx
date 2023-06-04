import { textVariant } from "../utils/motion"
import { experiences } from "../constants"
import { SectionWrapper } from "../hoc"
import { motion } from "framer-motion"
import { styles } from "../styles"


const ExperienceCard = ({ experience }) => (

  <div className="first:rounded-tl-2xl last:rounded-bl-2xl border-dashed bg-primary border-primary border-e-tertiary border-8 md:first:rounded-bl-2xl md:last:rounded-br-2xl md:border-primary md:border-t-tertiary md:first:rounded-tl-none md:last:rounded-bl-none lg:first:rounded-bl-2xl lg:last:rounded-br-2xl lg:border-primary lg:border-t-tertiary lg:first:rounded-tl-none lg:last:rounded-bl-none">
    <div className="p-1">
      <h3 className={`${styles.experienceHeadText}`}>
        {experience.title}
      </h3>
      <p className={`${styles.experienceSubText}`}>
        {experience.company_name}
      </p>
    </div>

    <div>
      <ul className='list-disc py-5 ml-5 space-y-3'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-points-${index}`}
            className={`${styles.experienceList}`}
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  </div>
)


const Experience = () => {


  return (
    <>

      <motion.div variants={textVariant()} className="mt-4 md:mt-0 lg:mt-0">
        <h2 className={`${styles.sectionHeadText} xs:text-xl oldXs:text-xl text-primary`}>Work Experience</h2>
      </motion.div>

      <div className='flex flex-col mt-8 md:flex-row lg:flex-row'>
        {experiences.map((experience, index) =>
          <ExperienceCard key={index} experience={experience} />
        )}
      </div>

    </>
  )
}

export default SectionWrapper(Experience, 'work')