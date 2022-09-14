import { Link } from "react-router-dom";
import githubIcon from "../assetes/svgIcons/githubIcon.svg";
import homeIcon from "../assetes/svgIcons/homeIcon.svg";
import aboutIcon from "../assetes/svgIcons/aboutIcon.svg";
import contactIcon from "../assetes/svgIcons/contactIcon.svg";
import "./../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navBarContainer">
      <Link to="/">
        <img src={homeIcon} alt="logo" />
      </Link>

      <Link to="/projects">
        <img src={githubIcon} alt="logo" />
      </Link>

      <Link className="link" to="/about">
        <img src={aboutIcon} alt="logo" />
      </Link>

      <Link to="/contact">
        <img src={contactIcon} alt="logo" />
      </Link>
    </div>
  );
};

export default Navbar;
