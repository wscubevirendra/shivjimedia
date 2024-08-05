import React from 'react'
import CountUp from 'react-countup';


export default function Number() {
    return (
        <div className=' w-full mt-4 bg-fixed font-bold   count-up-set '>
            <div className='container mx-auto p-2  text-white shadow-2xl'>
                <div className='flex md:justify-evenly items-center gap-4 mt-5 md:flex-row flex-col py-5'>
                    <div className='flex md:text-[25px] text-[18px] justify-center items-center flex-col'>
                        <p className='  text-center'> Years of Experience
                        </p>
                        <h1 className='md:text-[60px] text-[45px]'>
                            <CountUp start={0} duration={3.75} end={7} />
                            <span>+</span>
                        </h1>
                    </div>
                    <div className='flex md:text-[25px] text-[18px] justify-center items-center flex-col'>
                        <p className=' text-center'> Client rating
                        </p>
                        <h1 className='md:text-[60px] text-[45px]' >
                            <CountUp start={0} duration={3.75} end={4} />
                            <span>+</span>
                        </h1>
                    </div>
                    <div className='flex md:text-[25px] text-[18px] justify-center items-center flex-col '>
                        <p className='text-center'> Team member</p>
                        <h1 className='md:text-[60px] text-[45px]'>
                            <CountUp start={0} duration={6} end={28} />
                            <span>+</span>
                        </h1>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}
