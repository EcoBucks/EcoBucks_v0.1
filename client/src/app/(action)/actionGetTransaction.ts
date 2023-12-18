"use server"

import { allTrans } from "@/db/models/uco"
import { cookies } from "next/headers"

export const Transaction = async (props: string) => {
    // console.log(props, '========');
    const response = await fetch(`http://localhost:3000/api/transaction?role=${props}`, {
        method: "GET",
        headers:{
            Cookie: cookies().toString()
        }
    })

    const resjson = await response.json()
    // console.log(resjson, '======action========');

    return resjson

}

