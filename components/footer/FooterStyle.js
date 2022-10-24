import styled from "styled-components";

const FooterStyle = styled.div`
  min-height: 50vh;
  background-color: #020279;
  color: white;
  display: flex;
  justify-content: center;

  .main2 {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 10px;
  }

  .logoWrap {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5vw;

    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      align-self: flex-end;
      justify-self: flex-end;

      .img {
        /* background: yellow; */
        width: max-content;
        padding: 2px 10px 0;

        img {
          width: 50px;
          aspect-ratio: 1/1;
        }
      }
    }

    > p {
      padding-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      border-left: 1px solid gray;
      font-size: 0.9em;
    }
  }

  .subscribe {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    .input {
      display: flex;
      justify-content: center;
      gap: 10px;

      input {
        padding: 10px;
        border-radius: 20px;
        outline: 0;
        border: 0;
        box-shadow: 1px 1px 10px 0 blue;
      }

      button {
        padding: 5px 15px;
        border-radius: 20px;
        outline: 0;
        border: 0;
        background-color: blue;
        cursor: pointer;
      }
    }
  }

  .links {
    font-size: 0.7em;
    display: flex;
    justify-content: space-around;
    gap: 7%;
    width: 50%;

    p {
      white-space: nowrap;
      cursor: pointer;
    }
  }

  .copyright {
    letter-spacing: 3px;
  }
`;

export default FooterStyle;
