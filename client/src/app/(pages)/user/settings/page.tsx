"use client";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";
import NavbarComponent from "@/components/Navbar";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { updatePicture, userModel } from "@/db/models/user";
import { getUser } from "@/app/(action)/actionGetUser";
import { useRouter } from "next/navigation";

const SettingsPage = () => {
  const router = useRouter();
  type dataUser = {
    statusCode: string;
    message: string;
    data: userModel | undefined;
  };

  const [open, setOpen] = useState(false);
  const [pressChangePicture, setPressChangePicture] = useState(false);
  const [user, setUser] = useState<dataUser>();
  const [picture, setPicture] = useState("");

  const fetchUser = async () => {
    try {
      const data: dataUser | undefined = await getUser();
      setUser(data);
      // console.log(data, "====user===");
    } catch (error) {
      console.log(error);
    }
  };

  const changePicture = async (formData: FormData) => {
    try {
      const data = formData.get("picture");

      await fetch("http://localhost:3000/api/picture", {
        method: "PUT",
        body: JSON.stringify({
          email: user?.data?.email,
          picture: data,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setPressChangePicture(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  // console.log(user?.data);
  // console.log(picture);

  return (
    <>
      <div className="rounded-[10px] h-[500px] w-full md:w-[875px] md:h-fit mt-4 md:mt-0 md:p-10 overflow-auto bg-white shadow-lg animate-fade-up mb-[7%]">
        <div className="flex flex-col items-center justify-center space-y-5 sm:flex-row sm:space-y-0 h-[400px] w-full">
          <img
            className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
            src={user?.data?.profilePicture}
          />
          <div className="flex flex-col space-y-5 sm:ml-8">
            <h2 className="text-2xl font-bold sm:text-xl underline">
              Profile Settings
            </h2>
            <button
              type="button"
              onClick={() => setPressChangePicture(true)}
              className="py-3.5 px-7 text-base font-medium text-white focus:outline-none bg-eb-10 rounded-lg border border-indigo-200 hover:bg-eb-30 focus:z-10 focus:ring-4 focus:ring-indigo-200 transition-all"
            >
              Change picture
            </button>
          </div>
        </div>
      </div>

      {/* Modal Change Picture */}
      {pressChangePicture && (
        <Modal
          open={pressChangePicture}
          onClose={() => setPressChangePicture(false)}
        >
          <div className="px-12 py-7 animate-fade">
            <h1 className="text-xl font-semibold mb-4">
              Update your profile picture
            </h1>
            <form action={changePicture}>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="https://yourimage.com"
                  className=" w-full px-4 py-2 border rounded-lg text-gray-700 focus:border-blue-500"
                  name="picture"
                  // value={picture}
                  // onChange={(e) => setPicture(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-eb-10 text-white px-4 py-2 rounded-lg hover:bg-eb-30 focus:outline-none transition-all"
              >
                Save
              </button>
            </form>
          </div>
        </Modal>
      )}
    </>
  );
};

export default SettingsPage;
