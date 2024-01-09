import { updatePicture } from "@/db/models/user";
import { NextResponse } from "next/server";

export const PUT = async (request: Request) => {
  const res = await request.json();
  const email = res.email;
  const picture = res.picture;
  await updatePicture(email, picture);

  return NextResponse.json({
    message: "hahaha"
  })
};
