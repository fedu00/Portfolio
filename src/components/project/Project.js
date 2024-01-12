import {
  Wrapper,
  ImageWrapper,
  ContentWrapper,
  StackContainer,
  LinksContainer,
} from "components/project/Project.styles"
import { ReactComponent as GithubSvg } from "assetes/svgIcons/githubSVG.svg"
import { ReactComponent as WebsiteSvg } from "assetes/svgIcons/websiteSVG.svg"
import { ReactComponent as GooglePlaySVG } from "assetes/svgIcons/googlePlaySVG.svg"
import CustomButton from "components/CustomButton/CustomButton"

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
        <LinksContainer>
          {websitelink && (
            <CustomButton
              icon={<WebsiteSvg />}
              adress={websitelink}
              text={"see demo"}
            />
          )}
          {githublink && (
            <CustomButton
              text="check github"
              adress={githublink}
              icon={<GithubSvg />}
            />
          )}
          {shoplink && (
            <CustomButton
              text="show in shop"
              adress={shoplink}
              icon={<GooglePlaySVG />}
            />
          )}
        </LinksContainer>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Project
