"use client";

import { getUco } from "@/app/(action)/actionUco";
import {
  calculateCarbonEmissions,
  currencyFormatted,
} from "@/lib/ConstantFunction";
import debounce from "lodash.debounce";
import Link from "next/link";
import React, { useState, ChangeEvent } from "react";

const UcoForm: React.FC = () => {
  type uco = {
    uco: number;
  };

  const [query, setQuery] = useState<uco>({ uco: 0 });
  const [jenis, setJenis] = useState("dirigen");
  const updateQuery = (e: ChangeEvent<HTMLInputElement> | null) => {
    if (e) {
      const data = e?.target?.value;
      setQuery({
        ...query,
        uco: +data,
      });
      // onSearch(query);
      // console.log(query);
    }
  };

  const debounceOnChange = debounce(updateQuery, 300);
  return (
    <>
      <div className="flex flex-col justify-start items-center w-full h-full gap-y-4">
        {/* Form Component */}
        <div className="flex flex-col w-full h-[80%] bg-eb-40 rounded-[20px] py-[7%] px-[5%] gap-y-4 items-start">
          <div className="flex flex-col w-full justify-between px-[3%] text-white items-center h-full">
            <div className="flex flex-col w-full justify-between items-start">
              <div className="flex flex-row w-full justify-between">
                <p className="text-[25px] raleway font-bold">
                  Calculate Your UCO
                </p>
                <span className="material-symbols-outlined mt-2">help</span>
              </div>
              <div className="bg-[#ffffff] w-[20%] h-[2px] rounded-[20px]"></div>
            </div>

            <div className="flex w-full justify-start mt-2 h-full">
              <form
                action={getUco}
                className="flex flex-col w-full h-full gap-y-4 mt-[10%] items-center"
              >
                <div className="flex flex-col w-full h-[23%] items-center justify-center gap-y-1">
                  {/* <form> */}
                  <p className="flex w-full justify-start items-start text-[12px] text-white inter">
                    Your UCO (Used Cooking Oil)
                  </p>
                  <div className="flex flex-row w-full h-full">
                    <input
                      type="text"
                      className="w-[90%] bg-[#ffffff20] rounded-s-[15px] text-white px-5 placeholder:text-[#ffffff30] focus:outline-none focus:bg-white/20 transition-all"
                      placeholder="ex: 250 liter"
                      name="sum"
                      onChange={(e) => debounceOnChange(e)}
                    />
                    <div className="bg-eb-20 px-[1%] w-[50%] h-full flex pl-[2%] items-center rounded-e-[15px] text-[14px] raleway">
                      <select
                        name="jenis"
                        className=" bg-eb-20 h-[50px] px-4 w-full rounded-lg focus:outline-none appearance-none mr-3"
                      >
                        <option value="Galon">Galon</option>
                        <option value="Drigen">Drigen</option>
                        <option value="Bottle">Bottle</option>
                        <option value="Liter">Liter</option>
                      </select>
                    </div>
                  </div>
                  {/* </form> */}
                </div>

                <div className="flex flex-col w-full h-[23%] items-center justify-center gap-y-1">
                  <p className="flex w-full justify-start items-start text-[12px] text-white inter">
                    Prediction in Rupiah
                  </p>
                  <div className="w-full bg-[#ffffff20] rounded-[15px] h-14 text-white px-5 placeholder:text-[#ffffff30] justify-center items-center">
                    <p className="flex w-full h-full justify-start items-center">
                      {jenis == "botol"
                        ? currencyFormatted(query.uco * 3500)
                        : currencyFormatted(query.uco * 5000)}
                    </p>
                  </div>
                </div>
                <div className="bg-[#ffffff60] w-[90%] h-[2px] rounded-[20px]"></div>
                <div className="w-full flex flex-row gap-x-3 justify-center items-center bg-eb-30/60 text-white/70 rounded-xl h-12 group hover:bg-eb-30 hover:text-white">
                  {/* <Link href={"/submit-uco"}> */}
                  <button type="submit">
                    <p className="font-bold raleway ">Request Pickup</p>
                  </button>
                  {/* </Link> */}
                  <span className="material-symbols-outlined group-hover:animate-shake">
                    quick_reorder
                  </span>
                </div>
                <div className="text-white text-[12px] mt-2 flex flex-row gap-x-1">
                  {/* MVP Emition Gas */}
                  <p className="font-bold text-white underline">
                    {query.uco > 0
                      ? `+${calculateCarbonEmissions(query.uco)}%`
                      : "Doesn't have"}
                  </p>
                  <p>Contribution for Emition Gas Carbon</p>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Button Component */}
        <div className="flex flex-row w-full h-[20%] bg-eb-40 rounded-[20px] text-white justify-center items-center px-[8%] group hover:bg-eb-30 transition-all">
          <div className="flex flex-col w-full justify-center items-start">
            <p className="text-[25px] raleway font-bold">Free Pickup UCO</p>
            <p className="text-[12px]">
              Free pickup at your preferred location.{" "}
            </p>
          </div>
          <div className="bg-eb-20 rounded-[100px] w-[55px] h-[50px] flex justify-center items-center group-hover:bg-white group-hover:text-black transition-all group-hover:scale-105">
            <span className="material-symbols-outlined hover">
              arrow_forward
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default UcoForm;
