import { BrowserRouter } from "react-router-dom"
import { About, Experience, Hero, Navbar, Works } from './components'

const App = () => {

  return (

    <BrowserRouter>
      <div className=" snap-y snap-mandatory overflow-x-hidden bg-primary h-screen w-screen">

        <Navbar />
        <section className="snap-start h-[100dvh] w-[100dvw]">
          <Hero />
        </section>

        <section className="snap-start h-[100dvh] w-[100dvw] bg-secondary">
          <About />
        </section>

        <section className="snap-start h-[100dvh] w-[100dvw] bg-secondary">
          <Experience />
        </section>

        <section className="snap-start h-[100dvh] w-[100dvw] bg-secondary">
          <Works />
        </section>


      </div>
    </BrowserRouter>

  )
}

export default App