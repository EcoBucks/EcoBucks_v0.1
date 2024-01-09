"use client";
import { ClearWallet } from "@/app/(action)/clearWallet";
import { URL } from "@/db/config/url";
import { redirect, useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

export default function Page() {
  const searchParams = useSearchParams();
  const status = searchParams.get("status");
  if (status === "berhasil") {
    return (
      <div>
        <form
          action={ClearWallet}
          className="w-screen h-screen flex justify-center items-center py-2 rounded-lg"
        >
          <div className="flex flex-col gap-y-2">
            <h1 className="text-eb-10 underline raleway text-[25px] font-bold">
              Purchasing Complete
            </h1>
            <p className="text-[10px] text-gray-600 w-[70%] mb-[20px]">
              Please provide the email associated with your account to complete
              the payment transfer.
            </p>
            <div className="flex flex-row shadow-lg">
              <input
                type="text"
                name="email"
                placeholder="Type User Email .."
                className="py-2 px-4 rounded-tl-lg rounded-bl-lg text-[14px] focus:outline-none w-full"
              />
              <button
                type="submit"
                className=" bg-eb-10 rounded-tr-lg rounded-br-lg px-4 py-2 text-white text-[14px]"
              >
                {" "}
                Paid{" "}
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  } else {
    return redirect(`${URL}`);
  }
}
