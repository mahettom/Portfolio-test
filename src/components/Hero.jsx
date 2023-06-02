import { motion } from "framer-motion"
import { styles } from "../styles"
import { ComputersCanvas } from "./canvas/Computers"


const Hero = () => {
  return (
    <section className={`sticky w-full h-screen mx-auto`}>

      <div className={`${styles.paddingX} absolute inset-0 w-screen flex flex-row md:gap-2`}>


        <ComputersCanvas />

        <div className="absolute text-center inset-x-0 bottom-10 min-w-[200px] m-3">
          <h1 className={` ${styles.heroSubText} `}>I'm <span className="text-tertiary font-ledger">Tom</span></h1>
          <br />
          <p className={`${styles.heroSubText} `}>MongoDB <br></br> Express.js <br></br> React.js <br></br> Node.js</p>
        </div>

      </div>


      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondry flex justify-center items-start p-2 ">
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-white mb-1'
            />
          </div>
        </a>
      </div>

    </section >
  )
}

export default Hero