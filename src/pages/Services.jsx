import React, { useEffect } from 'react';
import Button from '../Button';
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

  },
]

const DigitalMarketingServices = [
  {
    image: "images//Shivji-Media-News-Portal-Development-1024x744.jpeg",
    title: "News / Business Portal Development",
    description: "News / Business Portal Development involves the creation and implementation of digital platforms dedicated to delivering news, information, and business-related content to users. These portals serve as centralized hubs where audiences can access timely updates, analysis, and insights across various industries.",

  }, {
    image: "images/1689937761096-removebg-preview.png",
    title: "Website / App Development",
    description: "Website and App Development refers to the process of creating and building digital platforms that serve specific purposes, whether informational, transactional, or interactive. These platforms are crucial for businesses, organizations, and individuals looking to establish an online presence, engage with audiences, and facilitate various functionalities.",

  },
  {
    image: "images/1705486171646-removebg-preview.png",
    title: "Social Media Management Services",
    description: "Social Media Management Services involve the strategic planning, implementation, and oversight of a brand’s presence on social media platforms. These services are essential for businesses and individuals looking to effectively engage with their audience, build brand awareness, and drive meaningful interactions.",

  }, ,
  {
    image: "images/seo-banner-1.png",
    title: "Search Engine Optimization Service",
    description: "Search Engine Optimization (SEO) Service refers to the practice of optimizing websites and digital content to improve their visibility and ranking on search engine results pages (SERPs). SEO is essential for businesses and organizations aiming to attract organic (non-paid) traffic from search engines like Google, Bing, and Yahoo.",

  },
  {
    image: "images/output-onlinepngtools-61-removebg-preview-1.png",
    title: "Social Media Advertisement",
    description: "Social Media Advertisement refers to paid promotional activities conducted on various social media platforms to reach targeted audiences, increase brand visibility, and achieve specific marketing objectives. These advertisements leverage the extensive user data and engagement capabilities of social networks to deliver targeted messages to users based on demographics, interests, behavior, and other criteria.",

  },
  {
    image: "images/Screen_Shot_2024-06-23_at_2.27.55_PM-removebg-preview-1.png",
    title: "Chatbot Automation Software",
    description: "Chatbot Automation Software refers to tools and platforms that enable businesses to automate customer interactions and support services through chatbots. These software solutions utilize artificial intelligence (AI) and natural language processing (NLP) to simulate human-like conversations and provide immediate responses to user inquiries.",

  },
  {
    image: "images/61d2c9faf50b08ebb9c1cafc_whatsapp-business-api-1-1024x704.png",
    title: "Whatsapp Business API",
    description: "The WhatsApp Business API is a tool designed for businesses to communicate with their customers on WhatsApp, a popular messaging platform owned by Facebook. It enables businesses to engage with users through automated messages, notifications, and customer support, leveraging WhatsApp’s secure and widely-used platform.",

  }, {
    image: "images/Screen_Shot_2024-06-23_at_2.51.44_PM-removebg-preview.png",
    title: "Data Base Management For Business",
    description: "Database Management for Business refers to the process of organizing, storing, and retrieving data efficiently to support organizational operations, decision-making, and strategic initiatives. It involves the implementation of systems, policies, and procedures to ensure data integrity, security, and accessibility.",

  }, {
    image: "images/Shivji-Media-Content-Writing-Services.png",
    title: "Affiliate And Influence Marketing",
    description: "Affiliate and Influencer Marketing are two distinct but related strategies used by businesses to promote their products or services through external partnerships with individuals or entities who have significant online influence.",

  }, {
    image: "images/Screen_Shot_2024-06-23_at_3.14.08_PM-removebg-preview.png",
    title: "Start-up Business Promotion",
    description: "Start-up Business Promotion involves the strategic marketing and outreach efforts undertaken by new businesses to gain visibility, attract customers, and establish a foothold in the market. It encompasses various activities aimed at creating awareness, building credibility, and generating interest in the products or services offered by the start-up."

  }, {
    image: "images/Screen_Shot_2024-06-23_at_3.14.08_PM-removebg-preview.png",
    title: "Sponsored Advertising",
    description: "Sponsored Advertising refers to paid promotional campaigns where businesses or individuals pay to have their content or messages displayed on various platforms, typically to reach a targeted audience and achieve specific marketing objectives."

  },
]

