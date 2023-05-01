import { motion } from "framer-motion"
import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>

      <div className={`${styles.paddingX} absolute inset-1 top-[120px] max-w-7xl flex xs:flex-col sm:flex-col md:flex-row md:gap-2 lg:flex-row xl:flex-row`}>


        <ComputersCanvas />

        <div className="m-3 min-w-[200px]">
          <h1 className={` ${styles.heroSubText} `}>Hi, i'm <span className="text-[#ff5300] font-ledger">Tom</span></h1>
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
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>

    </section >
  )
}

export default Hero