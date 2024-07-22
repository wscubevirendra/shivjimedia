import React,{useEffect} from 'react';
import Button from './Button';
import 'aos/dist/aos.css';
import AOS from 'aos';



// Tailwind CSS classes for responsive design and styling
const projects = [
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

  },
  {
    image: "images/Shivji_Media_Video_Creation_Services-removebg-preview.png",
    title: "Video Editing Service",
    description: "A Video Editing Service provides professional editing to enhance the quality, coherence, and impact of raw video footage. This service is crucial for creating polished, engaging, and effective videos for various purposes, including marketing, education, entertainment, and personal projects.",

  },
  {
    image: "images/Shivji_Media_Voice_Over_Services-removebg-preview.png",
    title: "Voice Over Service",
    description: "Voice Over Services provide professional voice recordings for various media projects, enhancing the quality and impact of audio and video content. These services are crucial for creating engaging, clear, and effective communication in advertisements, films, animations, corporate videos, and more.",

  }, {
    image: "images/Shivji_Media_Reels_And_Shorts_Creations-removebg-preview.png",
    title: "Reels And Shorts Creation",
    description: "Reels and Shorts Creation services focus on producing engaging, high-quality short-form video content optimized for social media platforms such as Instagram Reels, YouTube Shorts, and TikTok. These services are essential for capturing audience attention quickly, driving engagement, and enhancing brand visibility in a fast-paced digital environment",

  }, {
    image: "images/3d-blue-ray-movie-logo-9-removebg-preview.png",
    title: "Motion LOGO / 3D LOGO Design",
    description: "Motion Logo and 3D Logo Design services specialize in creating dynamic and visually striking logos that enhance brand identity and engagement. These services are crucial for businesses looking to make a memorable impression and stand out in a competitive market.",

  }, {
    image: "images/Shivji-Media-News-MIC-Printing--1024x1024.png",
    title: "News Media Mike ID And LOGO Printing",
    description: "News Media Mic ID and Logo Printing services focus on creating customized microphone identification (mic ID) flags and logos for media outlets, journalists, and broadcasters. These services are essential for establishing a professional appearance, enhancing brand visibility, and ensuring consistent branding during interviews and broadcasts.",

  }, {
    image: "images/download-removebg-preview.png",
    title: "News Portal / RNI Registration",
    description: "News Portal and RNI (Registrar of Newspapers for India) Registration services are essential for online news platforms and traditional newspapers seeking legal recognition and compliance in India. These services facilitate the official registration process, ensuring that news entities operate within the regulatory framework and gain credibility.",

  }, {
    image: "images/Screen_Shot_2024-06-23_at_1.44.35_PM-removebg-preview.png",
    title: "Product / Services Review Video",
    description: "Product / Services Review Videos are informative and opinion-driven content pieces that assess and critique specific products or services. These videos serve as valuable resources for consumers making purchasing decisions and can significantly impact brand perception.By delivering comprehensive and objective assessments, these videos help both consumers and brands navigate the marketplace effectively.",

  }, {
    image: "images/Shivji-Media-Graphic-Design.png",
    title: "Graphic Designing Services",
    description: "Graphic Designing Services encompass a wide range of creative and technical solutions aimed at visually communicating messages, concepts, and ideas through various mediums. These services are essential for businesses, organizations, and individuals looking to enhance their brand identity, marketing materials, and overall visual presence.",

  }, {
    image: "images//Shivji-Media-News-Portal-Development-1024x744.jpeg",
    title: "News / Business Portal Development",
    description: "News / Business Portal Development involves the creation and implementation of digital platforms dedicated to delivering news, information, and business-related content to users. These portals serve as centralized hubs where audiences can access timely updates, analysis, and insights across various industries.",

  }, {
    image: "images/1689937761096-removebg-preview.png",
    title: "Website / App Development",
    description: "Website and App Development refers to the process of creating and building digital platforms that serve specific purposes, whether informational, transactional, or interactive. These platforms are crucial for businesses, organizations, and individuals looking to establish an online presence, engage with audiences, and facilitate various functionalities.",

  },
  , {
    image: "images/1705486171646-removebg-preview.png",
    title: "Social Media Management Services",
    description: "Social Media Management Services involve the strategic planning, implementation, and oversight of a brand’s presence on social media platforms. These services are essential for businesses and individuals looking to effectively engage with their audience, build brand awareness, and drive meaningful interactions.",

  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({
        duration: 1000, // Animation duration in milliseconds
        once: true, // Whether animation should happen only once
    });
}, []);


  return (
    <section className="bg-[#0F0520] text-white py-8" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 relative">
          <span>Projects.</span>
          <div className="absolute -right-8 -top-4 w-10 h-7 bg-red-500 opacity-20"></div>
        </h2>
        <div  className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article data-aos="flip-left" data-aos-offset="300" key={index} className="bg-[#0F0520] p-4 rounded-lg shadow-lg transition-colors border border-white duration-300 ">
              <div className="relative mb-4">
                <img src={project.image} alt={project.title} className="w-full h-44 object-cover rounded-md" />
                <a href={project.dribbble} className="absolute bottom-2 right-2 p-2 bg-black text-white rounded-full hover:bg-[red]" target="_blank" rel="noopener noreferrer">
                  <i className="ri-arrow-right-up-line text-2xl"></i>
                </a>
              </div>
              <div className="mb-4">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h2>
                <p className="text-sm text-white">{project.description}</p>
              </div>
              <div className="flex  space-x-4">
                
                <a href={project.dribbble} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-500">
                  <Button>
                    Chat Now
                  </Button>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;





