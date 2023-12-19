"use server"
import { cookies } from "next/headers"


export const getUser = async () => {

    const response = await fetch("http://localhost:3000/api/user", {
        cache: "no-store",
        headers:{
          Cookie: cookies().toString()
        }
    })

    const resjson = await response.json()

    return resjson

}