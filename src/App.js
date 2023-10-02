import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Navbar from "./components/navbar/Navbar"
import Home from "./routes/Home/Home"
import About from "./routes/About/About"
import Contact from "./routes/Contact/Contact"
import Projects from "./routes/Projects/Projects"
import MainTemplate from "components/mainTemplate/MainTemplate"
import { GloballStyle } from "assetes/styles/GloballStyles"
import { theme } from "assetes/styles/theme"
import { ThemeProvider } from "styled-components"
import { Wrapper } from "App.styles"
import { useRef } from "react"

function App() {
  // const location = useLocation()

  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  const toggleScrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    })
  }
  return (
    <ThemeProvider theme={theme}>
      <GloballStyle />
      {/* <MainTemplate> */}
      <Wrapper>
        <Navbar
          toggleScrollToSection={toggleScrollToSection}
          homeRef={homeRef}
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
        {/* <div style={{ height: "100vh", backgroundColor: "blue" }} ref={homeRef}>
          yyyuuuu
        </div>
        <div style={{ height: "100vh", backgroundColor: "red" }} ref={aboutRef}>
          wzium
        </div> */}
        <Home homeRef={homeRef} />
        <About aboutRef={aboutRef} />
        <Projects projectsRef={projectsRef} />
        <Contact contactRef={contactRef} />
        {/* <Routes location={location} key={location.pathname}>
                <Route path="/wojtekfedak.portfolio/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes> */}
      </Wrapper>
      {/* </MainTemplate> */}
    </ThemeProvider>
  )
}

export default App
