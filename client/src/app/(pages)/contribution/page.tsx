import Footer from "@/components/Footer";
import NavbarComponent from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <>
      {/* <NavbarComponent /> */}

      <div className="h-[340px] flex justify-center items-center bg-sea1 bg-fixed bg-no-repeat bg-cover bg-center mt-20 relative ease-in-out translate-y-5 animate-fade-up">
        <h1 className="text-[#ffffff] bg-opacity-50 p-3 rounded-md text-6xl raleway font-bold z-20">
          Our Contributions
        </h1>
        <div className="absolute bg-[#00000040] w-full h-full z-10"></div>
      </div>
      <div className="p-12 animate-fade-up animate-delay-100">
        <h2 className="font-bold text-[#304D30] text-4xl mb-4">
          Sustainable Development Goals
        </h2>
        <div className="flex">
          <Image
            src="https://www.its.ac.id/sustainability/wp-content/uploads/sites/120/2020/08/SDG_12-1024x1024.png"
            width={100}
            height={300}
            alt="SDG-12"
            className="flex justify-center items-center object-contain"
          />
          <div className="p-3 pl-10">
            <div className="my-3">
              <h1 className="font-bold text-[#304D30] mb-2">Target 12.4 :</h1>
              <p className=" text-[#1b2a1b]">
                By 2030, achieve the environmentally sound management of
                chemicals and all wastes throughout their life cycle, in
                accordance with agreed international frameworks, and
                significantly reduce their release to air, water and soil in
                order to minimize their adverse impacts on human health and the
                environment.
              </p>
            </div>
            <div className="my-3">
              <h1 className="font-bold text-[#304D30] mb-2">Target 12.5 :</h1>
              <p className=" text-[#1b2a1b]">
                By 2030, substantially reduce waste generation through
                prevention, reduction, recycling and reuse.
              </p>
            </div>
            <div className="my-3">
              <h1 className="font-bold text-[#304D30] mb-2">Target 12.8 :</h1>
              <p className=" text-[#1b2a1b]">
                By 2030, ensure that people everywhere have the relevant
                information and awareness for sustainable development and
                lifestyles in harmony with nature
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-sea2 min-h-screen bg-center bg-no-repeat bg-cover bg-fixed p-6 relative animate-fade-up window">
        <div className="w-2/6 flex flex-col absolute bottom-20">
          <h2 className="font-bold text-white text-4xl">
            Transform Waste into Wealth:
          </h2>
          <p className="text-white leading-7 tracking-[0.1rem]">
            We empower individuals and communities to turn their everyday waste,
            especially Used Cooking Oil (UCO), into a valuable resource.
          </p>
        </div>
      </div>
      <div className="bg-sea3 min-h-screen bg-fixed bg-no-repeat bg-cover p-6 relative">
        <div className="w-2/6 flex flex-col absolute bottom-20 right-20">
          <h2 className="font-bold text-white text-4xl">Join the Movement</h2>
          <p className="text-white leading-6 tracking-[0.1rem]">
            EcoBucks brings people together for a common cause. Join a network
            of environmentally conscious individuals, schools, businesses, and
            organizations committed to making a positive difference.
          </p>
          <Link href={"/submit-uco"}>
            <button className="bg-eb-10 w-[30%] p-3 mt-2 text-white rounded-md hover:bg-eb-30 transition-all">
              Join Now
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
