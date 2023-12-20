import CardEducation from "@/components/CardEducation";
import CardLocation from "@/components/CardLocation";
import Footer from "@/components/Footer";
import NavbarComponent from "@/components/Navbar";
import { LocationType } from "@/types";
// import React, { useContext } from "react";
import MapSubmitUCO from "@/components/Map";
import { addUco } from "@/app/(action)/addUcoBallance";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getUco } from "@/app/(action)/actionUco";

const SubmitUcoPage = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  // console.log(searchParams?.sum, "======== =");

  const sum = searchParams?.sum;

  // console.log(sum, "====== query ====");

  const cookie = cookies();
  const token = cookie.get("token");

  // const searchParams = props.searchParams;

  // console.log(searchParams, "=====query====");

  // const page = searchParams.page

  //! kasih toast => login first
  if (!token) {
    redirect("http://localhost:3000/");
  }

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
          <MapSubmitUCO />
        </div>

        {/* Right Component */}
        <div className="flex flex-col w-[45%] items-start justify-start pb-[3.5%] px-[3.5%] pt-[3%] h-[90%] bg-white shadow-xl rounded-[20px]">
          <div className="flex flex-col w-full h-full">
            <h1 className="text-[28px] raleway font-bold mb-[4%]">
              Pickup Configuration
            </h1>
            <form action={addUco}>
              <div className="flex flex-col w-full gap-y-6">
                <div className="flex flex-col">
                  <p className="text-[14px]">Your UCO Balance</p>
                  {/* //! ini tambahan dari gua jangan di apus */}
                  {sum == "" || !sum ? (
                    <input
                      name="ucoBallance"
                      type="text"
                      placeholder="How Many UCO .. "
                      className="w-full bg-gray-200 h-[50px] text-gray-800 rounded-lg px-4 text-[14px]"
                    />
                  ) : (
                    <input
                      name="ucoBallance"
                      value={sum}
                      type="text"
                      placeholder="How Many UCO .. "
                      className="w-full bg-gray-200 h-[50px] text-gray-800 rounded-lg px-4 text-[14px]"
                    />
                  )}
                  {/* //! sampe sini */}
                </div>

                <div className="flex flex-col">
                  <p className="text-[14px]">Phone Numbers</p>
                  <input
                    name="phoneNumbers"
                    type="text"
                    placeholder="Type your Phone Number .. "
                    className="w-full bg-gray-200 h-[50px] text-gray-800 rounded-lg px-4 text-[14px]"
                  />
                </div>

                <div className="flex flex-col">
                  <p className="text-[14px]">Location Details</p>
                  <input
                    name="locationDetails"
                    type="text"
                    placeholder="Give us the Detail Location .. "
                    className="w-full bg-gray-200 h-[50px] text-gray-800 rounded-lg px-4 text-[14px]"
                  />
                </div>
                {/* Pickup Date & Time */}
                <div className="flex flex-row justify-between gap-x-3">
                  <div className="flex flex-col w-[50%]">
                    <p className="text-[14px]">Pickup Date</p>
                    <input
                      name="pickUpDate"
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full bg-gray-200 h-[50px] text-gray-800 rounded-lg px-4"
                    />
                  </div>
                  <div className="flex flex-col w-[50%]">
                    <p className="text-[14px]">Pickup Time</p>
                    <div className="flex bg-gray-200 w-full rounded-lg">
                      <select
                        name="pickUpTime"
                        id=""
                        className=" bg-gray-200 h-[50px] text-gray-800 px-4 w-[90%] rounded-lg focus:outline-none"
                      >
                        <option value="10:00 - 11:00">10:00 - 11:00</option>
                        <option value="11:00 - 12:00">11:00 - 12:00</option>
                        <option value="13:00 - 14:00">13:00 - 14:00</option>
                        <option value="14:00 - 15:00">14:00 - 15:00</option>
                        <option value="15:00 - 16:00">15:00 - 16:00</option>
                        <option value="16:00 - 17:00">16:00 - 17:00</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-600 w-full h-[1px] rounded-[20px] mt-[1%]"></div>

                {/* Button Submit */}
                <button
                  type="submit"
                  className="gap-x-2 flex flex-row justify-center items-center w-full py-3 bg-eb-30 text-white rounded-[10px] mt-[1%]"
                >
                  Create Pickup
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SubmitUcoPage;
