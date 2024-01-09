import { ButtonMT } from "@/components/MaterialTailwind";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { cookies } from "next/headers";
import { handleLogin } from "@/app/(action)/action";
import { URL } from "@/db/config/url";

const LoginPage = () => {
  const cookie = cookies();
  const token = cookie.get("token");

  console.log(token);
  const url: string = URL as any;
  if (token) {
    redirect(url);
  }
  return (
    <>
      <div className="h-screen w-screen items-center flex justify-center bg-gray-100 animate-fade-up">
        <div className="flex flex-row justify-center items-center h-[70%] w-[800px] relative">
          {/* Col Span 1 */}
          <div className="relative h-full flex flex-col text-gray-700 shadow-lg w-96 rounded-l-xl bg-clip-border overflow-hidden">
            <Image
              src="/bg_login.jpg"
              fill
              alt="background-login"
              style={{
                objectFit: "cover",
              }}
            />
          </div>

          {/* Col Span 2 */}
          <div className="relative flex flex-col text-gray-700 bg-white shadow-lg w-96 rounded-r-xl bg-clip-border h-full justify-center">
            <div className="flex flex-col w-full items-center">
              <Image
                src="/EcoBucks_Horizontal_Logo.png"
                width={"320"}
                height={"40"}
                alt="background-login"
                style={{
                  objectFit: "cover",
                }}
              />
              <p className="text-sm -mt-2">Login to Your Account</p>
            </div>
            <form className="flex flex-col gap-4 p-6" action={handleLogin}>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  autoComplete="off"
                  type="text"
                  name="email"
                  className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Email
                </label>
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  autoComplete="off"
                  type="password"
                  name="password"
                  className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Password
                </label>
              </div>
              <div className="-ml-2.5"></div>
              <ButtonMT
                placeholder={"submit"}
                className="block w-full select-none rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md -mt-4"
                type="submit"
              >
                Sign In
              </ButtonMT>
            </form>
            <div className="pt-0">
              <p className="flex justify-center mt-6 font-sans text-sm antialiased leading-normal text-inherit">
                Don&apos;t have an account?
                <Link
                  href="/register"
                  className="block ml-1 font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900 underline"
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
