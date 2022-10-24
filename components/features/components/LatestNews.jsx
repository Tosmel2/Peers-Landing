import Image from "next/image";

import latest1 from "../assets/latest1.png";
import latest2 from "../assets/latest2.png";
import latest3 from "../assets/latest3.png";
import imgcmp from "../assets/imgcmp.png";

const LatestNews = () => {
  return (
    <div>
      <div className='text-center'>
        <h2 className='text-3xl font-bold mb-4 mt-20 text-[#020279]'>
          Lastest News and Resources
        </h2>
        <p className='text-[#696984]'>
          See the developments that have occurred to Skillines in the world
        </p>
      </div>
      {/* <div> */}
      <div className='flex mb-5 flex-col lg:flex-row'>
        <div className='p-10 lg:w-1/2 m-auto sm:m-0'>
          <Image src={imgcmp} alt='feature pics' className='mb-7' />
          <h3 className='mb-2 text-lg font-bold text-[#020279]'>
            Class adds $30 million to its balance sheet for a Zoom-friendly
            edtech solution
          </h3>
          <p className='text-md text-[#696984] mb-5'>
            Class, launched less than a year ago by Blackboard co-founder
            Michael Chasen, integrates exclusively...
          </p>
          <a href='/' className='underline text-[#696984] hover:text-[#020279]'>
            Read More
          </a>
        </div>

        <div className='p-10 md:block grid grid-cols-2 md:w-1/2'>
          <div className='flex mb-5 flex-col md:flex-row m-auto items-center text-center md:text-left'>
            <div className='md:w-1/2 mr-2'>
              <Image
                src={latest1}
                alt='latest news images'
                className='object-cover h-36 w-60'
              />
            </div>
            <div className='md:w-1/2'>
              <h3 className='text-l font-bold mb-2 text-[#020279]'>
                Class Technologies Inc. Closes $30 Million Series
              </h3>
              <p className=' text-sm text-[#696984]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                repudiandae atque.
              </p>
            </div>
          </div>

          <div className='flex mb-5 flex-col lg:flex-row m-auto items-center text-center lg:text-left'>
            <div className='md:w-1/2 mr-2'>
              <Image
                src={latest2}
                alt='latest news images'
                className='object-cover h-36 w-60'
              />
            </div>
            <div className='md:w-1/2'>
              <h3 className='text-l font-bold mb-2 text-[#020279]'>
                Class Technologies Inc. Closes $30 Million Series
              </h3>
              <p className=' text-sm text-[#696984]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                repudiandae atque.
              </p>
            </div>
          </div>

          <div className='flex flex-col md:flex-row m-auto items-center text-center lg:text-left'>
            <div className='md:w-1/2 mr-2'>
              <Image
                src={latest3}
                alt='latest news images'
                className='object-cover h-36 w-60'
              />
            </div>
            <div className='md:w-1/2'>
              <h3 className='text-l font-bold mb-2 text-[#020279]'>
                Class Technologies Inc. Closes $30 Million Series
              </h3>
              <p className=' text-sm text-[#696984]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                repudiandae atque.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default LatestNews;
