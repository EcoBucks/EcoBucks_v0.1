"use client";
import { ClearWallet } from "@/app/(action)/clearWallet";
import { redirect, useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

export default function page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const status = searchParams.get("status");
  if (status === "berhasil") {
    return (
      <div>
        <h1>tenkyuuuuu</h1>

        <form
          action={ClearWallet}
          className="w-screen h-screen flex justify-center items-center"
        >
          <input type="text" name="email" />
          <button type="submit" className=" bg-blue-gray-300 rounded-full">
            {" "}
            bayar{" "}
          </button>
        </form>
      </div>
    );
  } else {
    return redirect("http://localhost:3000/");
  }
}
