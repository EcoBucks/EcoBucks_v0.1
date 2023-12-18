import { createUBallance, updateUBallance } from "@/db/models/uco"
import { redirect } from "next/navigation";
import { NextResponse } from "next/server"


export const POST = async (request: Request) => {

    const userId =  request.headers.get("x-user-id")
    console.log(userId, '============ user id from middleware ');

    // if(!userId) {
    //     redirect("http://localhost:3000/login")
    // }

    const dataBody = await request.json()

    const uco = {
        ...dataBody,
        userId: userId
    }

    // console.log(uco , '======= from body');


    const data = await createUBallance(uco)

    return NextResponse.json(
        {
            statusCode: 201,
            message:"successfully create UBallance",
            data: data
        }
    )
}

export const PUT = async (request: Request) => {
    const userId =  request.headers.get("x-user-id")

    if (userId) {
        await updateUBallance(userId);
        return NextResponse.json({
            statusCode: 201,
            message: "Successfully updated sumUco",
        });
    } else {
        // Handle the case where userId is null (optional)
        return NextResponse.json({
            statusCode: 400,
            message: "User ID not found in headers",
        });
    }


}