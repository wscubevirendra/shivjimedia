import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Intro() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: true, // Whether animation should happen only once
        });
    }, []);

    return (
        <div className='md:mt-14 mt-[6px] mx-auto gap-14 container px-10 grid md:grid-cols-2 grid-cols-1 text-white'>
            <div className='border border-white p-4' data-aos="fade-up">
                <img src="img/g1.jpg" alt="Description" />
            </div>
            <div className='text-justify' data-aos="fade-right">
                <h4 className='text-[#ff7fc2]  text-[12px]'>WHO WE ARE</h4>
                <h2 className='font-bold text-[#1abc9c] md:text-[34px] text-[19px]'>Welcome to Shivji Mediatech And Education Solutions Pvt. Ltd.</h2>
                <p style={{wordSpacing:'2px'}} className='text-[16px] md:text-[20px]  text-justify'>Welcome to Shivji Mediatech And Education Solutions Pvt. Ltd We have been working in the fields of media, news, advertising, information technology, digital marketing, education technology, and financial technology for the past 7 years. Our headquarter is in Varanasi, Uttar Pradesh, India. Our team includes experienced journalists, reporters, video editors, advertising experts, and digital marketing professionals who work together to help your business succeed.</p>

            </div>
        </div>
    );
}
