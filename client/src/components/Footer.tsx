// @ts-ignore

"use client";

import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import { subs } from "@/app/(action)/actionNodemail";
import { toast } from "sonner";

interface FooterProps {
  type?: string;
}

const Footer = ({ type }: FooterProps) => {
  const NavAbsolute =
    "absolute w-screen h-[235px] px-[6%] text-gray-500 bottom-0";
  const NavFlex = "flex w-screen h-[235px] px-[6%] text-gray-500";
  const [email, setEmail] = useState("");

  const onSubs = async () => {
    await subs(email);
    toast.success("Check Your Email EcoUsers!");
  };

  const handleInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <>
      {/* Footer */}
      <div className={type === "absolute" ? NavAbsolute : NavFlex}>
        <div className="border-t-2 w-full h-full flex flex-row items-center pb-[4%] pt-[6%] gap-x-3">
          {/* Coloumn 1 */}
          <div className="flex flex-col col-span-2 gap-y-2 w-[50%] h-full -mt-[10%]">
            <Image
              src={"/EcoBucks_Horizontal_Logo.png"}
              width={320}
              height={200}
              alt="logo"
            />
            <h1 className="text-gray-500 font-light -mt-2 pl-[5%] dm-sans text-[14px]">
              Copyright EcoBucks 2023
            </h1>
            <div className="flex flex-row gap-x-2 w-fit pl-[5%] items-center justify-center">
              <button
                onClick={() =>
                  window.open("https://www.hacktiv8.com/", "_blank")
                }
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: 30 }}
                >
                  captive_portal
                </span>
              </button>
              <button
                onClick={() =>
                  window.open("https://github.com/EcoBucks", "_blank")
                }
              >
                <img
                  src="/github-icon.svg"
                  alt=""
                  className="w-8 h-8 -mt-2 opacity-75"
                />
              </button>
            </div>
          </div>

          {/* Hyperlink Footer */}
          <div className="flex flex-row w-[54%] text-gray-500 h-[210px]">
            <div className="flex flex-col gap-y-5 w-[70%] h-[140px] justify-start">
              <div className="flex flex-col text-[11px] gap-y-1">
                <h1 className="font-bold text-[13px] underline">Locations</h1>
                <h1>All Location</h1>
              </div>
              <div className="flex flex-col text-[11px] gap-y-1">
                <h1 className="font-bold text-[13px] underline">Profile</h1>
                <h1>User Settings</h1>
              </div>
            </div>

            <div className="flex flex-col gap-y-5 w-[70%] h-[150px] justify-start">
              <div className="flex flex-col text-[11px] gap-y-1">
                <h1 className="font-bold text-[13px] underline">
                  Contribution
                </h1>
                <h1>About Us</h1>
              </div>
              <div className="flex flex-col text-[11px] gap-y-1">
                <h1 className="font-bold text-[13px] underline">Track UCO</h1>
                <div className="flex flex-col">
                  <h1>Pickup Order</h1>
                  <h1>Our Partner</h1>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-y-2 w-[60%] h-[150px] text-[11px]">
              <h1 className="font-bold text-[13px] underline">
                Term & Conditions
              </h1>
              <div className="flex flex-col">
                <h1>Partner Regulation</h1>
                <h1>Be our Movmenet</h1>
              </div>
            </div>
          </div>

          <div className="flex flex-col col-span-2 gap-y-2 w-[60%] h-[210px] ml-[5%]">
            <h1 className=" font-bold text-[14px] text-eb-10">
              Join 1,000+ Subscribers
            </h1>
            <h1 className="text-gray-500 font-light -mt-2 text-[13px]">
              Stay connected to be informed about us
            </h1>
            {/* <FooterForm>
              <button
                type="submit"
                className="w-[40%] h-full bg-eb-10 justify-center items-center flex flex-row rounded-lg text-white gap-x-1 px-2 pb-1 hover:bg-eb-30 transition-all"
              >
                <span className="material-symbols-outlined">mail</span>
                <p>send</p>
              </button>
            </FooterForm> */}

            <form
              action={() => onSubs()}
              className="flex flex-row gap-x-2 w-[100%] py-2 h-[35%]"
            >
              <input
                value={email}
                onChange={handleInputChange}
                type="text"
                name="email"
                placeholder="Tell us your email"
                autoComplete="off"
                className="w-full bg-gray-300 rounded-md px-4 text-gray-800 text-[14px] font-bold dm-sans"
              />
              <button
                type="submit"
                className="w-[40%] h-full bg-eb-10 justify-center items-center flex flex-row rounded-lg text-white gap-x-1 px-2 pb-1 hover:bg-eb-30 transition-all"
              >
                <span className="material-symbols-outlined">mail</span>
                <p>send</p>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
