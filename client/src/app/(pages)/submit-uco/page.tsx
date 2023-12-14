import CardEducation from "@/components/CardEducation";
import CardLocation from "@/components/CardLocation";
import Footer from "@/components/Footer";
import NavbarComponent from "@/components/Navbar";
import { LocationType } from "@/types";
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

const SubmitUcoPage = async () => {
  const data = await fetchData();

  return (
    <>
      <NavbarComponent />

      {/* BreadCrumb */}
      <div className="flex flex-row w-screen h-[85px] items-center justify-center mt-[6%] px-[7%]">
        <nav
          aria-label="breadcrumb"
          className="w-full p-4 dark:bg-gray-800 dark:text-gray-100"
        >
          <div className="flex flex-row w-full gap-x-2 items-center">
            <span
              className="material-symbols-outlined text-gray-700 rounded-lg"
              style={{ fontSize: 20 }}
            >
              arrow_back
            </span>
            <li className=" underline flex items-center text-[14px] text-gray-600">
              Back to Homepage
            </li>
          </div>
        </nav>
      </div>

      <div className="flex flex-row w-screen h-[650px] px-[8.5%] pb-[3%] gap-x-7">
        {/* Left Component */}
        <div className="flex flex-row w-[55%] justify-end items-start gap-x-2 h-[90%] shadow-xl">
          <img
            src="https://source.unsplash.com/random/900x700/?indonesia"
            className="object-cover rounded-lg w-full h-full"
          />
        </div>

        {/* Right Component */}
        <div className="flex flex-col w-[45%] items-start justify-start p-[3.5%] h-[90%] bg-white shadow-xl rounded-[20px]">
          <div className="flex flex-col w-full h-full">
            <h1 className="text-[28px] raleway font-bold">
              Pickup Configuration
            </h1>

            <div className="flex flex-col w-full">
              <p className="text">Phone Numbers</p>
              <input
                type="text"
                className="w-full bg-gray-200 h-[50px] text-gray-800 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SubmitUcoPage;
