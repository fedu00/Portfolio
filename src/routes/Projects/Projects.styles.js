import styled from "styled-components"

export const SectionWrapper = styled.div`
  max-height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  overflow: auto;
  @media (max-width: 800px) {
    align-items: center;
  }
`
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ directioncolumn }) => (directioncolumn ? "column" : "row")};
  > h2 {
    margin-left: 100px;
    font-size: 56px;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    > h2 {
      margin-left: 0;
    }
  }
`

export const BorderWrapper = styled.div`
  width: 50%;
  margin: 20px 100px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.orange};
  align-items: center;
  justify-content: center;
  h2 {
    font-size: 56px;
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
    width: 60%;
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
  }
`

export const RowSvgsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 20px;
`

export const ButtonWrapper = styled.div`
  width: 50%;
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
    width: 40%;
    button {
      font-size: 20px;
      padding: 15px;
    }
  }
  @media (max-width: 800px) {
    width: 100%;
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
