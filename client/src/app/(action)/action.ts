"use server";

import { getUserByEmail } from "@/db/models/user";
import { redirect } from "next/navigation";
import { z } from "zod";
import { cookies } from "next/headers";
import { comparePw, signToken } from "@/db/lib";
import { URL } from "@/db/config/url";


export const handleLogin = async (formData: FormData) => {

const url = URL


  const loginSchema = z.object({
    email: z.string().email().nonempty(),
    password: z.string().nonempty()
})

const email = formData.get("email")
const password = formData.get("password")

const parsedData = loginSchema.safeParse({
    email,
    password
})

if(!parsedData.success){
    const errorPath = parsedData.error.issues[0].path[0]
    const errorMessage = parsedData.error.issues[0].message
    const errorFinal = `${errorPath} - ${errorMessage}`
    return redirect(`${url}login?error=${errorFinal}`)
}

const user = await getUserByEmail(parsedData.data.email)

if(!user  || !comparePw(parsedData.data.password, user.password)){
    return redirect(`${url}login?error=Invalid%20credentials`)
}

const payload = {
    id: user._id,
    email: user.email
}

const token = signToken(payload)

cookies().set("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "strict"
})

return redirect(`${url}`)
};
