import React from 'react'
import latest1 from '../../src/assets/latest1.png';
import latest2 from '../../src/assets/latest2.png';
import latest3 from '../../src/assets/latest3.png';
import imgcmp from '../../src/assets/imgcmp.png';

const LatestNews = () => {
  return (
    <div>
      <div className='text-center'>
        <h2 className='text-3xl font-bold mb-4 mt-20 text-[#020279]'>Lastest News and Resources</h2>
        <p className='text-[#696984]'>See the developments that have occurred to Skillines in the world</p>
      </div>
      {/* <div> */}
        <div className="flex mb-5">
          <div className='w-1/2 p-10 sm:w-full'>
            <img src={imgcmp} alt='feature pics' className='mb-7' />
            <h3 className='mb-2 text-lg font-bold text-[#020279]'>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h3>
            <p className='text-md text-[#696984] mb-5'>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
            <a href="/" className='underline text-[#696984]'>Read More</a>
          </div>
        
          <div className='w-1/2 p-10 sm:w-full'>
            <div className="flex mb-5">
              <div className='w-1/2'>
                <img src={latest1} alt="latest news images" className='object-cover h-36 w-60' />
              </div>
              <div className='w-1/2 sm:w-full'>
                <h3 className='text-l font-bold mb-2 text-[#020279]'>
                  Class Technologies Inc. Closes $30 Million Series A Financing
                </h3>
                <p className=' text-md text-[#696984]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Quam repudiandae atque, consectetur consequatur nobis et
                </p>
              </div>
            </div>

            <div className="flex mb-5">
              <div className='w-1/2 sm:w-full'>
                <img src={latest2} alt="latest news images" className='object-cover h-36 w-60' />
              </div>
              <div className='w-1/2 sm:w-full'>
                <h3 className='text-l font-bold mb-2 text-[#020279]'>
                  Class Technologies Inc. Closes $30 Million Series A Financing
                </h3>
                <p className=' text-md text-[#696984]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Quam repudiandae atque, consectetur consequatur nobis et
                </p>
              </div>
            </div>

            <div className="flex">
              <div className='w-1/2'>
                <img src={latest3} alt="latest news images" className='object-cover h-36 w-60' />
              </div>
              <div className='w-1/2'>
                <h3 className='text-l font-bold mb-2 text-[#020279]'>
                  Class Technologies Inc. Closes $30 Million Series A Financing
                </h3>
                <p className=' text-md text-[#696984]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Quam repudiandae atque, consectetur consequatur nobis et
                </p>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  )
}

export default LatestNews