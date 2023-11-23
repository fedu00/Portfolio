import styled from "styled-components"

export const Wrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  border: 2px solid ${({ theme }) => theme.colors.myGreen};
  align-items: center;
  justify-content: center;
  h2 {
    font-size: 50px;
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
  @media (max-width: 400px) {
    padding: 12px 0;
  }
`

export const RowSvgsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin: 10px;
  @media (max-width: 400px) {
    margin: 0;
  }
`
