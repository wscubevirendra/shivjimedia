import React, { useEffect, useContext } from 'react';
import Button from './Button';
import 'aos/dist/aos.css';
import AOS from 'aos';


const OurMediaServices = [
  {
    image: "images/Shivji-Media-Content-Writing-Services.png",
    title: "Blog / News Writing Service",
    description: "A Blog / News Writing Service provides professional content creation tailored to the needs of individuals, businesses, and organizations. This service is essential for maintaining a dynamic online presence, engaging audiences, and boosting SEO efforts.",

  },
  {
    image: "images/Shivji_Media_Video_Content_Creation-removebg-preview.png",

    title: "Video / Audio Content Creation",
    description: "Video and audio content creation services specialize in producing engaging and high-quality multimedia content tailored to the needs of individuals, businesses, and organizations. These services are crucial for enhancing digital presence, engaging audiences, and delivering messages effectively across various platforms.",

  },
  {
    image: "images/Shivji-Media-Advertising-Creation-293x300.png",
    title: "Advertising Creation Services",
    description: "Advertising Creation Services are specialized services that focus on developing compelling advertisements across various media to help businesses promote their products, services, or brand effectively. These services are critical for attracting customers, driving sales, and enhancing brand visibility.",

  }
]

const DigitalMarketingServices = [
  {
    image: "images//Shivji-Media-News-Portal-Development-1024x744.jpeg",
    title: "News / Business Portal Development",
    description: "News / Business Portal Development involves the creation and implementation of digital platforms dedicated to delivering news, information, and business-related content to users. These portals serve as centralized hubs where audiences can access timely updates, analysis, and insights across various industries.",

  },
  {
    image: "images/1689937761096-removebg-preview.png",
    title: "Website / App Development",
    description: "Website and App Development refers to the process of creating and building digital platforms that serve specific purposes, whether informational, transactional, or interactive. These platforms are crucial for businesses, organizations, and individuals looking to establish an online presence, engage with audiences, and facilitate various functionalities.",

  },
  {
    image: "images/1705486171646-removebg-preview.png",
    title: "Social Media Management Services",
    description: "Social Media Management Services involve the strategic planning, implementation, and oversight of a brand’s presence on social media platforms. These services are essential for businesses and individuals looking to effectively engage with their audience, build brand awareness, and drive meaningful interactions.",

  },
]

