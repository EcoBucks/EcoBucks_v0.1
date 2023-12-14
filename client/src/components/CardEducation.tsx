import React from "react";

const CardEducation = () => {
  return (
    <>
      {/* Card Education */}
      <div className="w-[359px] h-[243px] rounded-[20px] overflow-hidden relative">
        <div className="w-full h-full absolute p-5 z-10">
          <h1 className="text-gray-400 text-lg">11 November 2023</h1>
          <h1 className="text-white text-[25px] leading-8 raleway font-bold">
            Perdayakan Minyak Jelantah Saat ini
          </h1>
          <div className="absolute bottom-0 right-0 p-6 text-white flex flex-row items-center">
            <div className="flex flex-row p-2 bg-eb-30 items-center justify-center rounded-lg gap-x-2">
              <h1>See More</h1>
              <span
                className="material-symbols-outlined text-white rounded-lg"
                style={{ fontSize: 20 }}
              >
                arrow_forward
              </span>
            </div>
          </div>
        </div>
        <div className="bg-[#00000060] w-full h-full absolute"></div>
        <img
          src="https://source.unsplash.com/random/900x700/?indonesia+3"
          alt="image"
          className="w-full h-full"
        />
      </div>
    </>
  );
};

export default CardEducation;
