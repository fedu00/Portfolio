import Project from "../components/Project";
import "../styles/globalStyles.css";
import lego from "../assetes/pictures/lego.png";
import car from "../assetes/pictures/car.png";
import forest from "../assetes/pictures/forest.png";
import mountain from "../assetes/pictures/mountain.png";
import night from "../assetes/pictures/night.png";
import { useState } from "react";
import ProjectDetails from "../components/ProjectDetails";
import AnimateSection from "../components/AnimateSection";

const Projects = () => {
  const [text, setText] = useState("dsfghfgha");
  const [image, setImage] = useState("");
  const [show, setShow] = useState(false);

  const handleOpenProjects = (text, image) => {
    setText(text);
    setImage(image);
    setShow(true);
  };

  const obiekt = {
    lego: {
      title: "hehe",
      image: lego,
    },
    car: {
      title: "wzium",
      image: car,
    },
    forest: {
      title: "zielono mi",
      image: forest,
    },
    mountain: {
      title: "gory tej!",
      image: mountain,
    },
    night: {
      title: "noc",
      image: night,
    },
  };
  return (
    <AnimateSection>
      <div className="main-section">
        <div className="projects-container">
          <Project
            image={lego}
            title={obiekt.lego.title}
            handleOpenProjects={() =>
              handleOpenProjects(obiekt.lego.title, obiekt.lego.image)
            }
          />
          <Project
            image={car}
            title={obiekt.car.title}
            handleOpenProjects={() =>
              handleOpenProjects(obiekt.car.title, obiekt.car.image)
            }
          />
          <Project
            image={forest}
            title={obiekt.forest.title}
            handleOpenProjects={() =>
              handleOpenProjects(obiekt.forest.title, obiekt.forest.image)
            }
          />
          <Project
            image={mountain}
            title={obiekt.mountain.title}
            handleOpenProjects={() =>
              handleOpenProjects(obiekt.mountain.title, obiekt.mountain.image)
            }
          />
          <Project
            image={night}
            title={obiekt.night.title}
            handleOpenProjects={() =>
              handleOpenProjects(obiekt.night.title, obiekt.night.image)
            }
          />
        </div>
        {show && <ProjectDetails text={text} setShow={setShow} image={image} />}
      </div>
    </AnimateSection>
  );
};

export default Projects;
