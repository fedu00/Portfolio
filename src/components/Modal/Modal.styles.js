import styled from "styled-components"

export const Wrapper = styled.div`
  position: fixed;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  border: 3px solid ${({ theme }) => theme.colors.myGreen};
  top: 30%;
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
    cursor: pointer;
    border: none;
    background-color: ${({ theme }) => theme.colors.orange};
    color: white;
    font-size: 24px;
    font-weight: 600;
    border: 3px solid ${({ theme }) => theme.colors.myGreen};
    border-radius: 30px;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    color: ${({ theme }) => theme.colors.navyBlue};
    padding: 10px 15px;
  }
  @media (max-width: 1200px) {
    button {
      font-size: 20px;
      padding: 15px;
    }
  }
`
