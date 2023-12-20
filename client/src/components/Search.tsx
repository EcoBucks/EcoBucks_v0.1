"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

const Search = () => {
  const router = useRouter();
  const [text, setText] = useState("");
  const [query] = useDebounce(text, 500);
  useEffect(() => {
    if (!query) {
      router.push(`/location`);
    } else {
      router.push(`/location?search=${query}`);
    }
  }, [query, router]);
  return (
    <>
      <div className="flex flex-row w-full h-[50px] justify-between items-center">
        {/* <h1 className="raleway font-bold text-[35px]">Find Location</h1> */}
        <div className="flex flex-row bg-white w-full py-2 px-[4%] rounded-xl shadow-md">
          <div className="w-[180px] text-eb-10 font-bold raleway">
            Find Location
          </div>
          <input
            type="text"
            value={text}
            placeholder="Search Location by Name .."
            onChange={(e) => setText(e.target.value)}
            className="w-full px-[1%] focus:outline-none text-[14px]"
          />
          <span className="material-symbols-outlined text-gray-500">
            search
          </span>
        </div>
      </div>
    </>
  );
};

export default Search;
