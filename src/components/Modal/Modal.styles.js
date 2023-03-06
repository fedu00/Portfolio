import styled from "styled-components"

export const Wrapper = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.backGroundColor};
  border: 1px solid ${({ theme }) => theme.colors.orange};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 15px 25px;
  box-shadow: -8px 8px 25px -10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 24px;
    font-weight: 600;
  }
  button {
    border: none;
    max-width: 200px;
    background-color: ${({ theme }) => theme.colors.orange};
    color: white;
    font-size: 20px;
    font-weight: 600;
    padding: 10px 15px;
  }
`
