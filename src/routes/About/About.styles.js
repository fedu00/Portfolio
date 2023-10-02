import styled from "styled-components"

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: flex-end;
  padding: 100px 200px;
  img {
    width: 440px;
    height: auto;
    margin-left: 20px;
  }
  @media (max-width: 1700px) {
    padding: 100px 100px 100px 50px;
  }
  @media (max-width: 1300px) {
    padding: 100px 50px 50px 50px;
    img {
      width: 350px;
    }
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    max-height: calc(100vh - 50px);
    overflow-y: scroll;
    padding: 300px 0px 50px 20px;
    align-items: center;
    img {
      width: 300px;
      margin-top: 50px;
    }
  }
  @media (max-width: 800px) {
    padding-top: 200px;
  }
  @media (max-width: 500px) {
    max-height: none;
    height: 100%;
  }
`

export const TextWrapper = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.navyBlue};
  padding: 0 120px 50px 120px;
  position: relative;
  border-left: 2px solid ${({ theme }) => theme.colors.orange};
  border-bottom: 2px solid ${({ theme }) => theme.colors.orange};
  p:nth-of-type(1) {
    margin-bottom: 100px;
  }
  @media (max-width: 1700px) {
    padding: 0 80px 50px 80px;
    font-size: 22px;
    p:nth-of-type(1) {
      margin-bottom: 50px;
    }
  }
  @media (max-width: 1300px) {
    padding: 0 80px 0px 80px;
    font-size: 20px;
  }
  @media (max-width: 800px) {
    padding: 0 20px;
    font-size: 18px;
  }
`

export const Title = styled.div`
  content: "Wojtek Fedak";
  color: ${({ theme }) => theme.colors.navyBlue};
  position: absolute;
  font-size: 100px;
  top: -320px;
  left: 50px;
  h1 {
    font-weight: 600;
    font-size: 120px;
    line-height: 60px;
  }
  h1:nth-of-type(2) {
    margin-left: 100px;
  }
  @media (max-width: 1700px) {
    top: -280px;
    h1 {
      font-size: 100px;
      line-height: 50px;
    }
  }
  @media (max-width: 800px) {
    top: -200px;
    h1 {
      font-size: 70px;
      line-height: 40px;
    }
  }
`
