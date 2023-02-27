import styled from "styled-components"

export const SectionWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled.div`
  display: flex;
  width: 70%;
  border-top: 2px solid ${({ theme }) => theme.colors.orange};
  border-left: 2px solid ${({ theme }) => theme.colors.orange};
  border-bottom: 2px solid ${({ theme }) => theme.colors.orange};
  @media (max-width: 1400px) {
    width: 90%;
  }
  @media (max-width: 700px) {
    flex-direction: column;
  }
`

export const TextWrapper = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 40px;
    font-weight: 600;
    margin: 50px;
  }
  @media (max-width: 900px) {
    p {
      font-size: 30px;
    }
  }
  @media (max-width: 500px) {
    width: 80%;
  }
`

export const FormWrapper = styled.div`
  width: 60%;
  padding: 50px;
  form div {
    display: flex;
    flex-direction: column;
    margin: 15px 0;
  }

  form input {
    background-color: ${({ theme }) => theme.colors.orange};
    color: white;
    padding: 15px 25px;
    font-size: 18px;
    font-weight: 600;
    border: none;
  }

  form div input,
  textarea {
    border: none;
    border-bottom: 2px solid rgb(63, 68, 86);
    outline: none;
    color: rgb(63, 68, 86);
    padding: 8px 12px;
    font-family: "Barlow", sans-serif;
    font-size: 20px;
    width: 500px;
    resize: none;
    background-color: #f0f0f0;
  }
  form div textarea {
    height: 100px;
  }
  @media (max-width: 1200px) {
    form div label {
      font-size: 18px;
    }
    form div input,
    textarea {
      width: 350px;
      font-size: 18px;
    }
  }
  @media (max-width: 900px) {
    padding: 30px;
    form div input,
    textarea {
      width: 250px;
    }
  }
  @media (max-width: 500px) {
    padding: 15px;
    form input {
      padding: 10px 15px;
      font-size: 12px;
    }
    form div label {
      font-size: 15px;
    }
    form div input,
    textarea {
      width: 200px;
      font-size: 15px;
    }
  }
`
