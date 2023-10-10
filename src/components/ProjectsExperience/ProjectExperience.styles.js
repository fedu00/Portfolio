import styled from "styled-components"

export const Wrapper = styled.div`
  margin: 100px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  > h2 {
    font-size: 56px;
  }
  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
    > h2 {
      margin-left: 0;
    }
  }
`

export const TextWrapper = styled.div`
  max-width: 800px;
  margin-bottom: 30px;
  h2 {
    font-size: 44px;
    color: ${({ theme }) => theme.colors.navyBlue};
  }
  > p {
    margin: 5px 0 5px 50px;
    font-size: 26px;
    span {
      font-weight: 600;
      margin-right: 20px;
    }
  }
  > p:nth-of-type(3) {
    margin: 50px 0 50px 50px;
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
    /* width: 90%;
    margin: 20px 0; */
    h2 {
      font-size: 40px;
    }
    > p {
      margin: 5px 0 5px 0;
    }
    > p:nth-of-type(3) {
      margin: 30px 0 20px 0;
    }
  }
`

export const ButtonWrapper = styled.div`
  margin: 10px;
  button {
    cursor: pointer;
    font-size: 24px;
    font-weight: 600;
    border: 3px solid ${({ theme }) => theme.colors.myGreen};
    border-radius: 30px;
    background-color: ${({ theme }) => theme.colors.backGroundColor};
    padding: 10px 15px;
  }
  @media (max-width: 1200px) {
    button {
      font-size: 20px;
      padding: 15px;
    }
  }
  @media (max-width: 800px) {
    /* width: 100%; */
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
