import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 500px;
  width: 50%;

  div {
    display: flex;
    justify-content: space-between;
    h3 {
    }
    p {
      cursor: pointer;
      color: var(--grey-300);
      font: var(--Body);
      text-decoration: underline;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    input {
    }
    button {
      background: var(--grey-300);
      color: white;
      height: 40px;
      width: 130px;
      border-radius: 8px;
      &:hover {
        background-color: var(--color-primary);

        &:active {
          background-color: var(--color-primary-50);
        }
      }
    }
  }
`;
