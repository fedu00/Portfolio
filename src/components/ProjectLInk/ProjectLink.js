import { LinkWrapper } from "./ProjectLink.styles"
import { ReactComponent as GithubSvg } from "assetes/svgIcons/githubSVG.svg"
import { ReactComponent as WebsiteSvg } from "assetes/svgIcons/websiteSVG.svg"

const StackLink = ({ adress, icon, text }) => {
  return (
    <LinkWrapper>
      <a target="_blank" rel="noreferrer" href={adress}>
        {icon} <p>{text}</p>
      </a>
    </LinkWrapper>
  )
}

export default StackLink
