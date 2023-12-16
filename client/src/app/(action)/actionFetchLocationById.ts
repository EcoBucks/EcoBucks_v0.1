import { LocationType } from "@/types";
import { cookies } from "next/headers";


export const fetchDataId  = async (id: string) => {
    try {
      const cookie = cookies()

      const token = cookie.get('token')
      if(!token){
        throw new Error("Unauthorized")
      }

        const response = await fetch(`http://localhost:3000/api/location/${id}`, {
          cache: "no-store",
          headers:{
            Cookie: cookies().toString()
          }
        });
        const responseJson: LocationType = await response.json();
        // console.log(responseJson, '<<<<<<<<<<,');
        return responseJson;
      } catch (error) {
        console.log(error);
      }
}