import styled from "styled-components"

export const ExperienceItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px 0;
`

export const Title = styled.div`
  font-weight: 600;
  font-size: 20px;
  display: flex;
  color: ${({ theme }) => theme.colors.myGreen};
  margin: 5px;
  p {
    margin: 5px;
  }
  @media (max-width: 800px) {
    font-size: 16px;
  }
  @media (max-width: 400px) {
    flex-direction: column;
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 50px;
  p {
    overflow-wrap: break-word;
    font-weight: 600;
    margin: 5px;
  }
  @media (max-width: 800px) {
    margin: 0 0 0 20px;
  }
`
