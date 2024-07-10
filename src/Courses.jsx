import React from 'react';

const Courses = () => {
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
    {
      title: 'Videography And Photography Services',
      startDate: '66% Off',
      bgColor: 'bg-red-500',
    },
    {
      title: 'Advertising And Marketing Services',
      startDate: '80% Off',
      bgColor: 'bg-yellow-600',
    }, {
      title: 'Social Media Management Services',
      startDate: '80% Off',
      bgColor: 'bg-yellow-600',
    }, {
      title: 'Affiliate And Influence Marketing Services',
      startDate: '80% Off',
      bgColor: 'bg-yellow-600',
    }, {
      title: 'ROC And Legal Services',
      startDate: '80% Off',
      bgColor: 'bg-yellow-600',
    }, {
      title: 'Skill Based Education  Services',
      startDate: '80% Off',
      bgColor: 'bg-yellow-600',
    }, {
      title: 'Start-up And MSME Related Services',
      startDate: '80% Off',
      bgColor: 'bg-yellow-600',
    },
  ];

  return (
    <div className="container mx-auto">
      <h1 className=' text-center my-6 text-2xl font-bold'>Find Our Exclusive Services</h1>
      <div className="flex flex-wrap justify-start py-12">
        {courses.map((course, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
            <a href="#" className="block p-6 bg-gray-900 rounded-2xl relative overflow-hidden group">
              <div className={`h-32 w-32 ${course.bgColor} rounded-full absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 transition-transform duration-500 ease-in-out group-hover:scale-[10]`}></div>
              <div className="relative z-10">
                <div className="min-h-24 mb-6 font-bold text-2xl md:text-3xl text-white">{course.title}</div>
                {course.startDate && (
                  <div className="text-white text-lg md:text-xl">
                    Start: <span className="font-bold text-yellow-400">{course.startDate}</span>
                  </div>
                )}
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
