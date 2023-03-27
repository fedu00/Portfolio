import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  > h2 {
    margin-left: 100px;
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

export const ButtonWrapper = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    cursor: pointer;
    font-size: 24px;
    font-weight: 600;
    border: none;
    background-color: ${({ theme }) => theme.colors.orange};
    color: white;
    padding: 20px 25px;
  }
  @media (max-width: 1200px) {
    button {
      font-size: 20px;
      padding: 15px;
    }
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`

export const BorderWrapper = styled.div`
  width: 70%;
  margin: 20px 100px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.orange};
  align-items: center;
  justify-content: center;
  h2 {
    font-size: 56px;
    color: ${({ theme }) => theme.colors.navyBlue};
  }
  > p {
    margin: 5px 0 5px 50px;
    font-weight: 600;
    font-size: 20px;
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
    width: 90%;
    margin: 20px 0;
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

export const ExperienceButton = styled.div`
  display: flex;
  align-items: center;
  button {
    margin: 0 auto;
    cursor: pointer;
    font-size: 24px;
    font-weight: 600;
    border: none;
    background-color: ${({ theme }) => theme.colors.orange};
    color: white;
    padding: 20px 25px;
    margin-bottom: 15px;
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
