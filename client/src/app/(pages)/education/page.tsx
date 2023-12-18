import CardEducationContent from "@/components/CardEducationContent";
import Footer from "@/components/Footer";
import NavbarComponent from "@/components/Navbar";
import Image from "next/image";
import React from "react";

const EducationPage = () => {
  return (
    <div>
      <NavbarComponent />

      {/* Header Component */}
      <div className="w-screen h-[180px] justify-center items-center flex relative mt-[100px]">
        <div className="bg-gray-700 w-[82%] h-full rounded-[30px] justify-center items-center flex overflow-hidden relative">
          <h1 className="absolute text-white raleway text-[50px] font-bold z-20">
            Education
          </h1>
          <div className="bg-gradient-to-t from-eb-10 to-transparent z-10 absolute w-full h-full"></div>
          <Image
            src="/bg_login.jpg"
            fill
            style={{ objectFit: "cover" }}
            className="flex"
            alt="SDG-12"
          />
        </div>

        {/* Search Bar Input */}
        <div className="absolute bg-white w-[35%] h-[75px] -bottom-11 rounded-[20px] flex flex-row justify-center items-center px-[4%] shadow-lg z-20">
          <span className="material-symbols-outlined text-gray-700">
            search
          </span>
          <input
            type="text"
            placeholder="Search Article ..."
            className="rounded-[20px] w-full h-full px-[3%] focus:outline-none"
          />
        </div>
      </div>

      {/* Top Article Component */}
      <div className="w-screen flex flex-row h-[340px] mt-[5%] px-[10%] justify-center items-center gap-x-14">
        {/* Left Component */}
        <div className="w-[45%] rounded-[25px] h-[90%] overflow-hidden">
          <img
            src="https://source.unsplash.com/random/900x700/?indonesia"
            className="object-cover rounded-lg w-full h-full"
          />
        </div>

        {/* Right Component */}
        <div className="w-[55%] rounded-lg h-[90%] flex flex-col ">
          <div className="flex flex-col w-full justify-between h-full">
            <div className="flex flex-col gap-y-4 w-[83%]">
              <h1 className="text-[13px] text-eb-30">Technolgy</h1>
              <h1 className="text-[40px] raleway font-bold leading-10 text-gray-900">
                An Extraordinary WebGL Has Been
              </h1>
            </div>
            <p className="text-gray-500 leading-7">
              Lorem ipsum dolor sit amet consectetur. Lectus sed leo in
              ultricies porttitor aliquam tincidunt gravida eu. A gravida
              aliquet vel amet. Aliquam turpis nunc interdum posuere
            </p>
            <div className="flex flex-col">
              <p className="font-bold">Brayn Owen</p>
              <p className="text-gray-600">Jun 27, 2021</p>
            </div>
          </div>
        </div>
      </div>

      {/* Another Article Grid */}
      <div className="w-screen grid grid-cols-3 px-[10%] gap-8 mt-10 mb-[80px]">
        <CardEducationContent />
        <CardEducationContent />
        <CardEducationContent />
        <CardEducationContent />
        <CardEducationContent />
        <CardEducationContent />

        <div className="flex col-span-3 justify-center mt-[40px]">
          <div className="bg-gray-500 px-4 py-2 rounded-lg text-white hover:bg-eb-10 transition-all hover:scale-105">
            {" "}
            Show More Content
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EducationPage;
