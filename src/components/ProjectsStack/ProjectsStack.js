import SvgElement from "components/SvgElement/SvgElement"
import { ReactComponent as HtmlSVG } from "assetes/svgIcons/stackIcons/html.svg"
import { ReactComponent as CssSVG } from "assetes/svgIcons/stackIcons/css.svg"
import { ReactComponent as JsSVG } from "assetes/svgIcons/stackIcons/JS.svg"
import { ReactComponent as TsSVG } from "assetes/svgIcons/stackIcons/TS.svg"
import { ReactComponent as ReactSVG } from "assetes/svgIcons/stackIcons/react.svg"
import { ReactComponent as ReactNativeSVG } from "assetes/svgIcons/stackIcons/reactNative.svg"
import { ReactComponent as FigmaSVG } from "assetes/svgIcons/stackIcons/figma.svg"
import { ReactComponent as SassSVG } from "assetes/svgIcons/stackIcons/sass.svg"
import { Wrapper, SvgsWrapper } from "./ProjectsStack.styles"

const ProjectsStack = () => {
  return (
    <Wrapper>
      <h1>Stack</h1>
      <SvgsWrapper>
        <SvgElement svg={<ReactSVG />} title={"React"} />
        <SvgElement svg={<JsSVG />} title={"JavaScript"} />
        <SvgElement svg={<TsSVG />} title={"TypeScript"} />
        <SvgElement svg={<ReactNativeSVG />} title={"React Native"} />
        <SvgElement svg={<HtmlSVG />} title={"HTML5"} />
        <SvgElement svg={<CssSVG />} title={"CSS"} />
        <SvgElement svg={<SassSVG />} title={"Sass"} />
        <SvgElement svg={<FigmaSVG />} title={"Figma & Art"} />
      </SvgsWrapper>
    </Wrapper>
  )
}

export default ProjectsStack
