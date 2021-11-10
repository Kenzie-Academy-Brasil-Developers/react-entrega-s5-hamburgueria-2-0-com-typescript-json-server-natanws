import styled from "styled-components";

export const Container = styled.div`
  .cartContainer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.5);
    -webkit-backdrop-filter: blur(0.1em);
    backdrop-filter: blur(0.1em) brightness(0.6);
    align-items: center;
    justify-content: center;
    display: flex;
  }

  .hidden {
    display: none;
  }

  .cartWindow {
    width: 500px;
    min-height: 158px;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;

    .cartHeader {
      display: flex;
      align-items: center;
      padding: 5px 10px;
      justify-content: space-between;
      height: 56px;
      width: 100%;
      color: white;
      background: var(--color-primary);

      .cartTitle {
        font: var(--Heading3);
      }

      button {
        color: white;
      }
    }
    .cartProducts {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 158px;
      text-align: center;

      h3 {
        font: var(--Heading3);
        color: var(--grey-600);
      }

      span {
        font: var(--Body);
        color: var(--grey-300);
        margin: 10px;
      }
    }
  }
`;
