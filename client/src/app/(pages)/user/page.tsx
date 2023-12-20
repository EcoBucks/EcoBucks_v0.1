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
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const UserPage = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<userModel>();
  const [transaction, setTransaction] = useState<ucoModels[]>();
  const [userRole, setUserRole] = useState<string | undefined>(user?.role);
  const [redirectUrl, setRedirectUrl] = useState("");

  const navigation = useRouter();

  type dataUser = {
    statusCode: string;
    message: string;
    data: userModel;
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUser();
        setUser(data.data);
        // console.log(data.data, "====user===");
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    console.log("amn=anglyy ni bost");
  }

  useEffect(() => {
    // Update userRole state when user?.role changes
    setUserRole(user?.role);
  }, [user?.role]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data: ucoModels[] = [];
        if (userRole === "driver") {
          data = (await Transaction("driver")) as ucoModels[];
        } else {
          data = (await Transaction("user")) as ucoModels[];
        }
        console.log(data, "== Data Retrieved =====");
        setTransaction(data);

        navigation.refresh();
      } catch (error) {
        console.log(error);
        // Handle error if necessary
      }
    };

    fetchData();
  }, [userRole]); // Trigger the effect whenever user role changes

  // Assuming `user` is coming from your context or props

  const onLCickHandler = async (id: string) => {
    // console.log(id);
    try {
      await fetch(`http://localhost:3000/api/transaction`, {
        method: "PUT",
        body: JSON.stringify({
          id: id,
          driverId: user?._id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const complete = async (id: string) => {
    // console.log(id);
    try {
      await fetch("http://localhost:3000/api/pay", {
        method: "PUT",
        body: JSON.stringify({
          id: id,
          driverId: user?._id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* Main Page */}
      <div className="rounded-[10px] h-[500px] w-full md:w-[875px] md:h-[650px] mt-4 md:mt-0 md:p-10 overflow-auto bg-white shadow-lg animate-fade-up mb-[7%]">
        <div className="flex flex-col w-full h-fit -gap-y-2 mb-5">
          <h1 className="px-10 text-[20px] underline font-bold text-eb-10">
            Transaction List
          </h1>
          {user?.role !== "driver" && (
            <h1 className="px-10 text-[12px] text-gray-500">
              *You can only watch your transaction
            </h1>
          )}
        </div>
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
                  <td className="uppercase">{el._id.substring(12, 18)}</td>
                  <td>
                    {el.ucoBalance !== undefined
                      ? currencyFormatted(el.ucoBalance)
                      : ""}
                  </td>
                  <td>
                    {el.status == "complete" ? (
                      <button
                        disabled
                        className="bg-eb-10 rounded-lg text-white px-4"
                      >
                        {el.status}
                      </button>
                    ) : el.status == "ongoing" && user?.role == "driver" ? (
                      <button
                        className="bg-light-blue-400 rounded-lg text-white px-4 hover:bg-eb-20 hover:scale-105 transition-all"
                        onClick={() => complete(el._id)}
                      >
                        {el.status}
                      </button>
                    ) : user?.role == "driver" ? (
                      <button
                        className="bg-eb-30 rounded-lg text-white px-4 hover:bg-eb-20 hover:scale-105 transition-all"
                        onClick={() => onLCickHandler(el._id)}
                      >
                        {el.status}
                      </button>
                    ) : (
                      <button
                        disabled
                        className="bg-eb-40/50 rounded-lg text-white px-4"
                      >
                        {el.status}
                      </button>
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
