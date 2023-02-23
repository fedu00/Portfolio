import styled from "styled-components"

export const Wrapper = styled.div`
 grid-row: 1/2;
  grid-column: 1/1;
  background-color: #D9D9D9;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  padding-bottom: 30px;
  svg {
    margin-bottom: 10px;
  }
  @media (max-width: 500px) {
    padding-bottom: 0;
    margin-top: auto;
    height: 60px;
    flex-direction: row;
    align-items: end;
    box-sizing: border-box;
    svg {
      margin: 0 10px;
    }
  }
`