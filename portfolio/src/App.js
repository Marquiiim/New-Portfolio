import NavBar from './components/layout/nav/Navbar'
import SobreMim from './components/sobremim/Sobremim'
import Presentation from './components/presentation/Presentation'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'

function App() {
  return (
    <div>
      <NavBar />
      <Presentation />
      <SobreMim />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
