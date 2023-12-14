"use client";

import { currencyFormatted } from "@/lib/ConstantFunction";
import debounce from "lodash.debounce";
import React, { useState, ChangeEvent } from "react";

const UcoForm: React.FC = () => {
  type uco = {
    uco: number;
  };

  const [query, setQuery] = useState<uco>({ uco: 0 });
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
              <form className="flex flex-col w-full h-[90%] gap-y-4 mt-[10%] items-center ">
                <div className="flex flex-col w-full h-[23%] items-center justify-center px-[5%] gap-y-1">
                  {/* <form> */}
                  <p className="flex w-full justify-start items-start text-[12px] text-white inter">
                    Your UCO in Liter
                  </p>
                  <input
                    type="text"
                    className="w-full bg-[#ffffff20] rounded-[15px] h-24 text-white px-5 placeholder:text-[#ffffff30]"
                    placeholder="ex: 250 liter"
                    onChange={(e) => debounceOnChange(e)}
                  />
                  {/* </form> */}
                </div>

                <div className="flex flex-col w-full h-[23%] items-center justify-center px-[5%] gap-y-1">
                  <p className="flex w-full justify-start items-start text-[12px] text-white inter">
                    Prediction in Rupiah
                  </p>
                  <div className="w-full bg-[#ffffff20] rounded-[15px] h-24 text-white px-5 placeholder:text-[#ffffff30] justify-center items-center">
                    <p className="flex w-full h-full justify-start items-center">
                      {currencyFormatted(query.uco * 3500)}
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
              </form>
              <div className="bg-[#ffffff] w-[20%] h-[2px] rounded-[20px] flex"></div>
            </div>
          </div>
        </div>

        {/* Button Component */}
        <div className="flex flex-row w-full h-[20%] bg-eb-40 rounded-[20px] text-white justify-center items-center px-[8%]">
          <div className="flex flex-col w-full justify-center items-start">
            <p className="text-[25px] raleway font-bold">Free Pickup UCO</p>
            <p className="text-[10px]">Lorem Ipsum has been the industry's </p>
          </div>
          <div className="bg-eb-20 rounded-[100px] w-[55px] h-[50px] flex justify-center items-center">
            <span className="material-symbols-outlined">arrow_forward</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default UcoForm;
