import React from 'react'
import CountUp from 'react-countup';


export default function Number() {
    return (
        <div className=' w-full mt-4 bg-fixed count-up-set '>
            <div className='container mx-auto p-5  text-white shadow-2xl'>


                <div className='flex md:justify-evenly items-center gap-4 mt-5 md:flex-row flex-col py-5'>
                    <div className='flex justify-center items-center flex-col'>
                        <p className='text-[25px] text-center'> Years of Experience
                        </p>
                        <h1 className='text-[70px]'>
                            <CountUp start={0} duration={3.75} end={4} />
                            <span>+</span>
                        </h1>

                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <p className='text-[25px] text-center'> Client rating
                        </p>
                        <h1 className='text-[70px]' >
                            <CountUp start={0} duration={3.75} end={4} />
                            

                        </h1>

                    </div>
                    <div className='flex justify-center items-center flex-col '>
                        <p className='text-[25px] text-center'> Team member
                        </p>
                        <h1 className='text-[70px]'>
                            <CountUp start={0} duration={6} end={28} />
                            <span>+</span>

                        </h1>

                    </div>
                    <div className='flex justify-center items-center flex-col '>
                        <p className='text-[25px] text-center'> Happy Clients
                        </p>
                        <h1 className='text-[70px]'>
                            <CountUp start={0} duration={6} end={500} />
                            <span>+</span>

                        </h1>

                    </div>

                </div>
            </div>

        </div>
    )
}
