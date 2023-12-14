import { createUBallance, updateUBallance } from "@/db/models/uco"
import { NextResponse } from "next/server"


export const POST = async (request: Request) => {
    const uco = await request.json()
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
    const uco = await request.json()

    console.log(uco, '<<<<<<<<<<<');
    await updateUBallance(uco)

    return NextResponse.json(
        {
            statusCode: 201,
            message: "successfully updated sumUco"
        }
    )


}