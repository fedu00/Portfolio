import styled from "styled-components"

export const SectionWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const BorderWrapper = styled.div`
  width: 70%;
  padding: 40px 60px;
  font-weight: 600;
  border-top: 2px solid ${({ theme }) => theme.colors.orange};
  border-left: 2px solid ${({ theme }) => theme.colors.orange};
  border-bottom: 2px solid ${({ theme }) => theme.colors.orange};
  @media (max-width: 700px) {
    width: 80%;
    padding: 20px 30px;
  }
  @media (max-width: 500px) {
    width: 85%;
    padding: 20px 15px;
  }
`

export const NameWrapper = styled.div`
  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.navyBlue};
  }
  p:first-of-type {
    font-size: 70px;
  }
  p:nth-of-type(2) {
    font-size: 96px;
  }
  @media (max-width: 1000px) {
    p:first-of-type {
      font-size: 55px;
    }
    p:nth-of-type(2) {
      font-size: 72px;
    }
  }
  @media (max-width: 500px) {
    p:first-of-type {
      font-size: 40px;
    }
    p:nth-of-type(2) {
      font-size: 56px;
    }
  }
`

export const TextWrapper = styled.div`
  max-width: 500px;
  margin-left: auto;
  p:first-of-type {
    font-size: 30px;
    color: ${({ theme }) => theme.colors.orange};
  }
  p:nth-of-type(2) {
    font-size: 24px;
  }
  @media (max-width: 1000px) {
    p:first-of-type: {
      font-size: 24px;
    }
    p:nth-of-type(2) {
      font-size: 20px;
    }
  }
  @media (max-width: 500px) {
    p:first-of-type: {
      font-size: 20px;
    }
    p:nth-of-type(2) {
      font-size: 18px;
    }
  }
`
