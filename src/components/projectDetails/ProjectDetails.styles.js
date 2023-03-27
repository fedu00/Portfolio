import styled from "styled-components"

export const WrapperOffset = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.greyBackground};
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled.div`
  width: 1000px;
  height: 750px;
  background-color: ${({ theme }) => theme.colors.backGroundColor};
  overflow: hidden;
  border-radius: 5px;
  border: 1px solid white;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    position: absolute;
    top: 10px;
    right: 10px;
    height: 40px;
    cursor: pointer;
  }
  @media (max-width: 1000px) {
    width: 700px;
    height: 500px;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    height: 700px;
    width: 450px;
  }
  @media (max-width: 500px) {
    width: 400px;
  }
  @media (max-width: 400px) {
    width: 290px;
  }
`

export const ImmageWrapper = styled.div`
  height: 350px;
  width: 350px;
  background-image: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;
  margin: 15px;
  @media (max-width: 1000px) {
    height: 280px;
    width: 280px;
  }
  @media (max-width: 500px) {
    height: 220px;
    background-position: initial;
  }
`

export const ContentWrapper = styled.div`
  color: white;
  display: flex;
  width: 600px;
  padding: 20px;
  flex-direction: column;
  color: black;
  a {
    text-decoration: none;
    font-weight: 600;
  }
  h1 {
    text-align: center;
    font-weight: 400px;
    margin: 10px 0;
  }
  p {
    margin: 8px 0;
    word-break: break-all;
  }
  @media (max-width: 1000px) {
    width: 450px;
  }
  @media (max-width: 500px) {
    width: 380px;
  }
  @media (max-width: 400px) {
    width: 290px;
  }
`

export const CustomText = styled.p`
  margin: 8px 0;
  padding: 15px;
  word-break: break-all;
  border-top: 2px solid ${({ theme }) => theme.colors.orange};
  border-left: 2px solid ${({ theme }) => theme.colors.orange};
  border-bottom: 2px solid ${({ theme }) => theme.colors.orange};
`

export const StackWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px 0;
  @media (max-width: 500px) {
    margin: 10px 0;
  }
`

export const StackElement = styled.div`
  margin: 5px 8px;
  font-size: 18px;
  @media (max-width: 500px) {
    font-size: 16px;
  }
`
