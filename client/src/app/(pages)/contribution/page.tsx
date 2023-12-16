import Footer from "@/components/Footer";
import NavbarComponent from "@/components/Navbar";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <>
      <NavbarComponent />
      <div className="h-[340px] flex justify-center items-center bg-sea1 bg-fixed bg-no-repeat bg-cover bg-center mt-20">
        <h1 className="text-[#304D30] bg-white bg-opacity-50 p-3 rounded-md text-6xl">
          Our Contributions
        </h1>
      </div>
      <div className="p-12">
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
      <div className="bg-sea2 min-h-screen bg-center bg-no-repeat bg-cover bg-fixed p-6 relative">
        <div className="w-2/6 flex flex-col absolute bottom-20">
          <h2 className="font-bold text-white text-4xl">Did You Know?</h2>
          <p className="text-white leading-7 tracking-[0.1rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab numquam
            eveniet molestias veniam, inventore sint voluptates nam provident
            impedit laborum ipsa vel quos amet laboriosam dolorum suscipit!
            Nihil eos repellendus blanditiis repellat laboriosam veniam quod
            maxime ab! Ea eveniet doloremque, excepturi totam, et molestias
            dicta accusamus quibusdam quas sunt inventore!
          </p>
        </div>
      </div>
      <div className="bg-sea3 min-h-screen bg-fixed bg-no-repeat bg-cover p-6 relative">
        <div className="w-2/6 flex flex-col absolute bottom-20 right-20">
          <h2 className="font-bold text-white text-4xl">Join the Movement</h2>
          <p className="text-white leading-6 tracking-[0.1rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab numquam
            eveniet molestias veniam, inventore sint voluptates nam provident
            impedit laborum ipsa vel quos amet laboriosam dolorum suscipit!
            Nihil eos repellendus blanditiis repellat laboriosam veniam quod
            maxime ab! Ea eveniet doloremque, excepturi totam, et molestias
            dicta accusamus quibusdam quas sunt inventore!
          </p>
          <button className="bg-[#304D30] w-[30%] p-3 mt-2 text-white rounded-md">
            Join Now
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;