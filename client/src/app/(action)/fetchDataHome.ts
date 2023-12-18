"use server"
import { LocationType, MyResponse } from "@/types";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export const fetchData = async () => {
    try {
      const cookie = cookies()

      const token = cookie.get('token')
      if(!token){
        throw new Error("Unauthorized")
      }

      // console.log(cookie.get('token'), '==========');
      const response = await fetch("http://localhost:3000/api/location", {
        cache: "no-store",
        headers:{
          Cookie: cookies().toString()
        }

      });

      const responseJson = await response.json();

      // revalidatePath("/")
      // console.log(responseJson, '<<<<<<<<<<,');
      return responseJson;
    } catch (error) {
      console.log(error);
    }
  };