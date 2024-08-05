import React from 'react'
import { MdMarkEmailUnread } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { LuPin } from "react-icons/lu";

export default function Contectus() {
    const items = [
        {
            icon: <LuPin />,
            name: "Head Office",
            a: "Plot No - 91, Hastinapur Colony, 91, Karni Palace Rd, Shree Ram Nagar - A, Hastinapur Vistar, Panchyawala, Jaipur, Rajasthan 302034 ",
            url: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14230.991211612896!2d75.7249387!3d26.9114979!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db357e2265cdd%3A0x3bb36cff8509d6fa!2sSheetal%20Hair%20salon!5e0!3m2!1sen!2sin!4v1722876245057!5m2!1sen!2sinhttps://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14230.991211612896!2d75.7249387!3d26.9114979!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db357e2265cdd%3A0x3bb36cff8509d6fa!2sSheetal%20Hair%20salon!5e0!3m2!1sen!2sin!4v1722876245057!5m2!1sen!2sin"
        },
        
        {
            icon: <FaMobileAlt />,
            name: "Email",
            a: " NaiProfessional.org",
            url: " NaiProfessional.org"
        },

        {
            icon: <MdMarkEmailUnread />,
            name: "Phone",
            a: "Landline: +91-8440044477",
            url: "tel:+8440044477"
        },


    ]
    return (
        <div className='container  mx-auto'>

            <div className='grid  text-[white] my-4  md:grid-cols-3 grid-cols-1  lg:gap-6 gap-10 px-8 py-8'>
                {
                    items.map(
                        (d, i) => {
                            return (
                                <div className='w-full   border-separate p-2 '>
                                    <div className='flex items-center justify-center text-[40px] text-white'>{d.icon}
                                    </div>
                                    <div className='flex items-center justify-center text-[20px] md:text-[25px] text-[white] font-bold  pl-[15px] pt-[20px]'><h1>{d.name}</h1></div>

                                    <div className='flex items-center text-center justify-center text-[16px] text-[white]  pl-[15px] pt-[20px]'>
                                        <a href={d.url}>{d.a}</a>
                                    </div>
                                </div>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}
