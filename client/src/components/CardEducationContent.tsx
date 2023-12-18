import React from "react";

const CardEducationContent = () => {
  return (
    <>
      {/* Card Article */}
      <div className="h-[440px] flex flex-col w-full">
        <div className="h-[60%] rounded-[25px] overflow-hidden">
          <img
            src="https://source.unsplash.com/random/900x700/?indonesia"
            className="object-cover rounded-lg w-full h-full"
          />
        </div>

        <div className="flex flex-col mt-[3%] gap-y-2 justify-between">
          <div className="flex flex-col gap-y-1">
            <h1 className="text-[12px] text-eb-30">Technolgy</h1>
            <h1 className="text-[24px] raleway font-bold text-gray-900">
              An Extraordinary
            </h1>
          </div>
          <p className="text-gray-500 w-[90%]">
            Lorem ipsum dolor sit amet consectetur. Lectus sed leo in ultricies
            porttitor aliquam
          </p>
          <div className="flex flex-row gap-x-2 text-[13px] text-gray-800">
            <p className="font-bold">Brayn Owen</p>
            <p className="text-gray-600">Jun 27, 2021</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardEducationContent;
