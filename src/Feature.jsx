import React from 'react'
import { GiFoldedPaper } from "react-icons/gi";
import { FaIdCardAlt } from "react-icons/fa";
import { GiNewspaper } from "react-icons/gi";

export default function Feature() {
    return (
        <div className='bg-Img my-[200px]  w-full '>
            <div className=' bg-[#ff4528b9] '>
                <div className='max-w-[1200px] mx-auto  grid grid-cols-1 md:grid-cols-5  '>

                    <div className=' col-span-3 pl-10 pt-10 '>
                        <h1 className='font-family'>Next printing level</h1>
                        <h2 className='text-[70px] font-bold text-white'>Printify Unique Features</h2>
                        <p className='text-white text-[22px]'>Take your business cards, Flyers and Stickers to the next level with exclusive and innovative features.</p>
                    </div>
                    <div className=' col-span-2  flex '>


                        <div style={{ backgroundImage: "url('images/feature/2.webp')", backgroundRepeat: "no-repeat" }} className='mt-10  h-[300px] w-[30%] flex flex-col items-center  pt-[5%] ml-2   ' >
                            <GiFoldedPaper className='text-[100px] my-3' />
                            <h1 className='hover:text-[red] cursor-pointer font-serif font-semibold'>Business-Cards</h1>

                        </div>
                        <div style={{ backgroundImage: "url('images/feature/2.webp')", backgroundRepeat: "no-repeat" }} className='mt-10  h-[300px] w-[30%] flex flex-col items-center  pt-[5%] ml-2   ' >
                            <FaIdCardAlt className='text-[100px] my-3 ' />
                            <h1 className='hover:text-[red] cursor-pointer font-serif font-semibold'>Business-Banner</h1>

                        </div>
                        <div style={{ backgroundImage: "url('images/feature/2.webp')", backgroundRepeat: "no-repeat" }} className='mt-10  h-[300px] w-[30%] flex flex-col items-center pt-[5%] ml-2   ' >
                            <GiNewspaper className='text-[100px] my-3 ' />
                            <h1 className='hover:text-[red] cursor-pointer font-serif font-semibold'>Business-flex</h1>

                        </div>



                    </div>


                </div>
            </div>



        </div>
    )
}

