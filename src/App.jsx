import { BrowserRouter } from "react-router-dom"
import { About, Experience, Hero, Navbar, Works } from './components'

const App = () => {

  return (

    <BrowserRouter>
      <div className=" snap-y snap-mandatory overflow-x-hidden bg-secondary h-screen w-screen">

        <Navbar />
        <section className="snap-start h-[100dvh] w-[100dvw] relative bg-primary">
          <Hero />
        </section>

        <section className="snap-start h-[100dvh] w-[100dvw]">
          <About />
        </section>

        <section className="snap-start h-[100dvh] w-[100dvw]">
          <Experience />
        </section>

        <section className="snap-start h-[100dvh] w-[100dvw]">
          <Works />
        </section>


      </div>
    </BrowserRouter>

  )
}

export default App