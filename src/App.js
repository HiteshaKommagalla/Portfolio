import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Education from "./pages/Education"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"

function App() {
  return (
    <Layout>
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  )
}

export default App
