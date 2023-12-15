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

      <div className="flex flex-row w-screen h-[720px] px-[8.5%] pb-[3%] gap-x-5">
        {/* Left Component */}
        <div className="flex flex-row w-[55%] justify-end items-start gap-x-2 h-[90%] shadow-xl rounded-[20px] overflow-hidden relative">
          {/* Div For Maps */}
          <img
            src="https://source.unsplash.com/random/900x700/?maps"
            className="object-cover rounded-lg w-full h-full"
          />
          {/* Input Maps */}
          <div className="absolute w-[30%] h-[30%] left-0 m-[4%]">
            <div className="flex flex-col w-full h-full items-start justify-start gap-y-2">
              <input
                type="text"
                placeholder="Enter Location"
                className="w-full bg-gray-200 h-[35px] text-gray-800 rounded-lg px-4 text-[14px]"
              />
              <input
                placeholder="Enter Destination"
                type="text"
                className="w-full bg-gray-200 h-[35px] text-gray-800 rounded-lg px-4 text-[14px]"
              />
              {/* Button Search Place */}
              <div className="flex justify-center px-4 text-white bg-eb-30 py-1 rounded-md text-[14px]">
                See Prices
              </div>
            </div>
          </div>
        </div>

        {/* Right Component */}
        <div className="flex flex-col w-[45%] items-start justify-start pb-[3.5%] px-[3.5%] pt-[3%] h-[90%] bg-white shadow-xl rounded-[20px]">
          <div className="flex flex-col w-full h-full">
            <h1 className="text-[28px] raleway font-bold mb-[4%]">
              Pickup Configuration
            </h1>

            <div className="flex flex-col w-full gap-y-6">
              <div className="flex flex-col">
                <p className="text-[14px]">Your UCO Balance</p>
                <input
                  type="text"
                  className="w-full bg-gray-200 h-[50px] text-gray-800 rounded-lg px-4"
                />
              </div>

              <div className="flex flex-col">
                <p className="text-[14px]">Phone Numbers</p>
                <input
                  type="text"
                  className="w-full bg-gray-200 h-[50px] text-gray-800 rounded-lg px-4"
                />
              </div>

              <div className="flex flex-col">
                <p className="text-[14px]">Location Details</p>
                <input
                  type="text"
                  className="w-full bg-gray-200 h-[50px] text-gray-800 rounded-lg px-4"
                />
              </div>
              {/* Pickup Date & Time */}
              <div className="flex flex-row justify-between gap-x-3">
                <div className="flex flex-col w-[50%]">
                  <p className="text-[14px]">Pickup Date</p>
                  <input
                    type="date"
                    className="w-full bg-gray-200 h-[50px] text-gray-800 rounded-lg px-4"
                  />
                </div>
                <div className="flex flex-col w-[50%]">
                  <p className="text-[14px]">Pickup Time</p>
                  <div className="flex bg-gray-200 w-full rounded-lg">
                    <select
                      name=""
                      id=""
                      className=" bg-gray-200 h-[50px] text-gray-800 px-4 w-[90%] rounded-lg focus:outline-none"
                    >
                      <option value="">15:00 - 16:00</option>
                      <option value="">15:00 - 16:00</option>
                      <option value="">15:00 - 16:00</option>
                      <option value="">15:00 - 16:00</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="bg-gray-600 w-full h-[1px] rounded-[20px] mt-[1%]"></div>

              {/* Button Submit */}
              <div className="gap-x-2 flex flex-row justify-center items-center w-full py-3 bg-eb-30 text-white rounded-[10px] mt-[1%]">
                Create Pickup
                <span className="material-symbols-outlined">arrow_forward</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SubmitUcoPage;
