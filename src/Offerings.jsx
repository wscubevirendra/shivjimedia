import React from 'react';


const Offerings = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-center py-20 px-8 xl:px-0 flex flex-col justify-center">
      <span className="text-gray-400 text-lg max-w-lg mx-auto mb-2 capitalize flex items-center">
        what we're offering
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-indigo-600 ml-3 w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
        </svg>
      </span>
      <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-semibold max-w-3xl mx-auto mb-16 leading-snug">
        Services Built Specifically for your Business
      </h1>
      <div className="grid-offer text-left grid sm:grid-cols-2 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
        <Card
          title="UI/UX creative design"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames."
          image="https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          position="right-bottom"
        />
        <Card
          title="visual graphic design"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames."
          image="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          position="left-bottom"
        />
        <Card
          title="strategy & digital marketing"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames."
          image="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          position="right-top"
        />
        <Card
          title="effective business growth"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames."
          image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          position="left-top"
        />
      </div>
    </section>
  );
};

const Card = ({ title, description, image, position }) => {
  const positionClasses = {
    'right-bottom': 'bottom-0 right-0 clip-path-circle(calc(6.25rem + 7.5vw) at 100% 100%)',
    'left-bottom': 'bottom-0 left-0 clip-path-circle(calc(6.25rem + 7.5vw) at 0% 100%)',
    'right-top': 'top-0 right-0 clip-path-circle(calc(6.25rem + 7.5vw) at 100% 0%)',
    'left-top': 'top-0 left-0 clip-path-circle(calc(6.25rem + 7.5vw) at 0% 0%)',
  };

  return (
    <div className="card bg-gray-800 p-10 relative overflow-hidden">
      <div className={`circle absolute w-full h-full bg-cover bg-center ${positionClasses[position]}`} style={{ backgroundImage: `url(${image})` }}></div>
      <div className="relative z-10">
        <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">{title}</h2>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default Offerings;
