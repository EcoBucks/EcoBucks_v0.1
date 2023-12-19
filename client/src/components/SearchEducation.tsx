"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

const SearchEducation = () => {
  const router = useRouter();
  const [text, setText] = useState("");
  const [query] = useDebounce(text, 500);
  useEffect(() => {
    if (!query) {
      router.push(`/education`);
    } else {
      router.push(`/education?search=${query}`);
    }
  }, [query, router]);
  return (
    <>
      <div className="absolute bg-white w-[35%] h-[75px] -bottom-11 rounded-[20px] flex flex-row justify-center items-center px-[4%] shadow-lg z-20">
        <span className="material-symbols-outlined text-gray-700">search</span>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Search Article ..."
          className="rounded-[20px] w-full h-full px-[3%] focus:outline-none"
        />
      </div>
    </>
  );
};

export default SearchEducation;
