import styled from "styled-components";

const BannerStyle = styled.div`
  --mainColor: #020279;
  --mainColorLight: #5767aa;
  --secondaryColor: #f48c06;
  --textColor: #eee;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 4;
    padding-left: 8rem;
    background-color: var(--mainColor);
    color: var(--textColor);
    font-family: "Poppins";
    font-size: 1.3rem;
    font-weight: 400;
  }

  nav a {
    padding-left: 3rem;
    color:white;
    gap:10px
    color: var(--textColor);
    text-decoration: none;
  }
  nav div{
    gap: 20px;
    padding: 2rem;
  
 }

  nav a:hover {
    color: var(--secondaryColor);
  }

  header .nav-btn {
    padding: 5px;
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
    color: var(--textColor);
    visibility: hidden;
    opacity: 0;
    font-size: 1.8rem;
  }

  header div,
  nav {
    display: flex;
    align-items: center;
  }
  header .responsive_nav {
    transform: none;
  }

  @media only screen and (max-width: 1130px) {
    header {
      padding-left: 2rem;
      padding-right: 2rem;
    }

    header .nav-btn {
      visibility: visible;
      opacity: 1;
    }

    header nav {
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      background-color: var(--mainColor);
      background-color: var(--mainColor);
       {
        /*transition: 1s;*/
      }
      transform: translateY(-100vh);
    }

    header .responsive_nav {
      transform: none;
    }

    nav .nav-close-btn {
      position: absolute;
      top: 2rem;
      right: 2rem;
    }
    nav div{
      gap: 20px;
      padding: 2rem;
     display: flex;
     flex-direction: column;
   }

    nav a {
      font-size: 1.4rem;
      padding-left: 0rem;
    }
  }
`;

export default BannerStyle;
