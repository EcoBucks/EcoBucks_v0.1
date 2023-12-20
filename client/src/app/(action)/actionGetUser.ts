"use server"
import { cookies } from "next/headers"


export const getUser = async () => {

    const response = await fetch("http://localhost:3000/api/user", {
        method: "GET",
        cache: "no-store",
        headers:{
          Cookie: cookies().toString(),
        }
    })

    
    const resjson = await response.json()
    // console.log(resjson, '====get user===');
    
    return resjson
}