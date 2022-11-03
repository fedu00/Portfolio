import Project from "../components/Project";
import "../styles/globalStyles.css";
import notes from "../assetes/pictures/notes.png";
import geeknaut from "../assetes/pictures/geeknaut.png";
import logo from "../assetes/pictures/logo.png";
import { useState } from "react";
import ProjectDetails from "../components/ProjectDetails";
import AnimateSection from "../components/AnimateSection";

const Projects = () => {
  const [adres, setAdres] = useState("");
  const [secondText, setSecondText] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [show, setShow] = useState(false);

  const handleOpenProjects = (adres, image, title, secondText) => {
    setTitle(title);
    setAdres(adres);
    setSecondText(secondText);
    setImage(image);
    setShow(true);
  };

  const obiekt = {
    // geeknaut: {
    //   title: "Geeknaut",
    //   text: "przez rok pracy współtworzyłem takie projekty jak",
    //   secondText: "dwadwa",
    //   image: geeknaut,
    // },
    notes: {
      title: "Notatnik",
      adres: "https://github.com/fedu00/notes",
      secondText:
        "Prosta aplikacja napisana w React, wykorzystuje komponenty funkcyjne oraz zapisuje dane w locall store.",
      image: notes,
    },
    logo: {
      title: "Protfolio",
      adres: "https://github.com/fedu00/portfolio",
      secondText:
        "Strona samodziellnie zaprojektowana, wykorzystuje tutaj: React-router oraz Frame Motion. Portfolio jest jeszcze w trakcie tworzenia. ",
      image: logo,
    },
  };
  return (
    <AnimateSection>
      <div className="main-section">
        <div className="projects-container">
          {/* <Project
            image={geeknaut}
            title={obiekt.geeknaut.title}
            handleOpenProjects={() =>
              handleOpenProjects(
                obiekt.geeknaut.text,
                obiekt.geeknaut.image,
                obiekt.geeknaut.title,
                obiekt.geeknaut.secondText
              )
            }
          /> */}
          <Project
            image={notes}
            title={obiekt.notes.title}
            handleOpenProjects={() =>
              handleOpenProjects(
                obiekt.notes.adres,
                obiekt.notes.image,
                obiekt.notes.title,
                obiekt.notes.secondText
              )
            }
          />
          <Project
            image={logo}
            title={obiekt.logo.title}
            handleOpenProjects={() =>
              handleOpenProjects(
                obiekt.logo.adres,
                obiekt.logo.image,
                obiekt.logo.title,
                obiekt.logo.secondText
              )
            }
          />
        </div>
        {show && (
          <ProjectDetails
            adres={adres}
            setShow={setShow}
            image={image}
            title={title}
            secondText={secondText}
          />
        )}
      </div>
    </AnimateSection>
  );
};

export default Projects;
