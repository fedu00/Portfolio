import Project from "../../components/project/Project"
import { useState, useEffect } from "react"
import ProjectDetails from "../../components/projectDetails/ProjectDetails"
import AnimateSection from "../../components/AnimateSection/AnimateSection"
import SvgElement from "components/SvgElement/SvgElement"
import {
  SectionWrapper,
  Wrapper,
  BorderWrapper,
  ButtonWrapper,
  RowSvgsWrapper,
  ProjectsWrapper,
} from "routes/Projects/Projects.styles"
import { ReactComponent as HtmlSVG } from "assetes/svgIcons/stackIcons/html.svg"
import { ReactComponent as CssSVG } from "assetes/svgIcons/stackIcons/css.svg"
import { ReactComponent as JsSVG } from "assetes/svgIcons/stackIcons/JS.svg"
import { ReactComponent as TsSVG } from "assetes/svgIcons/stackIcons/TS.svg"
import { ReactComponent as ReactSVG } from "assetes/svgIcons/stackIcons/react.svg"
import { ReactComponent as FigmaSVG } from "assetes/svgIcons/stackIcons/figma.svg"
import axios from "axios"

import CvFile from "assetes/files/Wojtek Fedak CV.pdf"

const Projects = () => {
  const [adress, setAdress] = useState("")
  const [text, setText] = useState("")
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [show, setShow] = useState(false)
  const [projects, setProjects] = useState([])

  const handleOpenProjects = (adress, image, title, text) => {
    setTitle(title)
    setAdress(adress)
    setText(text)
    setImage(image)
    setShow(true)
  }

  const API_TOKEN = "1ab3a70712337882e49d01c85666d9"

  useEffect(() => {
    axios
      .post(
        "https://graphql.datocms.com/",
        {
          query: `
      {
        allProjects {
          id
          title
          githublink
          content
          image {
            url
          }
        }
      }
      `,
        },
        {
          headers: {
            authorization: `Bearer ${API_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => setProjects(data.allProjects))
      .catch((err) => console.log(err))
  }, [])

  console.log("projects", projects)

  return (
    <AnimateSection>
      <SectionWrapper>
        <BorderWrapper title={"stack"}>
          <h2>Stack</h2>
          <RowSvgsWrapper>
            <SvgElement svg={<ReactSVG />} title={"React & React Native"} />
            <SvgElement svg={<JsSVG />} title={"JavaScript"} />
            <SvgElement svg={<TsSVG />} title={"TypeScript"} />
          </RowSvgsWrapper>
          <RowSvgsWrapper>
            <SvgElement svg={<HtmlSVG />} title={"HTML5"} />
            <SvgElement svg={<CssSVG />} title={"CSS & Sass"} />
            <SvgElement svg={<FigmaSVG />} title={"Figma & Art"} />
          </RowSvgsWrapper>
        </BorderWrapper>
        <Wrapper>
          <ButtonWrapper>
            <a href={CvFile} download="Wojtek Fedak CV" target="_blank">
              <button>downlod my CV</button>
            </a>
          </ButtonWrapper>
          <BorderWrapper>
            <h2>Where I’ve worked?</h2>
            <p>10.2021 - 09.2022 Junior frontend developer at Geeknauts</p>
            <p>05.2021 - 10.2021 intern at Geeknauts</p>
            <p>
              While working at Geeknauts, I created websites and mobile applications
              using the React and React Native libraries. In addition to programming,
              I dealt with mock-ups and graphics using the Figma program.
            </p>
          </BorderWrapper>
        </Wrapper>
        <Wrapper directioncolumn={true}>
          <h2>Projects</h2>
          <ProjectsWrapper>
            {projects.map(({ title, githublink, content, image }) => (
              <Project
                image={image.url}
                title={title}
                handleOpenProjects={() =>
                  handleOpenProjects(githublink, image.url, title, content)
                }
              />
            ))}
          </ProjectsWrapper>
        </Wrapper>
      </SectionWrapper>
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
  )
}

export default Projects
