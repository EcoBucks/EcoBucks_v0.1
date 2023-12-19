"use server"
import { cookies } from "next/headers"


export const ClearWallet = async () => {
    const cookie = cookies()

      const token = cookie.get('token')
      if(!token){
        throw new Error("Unauthorized")
      }


    await fetch("http://localhost:3000/api/transaction", {
        method: "PUT",
        headers:{
            Cookie: cookies().toString()
          }
    })
}