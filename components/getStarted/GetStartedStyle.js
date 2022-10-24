import styled from "styled-components";

const GetStartedStyle = styled.section`
  --mainColor: #020279cc;
  --mainText: #333;
  --secondaryColor: #f48c06;
  --textColor: #555;

  font-family: "Poppins" sans-serif;
  font-size: 1.3rem;
  font-weight: 400;
  color: var(--textColor);
  max-width: 80%;
  margin: auto;
  margin-bottom: 3rem;

  ul {
    list-style-image: url(/check.svg);
    margin-top: 0;
    padding-left: 3rem;
  }

  h2 {
    text-align: center;
    margin-top: 3rem;
    margin-bottom: 0;
    color: var(--secondaryColor);
    font-size: 2rem;
  }

  h4 {
    margin-top: 1rem;
    margin-bottom: 0;
    color: var(--mainColor);
    font-size: 1.4rem;
  }

  .bold {
    font-weight: 600;
    color: var(--secondaryColor);
    font-size: 1.2rem;
  }

  @media (prefers-color-scheme: dark) {
    --textColor: #ccc;
    --secondaryColor: #fff;
    --mainColor: #f48c06;
  }

  @media only screen and (max-width: 750px) {
    max-width: 90%;
  }
`;

export default GetStartedStyle;
