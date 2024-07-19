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
        <div className='mt-[200px] mx-auto gap-20 max-w-[1200px] px-10 grid md:grid-cols-2 grid-cols-1 text-white'>
            <div className='border border-white p-4' data-aos="fade-up">
                <img src="img/g1.jpg" alt="Description" />
            </div>
            <div className='text-justify' data-aos="fade-right">
                <h4 className='text-[#ff7fc2] text-[12px]'>WHO WE ARE</h4>
                <h1 className='font-bold text-[25px]'>hellow</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa tempora quod harum nemo nostrum dolorem rerum accusamus dolorum? A, itaque sunt consequuntur totam architecto deleniti cum corporis eius ratione similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa tempora quod harum nemo nostrum dolorem rerum accusamus dolorum? A, itaque sunt consequuntur totam architecto deleniti cum corporis eius ratione similique.
                </p>
            </div>
        </div>
    );
}
