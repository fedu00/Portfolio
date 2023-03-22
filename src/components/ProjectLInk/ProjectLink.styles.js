import styled from "styled-components"

export const LinkWrapper = styled.div`
  a {
    cursor: pointer;
    display: flex;
    align-items: center;
    color: black;
    p {
      font-size: 20px;
      margin-left: 15px;
    }
  }
  a:hover {
    color: orange;
  }

  svg {
    width: 40px;
  }
`
