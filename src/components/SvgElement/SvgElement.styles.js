import styled from "styled-components"

export const Wrapper = styled.div`
  width: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    height: 60px;
    margin: 0;
  }
  @media (max-width: 1200px) {
    width: 100px;
  }
  @media (max-width: 500px) {
    width: 90px;
    svg {
      height: 40px;
    }
  }
`

export const Title = styled.p`
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  @media (max-width: 1200px) {
    font-size: 16px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
  }
`
