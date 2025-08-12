import React from "react";

const Card = ({ children, className }) => {
  return (
    <div
      className={`${className} border-t-[6px] p-10 drop-shadow-md bg-white relative overflow-hidden`}
    >
      {children}
      <div className="absolute -right-28 -bottom-28">
        <div className="relative w-[330px] h-[330px]">
          <div className="bg-[#FFF6F6] w-[330px] h-[330px] rounded-full absolute top-0 left-0 z-10"></div>
          <div className="bg-[#FFEFEF] w-[300px] h-[300px] rounded-full absolute top-4 left-4 z-20"></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
