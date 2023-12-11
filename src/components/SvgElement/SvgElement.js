import { Wrapper } from "./SvgElement.styles"

const SvgElement = ({ svg, title }) => {
  return (
    <Wrapper>
      {svg}
      <p>{title}</p>
    </Wrapper>
  )
}

export default SvgElement
