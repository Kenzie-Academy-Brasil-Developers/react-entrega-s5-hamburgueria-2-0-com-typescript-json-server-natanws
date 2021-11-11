import styled from "styled-components";

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 50%;

  img {
    width: 150px;
  }
  .description {
    width: 377px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid var(--grey-100);
    padding: 15px;
    border-radius: 8px;
    margin-top: 10px;
    .containerSVG {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80px;
      height: 40px;
      border-radius: 5px;
      margin-right: 10px;
      background: var(--color-primary-50);
      svg {
        color: var(--color-primary);
      }
    }
    span {
      font: var(--Headline);
      color: var(--grey-300);
      min-width: 261px;
      strong {
        color: var(--grey-600);
      }
    }
  }
`;
