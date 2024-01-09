"use server";

import { URL } from "@/db/config/url";
import { createUser, userModel, userType } from "@/db/models/user";
import { MyResponse } from "@/types";
import { redirect } from "next/navigation";
import { z } from "zod";

export const onSubmitRegister = async (formData: FormData) => {
  const userInput = z.object({
    name: z.string().nonempty(),
    password: z.string().nonempty().min(5),
    email: z.string().email().nonempty(),
    job: z.string().nonempty(),
    dateOfBirth: z.string().nonempty(),
    walletBalance: z.number().optional().nullable(),
    profilePicture: z.string().optional().nullable(),
    role: z.string().optional().nullable(),
  });

  const name = formData.get("name");
  const password = formData.get("password");
  const email = formData.get("email");
  const job = formData.get("job");
  const dateOfBirth = formData.get("dateOfBirth");

  const parsedData = userInput.safeParse({
    name,
    password,
    email,
    job,
    dateOfBirth,
  });

  console.log(parsedData, '<<<<  ini parsed data ');

  if (!parsedData.success) {
    const errorPath = parsedData.error.issues[0].path[0];
    const errorMessage = parsedData.error.issues[0].message;
    const errorFinal = `${errorPath} - ${errorMessage}`;

    return redirect(`${URL}register?error=${errorFinal}`);
  }

  const userData: userType | any = {
    name: parsedData.data.name,
    password: parsedData.data.password,
    email: parsedData.data.email,
    job: parsedData.data.job,
    dateOfBirth: parsedData.data.dateOfBirth,
    walletBalance: 0, // Ensure this property matches the expected spelling in UserModelCreateInput
    phoneNumber: "",
    pickupVoucher: 0,

    // Add the missing properties from UserModelCreateInput
  };

  await createUser(userData);

  return redirect(`${URL}login`);
};
