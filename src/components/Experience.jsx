import { textVariant } from "../utils/motion"
import { experiences } from "../constants"
import { SectionWrapper } from "../hoc"
import { motion } from "framer-motion"
import { styles } from "../styles"


const ExperienceCard = ({ experience }) => (

  <div className="p-10">
    <div className="p-3 border-double border-8 border-primary rounded">
      <h3 className='text-primary font-ledger text-[24px] font-bold'>{experience.title}</h3>
      <p className="text-primary font-ledger text-[16px] font-semibold" style={{ margin: 0 }}>{experience.company_name}</p>
    </div>

    <div className="bg-primary  ">
      <ul className='p-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-points-${index}`}
            className='text-secondary font-ledger text-[14px] pl-1 tracking-wider'
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

      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-primary `}>What i have done so far</p>
        <h2 className={`${styles.sectionHeadText} text-primary`}>Work Experience</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        {experiences.map((experience, index) =>
          <ExperienceCard key={index} experience={experience} />
        )}
      </div>

    </>
  )
}

export default SectionWrapper(Experience, 'work')