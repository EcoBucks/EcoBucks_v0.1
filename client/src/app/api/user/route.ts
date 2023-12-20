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
  walletBalance: z.number().optional().nullable(),
  profilePicture: z.string().optional().nullable(),
  role: z.string().optional().nullable(),
});

export const userLogin = z.object({
  email: z.string(),
  password: z.string(),
});

export const POST = async (request: Request) => {
  try {
    const data = await request.json();
    const parsedData = userInput.safeParse(data);

    if (!parsedData.success) {
      throw parsedData.error;
    }

    const user = await createUser(data);

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
  } catch (error) {
    console.log(error);
  }
  // console.log(data, 'ini dari route');
};

export const GET = async (request: Request) => {
  const email: string | null = request.headers.get("x-user-email");

  const user = await getUserByEmail(email);

  return NextResponse.json({
    statusCode: 200,
    message: "succcessfully create user",
    data: user,
  });
};
