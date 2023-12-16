"use server";

import { getUserByEmail } from "@/db/models/user";
import { redirect } from "next/navigation";
import { z } from "zod";
import { cookies } from "next/headers";
import { comparePw, signToken } from "@/db/lib";
import { userLogin } from "@/app/api/user/route";
const url = process.env.NEXT_PUBLIC_BASE_URL;
export const handleLogin = async (formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  const parsedData = userLogin.safeParse({
    email,
    password,
  });

  if (!parsedData.success) {
    const errorPath = parsedData.error.issues[0].path[0];
    const errorMessage = parsedData.error.issues[0].message;
    const errorFinalMessage = `${errorPath} - ${errorMessage}`;

    return redirect(`${url}login?error=${errorFinalMessage}`);
  }

  // console.log(parsedData.data.password);

  const user = await getUserByEmail(parsedData.data.email);
  //   console.log(user, comparePw(parsedData.data.password, user.password));

  if (!user || !comparePw(parsedData.data.password, user.password)) {
    return redirect(`${url}login?error='invalid%20email/password'`);
  }
  const payload = {
    id: user._id,
    name: user.name,
    email: user.email,
  };

  const token = signToken(payload);

  cookies().set("access_token", token);

  return redirect("/");
};
