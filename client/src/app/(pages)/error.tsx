"use client";

import Link from "next/link";

const error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center px-10 ">
        <h1
          className="font-bold
         text-[4rem] text-[#5146CD]"
        >
          Error
        </h1>
        <p className="text-red-400 ">
          {error.message || "Something went wrong"}
        </p>
        <p className="text-[#8f8e8e] font-light mb-2">
          Please try again or go back if the problem persists.
        </p>
        <div className="flex ">
          <button onClick={() => reset()} className="p-2 hover:underline">
            Try again
          </button>
          <Link href="/">
            <button className="p-2 hover:underline">Go Back to Home</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default error;
