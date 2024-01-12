import { useState, useEffect } from "react"
import { SectionWrapper } from "routes/Projects/Projects.styles"
import axios from "axios"
import ProjectsContainer from "components/ProjectsContainer/ProjectsContainer"
const API_TOKEN = "1ab3a70712337882e49d01c85666d9"

const Projects = ({ projectsRef }) => {
  const [projects, setProjects] = useState([])

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
                shoplink
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
        setProjects(
          data.allProjects.map((element) => {
            return { ...element, stack: element.stack.split(","), key: element.id }
          })
        )
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <SectionWrapper ref={projectsRef}>
      <ProjectsContainer projects={projects} />
    </SectionWrapper>
  )
}

export default Projects
