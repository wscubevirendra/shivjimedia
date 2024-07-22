import React,{useContext} from'react'
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';





export default function TypeAnim() {


  return (
    <div className='w-full mt-20'>
         <div className=' w-full px-4 md:max-w-[1200px] flex text-wrap  justify-center flex-col items-center mx-auto py-6 text-white '>
            <div className='flex flex-col pt-8 mb-2 items-center gap-10'>
            <h1 className='md:text-4xl text-xl font-extrabold'>Publish your Bussines, your way</h1>
             <p className='md:text-lg text-sm'>Business Promotion And Marketing.</p>
            <Link to="/create">
            <button  className='bg-[#ff8000] rounded-sm uppercase font-bold text-xs md:text-sm p-2'>Connect Now</button>
            </Link>
            </div>
            <div className='md:text-xs text-[10px]	 leading-10  my-4 text-center	'>
              <i>
              <TypeAnimation
      preRenderFirstString={true}
      sequence={[
        500,
        'Grow Your Bussines with ', // initially rendered starting point
        1000,
        'Grow Your Bussines with  News & Advertise Content Creation .',
        1000,
        'Grow Your Bussines with  News Portal Management Services',
        1000,
        'Grow Your Bussines with  Videography And Photography Services',
        500,
      ]}
      speed={50}
      style={{ fontSize: '2em' }}
      repeat={Infinity}
    />
              </i>
      
            </div>
  </div>
    </div>
   
  )
}
