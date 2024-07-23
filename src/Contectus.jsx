import React from 'react'
import { MdMarkEmailUnread } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { LuPin } from "react-icons/lu";

export default function Contectus() {
    const items = [
        {
            icon: <LuPin />,
            name: "Head Office",
            a: "SA 17/1-A-N-11-G Santpati Nagar, Pahariya, Sarnath Varanasi , 221007",
            url: "https://www.google.com/maps/place/Rajasthan+Sadhna+Public+School/@26.832814,75.830875,16z/data=!4m6!3m5!1s0x396dc9e00eaaaaab:0x28fead6cd248a995!8m2!3d26.8311242!4d75.8298968!16s%2Fg%2F11kjmclr2z?hl=en&entry=ttu"
        },
        {
            icon: <LuPin />,
            name: "Corporate Office",
            a: "SA 17/1-A-N-11-G Santpati Nagar, Pahariya, Sarnath Varanasi , 221007",
            url: "https://www.google.com/maps/place/Rajasthan+Sadhna+Public+School/@26.832814,75.830875,16z/data=!4m6!3m5!1s0x396dc9e00eaaaaab:0x28fead6cd248a995!8m2!3d26.8311242!4d75.8298968!16s%2Fg%2F11kjmclr2z?hl=en&entry=ttu"
        },
        {
            icon: <FaMobileAlt />,
            name: "Email",
            a: "shivjimedia@gmail.com",
            url: "shivjimedia"
        },

        {
            icon: <MdMarkEmailUnread />,
            name: "Phone",
            a: "Landline: +91-9350529282 / +91-9350529282",
            url: "tel:+9350529282"
        },


    ]
    return (
        <div className='container  mx-auto'>

            <div className='grid text-[white] my-4 lg:grid-cols-4 md:grid-cols-4 grid-cols-1  lg:gap-6 gap-10 px-8 py-8'>
                {
                    items.map(
                        (d, i) => {
                            return (
                                <div className='w-full   border-separate p-2 '>
                                    <div className='flex items-center justify-center text-[40px] text-white'>{d.icon}
                                    </div>
                                    <div className='flex items-center justify-center text-[20px] md:text-[25px] text-[white] font-bold font-medium pl-[15px] pt-[20px]'><h1>{d.name}</h1></div>

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
