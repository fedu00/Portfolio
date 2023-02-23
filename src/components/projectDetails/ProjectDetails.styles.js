import styled from 'styled-components'

export const WrapperOffset = styled.div`
height: 100vh;
  width: 100vw;
  background-color: ${({theme}) => theme.colors.lightNavyBlue};
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled.div`
    width: 600px;
    height: 750px;
    background-color: ${({theme}) => theme.colors.navyBlue};
    overflow: hidden;
    border-radius: 5px;
    border: 1px solid white;
    position: absolute;
    img {
      position: absolute;
      top: 10px;
      right: 10px;
      height: 40px;
      cursor: pointer;
    }
`

export const ImmageWrapper = styled.div`
    height: 390px;
    background-image: ${({image}) => `url(${image})`};
    background-repeat: no-repeat;
    background-position: center;
    margin: 15px;
`

export const TextWrapper = styled.div`
    margin: 10px;
    a {
        text-decoration: none;
        color: white;
      }
    p {
        color: white;
        margin: 8px 0;
    }
`