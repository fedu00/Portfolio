import {
  MenuWrapper,
  HamburgerMenu,
  MenuBackground,
} from "components/navbar/NavBar.styles"

import { useRef, useState, useEffect } from "react"

const Navbar = ({
  toggleScrollToSection,
  homeRef,
  aboutRef,
  projectsRef,
  contactRef,
}) => {
  const menuRef = useRef(null)

  const getCurrentWidth = () => {
    return { width: window.innerWidth }
  }
  const [screenWidth, setScreenWidth] = useState(getCurrentWidth())
  const [menuTransition, setMenuTransition] = useState(false)

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(getCurrentWidth())
    }
    window.addEventListener("resize", updateScreenWidth)

    return () => {
      window.removeEventListener("resize", updateScreenWidth)
    }
  }, [screenWidth])

  if (screenWidth.width <= 800) {
    setTimeout(() => {
      setMenuTransition(true)
    }, 1000)
  } else if (menuTransition === true && screenWidth.width >= 800) {
    setMenuTransition(false)
  }

  const handleToggleMenuStyle = () => {
    menuRef.current.classList.toggle("menu-active")
  }
  const handleRemoveMenuStyle = () => {
    menuRef.current.classList.remove("menu-active")
  }

  return (
    <MenuWrapper>
      <MenuBackground />
      <ul ref={menuRef} className={menuTransition ? "menu-transition-on" : ""}>
        <li
          onClick={() => {
            toggleScrollToSection(homeRef)
            handleRemoveMenuStyle()
          }}
        >
          Home
        </li>
        <li
          onClick={() => {
            toggleScrollToSection(aboutRef)
            handleRemoveMenuStyle()
          }}
        >
          About
        </li>
        <li
          onClick={() => {
            toggleScrollToSection(projectsRef)
            handleRemoveMenuStyle()
          }}
        >
          Projects
        </li>
        <li
          onClick={() => {
            toggleScrollToSection(contactRef)
            handleRemoveMenuStyle()
          }}
        >
          Contact
        </li>
      </ul>
      <HamburgerMenu onClick={handleToggleMenuStyle} togleTransition={false} />
    </MenuWrapper>
  )
}

export default Navbar
