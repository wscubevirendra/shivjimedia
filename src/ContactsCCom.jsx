import React from 'react'

export default function ContactsCCom() {
    return (
        <div className='max-w-[1200px] mx-auto my-4 grid lg:grid-cols-2 grid-cols-1 '>
            <div className='lg:pr-16 p-4 lg:pt-16'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57686.84113530456!2d82.93862316482713!3d25.356982765032352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2e8af17bcf57%3A0x383e4af8f4e66b8b!2sSantpati%20Nagar%2C%20Ganpathi%20Nagar%2C%20Paharia%2C%20Varanasi%2C%20Uttar%20Pradesh%20221007!5e0!3m2!1sen!2sin!4v1720633515790!5m2!1sen!2sin" className='w-full h-[50vh] ' ></iframe>
               
            </div>
            <div className='w-full   lg:pr-20 p-4 '>
                <div className='w-full py-4 text-5xl text-[#205072]'>
                    Reach Us
                </div>
                <form action="">
                    <div className='w-full grid md:grid-cols-2 grid-cols-1  gap-4  py-4'>
                        <input type="text" placeholder='Name' className='h-[40px] border px-3' />
                        <input type="text" placeholder='Companey Name*' className='h-[40px] border px-3' />
                        <input type="text" placeholder='Contact No*' className='h-[40px] border px-3' />
                        <input type="text" placeholder='E-Mail*' className='h-[40px] border px-3' />

                    </div>
                    <input type="text" placeholder='E-Mail*' className='  w-full h-[40px] border px-3 ' />
                    <textarea name="" id="" cols=" " className='border my-4 w-full placeholder:p-[10px]' placeholder='Comment'  rows=""></textarea>
                    <button className='bg-green-400 px-10 py-3 text-[16px] text-white'>Send</button>
                </form>
            </div>
        </div>
    )
}
