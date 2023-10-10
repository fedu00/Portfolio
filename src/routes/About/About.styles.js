import styled from "styled-components"

export const Wrapper = styled.div`
  padding: 0 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1200px) {
    padding: 0 50px 0 100px;
  }
  @media (max-width: 800px) {
    padding: 0 50px;
  }
`

export const TextWrapper = styled.div`
  font-size: 22px;
  max-width: 800px;
  color: ${({ theme }) => theme.colors.navyBlue};
  p:nth-of-type(1) {
    margin-bottom: 50px;
  }
  @media (max-width: 1000px) {
    font-size: 18px;
    p:nth-of-type(1) {
      margin-bottom: 20px;
    }
  }
`

export const MyImageWrapper = styled.div`
  position: relative;
  margin: 10px 150px 10px 10px;
  height: auto;
  img {
    width: 300px;
  }
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    right: -30%;
    height: 50%;
    width: 100%;
    z-index: -1;
    background-color: ${({ theme }) => theme.colors.myGreen};
  }
  @media (max-width: 1000px) {
    margin: 10px 80px 10px 10px;
    img {
      width: 200px;
    }
  }
  @media (max-width: 600px) {
    display: none;
  }
`
