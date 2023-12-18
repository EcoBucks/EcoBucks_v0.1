import { updateUWallet } from "@/db/models/uco";
import { NextRequest, NextResponse } from "next/server";


export const PUT = async (request: NextRequest) => {


    const id = await  request.json()
    // const data = await  request.json()

    // console.log(data, '======= ini dari mana ');

    if (id) {
        await updateUWallet(id);
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
