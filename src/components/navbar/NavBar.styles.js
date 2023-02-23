import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

export const Wrapper = styled.div`
  grid-row: 1/2;
  grid-column: 2/2;
  display: flex;
  padding-right: 30px;
  justify-content: flex-end;
  align-items: center;
    a { 
    color: #3F4456;
    text-decoration: none;
    font-size: 24px;
    margin-right: 15px
    }
  @media (max-width: 600px) {
    padding-right: 10px;
    a {
      font-size: 20px;
    }
  }
  @media (max-width: 500px) {
    a {
      margin-right: 10px;
      margin-top: 10px;
    }
  }
  @media (max-width: 400px) {
    padding-right: 0;
    a { 
      font-size: 16px;
    }
  }
`

export const StyledLink = styled(NavLink)`
position: relative;
&.${"active"} {
  &::after {
    opacity: 1;
  }
  
}

&::after {
  content: '';
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
  position: absolute;
  width: 120%;
  height: 3px;
  bottom: -4px;
  right: -10%;
  background-color: ${({theme}) => theme.colors.navyBlue};
}
`