import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 50px;
    color: ${({ theme }) => theme.colors.navyBlue};
  }

  @media (max-width: 1200px) {
    margin: 50px;
  }
  @media (max-width: 800px) {
    margin: 20px 0;
  }
  @media (max-width: 400px) {
    padding: 12px 0;
  }
`

export const SvgsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`
