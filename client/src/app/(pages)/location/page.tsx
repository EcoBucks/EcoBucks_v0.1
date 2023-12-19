"use client";
import { fetchData } from "@/app/(action)/fetchDataHome";
import CardEducation from "@/components/CardEducation";
import CardLocation from "@/components/CardLocation";
import Footer from "@/components/Footer";
import NavbarComponent from "@/components/Navbar";
import { getVideos } from "@/db/models/videos";
import { LocationType } from "@/types";
import React, { useEffect, useState } from "react";
import { Locations } from "./action";
import { locationModel } from "@/db/models/location";
import Search from "@/components/Search";
import Link from "next/link";

const LocationPage = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const search =
    typeof searchParams?.search == "string" ? searchParams.search : undefined;

  type res = {
    statusCode: 200;
    message: "successfully read Location";
    data: LocationType[];
  };
  const [data, setData] = useState<locationModel[]>();
  useEffect(() => {
    const getLocations = async () => {
      try {
        const locations = await Locations(search);
        setData(locations);
      } catch (error) {
        console.log(error);
      }
    };
    getLocations();
  }, [searchParams]);
  // console.log(data, "<<<");

  // const videos = await getVideos();
  // const randomizedVideos = await videos
  //   .sort(() => Math.random() - Math.random())
  //   .slice(0, 3);

  return (
    <>
      {/* <NavbarComponent /> */}

      {/* LocationSection */}

      <div className="flex flex-row w-screen h-[780px] px-[8.5%] mt-[5.5%] pb-[3%] gap-x-2 ">
        {/* Left Component */}
        <div className="flex flex-row w-[45%] justify-end items-center animate-fade-up animate-delay-0">
          <div className="flex w-[85%] h-[90%] rounded-[20px] shadow-lg">
            <img
              src="https://source.unsplash.com/random/900x700/?indonesia"
              className="object-cover rounded-lg w-full h-full"
            />
          </div>
        </div>

        {/* Right Component */}
        <div className="flex flex-col w-[55%] items-center justify-start px-[4%] pt-[3%] animate-fade-up animate-delay-200">
          {/* Search Location */}
          // <Search />
          <div className="flex flex-row w-full h-[50px] justify-between items-center">
            <h1 className="raleway font-bold text-[35px]">Search</h1>
            <div className="flex flex-row bg-white w-[75%] py-2 px-[2%] rounded-xl shadow-md">
              <input
                type="text"
                className="w-full px-[4%] focus:outline-none"
                placeholder="Search by Province .."
              />
              <span className="material-symbols-outlined text-gray-500">
                search
              </span>
            </div>
          </div>
          {/* divider */}
          <div className="flex w-full justify-center items-center py-5 animate-fade-up animate-delay-200">
            <div className="w-[95%] bg-gray-400 h-[1px] justify-center items-center"></div>
          </div>
          {/* Overflow Location Card */}
          {/* <div className="flex flex-col w-full h-[82%] justify-start items-center gap-y-3">
            <div className="overflow-auto w-full h-full">

              <div className="flex flex-col w-full gap-y-5 items-center justify-center py-4">
                {data?.data?.map((location, index) => (
                  <CardLocation key={index} location={location} />
                ))}
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* divider */}
      <div className="flex w-screen justify-center items-center pb-[5%] animate-fade-up animate-delay-200">
        <div className="w-[85%] bg-gray-400 h-[1px] justify-center items-center"></div>
      </div>

      {/* Education */}
      <div className="flex w-screen flex-col h-[450px] justify-start items-center mb-[5%] animate-fade-up animate-delay-500">
        <h1 className="text-sm text-eb-30">EcoBucks Education</h1>
        <h1 className="text-[50px] raleway font-medium text-gray-900 -mt-2">
          Education
        </h1>

        {/* Card Section */}
        <div className="flex flex-row w-screen px-[5%] h-[70%] justify-center items-center gap-x-4">
          {/* {randomizedVideos.map((video, idx) => (
            <CardEducation key={idx} detail={video} />
          ))} */}
        </div>

        <div className="w-full justify-center items-center h-[20%] flex ">
          <Link href={"/education"}>
            <div className="flex flex-row gap-x-2 bg-eb-10 py-3 px-5 rounded-[20px] text-white w-full items-center justify-center hover:bg-eb-30 hover:scale-105 transition-all">
              <p>Get More Information</p>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LocationPage;
