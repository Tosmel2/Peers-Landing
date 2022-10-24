import React from "react";

const Card = ({ Icon, heading, content, color }) => {
  console.log(color);
  return (
    <div className="mt-[3rem] h-[400px] w-[400px] border lg:w-[300px] lg:h-[300px]  bg-white shadow-lg relative rounded-lg">
      {/* rounded card with icon */}
      <div
        className={`rounded-full absolute h-[4rem] -top-8 lg:left-[39%] left-[42%] w-[4rem] p-2 flex justify-center items-center ${color}`}
      >
        <span className="text-white">
          <Icon size={30} />
        </span>
      </div>
      {/* Content */}
      <header className=" mt-[5rem] lg:w-[165px] w-[180px] mx-auto text-center  text-[#2F327D] lg:font-[500] font-[800] ">
        {heading}
      </header>
      <p className="mt-[2rem] text-gray-500 w-[265px] mx-auto text-center font-light">
        {content}
      </p>
    </div>
  );
};

export default Card;
