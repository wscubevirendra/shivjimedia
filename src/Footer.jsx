import React, { useEffect } from 'react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
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
            p: " NaiProfessional.org ",
            url: "mailto:NaiProfessional.org"
        },
        {
            icon: <CiMobile4 />,
            p: "Call us: +91- 8440044477",
            url: "tel:+91-8440044477"
        },
        
        {
            icon: <FaFacebook />,
            p: "NaiProfessional on Facebook",
            url: "https://www.facebook.com/"
        },
        {
            icon: <FaInstagram />,
            p: "NaiProfessional on Instagram",
            url: "https://www.instagram.com/"
        }
    ];


    return (
        <div style={{boxShadow: 'red 4px 13px 27px -5px, white 0px 8px 16px -8px'}} className='w-full bg-[#0F0520] mt-10'>
            <div className='container m-auto grid md:grid-cols-3 grid-cols-1 bg-[#0F0520]'>
                
                <div className='md:p-4 sm:px-[100px] px-[50px]  py-4'>
                <div className='w-full flex justify-center flex-col items-center'>
                    <img src="images/logo.png" className='w-[200px]' alt="" />
                  
                </div>
                   

                    <div className='flex '>
                   
                        <div className='text-white '>
                            <p className='text-center' ><a target='_blank' className='text-white hover:[#3fac9a]' href="">Plot No - 91, Hastinapur Colony, 91, Karni Palace Rd, Shree Ram Nagar - A, Hastinapur Vistar, Panchyawala, Jaipur, Rajasthan 302034</a></p>
                        </div>
                    </div>
                </div>

                <div className='md:p-4  sm:px-[100px] px-[50px] py-2'>
                    <div className='py-4 text-center px-2 text-white text-[22px]' >
                        Contacts
                    </div>

                    {
                        contact.map(
                            (d, i) => {
                                return (
                                    <div className='flex justify-center gap-2'>

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
                    <div className='py-4 px-2 text-white text-[22px]'>
                        Enquire Now!
                    </div>
                    <div className="flex w-full flex-col gap-6 'md:p-4 px-2 py-4">
                        <input type="text" placeholder='Your Name' className='px-5 py-2 bg-[#205072]  border placeholder:text-white text-white text-[20px]' />
                        <input type="text" placeholder='Your Email' className='px-5 py-2 bg-[#205072]  border placeholder:text-white text-white text-[20px]' />
                        <input type="text" placeholder='Contact No.' className='px-5 py-2 bg-[#205072]  border placeholder:text-white text-white text-[20px]' />
                        <Button type="submit" className='md:w-[70%] lg:w-[50%] sm:w-[40%] w-[50%] rounded text-[22px] text-white font-bold flex justify-start bg-[#3fac9a] border-none'>Submit</Button>
                    </div>
                </div>
                <span onClick={scrollToTop} className='fixed p-4 bg-[purple] rounded-full right-4 text-white cursor-pointer z-10 bottom-5'><IoIosArrowUp />
                </span>
            </div>
            <hr />
            <p className='text-white text-center'>© 2024 Copyright, Nai Professional</p>
            
        </div>
    )
}
