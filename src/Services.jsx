import React, { useState } from "react";

const CardSlider = () => {
  const [selectedCard, setSelectedCard] = useState(1);

  const cards = [
    {
      id: 1,
      title: "Winter",
      description: "Winter has so much to offer - creative activities",
      image: "https://images.unsplash.com/photo-1453306458620-5bbef13a5bca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Digital Technology",
      description: "Gets better every day - stay tuned",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Globalization",
      description: "Help people all over the world",
      image: "https://plus.unsplash.com/premium_photo-1661421687248-7bb863c60723?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "New technologies",
      description: "Space engineering becomes more and more advanced",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="w-full bg-[#0F0520] h-screen flex items-center justify-center  px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="flex h-80 sm:h-96 md:h-[400px] lg:h-[500px] space-x-4 overflow-x-auto scrollbar-hide">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`relative rounded-xl overflow-hidden cursor-pointer transition-all duration-500 shadow-lg ${
              selectedCard === card.id ? "w-64 sm:w-80 md:w-96 lg:w-112" : "w-20 sm:w-24 md:w-32 lg:w-40"
            }`}
            onClick={() => setSelectedCard(card.id)}
            style={{
              backgroundImage: `url(${card.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 flex items-end p-4 bg-black bg-opacity-50 text-white">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center bg-blue-900 rounded-full">
                  {card.id}
                </div>
                <div
                  className={`${
                    selectedCard === card.id ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-300`}
                >
                  <h4 className="text-sm sm:text-base md:text-lg lg:text-xl uppercase">{card.title}</h4>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400">{card.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
