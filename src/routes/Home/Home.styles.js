import styled from "styled-components"

export const SectionWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 200px;
  overflow: hidden;
  @media (max-width: 1400px) {
    padding: 0 100px 0 200px;
  }
  @media (max-width: 1000px) {
    padding: 0 50px 0 100px;
  }
  @media (max-width: 800px) {
    padding: 0 50px;
  }
  @media (max-width: 700px) {
    padding: 0 25px;
  }
  @media (max-width: 500px) {
    padding: 0 50px;
  }
  @media (max-width: 400px) {
    padding: 0 25px;
  }
`

export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  @media (max-width: 900px) {
    width: 500px;
  }
  @media (max-width: 500px) {
    width: 300px;
  }
`

export const TextWrapper = styled.div`
  max-width: 550px;
  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.navyBlue};
  }
  p:first-of-type {
    font-size: 50px;
    font-weight: 700;
  }
  p:nth-of-type(2) {
    font-size: 30px;
    color: ${({ theme }) => theme.colors.myGreen};
  }
  p:nth-of-type(3) {
    font-size: 22px;
    margin-top: 40px;
  }

  @media (max-width: 1000px) {
    p:first-of-type {
      font-size: 45px;
    }
    p:nth-of-type(2) {
      font-size: 25px;
    }
    p:nth-of-type(3) {
      font-size: 18px;
    }
  }
  @media (max-width: 800px) {
    p:first-of-type {
      font-size: 40px;
    }
    p:nth-of-type(3) {
      margin-top: 15px;
    }
  }
  @media (max-width: 1000px) {
    p:nth-of-type(3) {
      font-size: 22px;
    }
  }
`

export const MyImageWrapper = styled.div`
  position: relative;
  margin: 10px;
  img {
    width: 400px;
    @media (max-width: 1400px) {
      width: 300px;
    }
    @media (max-width: 700px) {
      width: 250px;
    }
  }
  &:after {
    content: "";
    position: absolute;
    top: 17.5%;
    right: -100%;
    height: 65%;
    width: 100%;
    z-index: -1;
    background-color: ${({ theme }) => theme.colors.myGreen};
  }
  @media (max-width: 500px) {
    display: none;
  }
`