// Tailwind CSS classes for responsive design and styling
const FintechServices = [
  {
    image: "images/360_F_172442946_nHZXm0mqLPUCgKfRLyHHkL5eW5ww5Jbj-removebg-preview.png",
    title: "GST Services",
    description: "GST (Goods and Services Tax) Services refer to the various administrative and compliance activities related to GST implementation and management for businesses. GST is a unified indirect tax levied on the supply of goods and services in India, replacing multiple indirect taxes previously levied by the central and state governments."

  },
  {
    image: "images/Screen_Shot_2024-06-23_at_4.09.34_PM-removebg-preview.png",
    title: "Income Tax Services",
    description: "Income Tax Services encompass a range of professional services provided to individuals, businesses, and organizations to manage their income tax obligations effectively. Income tax is a direct tax levied by the government on the income earned by individuals and entities within its jurisdiction."

  },
  {
    image: "images/kisspng-financial-accounting-accountant-bookkeeping-clip-a-portfolio-5abcd7200543c1.9339863015223252800216-removebg-preview.png",
    title: "Accounting Tax Services",
    description: "Accounting Tax Services encompass a range of professional services provided by accounting firms or tax professionals to help individuals, businesses, and organizations manage their tax obligations effectively. These services integrate accounting principles with tax expertise to ensure compliance efficiency, and support financial decision-making."

  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  const handleWhatsAppClick = (props) => {
    const phoneNumber = '9350529282';
    const message = encodeURIComponent(`I am interested in your product ${props.name} and would like to get more information. I would also like to know how I can reach out to your team. Please provide details on how to contact us`);

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
  };



  return (
    <section className="bg-[#0F0520] w-full text-white py-8" id="projects">
      <div className="container mx-auto px-4">
        <div className='text-center my-10'>
          <h1 className='text-3xl text-[#bb3186] font-body underline pb-10'>Find Our Exclusive Services</h1>
          <hr />
        </div>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {OurMediaServices.map((project, index) => (
            <article style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, white 0px 3px 6px' }} data-aos="zoom-in" data-aos-offset="300" key={index} className="bg-[#0F0520] px-2 text-justify rounded-lg  transition-colors  duration-300 ">
              <div className="relative p-2 mb-4">
                <img src={project.image} alt={project.title} className="w-full h-44  rounded-md" />
                <a href="tel:+91 9350529282" className="absolute bottom-2 right-2 p-2 bg-black text-white rounded-full hover:bg-[red]" target="_blank" rel="noopener noreferrer">
                  <i className="ri-arrow-right-up-line text-2xl"></i>
                </a>
              </div>
              <div className="mb-4">
                <h2 className="text-lg text-center  text-white font-bold mb-2">{project.title}</h2>
                <p className="text-sm opacity-[0.7] text-white">{project.description}</p>
              </div>
              <div className="flex  justify-center items-center my-2">

                <button onClick={() => handleWhatsAppClick(project.title)}>

                  <Button >
                    Chat Now
                  </Button>
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className='text-center my-10'>

          <h1 className='text-3xl text-[#bb3186] font-body underline pt-10'>Our Media Services</h1>
          <h2 className='text-xl text-[#bb3186] my-6'>A to Z Solutions For Your Business</h2>
          <hr />
        </div>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {DigitalMarketingServices.map((project, index) => (
            <article style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, white 0px 3px 6px' }} data-aos="zoom-in" data-aos-offset="300" key={index} className="bg-[#0F0520] px-2 text-justify rounded-lg  transition-colors  duration-300 ">
              <div className="relative p-2 mb-4">
                <img src={project.image} alt={project.title} className="w-full h-44  rounded-md" />
                <a href="tel:+91 9350529282" className="absolute bottom-2 right-2 p-2 bg-black text-white rounded-full hover:bg-[red]" target="_blank" rel="noopener noreferrer">
                  <i className="ri-arrow-right-up-line text-2xl"></i>
                </a>
              </div>
              <div className="mb-4">
                <h2 className="text-lg text-center  text-white font-bold mb-2">{project.title}</h2>
                <p className="text-sm opacity-[0.7] text-white">{project.description}</p>
              </div>
              <div className="flex  justify-center items-center my-2">

                <button onClick={() => handleWhatsAppClick(project.title)}>

                  <Button >
                    Chat Now
                  </Button>
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className='text-center my-10'>

          <h1 className='text-3xl text-[#bb3186] font-body underline pt-10'>Fintech Services </h1>
          <h2 className='text-xl text-[#bb3186] my-6'>A to Z Solutions For Your Business </h2>

          <hr />
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {FintechServices.map((project, index) => (
            <article style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, white 0px 3px 6px' }} data-aos="zoom-in" data-aos-offset="300" key={index} className="bg-[#0F0520] px-2 text-justify rounded-lg  transition-colors  duration-300 ">
              <div className="relative p-2 mb-4">
                <img src={project.image} alt={project.title} className="w-full h-44  rounded-md" />
                <a href="tel:+91 9350529282" className="absolute bottom-2 right-2 p-2 bg-black text-white rounded-full hover:bg-[red]" target="_blank" rel="noopener noreferrer">
                  <i className="ri-arrow-right-up-line text-2xl"></i>
                </a>
              </div>
              <div className="mb-4">
                <h2 className="text-lg text-center  text-white font-bold mb-2">{project.title}</h2>
                <p className="text-sm opacity-[0.7] text-white">{project.description}</p>
              </div>
              <div className="flex  justify-center items-center my-2">

                <button onClick={() => handleWhatsAppClick(project.title)}>

                  <Button >
                    Chat Now
                  </Button>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;







