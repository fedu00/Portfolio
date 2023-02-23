import styled from "styled-components"

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 26px;
    color: color: rgb(63, 68, 86);
    margin: 0 150px 50px 150px;
  }
  @media (max-width: 900px) {
    p {
        font-size: 20px;
        margin: 0 80px 30px 80px;
    }
  }
  @media (max-width: 500px) {
    padding-top: 20px;
    p {
        margin: 0 30px 30px 30px 
    }
  }
`

export const FormWrapper = styled.div`
  background-color: #eccbad;
  padding: 50px 200px;
  form div {
    display: flex;
    flex-direction: column;
    margin: 15px 0;
  }
  form div label {
    margin-bottom: 5px;
    font-size: 18px;
    margin-left: 8px;
    color: rgb(63, 68, 86)
  }

  form input {
    background-color: rgba(0,0,0,0);
    padding: 15px 25px;
    font-size: 18px;
    font-weight: 600;
    color: rgb(63, 68, 86);
    border: 2px solid rgb(63, 68, 86);
  }

  form div input,
  textarea {
    border: none;
    outline: none;
    color: rgb(63, 68, 86);
    padding: 8px 12px;
    font-size: 20px;
    width: 500px;
    resize: none;
    background-color: #EDD6C1;
  }
  form div textarea {
    height: 100px;
  }
  @media (max-width: 1200px) {
    padding: 50px ;
  }
  @media (max-width: 900px) {
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
        font-size: 15px
    }
  }
`
