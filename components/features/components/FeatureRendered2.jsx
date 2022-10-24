import Image from "next/image";

const FeatureRendered2 = ({ featureImage, headingText, smallText }) => {
  return (
    <div>
      <div className='mx-14 flex justify-around flex-col-reverse sm:flex-row items-center h-40vh'>
        <div className='w-full'>
          <h3 className='text-xl font-bold mb-2 text-[#FA771B] '>
            {headingText}
          </h3>
          <p className=' text-md text-[#696984]'>{smallText}</p>
        </div>
        <div className='w-full flex justify-center'>
          <Image src={featureImage} alt='featured pic' />
        </div>
      </div>
    </div>
  );
};

export default FeatureRendered2;
