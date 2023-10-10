import styled from "styled-components"

export const SectionWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  margin-top: 100px;
  h2 {
    text-align: center;
    font-size: 50px;
  }
  @media (max-width: 800px) {
    align-items: center;
  }
`
