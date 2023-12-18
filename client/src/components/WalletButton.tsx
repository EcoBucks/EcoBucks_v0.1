"use client";

import { getUser } from "@/app/(action)/actionGetUser";
import { handleClick } from "@/app/(action)/actionIPaymu";
import { Token } from "@/app/(action)/token";
import { userModel } from "@/db/models/user";
import { currencyFormatted } from "@/lib/ConstantFunction";
import Link from "next/link";
import { useEffect, useState } from "react";

const ButtonWallet = () => {
  const [isLogin, setIsLogin] = useState(false);

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

  const [data, setData] = useState<data>();
  const [redirectUrl, setRedirectUrl] = useState("");

  useEffect(() => {
    const fetch = async () => {
      const data = (await getUser()) as data | undefined;

      //   console.log(data);

      setData(data);
    };

    fetch();
  }, []);

  //? coba dluuu

  // const initiatePayment = async () => {
  //   try {
  //     const url = await handleClick();
  //     setRedirectUrl(url);
  //   } catch (error) {
  //     console.error("Payment failed:", error);
  //   }
  // };

  // const handleButtonClick = async () => {
  //   await initiatePayment();
  // };

  // // Redirect when redirectUrl is set
  // if (redirectUrl) {
  //   window.location.href = redirectUrl;
  //   return null; // Optionally return null or a loading message while redirecting
  // }

  return (
    <>
      {isLogin == false ? (
        <Link
          href={"/login"}
          className="flex justify-between px-[1.1%] items-center shadow-md rounded-xl gap-x-4"
        >
          <div className="flex flex-row justify-center h-full items-center gap-x-2">
            <span className="material-symbols-outlined text-eb-20">
              account_balance_wallet
            </span>
            <p className="text-sm font-bold">login</p>
          </div>
          <div className="flex justify-center items-center h-12">
            <p className="bg-black text-white rounded-lg w-8 h-8 text-center text-[10px] items-center justify-center flex font-semibold">
              E
            </p>
          </div>
        </Link>
      ) : (
        <Link
          href={"/user"}
          // onClick={handleButtonClick}
          className="flex justify-between px-[1.1%] items-center shadow-md rounded-xl gap-x-4"
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
        </Link>
      )}
    </>
  );
};

export default ButtonWallet;

{
  /*  */
}
