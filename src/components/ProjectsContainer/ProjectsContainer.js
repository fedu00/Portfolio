import Project from "../../components/project/Project"
import { Wrapper, ProjectsWrapper } from "./ProjectsContainer.styles"

const ProjectsContainer = ({ projects, handleOpenProjects }) => {
  return (
    <Wrapper>
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
  )
}

export default ProjectsContainer
