import SvgElement from "components/SvgElement/SvgElement"
import { ReactComponent as HtmlSVG } from "assetes/svgIcons/stackIcons/html.svg"
import { ReactComponent as CssSVG } from "assetes/svgIcons/stackIcons/css.svg"
import { ReactComponent as JsSVG } from "assetes/svgIcons/stackIcons/JS.svg"
import { ReactComponent as TsSVG } from "assetes/svgIcons/stackIcons/TS.svg"
import { ReactComponent as ReactSVG } from "assetes/svgIcons/stackIcons/react.svg"
import { ReactComponent as FigmaSVG } from "assetes/svgIcons/stackIcons/figma.svg"
import { Wrapper, RowSvgsWrapper } from "./ProjectsStack.styles"

const ProjectsStack = () => {
  return (
    <Wrapper>
      <h2>Stack</h2>
      <RowSvgsWrapper>
        <SvgElement svg={<ReactSVG />} title={"React & React Native"} />
        <SvgElement svg={<JsSVG />} title={"JavaScript"} />
        <SvgElement svg={<TsSVG />} title={"TypeScript"} />
      </RowSvgsWrapper>
      <RowSvgsWrapper>
        <SvgElement svg={<HtmlSVG />} title={"HTML5"} />
        <SvgElement svg={<CssSVG />} title={"CSS & Sass"} />
        <SvgElement svg={<FigmaSVG />} title={"Figma & Art"} />
      </RowSvgsWrapper>
    </Wrapper>
  )
}

export default ProjectsStack
