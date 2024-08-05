import React, { useContext } from 'react';
import 'tailwindcss/tailwind.css';

const services = [
  {
    color: '#89ec5b',
    icon: 'fa-solid fa-paintbrush',
    title: 'Designing',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    color: '#eb5ae5',
    icon: 'fa-solid fa-code',
    title: 'Development',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    color: '#5b98eb',
    icon: 'fa-brands fa-searchengin',
    title: 'SEO',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  }
];

const ServiceCard = () => {
  
  return (
    <section className="container mx-auto py-16 min-h-screen grid place-items-center">
      <div className="flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <div key={index} className="relative h-80 w-72 flex justify-center items-center bg-gray-800 transition duration-500 group">
            <div className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-110"
              style={{
                background: service.color,
                clipPath: 'circle(150% at 50% 50%)'
              }}
            />
            <div className="relative z-10 flex flex-col items-center text-center gap-8 p-4">
              <div className="text-6xl text-gray-800 bg-gray-800 p-4 rounded-full shadow-lg group-hover:text-white group-hover:bg-transparent"
                style={{ color: service.color }}>
                <i className={service.icon}></i>
              </div>
              <h3 className="text-2xl font-medium text-white transition duration-500 group-hover:text-gray-800">{service.title}</h3>
              <p className="text-sm text-gray-400 transition duration-500 group-hover:text-gray-800">{service.description}</p>
              <a href="#" className={`relative inline-flex px-4 py-2 text-gray-800 bg-[${service.color}] border-2 border-[${service.color}] transition duration-500 group-hover:text-[${service.color}] group-hover:bg-gray-800`}>
                Contact Us
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCard;
