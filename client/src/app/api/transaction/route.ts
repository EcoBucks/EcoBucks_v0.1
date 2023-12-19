import { allTrans, createUBallance, getTransaction, updateUBallance } from "@/db/models/uco"
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server"


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



export const PUT = async (request: NextRequest) => {


    // console.log(query, '==complete==');

    const id = await  request.json()
    // const data = await  request.json()

    // console.log(data, '======= ini dari mana ');

    if (id) {
        await updateUBallance(id);
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

export const GET = async (request: NextRequest) => {
    const userId: string | null =  request.headers.get("x-user-id")


    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('role')

    console.log(query, '==== query')

    if(query == "driver"){
        const data = await allTrans();
        // console.log(data, '====route=====');
        return NextResponse.json(data);
    }else if (query == "user") {
        const data = await getTransaction(userId);
        return NextResponse.json(data);
    } else {
        // Handle the case where userId is null (optional)
        return NextResponse.json({
            statusCode: 400,
            message: "User ID not found in headers",
        });
    }
}

