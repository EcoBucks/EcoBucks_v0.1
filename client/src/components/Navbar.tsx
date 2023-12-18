"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ButtonWallet from "./WalletButton";
const NavbarComponent = () => {
  // const data = await getUser();

  // console.log(data, "======ini navbar");

  return (
    <>
      <div className="w-screen flex justify-between h-20 border-b-[1px] items-center fixed top-0 bg-white px-[7%] z-10">
        <Link href={"/"}>
          <div className="pl-15">
            <Image
              src={"/EcoBucks_Horizontal_Logo.svg"}
              width={190}
              height={200}
              alt="logo"
            />
          </div>
        </Link>

        <div className="flex flex-row items-center gap-x-4 rounded-xl shadow-md h-12 w-[40%] border px-[1%] justify-evenly">
          <Link href={"/contribution"}>
            <div className=" border-gray-100 text-sm font-medium hover:scale-105 hover:text-eb-10 active:scale-90 transition-all hover:font-bold">
              Contribution
            </div>
          </Link>
          <Link href={"/location"}>
            <button className="flex  border-gray-100 text-sm font-medium hover:scale-105 hover:text-eb-10 active:scale-90 transition-all hover:font-bold">
              Locations
            </button>
          </Link>
          <Link href={"/education"}>
            <button className="flex border-gray-100  text-sm font-medium hover:scale-105 hover:text-eb-10 active:scale-90 transition-all hover:font-bold">
              Education
            </button>
          </Link>
          <button className="flex border-gray-100 text-sm font-medium hover:scale-105 hover:text-eb-10 active:scale-90 transition-all hover:font-bold">
            Our Partners
          </button>
        </div>
        <ButtonWallet />
      </div>
    </>
  );
};

export default NavbarComponent;
