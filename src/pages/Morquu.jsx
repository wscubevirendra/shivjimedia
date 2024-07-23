import React from 'react'
import Marquee from "react-fast-marquee";

export default function Morquu() {
    return (
        <Marquee>
           <div className='w-full flex gap-[90px] md:gap-[200px] my-20 justify-around items-center'>
           <img src="img/m1.png" alt="logo 1" className="w-24 md:w-20 sm:w-16 xs:w-12 mx-2" />
            <img src="img/m2.png" alt="logo 2" className="w-24 md:w-20 sm:w-16 xs:w-12 mx-2" />
            <img src="img/m3.png" alt="logo 3" className="w-24 md:w-20 sm:w-16 xs:w-12 mx-2" />
            <img src="img/m4.png" alt="logo 4" className="w-24 md:w-20 sm:w-16 xs:w-12 mx-2" />
            <img src="img/m5.png" alt="logo 5" className="w-24 md:w-20 sm:w-16 xs:w-12 mx-2" />
           </div>
        </Marquee>
    )
}
