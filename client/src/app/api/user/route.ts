import { createUser } from "@/db/models/user"
import { NextResponse } from "next/server"



export const POST = async (request: Request) => {
    const data = await request.json()

    const user = await createUser(data)

    return NextResponse.json(
        {
            statusCode: 201,
            message: "succcessfully create user",
            data: user
        },
        {
            status: 201
        }
    )

    // console.log(data, 'ini dari route');
}