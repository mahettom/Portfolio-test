import { BrowserRouter } from "react-router-dom"
import { About, Experience, Hero, Navbar, Works } from './components'

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

      </div>
    </BrowserRouter>

  )
}

export default App