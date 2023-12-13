import { getLocationById } from "@/db/models/location"
import { NextRequest, NextResponse } from "next/server"


export const GET =  async (request: NextRequest,  { params }: { params: { id: string } },) => {

    const id = params.id
    // console.log(id, '========== ini id ');
    const data = await getLocationById(id)

    return NextResponse.json(
        {
            statusCode: 200,
            message: "successfully get data by id",
            data: data
        }
    )
}