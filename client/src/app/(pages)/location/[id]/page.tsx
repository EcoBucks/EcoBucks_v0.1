import { fetchDataId } from "@/app/(action)/actionFetchLocationById";
import CardEducation from "@/components/CardEducation";
import Footer from "@/components/Footer";
import MapDetails from "@/components/MapDetails";
import { getVideos } from "@/db/models/videos";
import Link from "next/link";
import React from "react";

const LocationDetailPage = async ({ params }: { params: { id: string } }) => {
  const data = await fetchDataId(params.id);

  const latLng = {
    lat: data?.lat || 0,
    lng: data?.lng || 0,
  };

  const videos = await getVideos();
  const randomizedVideos = videos
    .sort(() => Math.random() - Math.random())
    .slice(0, 3);

  return (
    <>
      {/* BreadCrumb */}
      <div className="flex flex-row w-screen h-[85px] items-center justify-center mt-[6%] px-[7%]">
        <nav
          aria-label="breadcrumb"
          className="w-full p-4 dark:bg-gray-800 dark:text-gray-100"
        >
          <Link href={"/location"}>
            <div className="flex flex-row w-fit gap-x-2 items-center">
              <span
                className="material-symbols-outlined text-gray-700 rounded-lg"
                style={{ fontSize: 20 }}
              >
                arrow_back
              </span>
              <li className=" underline flex items-center text-[14px] text-gray-600">
                Other Location List
              </li>
            </div>
          </Link>
        </nav>
      </div>

      <div className="flex flex-row w-screen h-[550px] px-[8.5%] pb-[3%] gap-x-1">
        {/* Left Component */}
        <div className="flex flex-row w-[55%] justify-end items-start gap-x-2">
          <div className="flex bg-black w-[75%] h-[90%] rounded-[20px]">
            <img
              src={data?.picture}
              className="object-cover rounded-lg w-full h-full"
            />
          </div>
          {/* Overflow Component */}
          <div className="flex flex-col w-[25%] h-[90%] justify-start items-center gap-y-2 overflow-hidden rounded-lg">
            <div className="overflow-auto w-full h-full">
              <div className="flex flex-col w-full gap-y-2 items-center justify-center">
                <div className="flex w-full h-[180px]">
                  <img
                    src="https://source.unsplash.com/random/900x700/?indonesia+2"
                    className="object-cover rounded-lg w-full h-full"
                  />
                </div>
                <div className="flex w-full h-[180px]">
                  <img
                    src="https://source.unsplash.com/random/900x700/?indonesia+3"
                    className="object-cover rounded-lg w-full h-full"
                  />
                </div>
                <div className="flex w-full h-[180px]">
                  <img
                    src="https://source.unsplash.com/random/900x700/?indonesia+4"
                    className="object-cover rounded-lg w-full h-full"
                  />
                </div>
                <div className="flex w-full h-[180px]">
                  <img
                    src="https://source.unsplash.com/random/900x700/?indonesia+5"
                    className="object-cover rounded-lg w-full h-full"
                  />
                </div>
                <div className="flex w-full h-[180px]">
                  <img
                    src="https://source.unsplash.com/random/900x700/?indonesia+6"
                    className="object-cover rounded-lg w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Component */}
        <div className="flex flex-col w-[45%] items-start justify-start px-[4%] pb-[5%]">
          {/* Location Detail */}
          <div className="flex flex-col w-full h-full justify-between items-center gap-y-4">
            {/* Row 1 - Title */}
            <div className="flex flex-col w-full h-fit gap-y-1">
              <h1 className="raleway font-bold text-[35px]">{data?.name}</h1>
              <h1 className="raleway text-[18px]">{data?.province}</h1>
            </div>

            {/* Row 2 - Address + Tel Operational Hours */}
            <div className="flex flex-col w-full h-fit">
              <p className="text-gray-500 text-[14px] pr-[4%] leading-7">
                {data?.address}
              </p>
              <div className="flex flex-col justify-start items-start w-full text-[16px] gap-y-3 text-gray-600 h-fit">
                <div
                  id="divider"
                  className="w-[85%] bg-gray-400 h-[1px] justify-center items-center mt-4"
                ></div>
                <div className="flex flex-row w-full h-[20px] items-center justify-start gap-x-3">
                  <p>
                    <b>Tel :</b> 021-1111-2222
                  </p>
                </div>
                <div className="flex flex-row w-full h-[20px] items-center justify-start gap-x-3">
                  <h1>
                    <b>Operational Hours :</b>
                  </h1>
                  <h1>09:00 - 22:00</h1>
                </div>
              </div>
            </div>

            {/* Row 3 - Google Images */}
            <div className="flex flex-row w-full h-full relative">
              <div className="absolute right-0 bottom-0 z-10">
                <div className="bg-eb-30 w-[180px] h-[40px] m-4 rounded-lg flex justify-center items-center text-white dm-sans flex-row gap-x-1">
                  <p>Go To Location</p>
                  <span
                    className="material-symbols-outlined text-white rounded-lg"
                    style={{ fontSize: 20 }}
                  >
                    arrow_forward
                  </span>
                </div>
              </div>
              {/* <img
                src="https://source.unsplash.com/random/900x700/?indonesia+6"
                className="object-cover rounded-lg w-full h-full"
              /> */}
              <MapDetails location={latLng} />
            </div>
          </div>
        </div>
      </div>

      {/* divider */}
      <div className="flex w-screen justify-center items-center pb-[5%]">
        <div className="w-[85%] bg-gray-400 h-[1px] justify-center items-center"></div>
      </div>

      {/* Education */}
      <div className="flex w-screen flex-col h-[450px] justify-start items-center mb-[5%]">
        <h1 className="text-sm text-eb-30">EcoBucks Education</h1>
        <h1 className="text-[50px] raleway font-medium text-gray-900 -mt-2">
          Education
        </h1>

        {/* Card Section */}
        <div className="flex flex-row w-screen px-[5%] h-[70%] justify-center items-center gap-x-4">
          {randomizedVideos.map((video, idx) => (
            <CardEducation key={idx} detail={video} />
          ))}
        </div>

        <div className="w-full justify-center items-center h-[20%] flex">
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

export default LocationDetailPage;
