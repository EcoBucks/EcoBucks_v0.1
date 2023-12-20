"use client";

import { getUser } from "@/app/(action)/actionGetUser";
import { handleClick } from "@/app/(action)/actionIPaymu";
import { ucoPay } from "@/app/(action)/actionNodemail";
import { Token } from "@/app/(action)/token";
import { userModel } from "@/db/models/user";
import { currencyFormatted } from "@/lib/ConstantFunction";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const ButtonWallet = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const token = await Token();
      console.log(token, "======= ini token");

      if (token) {
        setIsLogin(true);
      }
    };
    fetch();
  }, []);

  type data = {
    statusCode: string;
    message: string;
    data: userModel;
  };

  const [redirectUrl, setRedirectUrl] = useState("");
  const [userPage, setUserPage] = useState(false);
  const [data, setData] = useState<data>();

  useEffect(() => {
    const fetch = async () => {
      const data = (await getUser()) as data | undefined;

      //   console.log(data);

      setData(data);
    };

    fetch();
  }, []);

  const currentPage = usePathname();

  //? coba dluuu

  const initiatePayment = async () => {
    try {
      const url: string = await handleClick();
      // console.log(url, "<<<<<<<<<<<<wallet button<<<<<<<<<<<<<<<");
      await ucoPay(url);
      // setRedirectUrl(url);
    } catch (error) {
      console.error("Payment failed:", error);
    }
  };

  const handleButtonClick = async () => {
    await initiatePayment();
  };

  // Redirect when redirectUrl is set

  // if (redirectUrl) {
  //   window.location.href = redirectUrl;
  //   return null; // Optionally return null or a loading message while redirecting
  // }

  return (
    <>
      {isLogin == false ? (
        <Link href={"/login"}>
          <div className="flex justify-center w-[160px] py-2 items-center shadow-md rounded-xl gap-x-4 bg-eb-10 hover:bg-eb-30 hover:scale-105 transition-all">
            <div className="flex flex-row justify-center h-full items-center gap-x-2">
              <span className="material-symbols-outlined text-white">
                login
              </span>
              <p className="text-sm font-bold text-white">Login</p>
            </div>
          </div>
        </Link>
      ) : currentPage == "/user" ? (
        <>
          <button
            onClick={handleButtonClick}
            className="flex justify-between px-[15px] items-center shadow-md rounded-xl gap-x-4 relative"
          >
            <div className="flex flex-row justify-center h-full items-center gap-x-2">
              <span className="material-symbols-outlined text-eb-20">
                account_balance_wallet
              </span>
              <p className="text-sm font-bold">
                {data?.data.walletBallance !== undefined
                  ? currencyFormatted(data?.data.walletBallance)
                  : ""}
              </p>
            </div>
            <div className="flex justify-center items-center h-12">
              <p className="bg-black text-white rounded-lg w-8 h-8 text-center text-[10px] items-center justify-center flex font-semibold">
                E
              </p>
            </div>
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => setDropDown(true)}
            className="flex justify-between px-[15px] items-center shadow-md rounded-xl gap-x-4 relative"
          >
            <div className="flex flex-row justify-center h-full items-center gap-x-2">
              <span className="material-symbols-outlined text-eb-20">
                account_balance_wallet
              </span>
              <p className="text-sm font-bold">
                {data?.data.walletBallance !== undefined
                  ? currencyFormatted(data?.data.walletBalance)
                  : ""}
              </p>
            </div>
            <div className="flex justify-center items-center h-12">
              <p className="bg-black text-white rounded-lg w-8 h-8 text-center text-[10px] items-center justify-center flex font-semibold">
                E
              </p>
            </div>
          </button>

          {/* Drop Down */}
          {dropDown && (
            <button
              onClick={() => setDropDown(false)}
              className="w-screen h-screen fixed inset-0"
            >
              <div className="bg-gray-100 fixed z-50 w-[12%] h-[100px] rounded-[13px] gap-y-2 text-[14px] shadow-xl flex justify-center flex-col mt-2 right-[7.5%] top-[7%] animate-fade-down">
                <button className="flex flex-row w-full justify-start text-gray-700 items-center gap-x-1 px-[18px] group hover:text-eb-10 transition-all">
                  <span className="material-symbols-outlined">wallet</span>
                  <h1 className="font-bold">Reedem Wallet</h1>
                </button>
                <Link href={"/user"}>
                  <div className="flex flex-row justify-start text-gray-700 items-center gap-x-1 group hover:text-eb-10 px-[10%] transition-all">
                    <span className="material-symbols-outlined">
                      account_circle
                    </span>
                    <h1 className="font-bold">Go To Profile</h1>
                  </div>
                </Link>
              </div>
            </button>
          )}
        </>
      )}
    </>
  );
};

export default ButtonWallet;

{
  /*  */
}
