import styled from "styled-components";

export const Card = styled.div`
  width: 300px;
  height: 346px;
  border-radius: 5px;
  border: 2px solid rgba(224, 224, 224, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 10px;
  overflow: hidden;
  button {
    background: var(--grey-100);
    color: white;
    height: 40px;
    width: 130px;
    border-radius: 8px;
  }
  &:hover {
    border-color: var(--color-primary);

    button {
      background-color: var(--color-primary);

      &:active {
        background-color: var(--color-primary-50);
      }
    }
  }

  .imageContainer {
    background: var(--grey-0);
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .infoContainer {
    width: 260px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    height: 50%;
    margin-top: 14px;

    h2 {
      color: var(--grey-600);
      font: var(--Heading2);
      width: 260px;
    }

    .type {
      color: var(--grey-300);
      font: var(--Caption);
      width: 260px;
    }

    .price {
      color: var(--color-primary);
      font: var(--Body-600);
      width: 260px;
    }
  }
`;
