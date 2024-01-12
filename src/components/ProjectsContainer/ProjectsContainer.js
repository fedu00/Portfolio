import Project from "../../components/project/Project"
import { Wrapper, ProjectsWrapper } from "./ProjectsContainer.styles"

const ProjectsContainer = ({ projects }) => {
  return (
    <Wrapper>
      <h1>Projects</h1>
      <ProjectsWrapper>
        {projects.map(
          ({
            title,
            githublink,
            content,
            image,
            stack,
            websitelink,
            shoplink,
            id,
          }) => (
            <Project
              image={image.url}
              title={title}
              content={content}
              githublink={githublink}
              stack={stack}
              websitelink={websitelink}
              shoplink={shoplink}
              key={id}
            />
          )
        )}
      </ProjectsWrapper>
    </Wrapper>
  )
}

export default ProjectsContainer
