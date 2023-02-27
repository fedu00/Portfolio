import { Wrapper, Title } from "./SvgElement.styles"

const SvgElement = ({ svg, title }) => {
  return (
    <Wrapper>
      {svg}
      <Title>{title}</Title>
    </Wrapper>
  )
}

export default SvgElement
