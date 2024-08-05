import React, { useContext } from 'react'
import { TypeAnimation } from 'react-type-animation';


export default function TypeAnim() {
  return (
    <div className='w-full mt-20'>
      <div className=' container px-4  flex text-wrap  justify-center flex-col items-center mx-auto py-2 text-white '>
        <div className='flex flex-col pt-6 mb-1 items-center gap-6'>
          <h1 className='md:text-4xl text-xl font-extrabold'>Hair salon</h1>
          <p className='md:text-lg text-sm'>Business Promotion And Marketing.</p>
          <a href="tel:+91 8440044477">
            <button className='bg-[#ff8000] rounded-sm uppercase font-bold text-xs md:text-sm p-2'>Connect Now</button>
          </a>
        </div>
        <div className='md:text-xs text-[10px]	 leading-10  my-2 text-center	'>
          <i>
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                500,
                'Nai Professional Hair  ', // initially rendered starting point
                1000,
                'Nai Professional Hair    Acemdmy',
                1000,
                'Nai Professional Hair   salon',
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
