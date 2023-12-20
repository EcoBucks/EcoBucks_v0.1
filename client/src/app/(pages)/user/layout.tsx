"use client";
import { getUser } from "@/app/(action)/actionGetUser";
import Footer from "@/components/Footer";
import LogoutButton from "@/components/LogoutButton";
import Modal from "@/components/Modal";
import { userModel } from "@/db/models/user";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function UserDashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const currentRoute = usePathname();
  type dataUser = {
    statusCode: string;
    message: string;
    data: userModel;
  };

  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<dataUser>();

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

  const activeSideBar = "flex gap-x-2 my-2 text-[14px] items-center text-white";
  const inActiveSideBar =
    "flex gap-x-2 my-2 text-[14px] items-center text-white/40 hover:text-white";

  return (
    <section>
      <div className="mt-20 w-screen h-full px-[9%] py-[2%] ">
        <div className="flex flex-col md:flex-row justify-center items-start gap-x-5">
          <div className="flex flex-col w-fit gap-y-3">
            {/* SideBar */}
            <div className="bg-eb-40 rounded-[10px] shadow-xl p-6 px-8 w-full h-[240px] gap-y-2">
              <div className="flex flex-col raleway font-bold">
                {/* Profile Section */}
                <div className="flex flex-row gap-x-2 justify-start items-center mb-4">
                  {/* Profile Picture */}
                  <img
                    className="object-cover w-10 h-10 rounded-full"
                    src={user?.data.profilePicture}
                    alt="Bordered avatar"
                  />
                  {/* Profile Text */}
                  <div className="flex flex-col">
                    <h1 className="text-eb-20 text-[16px] underline raleway">
                      Hola {user?.data.name}!
                    </h1>
                    <h1 className="text-gray-300 text-[12px] font-light">
                      {user?.data.email}!
                    </h1>
                  </div>
                </div>

                {/* Link SideBar */}
                <Link href="/user">
                  <div
                    className={
                      currentRoute === "/user" ? activeSideBar : inActiveSideBar
                    }
                  >
                    <span className="material-symbols-outlined text-[14px]">
                      shopping_cart_checkout
                    </span>
                    <h1>Transaction</h1>
                  </div>
                </Link>
                <Link href="/user/settings">
                  <div
                    className={
                      currentRoute === "/user/settings"
                        ? activeSideBar
                        : inActiveSideBar
                    }
                  >
                    <span className="material-symbols-outlined text-[14px]">
                      settings_account_box
                    </span>
                    <h1>Settings</h1>
                  </div>
                </Link>

                <button onClick={() => setOpen(true)}>
                  <div className="flex gap-x-2 my-2 text-[14px] items-center text-white/40 hover:text-white">
                    <span className="material-symbols-outlined text-[14px]">
                      logout
                    </span>
                    <h1>Logout</h1>
                  </div>
                </button>

                {/* LogOut Modal */}
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
                      <LogoutButton />
                      <button
                        className=" w-full"
                        onClick={() => setOpen(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </Modal>
              </div>
            </div>

            {/* Free Voucher */}
            {user?.data.pickupVoucher > 0 && (
              <div className="bg-eb-40 rounded-[10px] shadow-xl px-1 py-2 w-full h-fit text-white flex flex-row items-center justify-evenly">
                <div className="w-12 h-12 flex justify-center items-center bg-eb-10 text-white rounded-xl font-bold">
                  <h1>{user?.data.pickupVoucher}</h1>
                </div>
                <h1 className="text-[12px] w-[55%] font-bold">
                  Free Pickup Vouchers Left!
                </h1>
              </div>
            )}
          </div>

          {/* Main Page */}
          <div className="flex">{children}</div>
        </div>
      </div>


      <Footer />

      {/* <Footer type={currentRoute === "/user/settings" ? "absolute" : "flex"} /> */}
    </section>
  );
}
