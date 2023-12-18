"use client";
import { ClearWallet } from "@/app/(action)/clearWallet";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";
import NavbarComponent from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const UserPage = () => {
  const [open, setOpen] = useState(false);
  const searchParams = useSearchParams();

  console.log(searchParams.get("status"), "======");

  const status = searchParams.get("status");
  if (status == "berhasil") {
    useEffect(() => {
      const fetch = async () => {
        await ClearWallet();
      };

      fetch();
    }, []);
  }

  return (
    <>
      <NavbarComponent />
      <div className="p-10 mt-20">
        <div className="flex flex-col md:flex-row">
          <div className=" bg-eb-10 rounded-[10px] shadow-[0_10px_29px_0px_rgba(0,0,0,0.1)] md:mr-[1.5rem] p-6 md:p-12 w-[75%] h-[200px] md:w-[308px] md:h-[332px] self-center md:self-start">
            <div className="flex flex-col raleway font-bold">
              <h1 className="text-white text-[20px]">Hola Hacktiv8 User!</h1>
              <Link href="/user-page">
                <div className="flex my-2 md:my-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="25"
                    viewBox="0 0 23 25"
                    fill="none"
                    className="mr-4"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.02 0.44C4.22774 0.163014 4.55377 0 4.9 0H18.1C18.4462 0 18.7723 0.163014 18.98 0.44L22.28 4.84C22.4228 5.03041 22.5 5.26199 22.5 5.5V20.9C22.5 21.7752 22.1523 22.6146 21.5335 23.2335C20.9146 23.8523 20.0752 24.2 19.2 24.2H3.8C2.92479 24.2 2.08542 23.8523 1.46655 23.2335C0.847678 22.6146 0.5 21.7752 0.5 20.9V5.5C0.5 5.26199 0.577196 5.03041 0.72 4.84L4.02 0.44ZM5.45 2.2L2.7 5.86667V20.9C2.7 21.1917 2.81589 21.4715 3.02218 21.6778C3.22847 21.8841 3.50826 22 3.8 22H19.2C19.4917 22 19.7715 21.8841 19.9778 21.6778C20.1841 21.4715 20.3 21.1917 20.3 20.9V5.86667L17.55 2.2H5.45Z"
                      fill="#FCFCFC"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.5 5.50002C0.5 4.89251 0.992487 4.40002 1.6 4.40002H21.4C22.0075 4.40002 22.5 4.89251 22.5 5.50002C22.5 6.10754 22.0075 6.60002 21.4 6.60002H1.6C0.992487 6.60002 0.5 6.10754 0.5 5.50002Z"
                      fill="#FCFCFC"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.1 8.80005C7.70751 8.80005 8.2 9.29254 8.2 9.90005C8.2 10.7753 8.54768 11.6146 9.16655 12.2335C9.78542 12.8524 10.6248 13.2 11.5 13.2C12.3752 13.2 13.2146 12.8524 13.8335 12.2335C14.4523 11.6146 14.8 10.7753 14.8 9.90005C14.8 9.29254 15.2925 8.80005 15.9 8.80005C16.5075 8.80005 17 9.29254 17 9.90005C17 11.3587 16.4205 12.7577 15.3891 13.7891C14.3576 14.8206 12.9587 15.4 11.5 15.4C10.0413 15.4 8.64236 14.8206 7.61091 13.7891C6.57946 12.7577 6 11.3587 6 9.90005C6 9.29254 6.49249 8.80005 7.1 8.80005Z"
                      fill="#FCFCFC"
                    />
                  </svg>
                  <h1 className="text-white">Transaction</h1>
                </div>
              </Link>
              <Link href="/settings">
                <div className="flex my-2 md:my-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="25"
                    viewBox="0 0 25 21"
                    fill="none"
                    className="mr-4"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.5 11.1C5.05228 11.1 5.5 11.5477 5.5 12.1V19.1C5.5 19.6523 5.05228 20.1 4.5 20.1C3.94772 20.1 3.5 19.6523 3.5 19.1V12.1C3.5 11.5477 3.94772 11.1 4.5 11.1Z"
                      fill="#FCFCFC"
                      fillOpacity="0.63"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.5 0.0999756C5.05228 0.0999756 5.5 0.547691 5.5 1.09998V8.09998C5.5 8.65226 5.05228 9.09998 4.5 9.09998C3.94772 9.09998 3.5 8.65226 3.5 8.09998V1.09998C3.5 0.547691 3.94772 0.0999756 4.5 0.0999756Z"
                      fill="#FCFCFC"
                      fillOpacity="0.63"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.5 9.09998C13.0523 9.09998 13.5 9.54769 13.5 10.1V19.1C13.5 19.6523 13.0523 20.1 12.5 20.1C11.9477 20.1 11.5 19.6523 11.5 19.1V10.1C11.5 9.54769 11.9477 9.09998 12.5 9.09998Z"
                      fill="#FCFCFC"
                      fillOpacity="0.63"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.5 0.0999756C13.0523 0.0999756 13.5 0.547691 13.5 1.09998V6.09998C13.5 6.65226 13.0523 7.09998 12.5 7.09998C11.9477 7.09998 11.5 6.65226 11.5 6.09998V1.09998C11.5 0.547691 11.9477 0.0999756 12.5 0.0999756Z"
                      fill="#FCFCFC"
                      fillOpacity="0.63"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.5 13.1C21.0523 13.1 21.5 13.5477 21.5 14.1V19.1C21.5 19.6523 21.0523 20.1 20.5 20.1C19.9477 20.1 19.5 19.6523 19.5 19.1V14.1C19.5 13.5477 19.9477 13.1 20.5 13.1Z"
                      fill="#FCFCFC"
                      fillOpacity="0.63"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.5 0.0999756C21.0523 0.0999756 21.5 0.547691 21.5 1.09998V10.1C21.5 10.6523 21.0523 11.1 20.5 11.1C19.9477 11.1 19.5 10.6523 19.5 10.1V1.09998C19.5 0.547691 19.9477 0.0999756 20.5 0.0999756Z"
                      fill="#FCFCFC"
                      fillOpacity="0.63"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.5 12.1C0.5 11.5477 0.947715 11.1 1.5 11.1H7.5C8.05228 11.1 8.5 11.5477 8.5 12.1C8.5 12.6523 8.05228 13.1 7.5 13.1H1.5C0.947715 13.1 0.5 12.6523 0.5 12.1Z"
                      fill="#FCFCFC"
                      fillOpacity="0.63"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.5 6.09998C8.5 5.54769 8.94772 5.09998 9.5 5.09998H15.5C16.0523 5.09998 16.5 5.54769 16.5 6.09998C16.5 6.65226 16.0523 7.09998 15.5 7.09998H9.5C8.94772 7.09998 8.5 6.65226 8.5 6.09998Z"
                      fill="#FCFCFC"
                      fillOpacity="0.63"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.5 14.1C16.5 13.5477 16.9477 13.1 17.5 13.1H23.5C24.0523 13.1 24.5 13.5477 24.5 14.1C24.5 14.6523 24.0523 15.1 23.5 15.1H17.5C16.9477 15.1 16.5 14.6523 16.5 14.1Z"
                      fill="#FCFCFC"
                      fillOpacity="0.63"
                    />
                  </svg>
                  <h1 className="text-white">Settings</h1>
                </div>
              </Link>
              <button onClick={() => setOpen(true)}>
                <div className="flex my-2 md:my-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="25"
                    viewBox="0 0 21 21"
                    fill="none"
                    className="mr-4"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.5 2.09998C3.23478 2.09998 2.98043 2.20533 2.79289 2.39287C2.60536 2.5804 2.5 2.83476 2.5 3.09998V17.1C2.5 17.3652 2.60536 17.6195 2.79289 17.8071C2.98043 17.9946 3.23478 18.1 3.5 18.1H7.5C8.05228 18.1 8.5 18.5477 8.5 19.1C8.5 19.6523 8.05228 20.1 7.5 20.1H3.5C2.70435 20.1 1.94129 19.7839 1.37868 19.2213C0.81607 18.6587 0.5 17.8956 0.5 17.1V3.09998C0.5 2.30433 0.81607 1.54126 1.37868 0.978655C1.94129 0.416046 2.70435 0.0999756 3.5 0.0999756H7.5C8.05228 0.0999756 8.5 0.547691 8.5 1.09998C8.5 1.65226 8.05228 2.09998 7.5 2.09998H3.5Z"
                      fill="#FCFCFC"
                      fillOpacity="0.63"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.7929 4.39287C14.1834 4.00234 14.8166 4.00234 15.2071 4.39287L20.2071 9.39287C20.5976 9.78339 20.5976 10.4166 20.2071 10.8071L15.2071 15.8071C14.8166 16.1976 14.1834 16.1976 13.7929 15.8071C13.4024 15.4166 13.4024 14.7834 13.7929 14.3929L18.0858 10.1L13.7929 5.80708C13.4024 5.41656 13.4024 4.78339 13.7929 4.39287Z"
                      fill="#FCFCFC"
                      fillOpacity="0.63"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.5 10.1C6.5 9.54769 6.94772 9.09998 7.5 9.09998H19.5C20.0523 9.09998 20.5 9.54769 20.5 10.1C20.5 10.6523 20.0523 11.1 19.5 11.1H7.5C6.94772 11.1 6.5 10.6523 6.5 10.1Z"
                      fill="#FCFCFC"
                      fillOpacity="0.63"
                    />
                  </svg>
                  <h1 className="text-white">Logout</h1>
                </div>
              </button>
              <Modal open={open} onClose={() => setOpen(false)}>
                <div className="text-center w-56">
                  <div className="mx-auto my-4 w-48">
                    <h3 className="text-lg font-black text-gray-800">
                      Logout Account?
                    </h3>
                    <p className="text-sm text-gray-500">
                      Are you sure you want to logout?
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <button className=" w-full">Logout</button>
                    <button className=" w-full" onClick={() => setOpen(false)}>
                      Cancel
                    </button>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
          <div className="rounded-[10px] bg-[#FCFCFC] shadow-[0_10px_29px_0px_rgba(0,0,0,0.1)] h-[500px] w-full md:w-[875px] md:h-[650px] mt-4 md:mt-0 p-3 md:p-10 overflow-auto">
            <h1 className="mb-4">Your Transaction Pending</h1>
            <div className="px-4 md:px-10">
              <div className="flex flex-row justify-between text-[10px] md:text-[1rem]">
                <h1>No</h1>
                <h1>Order Number</h1>
                <h1>Amount Balance</h1>
                <h1>Status</h1>
              </div>
              <hr className="my-2 " />
              {/* Ini yg nanti di map */}
              <div className="flex flex-row justify-between text-[10px] md:text-[1rem] my-3">
                <p>1</p>
                <p>#3DE7GH</p>
                <p>Rp250,000</p>
                <p>Pending</p>
              </div>
              {/* ^^^^^^^^^^^^^^ */}
              <div className="flex flex-row justify-between text-[10px] md:text-[1rem] my-3">
                <p>2</p>
                <p>#3DE7GH</p>
                <p>Rp250,000</p>
                <p>Pending</p>
              </div>
              <div className="flex flex-row justify-between text-[10px] md:text-[1rem] my-3">
                <p>3</p>
                <p>#3DE7GH</p>
                <p>Rp250,000</p>
                <p>Pending</p>
              </div>
              <div className="flex flex-row justify-between text-[10px] md:text-[1rem] my-3">
                <p>3</p>
                <p>#3DE7GH</p>
                <p>Rp250,000</p>
                <p>Pending</p>
              </div>
              <div className="flex flex-row justify-between text-[10px] md:text-[1rem] my-3">
                <p>3</p>
                <p>#3DE7GH</p>
                <p>Rp250,000</p>
                <p>Pending</p>
              </div>
              <div className="flex flex-row justify-between text-[10px] md:text-[1rem] my-3">
                <p>3</p>
                <p>#3DE7GH</p>
                <p>Rp250,000</p>
                <p>Pending</p>
              </div>
              <div className="flex flex-row justify-between text-[10px] md:text-[1rem] my-3">
                <p>3</p>
                <p>#3DE7GH</p>
                <p>Rp250,000</p>
                <p>Pending</p>
              </div>
              <div className="flex flex-row justify-between text-[10px] md:text-[1rem] my-3">
                <p>3</p>
                <p>#3DE7GH</p>
                <p>Rp250,000</p>
                <p>Pending</p>
              </div>
              <div className="flex flex-row justify-between text-[10px] md:text-[1rem] my-3">
                <p>3</p>
                <p>#3DE7GH</p>
                <p>Rp250,000</p>
                <p>Pending</p>
              </div>
              <div className="flex flex-row justify-between text-[10px] md:text-[1rem] my-3">
                <p>3</p>
                <p>#3DE7GH</p>
                <p>Rp250,000</p>
                <p>Pending</p>
              </div>
              <div className="flex flex-row justify-between text-[10px] md:text-[1rem] my-3">
                <p>3</p>
                <p>#3DE7GH</p>
                <p>Rp250,000</p>
                <p>Pending</p>
              </div>
              <div className="flex flex-row justify-between text-[10px] md:text-[1rem] my-3">
                <p>3</p>
                <p>#3DE7GH</p>
                <p>Rp250,000</p>
                <p>Pending</p>
              </div>
              <div className="flex flex-row justify-between text-[10px] md:text-[1rem] my-3">
                <p>3</p>
                <p>#3DE7GH</p>
                <p>Rp250,000</p>
                <p>Pending</p>
              </div>
              <div className="flex flex-row justify-between text-[10px] md:text-[1rem] my-3">
                <p>3</p>
                <p>#3DE7GH</p>
                <p>Rp250,000</p>
                <p>Pending</p>
              </div>
              <div className="flex flex-row justify-between text-[10px] md:text-[1rem] my-3">
                <p>3</p>
                <p>#3DE7GH</p>
                <p>Rp250,000</p>
                <p>Pending</p>
              </div>
              <div className="flex flex-row justify-between text-[10px] md:text-[1rem] my-3">
                <p>3</p>
                <p>#3DE7GH</p>
                <p>Rp250,000</p>
                <p>Pending</p>
              </div>
              <div className="flex flex-row justify-between text-[10px] md:text-[1rem] my-3">
                <p>3</p>
                <p>#3DE7GH</p>
                <p>Rp250,000</p>
                <p>Pending</p>
              </div>
              <div className="flex flex-row justify-between text-[10px] md:text-[1rem] my-3">
                <p>3</p>
                <p>#3DE7GH</p>
                <p>Rp250,000</p>
                <p>Pending</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserPage;
