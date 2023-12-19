"use server"
import { getLocation } from "@/db/models/location";
import { LocationType, MyResponse } from "@/types";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export const fetchData = async () => {
    try {
   

const data = await getLocation()

      // revalidatePath("/")
      return data;
    } catch (error) {
      console.log(error);
    }
  };