import styled from "styled-components"
import { GiHamburgerMenu } from "react-icons/gi"

export const MenuWrapper = styled.div`
  .menu-transition-on {
    transition: 1s;
  }
  ul {
    position: fixed;
    z-index: 1;
    margin: 0;
    right: 100px;
    top: 16px;
    overflow: hidden;
    @media (max-width: 800px) {
      visibility: hidden;
      background-color: white;
      top: 0;
      right: -300px;
      padding-top: 60px;
    }
    li {
      text-decoration: none;
      display: inline;
      padding: 20px 20px;
      font-weight: 700;
      font-size: large;
      cursor: pointer;
      @media (max-width: 800px) {
        display: block;
        margin-right: 100px;
      }
    }
  }
  .menu-active {
    right: 0;
    visibility: visible;
  }
`

export const HamburgerMenu = styled(GiHamburgerMenu)`
  display: none;
  position: fixed;
  z-index: 2;
  top: 16px;
  right: 16px;
  cursor: pointer;
  height: 40px;
  width: 40px;
  @media (max-width: 800px) {
    display: block;
  }
`
