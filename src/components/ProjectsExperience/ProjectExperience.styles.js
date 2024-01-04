import styled from "styled-components"

export const Wrapper = styled.div`
  margin: 100px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  > h2 {
    font-size: 50px;
  }
  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
    > h2 {
      margin-left: 0;
    }
  }
  @media (max-width: 600px) {
    margin: 50px 0;
  }
`

export const TextWrapper = styled.div`
  max-width: 800px;
  margin-bottom: 40px;
  h2 {
    font-size: 44px;
    color: ${({ theme }) => theme.colors.navyBlue};
  }
  div {
    border-left: 3px solid ${({ theme }) => theme.colors.myGreen};
    padding-left: 30px;
    display: flex;
    margin: 0;
    p:nth-of-type(1) {
      display: inline-block;
      min-width: 220px;
      margin-right: 20px;
    }
    p {
      font-size: 26px;
      margin: 5px 0;
      color: ${({ theme }) => theme.colors.navyBlue};
      span {
        font-weight: 700;
      }
    }
  }
  @media (max-width: 1200px) {
    margin: 50px;
    > p {
      font-size: 16px;
    }
    h2 {
      margin-top: 0;
    }
  }
  @media (max-width: 800px) {
    margin: 20px;
    h2 {
      font-size: 40px;
    }
    div {
      padding-left: 15px;
      p {
        font-size: 20px;
      }
      p:nth-of-type(1) {
        min-width: 165px;
      }
    }
  }
  @media (max-width: 500px) {
    margin: 10px;
    div {
      p:nth-of-type(1) {
        min-width: 130px;
      }
      p {
        font-size: 16px;
      }
    }
  }
`

export const ExperienceWrapper = styled.div`
  min-width: 500px;
  max-height: ${({ dropDownExperience }) => (dropDownExperience ? "2000px" : "0")};
  overflow: hidden;
  transition: 1s;
  @media (max-width: 800px) {
    min-width: 350px;
  }
  @media (max-width: 500px) {
    min-width: 250px;
  }
`
