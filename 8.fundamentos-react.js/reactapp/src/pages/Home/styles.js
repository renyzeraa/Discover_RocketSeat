import styled from 'styled-components'

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 24px 0;

    h1 {
      font-size: 32px;
    }

    div {
      display: flex;
      align-items: center;
      gap: 8px;
      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
      }
    }
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
    margin-bottom: 64px;
    &:hover {
      transition: 0.5s;
      filter: brightness(1.1);
      transform: scale(1.05);
    }
  }
`
