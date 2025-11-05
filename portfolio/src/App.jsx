import './index.css'
import About from './components/About'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {

  return (
    <div className='min-h-screen bg-white'>
      <Intro />
      <About />
      <Projects />
      <Skills />
    </div>
  )
}

export default App
