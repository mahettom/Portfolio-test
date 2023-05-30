import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from './components'

const App = () => {

  return (

    <BrowserRouter>
      <div className="bg-black overflow-hidden h-full w-screen">

        <Navbar />
        <Hero />

        <div className="bg-white overflow-hidden w-screen">
          <About />
          <Experience />
          <Works />
        </div>

        <Tech />

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>

      </div>
    </BrowserRouter>

  )
}

export default App