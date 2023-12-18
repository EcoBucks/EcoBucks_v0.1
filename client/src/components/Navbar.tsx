"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import ButtonWallet from "./WalletButton";
import { usePathname } from "next/navigation";

const NavbarComponent = () => {
  // const data = await getUser();

  // console.log(data, "======ini navbar");

  const currentRoute = usePathname();
  console.log(currentRoute, "<<< current");
  const linkStyle = ` text-sm font-medium hover:scale-100 hover:text-eb-10 active:scale-90 transition-all hover:font-bold `;
  const activeStyle =
    linkStyle +
    " text-eb-10 font-extrabold hover:scale-100 active:scale-100 hover:font-medium";
  const nonActiveStyle = linkStyle + ` text-gray-400`;

  return (
    <>
      <div className="w-screen flex justify-between h-20 border-b-[1px] items-center fixed top-0 bg-white px-[7%] z-30">
        <Link href={"/"}>
          <div className="pl-15">
            <Image
              src={"/EcoBucks_Horizontal_Logo.png"}
              width={190}
              height={200}
              alt="logo"
            />
          </div>
        </Link>

        <div className="flex flex-row items-center gap-x-4 rounded-xl shadow-md h-12 w-[25%] border px-[1%] justify-evenly">
          <Link href={"/contribution"}>
            <div
              className={
                currentRoute === "/contribution" ? activeStyle : nonActiveStyle
              }
            >
              Contribution
            </div>
          </Link>
          <Link href={"/location"}>
            <button
              className={
                currentRoute === "/location" ? activeStyle : nonActiveStyle
              }
            >
              Locations
            </button>
          </Link>
          <Link href={"/education"}>
            <button
              className={
                currentRoute === "/education" ? activeStyle : nonActiveStyle
              }
            >
              Education
            </button>
          </Link>
        </div>

        {/* <button className="flex justify-between px-[1.1%] items-center shadow-md rounded-xl gap-x-4">
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
        </button> */}
        <ButtonWallet />
      </div>
    </>
  );
};

export default NavbarComponent;
