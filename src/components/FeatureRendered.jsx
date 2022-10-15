import React from 'react'


const FeatureRendered = ({featureImage, headingText, smallText}) => {
  return (
    <div className='w-[100%]'>
      <div className='mx-14 flex justify-around items-center h-40vh'>
        <div className='w-2/6 sm:w-[100%] flex justify-center'>
          <img src={featureImage} alt='feature pics' className='object-cover'/>
        </div>
        <div className='w-2/5 sm:w-[100%]'>
          <h3 className='text-xl font-bold mb-2 text-[#020279] '>{headingText}</h3>
          <p className=' text-md text-[#696984]'>{smallText}</p>
        </div>
      </div>      
    </div>
  )
}

export default FeatureRendered