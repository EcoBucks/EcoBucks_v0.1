"use server";
import { URL } from "@/db/config/url";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const Logout = async () => {
  // const cookie = cookies()

  cookies().get("token") && cookies().delete("token");
  redirect(`${URL}login`);
};
