import { cookies } from "next/headers"


export const getUser = async () => {

    const cookie = cookies()

      const token = cookie.get('token')
      if(!token){
        throw new Error("Unauthorized")
      }



    const response = await fetch("http://localhost:3000/api/user", {
        cache: "no-store",
        headers:{
          Cookie: cookies().toString()
        }
    })

    const resjson = await response.json()

    return resjson

}