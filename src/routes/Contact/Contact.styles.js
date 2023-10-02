import styled from "styled-components"

export const SectionWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled.div`
  display: flex;
  width: 70%;
  border-top: 2px solid ${({ theme }) => theme.colors.orange};
  border-left: 2px solid ${({ theme }) => theme.colors.orange};
  border-bottom: 2px solid ${({ theme }) => theme.colors.orange};
  @media (max-width: 1400px) {
    width: 90%;
  }
`

export const ContentWrapper = styled.div`
  width: 100%;
  min-height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    max-width: 500px;
    font-size: 40px;
    font-weight: 600;
    margin: 50px;
  }
  button {
    background-color: ${({ theme }) => theme.colors.orange};
    color: white;
    padding: 15px 25px;
    font-size: 18px;
    font-weight: 600;
    border: none;
    cursor: pointer;
  }
  @media (max-width: 900px) {
    p {
      font-size: 30px;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;
  }

  @media (max-width: 500px) {
    button {
      font-size: 14px;
    }
  }
  @media (max-width: 380px) {
    margin: 20px 0;
  }
`
