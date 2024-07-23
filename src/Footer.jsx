import React, { useEffect } from 'react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { CiMobile4 } from "react-icons/ci";
import { IoIosArrowUp } from "react-icons/io";
import { FaFacebook, FaInstagram } from "react-icons/fa";




export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Adds a smooth scrolling animation
        });
    }



    const contact = [
        {
            icon: <MdOutlineMail />,
            p: "shivjimedia1@gmail.com",
            url: "mailto:support@shivjimedia.org"
        },
        {
            icon: <CiMobile4 />,
            p: "Call us: +91-+91-9350529282",
            url: "tel:+91-9350529282"
        },
        {
            icon: <CiMobile4 />,
            p: "Call us: 91-9350529282",
            url: "tel:91-9350529282"
        },
        {
            icon: <FaFacebook />,
            p: "shivjimedia on Facebook",
            url: "https://www.facebook.com/shivjimedia"
        },
        {
            icon: <FaInstagram />,
            p: "shivjimedia on Instagram",
            url: "https://www.instagram.com/shivjimedia"
        }
    ];


    return (
        <div style={{
            borderTop: '1px solid white'
        }} className='w-full bg-[#0F0520]'>
            <div className='max-w-[1200px] m-auto grid md:grid-cols-4 grid-cols-1 bg-[#0F0520]'>
                <div className='w-full flex justify-center flex-col items-center'>
                    <img src="images/logo.jpg" className='md:w-[80%] w-[50%]  py-4 ' alt="" />
                    <p className='text-white text-center'>© 2023 Copyright, shivjimedia</p>
                </div>
                <div className='md:p-4 sm:px-[100px] px-[50px]  py-4x'>
                    <div className=' px-2 py-4 text-[22px] text-white'>
                        Address
                    </div>

                    <div className='flex gap-2 pb-8'>
                        <div className='px-2 py-3'>
                            <FaLocationDot className='text-white block  hover:[#3fac9a]' />

                        </div>
                        <div className='text-white '>

                            <h1 className='text-[22px] py-1'>Office</h1>
                            <p ><a target='_blank' className='text-white hover:[#3fac9a]' href="https://www.google.com/maps/place/Rajasthan+Sadhna+Public+School/@26.832814,75.830875,16z/data=!4m6!3m5!1s0x396dc9e00eaaaaab:0x28fead6cd248a995!8m2!3d26.8311242!4d75.8298968!16s%2Fg%2F11kjmclr2z?hl=en&entry=ttu">SA 17/1-A-N-11-G Santpati Nagar, Pahariya, Sarnath Varanasi , 221007</a></p>
                        </div>
                    </div>


                </div>

                <div className='md:p-4  sm:px-[100px] px-[50px] py-4'>
                    <div className='py-4 px-2 text-white text-[22px]' >
                        Contacts
                    </div>

                    {
                        contact.map(
                            (d, i) => {
                                return (
                                    <div className='flex gap-2'>

                                        <div className='px-2 py-3 text-[#3fac9a] block  hover:text-white'>
                                            {d.icon}
                                        </div>
                                        <div
                                            className='text-white  py-2'>
                                            <p
                                            ><a className='text-white hover:text-[#3fac9a]' href={d.url}>{d.p}</a></p>
                                        </div>
                                    </div>
                                )
                            }
                        )
                    }


                </div>
                <div className='sm:px-[10px] px-[50px] py-4'>
                    <div className='py-4 px-2 text-white text-[22px]' >
                        Enquire Now!
                    </div>
                    <div className="flex w-full flex-col gap-6 'md:p-4 px-2 py-4">
                        <input type="text" placeholder='Your Name' className='px-5 py-2 bg-[#205072]  border placeholder:text-white text-white text-[20px]' />
                        <input type="text" placeholder='Your Email' className='px-5 py-2 bg-[#205072]  border placeholder:text-white text-white text-[20px]' />
                        <input type="text" placeholder='Contact No.' className='px-5 py-2 bg-[#205072]  border placeholder:text-white text-white text-[20px]' />
                        <Button type="submit" className='md:w-[70%] lg:w-[50%] sm:w-[40%] w-[50%] rounded text-[22px] text-white font-bold flex justify-start bg-[#3fac9a] border-none'>Submit</Button>
                    </div>
                </div>
                <span onClick={scrollToTop} className='fixed p-4 bg-[#3fac9a] rounded-full right-4 text-white cursor-pointer z-10 bottom-5'><IoIosArrowUp /></span>
            </div>
        </div>
    )
}
