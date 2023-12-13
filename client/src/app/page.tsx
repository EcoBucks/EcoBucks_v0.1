import Caraousel from "@/components/Caraousel";
import Card from "@/components/Card";
import { OptionMT, SelectMT } from "@/components/MaterialTailwind";
import NavbarComponent from "@/components/Navbar";
import { LocationType } from "@/types";
import Image from "next/image";
import React from "react";

const fetchData = async () => {
  try {
    const response = await fetch("http://localhost:3001/location", {
      cache: "no-store",
    });
    const responseJson: LocationType[] = await response.json();
    return responseJson;
  } catch (error) {
    console.log(error);
  }
};

const fetchProvince = async () => {
  try {
    const response = await fetch("http://localhost:3001/provinces", {
      cache: "no-store",
    });
    const responseJson: string[] = await response.json();
    return responseJson;
  } catch (error) {
    console.log(error);
  }
};

export default async function Home() {
  const slides = [
    "https://source.unsplash.com/random/900x700/?person",
    "https://source.unsplash.com/random/900x700/?person+2",
    "https://source.unsplash.com/random/900x700/?person+3",
    "https://source.unsplash.com/random/900x700/?person+4",
  ];

  const data = await fetchData();
  const provinces = await fetchProvince();

  return (
    <>
      <NavbarComponent />

      <div className="flex w-screen h-[600px] items-center justify-center px-[8%] mt-[8%]">
        <div className="bg-white w-full h-full flex flex-row gap-x-4">
          {/* Left Component */}
          <div className="flex flex-row justify-end items-center w-[70%] h-full rounded-[20px] overflow-hidden shadow-md">
            <div className="w-full h-full flex flex-row relative">
              <Caraousel autoSlide={true}>
                {slides.map((s) => (
                  <img
                    key={s + "id"}
                    src={s}
                    className="w-full h-full object-contain"
                    alt="image"
                  />
                ))}
              </Caraousel>
            </div>
          </div>

          {/* Right Component */}
          <div className="flex flex-col justify-start items-center w-[30%] h-full gap-y-4">
            {/* Form Component */}
            <div className="flex flex-col w-full h-[80%] bg-eb-40 rounded-[20px] py-[7%] px-[4%] gap-y-4 items-start">
              <div className="flex flex-col w-full justify-between px-[5%] text-white items-center h-[11%]">
                <div className="flex flex-row w-full justify-between items-center">
                  <p className="text-[25px] raleway font-bold">
                    Calculate Your UCO
                  </p>
                  <span className="material-symbols-outlined">help</span>
                </div>
                <div className="flex w-full justify-start mt-2">
                  <div className="bg-[#ffffff] w-[20%] h-[2px] rounded-[20px] flex"></div>
                </div>
              </div>

              <div className="flex flex-col w-full h-[90%] gap-y-4 mt-[10%] items-center ">
                <div className="flex flex-col w-full h-[23%] items-center justify-center px-[5%] gap-y-1">
                  <p className="flex w-full justify-start items-start text-[12px] text-white inter">
                    Your UCO in Liter
                  </p>
                  <input
                    type="text"
                    className="w-full bg-[#ffffff20] rounded-[15px] h-24 text-white px-5 placeholder:text-[#ffffff30]"
                    placeholder="ex: 250 liter"
                  />
                </div>

                <div className="flex flex-col w-full h-[23%] items-center justify-center px-[5%] gap-y-1">
                  <p className="flex w-full justify-start items-start text-[12px] text-white inter">
                    Prediction in Rupiah
                  </p>
                  <div className="w-full bg-[#ffffff20] rounded-[15px] h-24 text-white px-5 placeholder:text-[#ffffff30] justify-center items-center">
                    <p className="flex w-full h-full justify-start items-center">
                      Rp 250.000
                    </p>
                  </div>
                </div>
                <div className="bg-[#ffffff60] w-[90%] h-[2px] rounded-[20px]"></div>
                <div className="w-[90%] flex flex-row gap-x-3 justify-center items-center bg-eb-30 text-white rounded-xl h-12">
                  <p className="font-bold raleway ">Submit</p>
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </div>
                <div className="text-white text-[12px] mt-2 flex flex-row gap-x-1">
                  <p className="font-bold text-white">+50%</p>
                  <p>Contribution for Emition Gas Carbon</p>
                </div>
              </div>
            </div>

            {/* Button Component */}
            <div className="flex flex-row w-full h-[20%] bg-eb-40 rounded-[20px] text-white justify-center items-center px-[8%]">
              <div className="flex flex-col w-full justify-center items-start">
                <p className="text-[25px] raleway font-bold">Free Pickup UCO</p>
                <p className="text-[10px]">
                  Lorem Ipsum has been the industry's{" "}
                </p>
              </div>

              <div className="bg-eb-20 rounded-[100px] w-[55px] h-[50px] flex justify-center items-center">
                <span className="material-symbols-outlined">arrow_forward</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen h-[730px] items-center justify-start px-[8%] flex-col flex mt-[5%]">
        <div className="flex flex-col w-full">
          <p className="text-eb-30 text-[14px]">Location EcoBucks</p>
          <p className="text-[50px] raleway font-medium -mt-2">
            Store UCO to nearest location
          </p>
        </div>

        <div className="flex flex-col w-screen items-center h-[660px] py-12 px-[8%]">
          {/* Search Bar */}
          <div className="flex w-full justify-start items-start -mt-4">
            <form className="flex flex-row bg-white shadow-md w-[35%] h-[96px] ml-2 rounded-xl justify-between px-[2%]">
              <div className="flex flex-col justify-center gap-y-2 items-start w-[30%]">
                <div className="flex flex-row gap-x-2 items-center">
                  <span
                    className="material-symbols-outlined text-gray-700"
                    style={{ fontSize: 30 }}
                  >
                    location_on
                  </span>
                  <SelectMT
                    placeholder={""}
                    variant="standard"
                    label="Select Province"
                    name="province"
                  >
                    {provinces?.map((province, index) => (
                      <OptionMT key={index}>{province}</OptionMT>
                    ))}
                  </SelectMT>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center w-[38%]">
                <div className="flex flex-row gap-x-2 bg-eb-10 px-4 py-3 rounded-[15px] text-white">
                  <span className="material-symbols-outlined">search</span>
                  <p>Search</p>
                </div>
              </div>
            </form>
          </div>

          {/* Card Bar */}
          <div className="overflow-x-auto flex flex-row w-full h-[80%] items-start justify-start pl-1 py-5 gap-x-5">
            {data?.map((location, index) => (
              <Card key={location + "id"} location={location} />
            ))}
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="flex w-screen flex-col h-[450px] justify-start items-center mb-[5%]">
        <h1 className="text-sm text-eb-30">EcoBucks Education</h1>
        <h1 className="text-[50px] raleway font-medium text-gray-900 -mt-2">
          Education
        </h1>

        <div className="flex flex-row w-screen px-[5%] bg-red-400 h-[70%] justify-center items-center gap-x-4">
          <div className="bg-gray-900 w-[359px] h-[243px] rounded-[20px]"></div>
          <div className="bg-gray-900 w-[359px] h-[243px] rounded-[20px]"></div>
          <div className="bg-gray-900 w-[359px] h-[243px] rounded-[20px]"></div>
        </div>

        <div className="w-full justify-center items-center h-[20%] flex">
          <div className="flex flex-row gap-x-2 bg-eb-10 py-3 rounded-[20px] text-white w-[10%] items-center justify-center">
            <p>See All</p>
          </div>
        </div>
      </div>
    </>
  );
}
