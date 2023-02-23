import styled from "styled-components"

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0 200px 100px 0;
  @media (max-width: 1000px) {
    padding: 0 0 50px 0;
    justify-content: center;
  }
  @media (max-width: 500px) {
    padding: 0;
    align-items: center;
  }
  
`
export const BackgroundColorWrapper = styled.div`
  height: 70%;
  width: 65%;
  position: relative;
  display:flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.orange };
  padding: 0 100px;
  @media (max-width: 850px) {
    width: 80%;
    padding: 0 40px;
  }
  @media (max-width: 500px) {
    padding: 0;
    height: 60%;
  }
`

export const NameWrapper = styled.div`
  font-family: "Baskervville", serif;
  position: absolute;
  top: -140px;
  left: -190px;
  p {
    text-shadow: -3px 3px 6px rgba(0, 0, 0, 0.4);
    margin: 0;
    color: ${({theme}) => theme.colors.navyBlue}
  }
  p:first-of-type {
    font-size: 200px;
    line-height: 160px;
  }
  p:nth-of-type(2) {
    margin-left: 20px;
    font-size: 140px;
    line-height: 100px;
  }
  @media (max-width: 850px) {
    top: -90px;
    left: -30px;
    p:first-of-type {
      font-size: 140px;
      line-height: 120px;
    }
    p:nth-of-type(2) {
      font-size: 100px;
      line-height: 80px;
    }
  }
  @media (max-width: 550px) {
    p:first-of-type {
      font-size: 90px;
      line-height: 70px;
    }
    p:nth-of-type(2) {
      font-size: 75px;
      line-height: 60px;
    }
  }
`



export const TextWrapper = styled.div`
  margin-left: 150px;
  width: 500px;
  font-size: ${({theme}) => theme.fontSize.xl};
  color: ${({theme}) => theme.colors.navyBlue};
  font-weight: 600;
  @media (max-width: 1500px) {
    margin-left: 80px;
  }
  @media (max-width: 1300px) {
    margin-left: 0;
    font-size: ${({theme}) => theme.fontSize.l};
  }
  @media (max-width: 1000px) {
    width: 350px;
    
  }
  @media (max-width: 500px) {
    font-size:  ${({theme}) => theme.fontSize.m};
    margin: 150px 15px 0 15px;
  }
`
