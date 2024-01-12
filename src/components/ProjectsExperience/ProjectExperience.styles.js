import styled from "styled-components"

export const Wrapper = styled.div`
  margin-top: ${({ theme }) => theme.marginSize.containerMargin};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  button:first-of-type {
    margin-bottom: ${({ theme }) => theme.marginSize.mediumMargin};
  }
  @media (max-width: 1000px) {
    margin-top: ${({ theme }) => theme.marginSize.constainerSmallMargin};
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 600px) {
    margin-top: ${({ theme }) => theme.marginSize.constainerXsMargin};
    margin: 50px 0;
  }
`

export const TextWrapper = styled.div`
  max-width: 800px;
  margin-bottom: 40px;
  h1 {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
    color: ${({ theme }) => theme.colors.navyBlue};
    text-align: center;
    margin: 0 0 ${({ theme }) => theme.marginSize.xxlMargin} 0;
  }
  div {
    border-left: 3px solid ${({ theme }) => theme.colors.myGreen};
    padding-left: 30px;
    display: flex;

    p:nth-of-type(1) {
      display: inline-block;
      min-width: 220px;
      margin-right: 20px;
    }
    p {
      font-size: ${({ theme }) => theme.fontSize.l};
      margin: 5px 0;
      color: ${({ theme }) => theme.colors.navyBlue};
      span {
        font-weight: 700;
      }
    }
  }
  @media (max-width: 1100px) {
    h1 {
      font-size: ${({ theme }) => theme.fontSize.xxl};
    }
    div {
      p {
        font-size: ${({ theme }) => theme.fontSize.m};
      }
    }
  }
  @media (max-width: 800px) {
    h1 {
      font-size: 32px;
    }
    div {
      padding-left: ${({ theme }) => theme.paddingSize.smallPadding};
      p:nth-of-type(1) {
        min-width: 165px;
        margin-right: ${({ theme }) => theme.marginSize.mediumMargin};
      }
    }
  }

  @media (max-width: 600px) {
    h1 {
      font-size: ${({ theme }) => theme.fontSize.xl};
      margin: 0 0 ${({ theme }) => theme.marginSize.xlMargin} 0;
    }
    div {
      p {
        font-size: ${({ theme }) => theme.fontSize.s};
      }
    }

    div {
      p:nth-of-type(1) {
        min-width: 130px;
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
