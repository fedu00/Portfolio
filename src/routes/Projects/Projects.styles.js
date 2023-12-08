import styled from "styled-components"

export const SectionWrapper = styled.div`
  min-height: 100vh;
  margin: 50px 0;
  padding: 0 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: auto;
  h2 {
    text-align: center;
    font-size: 50px;
    color: ${({ theme }) => theme.colors.navyBlue};
  }
  @media (max-width: 1000px) {
    padding: 0 20px 0 100px;
  }
  @media (max-width: 800px) {
    align-items: center;
    padding: 0 10px 0 0;
  }
  @media (max-width: 600px) {
    min-height: auto;
    margin: 0;
  }
`
