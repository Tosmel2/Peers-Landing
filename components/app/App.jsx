import About from "../about/About";
import Banner from "../banner/Banner";
import Faq from "../faq/Faq";
import Features from "../features/Features";
import Footer from "../footer/Footer";
import GetStarted from "../getStarted/GetStarted";
import AppStyle from "./AppStyle";

const App = () => {
  return (
    <AppStyle>
      <Banner />
      <About />
      <Features />
      <GetStarted />
      <Faq />
      <Footer />
    </AppStyle>
  );
};

export default App;
