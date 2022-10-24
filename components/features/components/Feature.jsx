import FeatureRendered from "./FeatureRendered";
import FeatureRendered2 from "./FeatureRendered2";
// import image13 from '../../src/assets/image13.png';
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import Box from "./Box";

const Feature = () => {
  return (
    <div>
      <div className='text-center'>
        <h2 className='text-5xl font-semibold mb-4'>
          <span className='text-[#020279]'>Our</span>{" "}
          <span className='text-[#FA771B]'>Features</span>
        </h2>
        <p className='text-[#696984] mb-4'>
          This very extraordinary feature, can make learning activities more
          efficient
        </p>
      </div>
      <div className='grid sm:block grid-cols-2'>
        <FeatureRendered
          featureImage={img5}
          // headingText={"A user interface designed for the classroom"}
          headingText={"Camera"}
          smallText={
            "Utilize the camera feature to capture and send stunning images and videos.. "
          }
        />

        <FeatureRendered2
          // headingText={"Tools For Teachers And Learners"}
          headingText={"Spaces"}
          smallText={
            "Through the spaces, you can connect and socialize with your peers. "
          }
          featureImage={img2}
        />

        <FeatureRendered
          // headingText={"Class Management Tools for Educators"}
          headingText={"Library"}
          smallText={
            "You can upload and read books as well as save them for later use."
          }
          featureImage={img4}
        />

        <FeatureRendered2
          // headingText={"Tools For Teachers And Learners"}
          headingText={"Chats"}
          smallText={
            "Keep in touch with friends by sending and receiving messages via the chat feature. "
          }
          featureImage={img3}
        />

        {/* <FeatureRendered
          featureImage={img1}
          headingText={"Assessments, Quizzes, Tests"}
          smallText={
            "Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the online gradebook."
          }
        /> */}
      </div>
      <div className='flex justify-center'>
        <Box />
      </div>
    </div>
  );
};

export default Feature;
