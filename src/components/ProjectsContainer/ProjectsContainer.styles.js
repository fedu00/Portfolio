import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  > h2 {
    color: ${({ theme }) => theme.colors.navyBlue};
    margin-left: 100px;
    font-size: 56px;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    > h2 {
      margin-left: 0;
    }
  }
`

export const ProjectsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`
