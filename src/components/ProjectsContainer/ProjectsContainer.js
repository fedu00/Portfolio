import Project from "../../components/project/Project"
import { Wrapper, ProjectsWrapper } from "./ProjectsContainer.styles"

const ProjectsContainer = ({ projects }) => {
  return (
    <Wrapper>
      <h2>Projects</h2>
      <ProjectsWrapper>
        {projects.map(
          ({ title, githublink, content, image, stack, websitelink, shoplink }) => (
            <Project
              image={image.url}
              title={title}
              content={content}
              githublink={githublink}
              stack={stack}
              websitelink={websitelink}
              shoplink={shoplink}
            />
          )
        )}
      </ProjectsWrapper>
    </Wrapper>
  )
}

export default ProjectsContainer
