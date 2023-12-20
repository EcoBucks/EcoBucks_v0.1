"use client";
import { Transaction } from "@/app/(action)/actionGetTransaction";
import { getUser } from "@/app/(action)/actionGetUser";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";
// import Modal from "@/components/Modal";
import { handleClick } from "@/app/(action)/actionIPaymu";
import { ucoModels, updateUBallanceOnGoing } from "@/db/models/uco";
import { userModel } from "@/db/models/user";
import { currencyFormatted } from "@/lib/ConstantFunction";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const UserPage = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<dataUser>();
  const [transaction, setTransaction] = useState<ucoModels[]>();
  const [redirectUrl, setRedirectUrl] = useState("");

  const searchParams = useSearchParams();

  type dataUser = {
    statusCode: string;
    message: string;
    data: userModel;
  };

  // console.log(searchParams.get("status"), "======");

  const fetchUser = async () => {
    try {
      const data = await getUser();
      setUser(data);
      // console.log(data, "====user===");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (user?.data.role == "user") {
    const fetch = async () => {
      try {
        const data: ucoModels[] = (await Transaction("user")) as any;
        setTransaction(data);
        // console.log(data, "=======");
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      fetch();
    }, []);
  } else {
    useEffect(() => {
      const fetch = async () => {
        try {
          const data: ucoModels[] = (await Transaction("driver")) as any;
          // console.log(data, "===driver====");
          setTransaction(data);
        } catch (error) {
          console.log(error);
        }
      };
      fetch();
    }, []);
  }

  // const status = searchParams.get("status");
  // if (status === "berhasil") {
  //   useEffect(() => {
  //     const clearUserWallet = async () => {
  //       try {
  //         await ClearWallet();
  //         // Handle successful wallet clearing if needed
  //       } catch (error) {
  //         // Handle errors here
  //         console.error(error);
  //       }
  //     };

  //     clearUserWallet();
  //   }, []);
  // }

  const onLCickHandler = async (id: string) => {
    // console.log(id);
    try {
      await fetch(`http://localhost:3000/api/transaction`, {
        method: "PUT",
        body: JSON.stringify(id),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const complete = async (id: string) => {
    console.log(id);
    try {
      await fetch("http://localhost:3000/api/pay", {
        method: "PUT",
        body: JSON.stringify(id),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  // console.log(transaction, "<<<<<<< transaction");

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
      {/* Main Page */}
      <div className="rounded-[10px] h-[500px] w-full md:w-[875px] md:h-[650px] mt-4 md:mt-0 md:p-10 overflow-auto bg-white shadow-lg animate-fade-up">
        <h1 className="mb-5 px-10 text-[20px] underline font-bold text-eb-10">
          Your Transaction Pending
        </h1>
        <div className="w-full flex justify-center">
          <table className="table-auto w-[90%]">
            <thead className="border-b-2 text-gray-900">
              <tr>
                <th>No</th>
                <th>Order Number</th>
                <th>Amount Number</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="text-center text-gray-600 border-spacing-y-2">
              {transaction?.map((el, idx) => (
                <tr key={el._id} className="h-9">
                  <td>{idx + 1}</td>
                  <td className="uppercase">
                    {el._id.substring(12, 17)}-{user?.data.name.substring(0, 2)}
                  </td>
                  <td>
                    {el.ucoBalance !== undefined
                      ? currencyFormatted(el.ucoBalance)
                      : ""}
                  </td>
                  <td>
                    {el.status == "complete" ? (
                      <p>{el.status}</p>
                    ) : el.status == "ongoing" &&
                      user?.data.role == "driver" ? (
                      <button onClick={() => complete(el._id)}>
                        {el.status}
                      </button>
                    ) : user?.data.role == "driver" ? (
                      <button onClick={() => onLCickHandler(el._id)}>
                        {el.status}
                      </button>
                    ) : (
                      <p>{el.status}</p>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default UserPage;
