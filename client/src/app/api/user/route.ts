import { comparePw, signToken } from "@/db/lib";
import { createUser, getUserByEmail } from "@/db/models/user";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { z } from "zod";
import { cookies } from "next/headers";

const userInput = z.object({
  name: z.string(),
  password: z.string(),
  email: z.string().email(),
  job: z.string(),
  dateOfBirth: z.string(),
  walletBalance: z.number().optional(),
  profilePicture: z.string().optional(),
  role: z.string().optional(),
});

export const userLogin = z.object({
  email: z.string(),
  password: z.string(),
});

export const POST = async (request: Request) => {
  const data = await request.json();
  const parsedData = userInput.safeParse(data);

  if (!parsedData.success) {
    throw parsedData.error;
  }

  const user = await createUser(parsedData.data);

  return NextResponse.json(
    {
      statusCode: 201,
      message: "succcessfully create user",
      data: user,
    },
    {
      status: 201,
    }
  );
  // console.log(data, 'ini dari route');
};

// export const GET = async (request: Request) => {
//   const data = await request.json();
//   console.log(data, "ini data lagi ");
//   const parsedData = userLogin.safeParse(data);

//   if (!parsedData.success) {
//     throw parsedData.error;
//   }

//   const user = await getUserByEmail(parsedData.data.password);

//   if (!user || !comparePw(parsedData.data.password, user.password)) {
//     return redirect(
//       `http://localhost:3000/login?error='invalid%20email/password'`
//     );
//   }

//   const payload = {
//     id: user._id,
//     email: user.email,
//     name: user.name,
//   };

//   const token = signToken(payload);
//   cookies().set("access_token", token);
//   return NextResponse.json({
//     statusCode: 200,
//     message: "succcessfully create user",
//     data: token,
//   });
// };
