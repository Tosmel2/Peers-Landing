import React from 'react'

const FeatureRendered2 = ({featureImage, headingText, smallText}) => {
  return (
    <div>
      <div className='mx-14 flex justify-around items-center h-40vh'>
        <div className='w-2/5 sm:w-full'>
          <h3 className='text-xl font-bold mb-2 text-[#FA771B] '>{headingText}</h3>
          <p className=' text-md text-[#696984]'>{smallText}</p>
        </div>
        <div className='w-2/6 flex justify-center'>
          <img src={featureImage} alt='feature pics' />
        </div>
      </div>
    </div>
  )
}

export default FeatureRendered2