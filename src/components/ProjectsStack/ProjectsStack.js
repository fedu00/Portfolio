import SvgElement from "components/SvgElement/SvgElement"
import { ReactComponent as HtmlSVG } from "assetes/svgIcons/stackIcons/html.svg"
import { ReactComponent as CssSVG } from "assetes/svgIcons/stackIcons/css.svg"
import { ReactComponent as JsSVG } from "assetes/svgIcons/stackIcons/JS.svg"
import { ReactComponent as TsSVG } from "assetes/svgIcons/stackIcons/TS.svg"
import { ReactComponent as ReactSVG } from "assetes/svgIcons/stackIcons/react.svg"
import { ReactComponent as ReactNativeSVG } from "assetes/svgIcons/stackIcons/reactNative.svg"
import { ReactComponent as FigmaSVG } from "assetes/svgIcons/stackIcons/figma.svg"
import { ReactComponent as NextJSSVG } from "assetes/svgIcons/stackIcons/nextJs.svg"
import { ReactComponent as JestSVG } from "assetes/svgIcons/stackIcons/jest.svg"
import { ReactComponent as ReactTestingLibrrarySVG } from "assetes/svgIcons/stackIcons/reactTestingLibrary.svg"
import { Wrapper, SvgsWrapper } from "./ProjectsStack.styled"

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
        <SvgElement svg={<FigmaSVG />} title={"Figma & Art"} />
      </SvgsWrapper>
      <h1>Already learning</h1>
      <SvgsWrapper>
        <SvgElement svg={<NextJSSVG />} title={"Next.js"} />
        <SvgElement svg={<JestSVG />} title={"Jest"} />
        <SvgElement
          svg={<ReactTestingLibrrarySVG />}
          title={"React Testing Library"}
        />
      </SvgsWrapper>
    </Wrapper>
  )
}

export default ProjectsStack
