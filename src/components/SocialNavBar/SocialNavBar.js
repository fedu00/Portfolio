import React from "react"
import { SocialNavBarContainer } from "./SocialNavBar.styled"
import { ReactComponent as GithubSvg } from "../../assetes/svgIcons/githubSVG.svg"
import { ReactComponent as FacebookSvg } from "../../assetes/svgIcons/facebookSVG.svg"
import { ReactComponent as InstaSvg } from "../../assetes/svgIcons/instaSVG.svg"
import { ReactComponent as LinkedinSvg } from "../../assetes/svgIcons/linkedinSVG.svg"

const SocialNavBar = () => {
  return (
    <SocialNavBarContainer>
      <a target="_blank" rel="noreferrer" href="https://github.com/fedu00">
        <GithubSvg />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/wojciech-fedak-82a35724b/"
      >
        <LinkedinSvg />
      </a>

      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.facebook.com/wojtek.fedak/"
      >
        <FacebookSvg />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/wojciechfedak/"
      >
        <InstaSvg />
      </a>
    </SocialNavBarContainer>
  )
}

export default SocialNavBar
