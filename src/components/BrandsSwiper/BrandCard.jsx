import React from "react";

const BrandCard = ({ title, image }) => {
  return (
    <div>
      <div
        id="card"
        className="mx-2 mb-7 rounded-lg bg-white p-4 shadow-lg transition-all duration-500 hover:scale-[1.01] hover:shadow-xl dark:bg-gray-950 "
      >
        <div className="overflow-hidden rounded-lg ">
          <img
            src={image}
            alt="No image"
            className="mx-auto h-[200px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110 md:h-[300px]"
          />
        </div>
        <div className="space-y-3 py-3">
          <h1 className="line-clamp-1 text-xl font-bold">{title}</h1>
          <p className="line-clamp-2 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. amet
            consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
