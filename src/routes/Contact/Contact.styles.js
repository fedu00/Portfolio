import styled from "styled-components"

export const SectionWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.navyBlue};
  @media (max-width: 600px) {
    min-height: auto;
  }
`

export const ContentWrapper = styled.div`
  width: 100%;
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  h1 {
    font-size: 40px;
    margin-bottom: 40px;
  }
  p {
    margin: 16px 5px 30px 5px;
    text-align: center;
    font-size: 26px;
    max-width: 500px;
    font-weight: 600;
    border-bottom: 3px solid ${({ theme }) => theme.colors.myGreen};

    padding: 0 10px;
    @media (max-width: 500px) {
      font-size: 20px;
    }
  }
  button {
    cursor: pointer;
    font-size: 24px;
    font-weight: 700;
    border: 3px solid ${({ theme }) => theme.colors.myGreen};
    border-radius: 30px;
    background-color: ${({ theme }) => theme.colors.backGroundColor};
    color: ${({ theme }) => theme.colors.navyBlue};
    padding: 10px 15px;
  }

  @media (max-width: 500px) {
    button {
      font-size: 14px;
      font-weight: 700;
    }
  }
  @media (max-width: 380px) {
    margin: 20px 0;
  }
`
