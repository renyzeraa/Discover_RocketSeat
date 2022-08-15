import styled from 'styled-components'

export const Container = styled.div`
  text-align: center;

  h1 {
    margin-bottom: 16px;
    font-size: 32px;
  }

  input {
    width: 100%;
    padding: 16px;
    border: 0;
    background-color: #9f9f9f;
    border-radius: 5px;
    color: black;
    font-size: 16px;
    margin-bottom: 16px;
  }

  button {
    width: 100%;
    border: 0;
    background-color: #1f1a1d;
    padding: 16px;
    border-radius: 5px;
    font-size: 16px;
    color: white;
    cursor: pointer;
    font-weight: 700;
    &:hover {
      transition: 0.5s;
      filter: brightness(1.1);
      transform: scale(1.1);
    }
  }
`
