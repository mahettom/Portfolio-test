import { BrowserRouter } from "react-router-dom"
import { About, Experience, Hero, Navbar, Works } from './components'

const App = () => {

  return (

    <BrowserRouter>
      <div className=" snap-y snap-mandatory overflow-x-hidden bg-black h-screen w-screen">

        <Navbar />
        <section className="snap-start">
          <Hero />
        </section>

        <section className="snap-start bg-white">
          <About />
        </section>

        <section className="snap-start bg-white">
          <Experience />
        </section>

        <section className="snap-start bg-white">
          <Works />
        </section>


      </div>
    </BrowserRouter>

  )
}

export default App