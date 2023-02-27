import styled from "styled-components"

export const WrapperOffset = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.lightNavyBlue};
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled.div`
  width: 600px;
  height: 750px;
  background-color: ${({ theme }) => theme.colors.navyBlue};
  overflow: hidden;
  border-radius: 5px;
  border: 1px solid white;
  position: absolute;
  img {
    position: absolute;
    top: 10px;
    right: 10px;
    height: 40px;
    cursor: pointer;
  }
  @media (max-width: 800px) {
    width: 450px;
  }
  @media (max-width: 500px) {
    width: 280px;
  }
`

export const ImmageWrapper = styled.div`
  height: 390px;
  background-image: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;
  background-position: center;
  margin: 15px;
  @media (max-width: 500px) {
    height: 250px;
    background-position: initial;
  }
`

export const TextWrapper = styled.div`
  color: white;
  margin: 10px;
  a {
    text-decoration: none;
    color: white;
    font-weight: 600;
  }
  p {
    margin: 8px 0;
  }
`
