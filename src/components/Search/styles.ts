import styled from "styled-components";

export const SearchForm = styled.form`
  background: rgba(255, 255, 255, 1);
  border: 2px solid rgba(224, 224, 224, 1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  padding: 2px;

  input {
    border: none;
    padding: 5px;
  }

  button {
    display: flex;
    align-items: center;
    background: var(--color-primary);
    border-radius: 8px;
    height: 40px;
    width: 54px;
    padding: 0px 20px;

    svg {
      color: white;
    }
  }
`;
