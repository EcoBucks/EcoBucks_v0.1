"use server"
import { deleteWallet } from "@/db/models/uco";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const ClearWallet = async (formData: FormData) => {
  const token = cookies().get('token');

  if (!token) {
    throw new Error("Unauthorized");
  }

  const email = formData.get("email")

  const data = JSON.stringify(email)

  const data2 = JSON.parse(data)


  await deleteWallet(data2)

//  redirect("http://localhost:3000/")
};
