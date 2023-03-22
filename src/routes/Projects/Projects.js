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
  ExperienceButton,
  ExperienceWrapper,
} from "routes/Projects/Projects.styles"
import ExperienceItem from "components/ExperienceItem/ExperienceItem"
import { ReactComponent as HtmlSVG } from "assetes/svgIcons/stackIcons/html.svg"
import { ReactComponent as CssSVG } from "assetes/svgIcons/stackIcons/css.svg"
import { ReactComponent as JsSVG } from "assetes/svgIcons/stackIcons/JS.svg"
import { ReactComponent as TsSVG } from "assetes/svgIcons/stackIcons/TS.svg"
import { ReactComponent as ReactSVG } from "assetes/svgIcons/stackIcons/react.svg"
import { ReactComponent as FigmaSVG } from "assetes/svgIcons/stackIcons/figma.svg"
import axios from "axios"

import CvFile from "assetes/files/Wojtek Fedak CV.pdf"
import useModal from "components/Modal/useModal"

const Projects = () => {
  const [openProject, setOpenProject] = useState({
    title: "",
    stack: [],
    content: "",
    githublink: "",
    websiteLink: "",
    image: "",
  })

  const [show, setShow] = useState(false)
  const [projects, setProjects] = useState([])
  const [experienceProjects, setExperienceProjects] = useState([])
  const [dropDownExperience, setDropDownExperience] = useState(false)
  const { Modal, isOpen, handleOpenModal, handleCloseModal } = useModal()

  const handleOpenProjects = (
    title,
    stack,
    content,
    githubLink,
    websiteLink,
    image
  ) => {
    setOpenProject({
      title,
      stack,
      content,
      githubLink,
      websiteLink,
      image,
    })
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
            allExperiences{
              date
              title
              aboutProject
              role
              technologies
            }
              allProjects {
                id
                title
                stack
                content
                githublink
                websitelink
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
      .then(({ data: { data } }) => {
        setExperienceProjects(data.allExperiences.reverse())
        setProjects(
          data.allProjects.map((element) => {
            return { ...element, stack: element.stack.split(",") }
          })
        )
      })
      .catch((err) => console.log(err))
  }, [])

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
          {isOpen ? (
            <Modal
              handleCloseModal={handleCloseModal}
              text="You have downloaded your resume!"
            />
          ) : null}
          <ButtonWrapper>
            <a href={CvFile} download="Wojtek Fedak CV" target="_blank">
              <button
                onClick={() => {
                  handleOpenModal()
                }}
              >
                downlod my resume
              </button>
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
            <ExperienceButton>
              <button onClick={() => setDropDownExperience(!dropDownExperience)}>
                show my work in Geeknauts
              </button>
            </ExperienceButton>
            <ExperienceWrapper dropDownExperience={dropDownExperience}>
              {experienceProjects.map((project) => (
                <ExperienceItem
                  title={project.title}
                  date={project.date}
                  role={project.role}
                  aboutProject={project.aboutProject}
                  technologies={project.technologies}
                />
              ))}
            </ExperienceWrapper>
          </BorderWrapper>
        </Wrapper>
        <Wrapper directioncolumn={true}>
          <h2>Projects</h2>
          <ProjectsWrapper>
            {projects.map(
              ({ title, githublink, content, image, stack, websitelink }) => (
                <Project
                  image={image.url}
                  title={title}
                  handleOpenProjects={() =>
                    handleOpenProjects(
                      title,
                      stack,
                      content,
                      githublink,
                      websitelink,
                      image.url
                    )
                  }
                />
              )
            )}
          </ProjectsWrapper>
        </Wrapper>
      </SectionWrapper>
      {show && <ProjectDetails setShow={setShow} openProject={openProject} />}
    </AnimateSection>
  )
}

export default Projects
