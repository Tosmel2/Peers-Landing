import FooterStyle from "./FooterStyle";
import Image from "next/image";

const Footer = () => {
  return (
    <FooterStyle>
      <div className="main1 main2">
        <div className="logoWrap">
          <div className="logo">
            <div className="img">
              <img src="/logo.svg" />
            </div>
            <p>PeersApp</p>
          </div>
          <p>
            <span>  Learn | Network | Redefine </span>
            <span>  your School Experience</span>
          </p>
        </div>
        <div className="subscribe">
          <h3>Subscribe to our Newsletter</h3>
          <div className="input">
            <input type="text" />
            <button type="button">Subscribe</button>
          </div>
        </div>
        <div className="links">
          <p>Home</p>
          <p>Features</p>
          <p>About Us</p>
          <p>Terms and Conditions</p>
        </div>
        <p className="copyright">&#169;copyright 2022 PeersApp Limited</p>
      </div>
    </FooterStyle>
  );
};

export default Footer;
