import styled from "styled-components"

export const Wrapper = styled.div`
  position: relative;
  margin: 20px;
  cursor: pointer;
  img {
    max-width: 100%;
    height: auto;
  }
  &::before {
    content: "${({ title }) => title}";
    font-size: 30px;
    position: absolute;
    color: white;
    border: 1px solid white;
    background-color: rgba(104, 104, 104, 0.5);
    padding: 4px 8px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: all 0.5s;
  }
  &:hover::before {
    opacity: 1;
  }
  @media (max-width: 500px) {
    width: 50%;
  }
`
