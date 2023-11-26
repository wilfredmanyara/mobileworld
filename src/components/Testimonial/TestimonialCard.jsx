import React from "react";

const TestimonialCard = ({ name, image, description }) => {
  return (
    <section className="relative mx-5 my-6 rounded-lg bg-white shadow-md transition duration-300 hover:scale-105 dark:bg-gray-950 ">
      <div className="min-h-[300px] overflow-hidden p-6 sm:min-h-[250px]  ">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <img
              src={image}
              alt="user"
              className="h-[60px] w-[60px] rounded-full"
            />
            <p className="text-lg font-bold">{name}</p>
          </div>
          <p className="text-gray-700 dark:text-gray-400">"{description}"</p>
        </div>
        <div className="absolute bottom-0 right-0">
          <p className="font-serif text-[10rem] font-bold text-black/10">,,</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCard;
