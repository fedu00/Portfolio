import { useState, useEffect } from "react"
import ProjectDetails from "../../components/projectDetails/ProjectDetails"
import AnimateSection from "../../components/AnimateSection/AnimateSection"
import { SectionWrapper } from "routes/Projects/Projects.styles"
import axios from "axios"
import ProjectsStack from "components/ProjectsStack/ProjectsStack"
import ProjectExperience from "components/ProjectsExperience/ProjectExperience"
import ProjectsContainer from "components/ProjectsContainer/ProjectsContainer"

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
        <ProjectsStack />
        <ProjectExperience
          experienceProjects={experienceProjects}
          setDropDownExperience={setDropDownExperience}
          dropDownExperience={dropDownExperience}
        />
        <ProjectsContainer
          projects={projects}
          handleOpenProjects={handleOpenProjects}
        />
      </SectionWrapper>
      {show && <ProjectDetails setShow={setShow} openProject={openProject} />}
    </AnimateSection>
  )
}

export default Projects
