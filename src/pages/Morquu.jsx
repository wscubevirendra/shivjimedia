import React from 'react'
import Marquee from "react-fast-marquee";

export default function Morquu() {
    return (
        <Marquee>
            <div className='w-full bg-white flex gap-[90px] md:gap-[200px] mt-10 justify-around items-center'>
                <img src="https://d2zdpiztbgorvt.cloudfront.net/us/images/24383/cover_147442296976.jpeg" alt="logo 1" className="w-24 md:w-20 sm:w-16 xs:w-12 mx-2" />
                <img src="https://d2zdpiztbgorvt.cloudfront.net/us/images/24383/cover_147442296976.jpeg" alt="logo 2" className="w-24 md:w-20 sm:w-16 xs:w-12 mx-2" />
                <img src="https://d2zdpiztbgorvt.cloudfront.net/us/images/24383/cover_147442296976.jpeg" alt="logo 3" className="w-24 md:w-20 sm:w-16 xs:w-12 mx-2" />
                <img src="https://d2zdpiztbgorvt.cloudfront.net/us/images/24383/cover_147442296976.jpeg" alt="logo 4" className="w-24 md:w-20 sm:w-16 xs:w-12 mx-2" />
                <img src="https://d2zdpiztbgorvt.cloudfront.net/us/images/24383/cover_147442296976.jpeg" alt="logo 5" className="w-24 md:w-20 sm:w-16 xs:w-12 mx-2" />
            </div>
        </Marquee>
    )
}
