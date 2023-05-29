import styled from "styled-components"

export const SectionWrapper = styled.div`
  max-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  overflow: auto;
  @media (max-width: 800px) {
    align-items: center;
  }
`
