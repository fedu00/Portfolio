import Project from '../../components/project/Project';
// import "./projects.scss";
import portfolio from '../../assetes/pictures/portfolio.png';
import geeknauts from '../../assetes/pictures/geeknauts.png';
import studyBuddy from '../../assetes/pictures/studyBuddy.png';
import { useState } from 'react';
import ProjectDetails from '../../components/projectDetails/ProjectDetails';
import AnimateSection from '../../components/AnimateSection/AnimateSection';
import {
  Wrapper,
  BackgroundColorWrapper,
} from 'routes/Projects/Projects.styles';
import { ReactComponent as HtmlSVG } from 'assetes/svgIcons/stackIcons/html.svg';
import { ReactComponent as CssSVG } from 'assetes/svgIcons/stackIcons/css.svg';
import { ReactComponent as JsSVG } from 'assetes/svgIcons/stackIcons/JS.svg';
import { ReactComponent as TsSVG } from 'assetes/svgIcons/stackIcons/TS.svg';
import { ReactComponent as ReactSVG } from 'assetes/svgIcons/stackIcons/react.svg';
import { ReactComponent as FigmaSVG } from 'assetes/svgIcons/stackIcons/figma.svg';

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
      image: portfolio,
      text: [
        "Samodzielnie zaprojektowana i napisana strona, do stworzenia jej wykorzystałem:",
        "React",
        "React-router",
        "Frame Motion",
        "Sass",
        "Styled-components"
      ],
    },
    {
      title: "Geeknauts",
      image: geeknauts,
      text: [
        "Podczas współpracy z firmą Geeknauts byłem odpowiedzialny za tworzenie części frontendowej głównie z wykorzystaniem biblioteki React i React Nastive, oraz tworzenie grafik i makiet za pomocą programu Figma w takich projektach jak:",
        "- Vip CLub",
        "- Geeknauts Website",
        "- Photovoltaica",
        "- RCP",
        "- Matura Testy i Zadania",
      ],
    },
    {
      title: "Study Buddy",
      adress: "https://github.com/fedu00/HR-study-buddy",
      image: studyBuddy,
      text: [
        "Aplikacja do zarządzania studentami, tworzona w ramach kursu Reacta prowadzonego przez Adama Romańskiego tworzącego kanał programistyczny na youtube Hello Roman. "
      ],    },
  ];

  return (
    <AnimateSection>
      <Wrapper>
      <BackgroundColorWrapper title={'stack'} backgroundColor={'#eccbad'} bigPadding={true}>
          <HtmlSVG />
          <CssSVG />
          <JsSVG />
          <TsSVG />
          <ReactSVG />
          <FigmaSVG />
        </BackgroundColorWrapper>
        <BackgroundColorWrapper title={'projects'} >
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
        </BackgroundColorWrapper>
      </Wrapper>
      {show && (
          <ProjectDetails
            adress={adress}
            setShow={setShow}
            image={image}
            title={title}
            text={text}
          />
        )}
    </AnimateSection>
  );
};

export default Projects;
