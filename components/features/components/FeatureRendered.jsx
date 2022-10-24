import Image from "next/image";

const FeatureRendered = ({ featureImage, headingText, smallText }) => {
  return (
    <div className='w-full'>
      <div className='mx-14 flex justify-around flex-col sm:flex-row items-center h-40vh'>
        <div className='w-full flex justify-center'>
          <Image
            src={featureImage}
            alt='feature pics'
            className='object-cover'
          />
        </div>
        <div className='w-full'>
          <h3 className='text-xl font-bold mb-2 text-[#020279] '>
            {headingText}
          </h3>
          <p className=' text-md text-[#696984]'>{smallText}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureRendered;