// Tailwind CSS classes for responsive design and styling
const FintechServices = [
  {
    image: "images/360_F_172442946_nHZXm0mqLPUCgKfRLyHHkL5eW5ww5Jbj-removebg-preview.png",
    title: "GST Services",
    description: "GST (Goods and Services Tax) Services refer to the various administrative and compliance activities related to GST implementation and management for businesses. GST is a unified indirect tax levied on the supply of goods and services in India, replacing multiple indirect taxes previously levied by the central and state governments."

  }, {
    image: "images/Screen_Shot_2024-06-23_at_4.09.34_PM-removebg-preview.png",
    title: "Income Tax Services",
    description: "Income Tax Services encompass a range of professional services provided to individuals, businesses, and organizations to manage their income tax obligations effectively. Income tax is a direct tax levied by the government on the income earned by individuals and entities within its jurisdiction."

  }, {
    image: "images/kisspng-financial-accounting-accountant-bookkeeping-clip-a-portfolio-5abcd7200543c1.9339863015223252800216-removebg-preview.png",
    title: "Accounting Tax Services",
    description: "Accounting Tax Services encompass a range of professional services provided by accounting firms or tax professionals to help individuals, businesses, and organizations manage their tax obligations effectively. These services integrate accounting principles with tax expertise to ensure compliance, optimize tax efficiency, and support financial decision-making."

  }, {
    image: "images/45ef768c9ad40958c9c1e74d2593316c-removebg-preview.png",
    title: "Legal Services",
    description: "Legal Services refer to professional services provided by lawyers, attorneys, or legal firms to individuals, businesses, and organizations to address legal issues, ensure compliance with laws and regulations, and protect legal rights and interests."

  }, {
    image: "images/Screen_Shot_2024-06-23_at_4.48.06_PM-removebg-preview-1.png",
    title: "ROC Services",
    description: "Legal Services refer to professional services provided by lawyers, attorneys, or legal firms to individuals, businesses, and organizations to address legal issues, ensure compliance with laws and regulations, and protect legal rights and interests."

  }, {
    image: "images/Screen_Shot_2024-06-23_at_5.37.53_PM-removebg-preview.png",
    title: "Chartered Accountant & Company Secretary Services",
    description: "Chartered Accountant (CA) and Company Secretary (CS) services encompass professional expertise and advisory provided by qualified professionals to ensure financial compliance, governance, and strategic financial management for businesses."

  }, {
    image: "images/Screen_Shot_2024-06-23_at_5.59.39_PM-removebg-preview.png",
    title: "ISO Certification Services",
    description: "ISO Certification Services refer to the process by which organizations obtain certification to ISO (International Organization for Standardization) standards, demonstrating their adherence to internationally recognized quality management practices. ISO certifications validate that a company’s products, services, processes, or management systems meet specific criteria for quality, efficiency, and safety."

  }, {
    image: "images/trademark-registration-services-500x500-jpg-removebg-preview.png",
    title: "Trademark & Intellectual Rights Services",
    description: "Trademark & Intellectual Property (IP) Services encompass professional assistance and legal expertise provided to individuals, businesses, and organizations for protecting their intellectual assets. Intellectual property refers to creations of the mind, such as inventions, literary and artistic works, designs, symbols, names, and images used in commerce."

  }, {
    image: "images/Screen_Shot_2024-06-23_at_6.07.55_PM-removebg-preview.png",
    title: "Food license Services",
    description: "Food License Services refer to the regulatory and compliance services necessary for obtaining licenses and certifications required to operate a food business legally. These services ensure that food businesses adhere to safety, hygiene, and quality standards set by regulatory authorities."

  }, {
    image: "images/Screen_Shot_2024-06-23_at_6.12.00_PM-removebg-preview.png",
    title: "Import Export license Services",
    description: "Import Export License Services involve obtaining the necessary licenses and permits required for businesses to engage in international trade activities, including importing and exporting goods and commodities across borders. These services ensure compliance with regulatory frameworks, facilitate smooth operations, and mitigate risks associated with international trade."

  }, {
    image: "images/Screen_Shot_2024-06-23_at_6.15.57_PM-removebg-preview.png",
    title: "Project Report & CMA Services",
    description: "We Provide Project Report and CMA Report/Data Preparation Services Across India. We are serving Credit Monitoring Analysis (CMA) Report for Bank Business Loan, Startup Loan, MUDRA Loan, Small Finance etc."

  }, {
    image: "images/Screen_Shot_2024-06-23_at_6.21.49_PM-removebg-preview.png",
    title: "Digital Signature (DSC) Services",
    description: "Digital Signature (DSC) Services involve the issuance and management of digital signatures, which are electronic equivalents of handwritten signatures. These services ensure secure and authenticated electronic transactions, document signing, and communications in both personal and business contexts."

  }, {
    image: "images/35b2ad3008031cb4523884ff340936fd.jpg",
    title: "New DTH Connection Services",
    description: "New DTH (Direct-to-Home) Connection Services involve the setup and installation of satellite television services directly to consumers’ homes. DTH services offer a wide range of TV channels and interactive services delivered via satellite, providing viewers with access to digital entertainment and information."

  }, {
    image: "images/Screenshot_2024-06-24_at_2.51.13_PM-removebg-preview-removebg-preview.png",
    title: "Ticket Booking Services",
    description: "Ticket Booking Services refer to platforms or agencies that facilitate the reservation and purchase of tickets for various events, travel, entertainment, and activities. These services streamline the process of securing tickets, whether for flights, trains, movies, concerts, events, or other experiences."

  }, {
    image: "images/download-removebg-preview-1.png",
    title: "Personal Loan Services",
    description: "Personal Loan Services refer to financial products offered by banks, credit unions, and financial institutions to individuals for personal expenses, emergencies, or other financial needs. These loans are typically unsecured, meaning they do not require collateral, and are based on the borrower’s creditworthiness and income."

  }, {
    image: "images/Screenshot_2024-06-25_at_12.09.34_PM-removebg-preview.png",
    title: "Business loan Services",
    description: "Business Loan Services refer to financial products provided by banks, financial institutions, or alternative lenders to businesses for funding various operational needs, expansions, investments, or capital expenditures. These loans are tailored to meet the specific financial requirements of businesses, ranging from small enterprises to large corporations."

  }, {
    image: "images/Screenshot_2024-06-25_at_12.13.48_PM-removebg-preview.png",
    title: "Home Loan Services",
    description: "Home Loan Services refer to financial products provided by banks, financial institutions, or mortgage lenders to individuals for purchasing or constructing residential properties. These loans are specifically designed to help individuals fulfill their dream of owning a home."

  }, {
    image: "images/porto.png",
    title: "Loan Against Property Services",
    description: "Loan Against Property (LAP) Services refer to financial products offered by banks and financial institutions where individuals can pledge their residential or commercial property as collateral to secure a loan. These loans provide individuals with access to funds based on the market value of their property, offering flexibility in utilizing funds for various purposes."

  }, {
    image: "images/Screenshot_2024-06-25_at_12.20.07_PM-removebg-preview.png",
    title: "Gold Loan Services",
    description: "Gold Loan Services are financial products offered by banks, non-banking financial companies (NBFCs), and other lenders where individuals can pledge their gold ornaments, coins, or bars as collateral to secure a loan. These loans provide quick access to funds based on the market value of the gold pledged"

  }, {
    image: "images/Screen_Shot_2024-06-26_at_2.28.36_PM-removebg-preview-1.png",
    title: "Instant Micro Loan Services",
    description: "Micro Loan Services refer to small-scale financial products provided by microfinance institutions (MFIs), banks, or other financial entities to individuals or micro-enterprises who lack access to traditional banking services. These loans are typically of low value and are aimed at supporting entrepreneurship, income generation, and poverty alleviation in underserved communities."

  }, {
    image: "images/Screen_Shot_2024-06-26_at_2.48.28_PM-removebg-preview-1.png",
    title: "Car Loan Services",
    description: "Car Loan Services are financial products offered by banks, credit unions, and financial institutions to individuals for purchasing new or used vehicles. These loans are specifically tailored to help individuals afford the cost of a car, whether for personal use or business purposes."

  }, {
    image: "images/credit-cards-5569220-4655953-removebg-preview-1.png",
    title: "Credit Cards Services",
    description: "Credit card services refer to financial products provided by banks and financial institutions that allow cardholders to make purchases and payments based on a line of credit extended by the issuer"

  }, {
    image: "images/Screen_Shot_2024-06-27_at_5.09.21_PM-removebg-preview.png",
    title: "Insurance Services",
    description: "Insurance services encompass a wide range of financial products offered by insurance companies to individuals and businesses to mitigate financial risks associated with various life events, assets, and liabilities."

  }, {
    image: "images/pf___esic-removebg-preview-edited.png",
    title: "PF & ESIC Services",
    description: "PF (Provident Fund) and ESIC (Employees’ State Insurance Corporation) services are statutory benefits provided to employees in India aimed at ensuring social security and financial stability during various life events."

  }, {
    image: "images/Gem-m1-removebg-preview-edited.png",
    title: "GEM Portal Services",
    description: "The GEM (Government e-Marketplace) Portal is an online platform launched by the Government of India to facilitate procurement of goods and services by various government departments, ministries, and public sector undertakings (PSUs)"

  }, {
    image: "images/Screen_Shot_2024-06-27_at_5.36.18_PM-removebg-preview.png",
    title: "Startup India Services",
    description: "Startup India is an initiative by the Government of India launched in 2016 to promote and support entrepreneurship and startup ventures across the country.Startup India Services play a pivotal role in nurturing a vibrant startup ecosystem in India, fostering innovation, job creation, and economic development."

  }, {
    image: "images/Screen_Shot_2024-06-27_at_5.42.19_PM-removebg-preview.png",
    title: "Aadhar Correction Frenchise Services",
    description: "Aadhaar Correction Centre Services are essential for maintaining accurate and up-to-date Aadhaar details, facilitating seamless access to services and benefits for individuals across India. The process ensures compliance with UIDAI guidelines and enhances the security and reliability of Aadhaar as a unique identification document."

  }
];

const Services = () => {
  const handleWhatsAppClick = (props) => {
    const phoneNumber = '9350529282';
    const message = encodeURIComponent(`I am interested in your product ${props.name} and would like to get more information. I would also like to know how I can reach out to your team. Please provide details on how to contact us`);

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);


  return (
    <section className="bg-[#0F0520] w-full text-white py-8" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6  text-center">
          <span className='text-[purple]'>Pro</span>
          <span className='text-[yellow]'>je</span>
          <span className='text-[green]'>cts</span>

        </h2>
        <div className='text-center my-10'>
          <hr />
          <h1 className='text-3xl text-[#bb3186] font-body underline pt-10'>Our Media Services</h1>
          <h2 className='text-xl text-[#bb3186] my-6'>News Portal And Business Management Services</h2>
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
          <hr />
          <h1 className='text-3xl text-[#bb3186] font-body underline pt-10'>Digital Marketing Services</h1>
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
          <hr />
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

export default Services;







