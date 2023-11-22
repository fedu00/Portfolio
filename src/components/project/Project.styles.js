import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  margin: 40px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.navyBlue};
`

export const ImageWrapper = styled.div`
  width: 30%;
  display: flex;
  margin: 0 20px;
  img {
    max-height: 100%;
    max-width: 100%;
    height: auto;
  }
  @media (max-width: 1300px) {
    width: 40%;
  }
  @media (max-width: 1000px) {
    width: 50%;
  }
  @media (max-width: 700px) {
    margin: 0 10px;
  }
`
export const ContentWrapper = styled.div`
  width: 40%;
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  h1 {
    margin: 6px 30px;
  }
  p {
    margin: 6px;
  }
  @media (max-width: 1300px) {
    width: 50%;
  }
  @media (max-width: 700px) {
    margin: 0 10px;
  }
`

export const StackContainer = styled.ul`
  padding: 0;
  margin: 10px 30px;
  li {
    display: inline;
    margin: 5px;
    font-weight: bold;
  }
`
