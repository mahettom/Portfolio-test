import { styles } from "../styles"
import { ComputersCanvas } from "./canvas/Computers"


const Hero = () => {
  return (
    <section className={` h-[100dvh] w-[100dvh]`}>

      <div className={`${styles.paddingX} absolute inset-0 w-screen flex flex-row md:gap-2`}>


        <ComputersCanvas />

        <div className="absolute text-center inset-x-0 bottom-10 min-w-[200px] m-3">
          <h1 className={` ${styles.heroSubText} `}>I'm <span className="text-tertiary font-ledger">Tom</span></h1>
          <br />
          <p className={`${styles.heroSubText} `}>MongoDB <br></br> Express.js <br></br> React.js <br></br> Node.js</p>
        </div>

      </div>

    </section >
  )
}

export default Hero