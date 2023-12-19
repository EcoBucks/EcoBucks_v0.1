import { NextRequest, NextResponse } from "next/server";


export const PUT = async (request: Request) => {
    
    const email =await  request.json()

    console.log(request.json(), '=====delete wallet====');
    

    return NextResponse.json({
        statusCode: 201,
        message: "Successfully updated sumUco",
    });
    
    if (email) {
        // await updateUWallet(id);
    } else {
        // Handle the case where userId is null (optional)
        return NextResponse.json({
            statusCode: 400,
            message: "User ID not found in headers",
        });
    }
}