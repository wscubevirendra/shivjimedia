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
      title: 'Nai Professional Acemdmy',
      startDate: '30% Off',
      bgColor: 'bg-yellow-500',
    },
    {
      title: 'Nai Professional salon',
      startDate: '40% Off',
      bgColor: 'bg-green-500',
    }
  ];

  return (
    <div className="container px-20 pl-4 mx-auto">
      <h1 className=' text-center my-6 text-2xl bg-white mt-10 font-bold'>Find Our Exclusive Services</h1>
      <div  className="flex flex-wrap justify-start py-4">
        {courses.map((course, index) => (
          <div data-aos="fade-up" data-aos-offset="300"  key={index} className="w-full md:w-1/2  px-3 mb-6">
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
