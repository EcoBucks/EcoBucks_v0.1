"use client";
import CardEducationContent from "@/components/CardEducationContent";
import Footer from "@/components/Footer";

import SearchEducation from "@/components/SearchEducation";
import { VideoModel } from "@/db/models/videos";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Videos } from "./action";

const EducationPage = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const search =
    typeof searchParams?.search == "string" ? searchParams.search : undefined;

  const [videos, setVideos] = useState<VideoModel[]>();

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const allVideos = await Videos(search);
        setVideos(allVideos);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVideos();
  }, [searchParams]);

  return (
    <div>
      {/* <NavbarComponent /> */}

      {/* Header Component */}
      <div className="w-screen h-[180px] justify-center items-center flex relative mt-[100px] animate-fade-up">
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
        <SearchEducation />
      </div>

      {/* Top Article Component */}
      <div className="w-screen flex flex-row h-[340px] mt-[5%] px-[10%] justify-center items-center gap-x-14 animate-fade-up animate-delay-300">
        {/* Left Component */}
        <div className="w-[45%] rounded-[25px] h-[90%] overflow-hidden">
          <img
            src="https://img.antaranews.com/cache/1200x800/2021/06/10/IMG_0608.jpg.webp"
            className="object-cover rounded-lg w-full h-full"
          />
        </div>

        {/* Right Component */}
        <div className="w-[55%] rounded-lg h-[90%] flex flex-col ">
          <div className="flex flex-col w-full justify-between h-full">
            <div className="flex flex-col gap-y-4 w-[83%]">
              {/* <h1 className="text-[13px] text-eb-30">Technolgy</h1> */}
              <h1 className="text-[40px] raleway font-bold leading-10 text-gray-900">
                Pengertian Used Cooking Oil
              </h1>
            </div>
            <p className="text-gray-500 leading-7">
              Used Cooking Oil yang selanjutnya disingkat UCO adalah minyak
              limbah hasil dari penggunaan minyak goreng baik penggunaan rumah
              tangga maupun industri.
            </p>
            <div className="flex flex-col">
              <p className="font-bold">Brain Owen</p>
              <p className="text-gray-600">Jun 27, 2023</p>
            </div>
          </div>
        </div>
      </div>

      {/* Another Article Grid */}
      <div className="w-screen grid grid-cols-3 px-[10%] gap-8 mt-10 mb-[80px] animate-fade-up animate-delay-700">
        {videos?.map((video, idx) => (
          <CardEducationContent key={idx} video={video} />
        ))}

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
