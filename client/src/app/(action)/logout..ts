"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const Logout = async () => {
  // const cookie = cookies()

  cookies().get("token") && cookies().delete("token");
  redirect("http://localhost:3000/login");
};
