import styled from 'styled-components';

export const Wrapper = styled.div`
  max-height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  overflow: auto;
  @media (max-width: 500px) {
    max-height: none;
    height: 100%;
}
`;

export const BackgroundColorWrapper = styled.div`
  max-width: 65vw;
  margin: 100px 300px 100px 300px;
  background-color: ${({backgroundColor}) => backgroundColor};
  padding: 120px 160px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  position: relative;
  svg {
    margin: 20px;

  }
  h2 {
    color: black;
    position: absolute;
    top: -20px;
    left: -20px;
  }

  &::before {
    content: "${({ title }) => title }";
    color: ${({theme}) => theme.colors.navyBlue};
    text-shadow: -3px 3px 6px rgba(0, 0, 0, 0.4);
    font-family: 'Baskervville', serif;
    position: absolute;
    font-size: 140px;
    line-height: 100px;
    top: -50px;
    left: -100px;
  }

  @media (max-width: 1500px) {
    padding: 80px 110px;
    margin: 80px 200px 80px 200px;
    svg {
      height: 80px;
      margin: 10px;
    }
    &::before {
      font-size: 110px;
    }
    }

    @media (max-width: 1250px) {
      max-width: 75vw;
      padding: 60px 40px;
      margin: 80px 150px 80px 150px;
    svg {
      height: 60px;
      margin: 5px;
    }
    }

    @media (max-width: 900px) {
      max-width: none;
      padding: 60px 30px;
      margin: 80px 45px 80px 45px;
      svg {
        height: 50px;
      }
      &::before {
        font-size: 80px;
        left: -10px;
      }
    }
    @media (max-width: 500px) {
      padding: 60px 15px;
      margin: 60px 20px 10px 20px;
      svg {
        height: 40px;
      }
      &:nth-child(2) {
        flex-direction: column;
        div {
          height:auto;
        }
      }
    }
    @media (max-width: 400px) {
      svg {
        height: 30px;
      }
    }
`;
