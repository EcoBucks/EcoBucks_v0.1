"use server"

import { URL } from "@/db/config/url"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const addUco = async (formData: FormData) => {

    const ucoBalance = formData.get("ucoBallance")
    const phoneNumbers = formData.get("phoneNumbers")
    const locationDetails = formData.get("locationDetails")
    const pickUpDate = formData.get("pickUpDate")
    const pickUpTime = formData.get("pickUpTime")

    const cookie = cookies()


      const token = cookie.get('token')
    
    //   console.log(token, '============= token');
    
      if(!token){
        throw new Error("Unauthorized")
      }

    await fetch(`${URL}api/transaction`, {
        method: "POST",
        headers:{
            Cookie: cookies().toString()
          },
          body: JSON.stringify({
            ucoBalance: ucoBalance,
            phoneNumbers: phoneNumbers,
            locationDetails: locationDetails,
            pickUpDate: pickUpDate,
            pickUpTime: pickUpTime,
          })
    })

    return redirect(`${URL}`)

}