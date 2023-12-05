import {
  Wrapper,
  ImageWrapper,
  ContentWrapper,
  StackContainer,
} from "components/project/Project.styles"
import ProjectLink from "../ProjectLInk/ProjectLink"
import { ReactComponent as GithubSvg } from "assetes/svgIcons/githubSVG.svg"
import { ReactComponent as WebsiteSvg } from "assetes/svgIcons/websiteSVG.svg"
import { ReactComponent as GooglePlaySVG } from "assetes/svgIcons/googlePlaySVG.svg"

const Project = ({
  title,
  githublink,
  content,
  image,
  stack,
  websitelink,
  shoplink,
}) => {
  return (
    <Wrapper title={title}>
      <ImageWrapper>
        <img src={image} />
      </ImageWrapper>
      <ContentWrapper>
        <h1>{title}</h1>
        <p>{content}</p>
        <StackContainer>
          {stack.map((element) => (
            <li key={element}>{element}</li>
          ))}
        </StackContainer>
        {websitelink && (
          <ProjectLink text="see demo" adress={websitelink} icon={<WebsiteSvg />} />
        )}
        {githublink && (
          <ProjectLink
            text="check github"
            adress={githublink}
            icon={<GithubSvg />}
          />
        )}
        {shoplink && (
          <ProjectLink
            text="show in shop"
            adress={shoplink}
            icon={<GooglePlaySVG />}
          />
        )}
      </ContentWrapper>
    </Wrapper>
  )
}

export default Project
