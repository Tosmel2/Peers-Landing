import { Feature, LatestNews } from "./components";
import FeatureStyle from "./FeatureStyle";

const Features = () => {
  return (
    <FeatureStyle className='sm:w-[80%] m-auto w-full'>
      <Feature />
      <LatestNews />
    </FeatureStyle>
  );
};

export default Features;
