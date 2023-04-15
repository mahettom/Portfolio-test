import { fadeIn, textVariant } from "../utils/motion"
import { testimonials } from "../constants"
import { SectionWrapper } from "../hoc"
import { styles } from "../styles"

import { motion } from "framer-motion"



const FeedbacksCard = ({ index, testimonial, name, designation, company, image }) => (
  <motion.div
    variants={fadeIn('', 'spring', index + 1, 0.75)}
    className='bg-black-200 p-10 rounded-3xl sm:w-[320px] w-full'
  >

    <div className='mt-1'>
      <p className='text-white tracking-wider]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white tracking-wider text-[18px'>{testimonial}</p>
        </div>
      </div>
    </div>
  </motion.div>
)




const Feedbacks = () => {

  return (
    <div className='mt-12 bg-black-100px rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>

        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbacksCard key={testimonial.index} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, '')