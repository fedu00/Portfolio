import { Link } from "react-router-dom";
import githubIcon from "../../assetes/svgIcons/githubIcon.svg";
import homeIcon from "../../assetes/svgIcons/homeIcon.svg";
import aboutIcon from "../../assetes/svgIcons/aboutIcon.svg";
import contactIcon from "../../assetes/svgIcons/contactIcon.svg";
import {Wrapper, StyledLink} from "components/navbar/NavBar.styles"
// import "./navbar.scss";

const Navbar = () => {
  return (
    <Wrapper >
      <StyledLink to="/wojtekfedak.portfolio/">
        Home Page
      </StyledLink>
      <StyledLink to="/projects">
        Projects
      </StyledLink>
      <StyledLink className="link" to="/about">
        About
      </StyledLink>
      <StyledLink to="/contact">
        Contact
      </StyledLink>
    </Wrapper>
  );
};

export default Navbar;
