import styled from "styled-components"

export const ExperienceItemWrapper = styled.div`
  display: flex;
  padding: 10px;
  margin-top: 10px;
  @media (max-width: 500px) {
    max-height: 350px;
    width: 450px;
  }
`

export const Date = styled.p`
  width: 180px;
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.orange};
  margin: 5px;
  @media (max-width: 800px) {
    font-size: 16px;
  }
  @media (max-width: 500px) {
    width: 80px;
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 180px);
  p:first-child {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.orange};
  }
  p {
    overflow-wrap: break-word;
    font-weight: 600;
    margin: 5px;
  }
  @media (max-width: 800px) {
    p:first-child {
      font-size: 16px;
    }
  }
  @media (max-width: 500px) {
    width: calc(100% - 80px);
`
