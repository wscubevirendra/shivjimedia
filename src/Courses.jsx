import React,{useEffect} from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Courses = () => {
  useEffect(() => {
    AOS.init({
        duration: 1000, // Animation duration in milliseconds
        once: true, // Whether animation should happen only once
    });
}, []);

  const courses = [
    {
      title: 'News & Advertising Agency',
      startDate: '30% Off',
      bgColor: 'bg-yellow-500',
    },
    {
      title: 'Website And App Development',
      startDate: '40% Off',
      bgColor: 'bg-green-500',
    },
    {
      title: 'Digital Marketing Services"',
      startDate: '70% Off',
      bgColor: 'bg-orange-500',
    },
    {
      title: 'Fintech And Edutech Services',
      startDate: '70% Off',
      bgColor: 'bg-purple-500',
    },
    {
      title: 'News & Advertise Content Creation',
      startDate: '90% Off',
      bgColor: 'bg-pink-500',
    },
    {
      title: 'News Portal Management Services',
      startDate: '74% Off',
      bgColor: 'bg-blue-500',
    },
  
  
  ];

  return (
    <div className="container pl-4 mx-auto">
      <h1 className=' text-center my-6 text-2xl bg-white mt-10 font-bold'>Find Our Exclusive Services</h1>
      <div  className="flex flex-wrap justify-start py-4">
        {courses.map((course, index) => (
          <div data-aos="fade-up" data-aos-offset="300"  key={index} className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
            <div className="block p-6 bg-gray-900 rounded-2xl relative overflow-hidden group">
              <div  className={`h-32 w-32 ${course.bgColor} rounded-full absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 transition-transform duration-500 ease-in-out group-hover:scale-[10]`}></div>
              <div className="relative z-10">
                <div className="min-h-24 mb-6 font-bold text-2xl md:text-3xl text-white">{course.title}</div>
                {course.startDate && (
                  <div className="text-white text-lg md:text-xl">
                    Start: <span className="font-bold text-yellow-400">{course.startDate}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
