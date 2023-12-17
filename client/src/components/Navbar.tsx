import { getUser } from "@/app/(action)/actionGetUser";
import { currencyFormatted } from "@/lib/ConstantFunction";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavbarComponent = async () => {
  const data = await getUser();

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

        <div className="flex flex-row items-center justify-center gap-x-4 rounded-xl shadow-md h-12 w-[40%] border px-[1%]">
          <div className="border-r-2 w-full flex justify-center border-gray-100 text-sm font-medium hover:scale-105 hover:text-eb-10 active:scale-90 transition-all hover:font-bold">
            Contribution
          </div>
          <Link href={"/location"}>
            <button className="flex border-r-2 w-full border-gray-100 justify-center text-sm font-medium hover:scale-105 hover:text-eb-10 active:scale-90 transition-all hover:font-bold">
              Locations
            </button>
          </Link>
          <button className="flex justify-center border-gray-100 border-r-2 w-full text-sm font-medium hover:scale-105 hover:text-eb-10 active:scale-90 transition-all hover:font-bold">
            Track UCO
          </button>
          <button className="flex justify-center border-gray-100 w-full text-sm font-medium hover:scale-105 hover:text-eb-10 active:scale-90 transition-all hover:font-bold">
            Our Partners
          </button>
        </div>

        <div className="flex justify-between px-[1.1%] items-center shadow-md rounded-xl gap-x-4">
          <div className="flex flex-row justify-center h-full items-center gap-x-2">
            <span className="material-symbols-outlined text-eb-20">
              account_balance_wallet
            </span>
            <p className="text-sm font-bold">
              {currencyFormatted(data.data.walletBallance)},-
            </p>
          </div>
          <div className="flex justify-center items-center h-12">
            <p className="bg-black text-white rounded-lg w-8 h-8 text-center text-[10px] items-center justify-center flex font-semibold">
              E
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarComponent;
