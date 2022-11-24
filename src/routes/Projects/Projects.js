import Project from "../../components/project/Project";
import "./projects.scss";
import notes from "../../assetes/pictures/notes.png";
import geeknaut from "../../assetes/pictures/geeknaut.png";
import logo from "../../assetes/pictures/logo.png";
import { useState } from "react";
import ProjectDetails from "../../components/projectDetails/ProjectDetails";
import AnimateSection from "../../components/AnimateSection";

const Projects = () => {
  const [adress, setAdress] = useState("");
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [show, setShow] = useState(false);

  const handleOpenProjects = (adress, image, title, text) => {
    setTitle(title);
    setAdress(adress);
    setText(text);
    setImage(image);
    setShow(true);
  };

  const projectsData = [
    {
      title: "Portfolio",
      adress: "https://github.com/fedu00/portfolio",
      image: logo,
      text: [
        "Samodzielnie zaprojektowana i napisana strona, do stworzenia jej wykorzystałem:",
        "React",
        "React-router",
        "Frame Motion",
        "Sass",
      ],
    },
    {
      title: "Notatnik",
      adress: "https://github.com/fedu00/notes",
      image: notes,
      text: [
        "Prosta aplikacja napisana w React, wykorzystuje komponenty funkcyjne oraz zapisuje dane w locall store.",
      ],
    },
    {
      title: "Geeknauts",
      image: geeknaut,
      text: [
        "Podczas współpracy z firmą Geeknauts byłem odpowiedzialny za tworzenie części frontendowej głównie z wykorzystaniem biblioteki React i React Nastive, oraz tworzenie grafik i makiet za pomocą programu Figma w takich projektach jak:",
        "- Vip CLub",
        "- Geeknauts Website",
        "- Photovoltaica",
        "- RCP",
        "- Matura Testy i Zadania",
      ],
    },
  ];

  return (
    <AnimateSection>
      <div className="projects-page-section">
        <div className="projects-container">
          {projectsData.map((element) => (
            <Project
              image={element.image}
              title={element.title}
              handleOpenProjects={() =>
                handleOpenProjects(
                  element.adress,
                  element.image,
                  element.title,
                  element.text
                )
              }
            />
          ))}
        </div>
        {show && (
          <ProjectDetails
            adress={adress}
            setShow={setShow}
            image={image}
            title={title}
            text={text}
          />
        )}
      </div>
    </AnimateSection>
  );
};

export default Projects;
