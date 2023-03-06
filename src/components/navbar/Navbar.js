import { Wrapper, StyledLink } from "components/navbar/NavBar.styles"

const Navbar = () => {
  return (
    <Wrapper>
      <StyledLink to="/wojtekfedak.portfolio/">Home Page</StyledLink>
      <StyledLink to="/projects">Projects</StyledLink>
      <StyledLink className="link" to="/about">
        About
      </StyledLink>
      <StyledLink to="/contact">Contact</StyledLink>
    </Wrapper>
  )
}

export default Navbar
