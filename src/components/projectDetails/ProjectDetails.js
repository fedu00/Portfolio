import cross from "../../assetes/svgIcons/cross.svg"
import {
  WrapperOffset,
  Wrapper,
  ImmageWrapper,
  ContentWrapper,
  CustomText,
  StackWrapper,
  StackElement,
} from "components/projectDetails/ProjectDetails.styles"
import ProjectLink from "components/ProjectLInk/ProjectLink"
import { ReactComponent as GithubSvg } from "assetes/svgIcons/githubSVG.svg"
import { ReactComponent as WebsiteSvg } from "assetes/svgIcons/websiteSVG.svg"

const ProjectDetails = ({ openProject, setShow }) => {
  return (
    <WrapperOffset>
      <Wrapper>
        <img
          src={cross}
          alt="logo"
          className="cross-icon"
          onClick={() => {
            setShow(false)
          }}
        />
        <ImmageWrapper image={openProject.image}></ImmageWrapper>
        <ContentWrapper>
          <h1>{openProject.title}</h1>

          <CustomText>{openProject.content}</CustomText>
          <StackWrapper>
            {openProject.stack.map((element) => (
              <StackElement>{element}</StackElement>
            ))}
          </StackWrapper>
          {openProject.websiteLink ? (
            <ProjectLink
              adress={openProject.websiteLink}
              text="see demo"
              icon={<WebsiteSvg />}
            />
          ) : null}
          {openProject.githubLink ? (
            <ProjectLink
              adress={openProject.githubLink}
              text="see github"
              icon={<GithubSvg />}
            />
          ) : null}
        </ContentWrapper>
      </Wrapper>
    </WrapperOffset>
  )
}

export default ProjectDetails
