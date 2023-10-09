import Navbar from "./components/navbar/Navbar"
import SocialNavBar from "components/SocialNavBar/SocialNavBar"
import Home from "./routes/Home/Home"
import About from "./routes/About/About"
import Contact from "./routes/Contact/Contact"
import Projects from "./routes/Projects/Projects"
import { GloballStyle } from "assetes/styles/GloballStyles"
import { theme } from "assetes/styles/theme"
import { ThemeProvider } from "styled-components"
import { Wrapper } from "App.styles"
import { useRef } from "react"

function App() {
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
      <Wrapper>
        <Navbar
          toggleScrollToSection={toggleScrollToSection}
          homeRef={homeRef}
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
        <SocialNavBar />
        <Home homeRef={homeRef} />
        <About aboutRef={aboutRef} />
        <Projects projectsRef={projectsRef} />
        <Contact contactRef={contactRef} />
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
