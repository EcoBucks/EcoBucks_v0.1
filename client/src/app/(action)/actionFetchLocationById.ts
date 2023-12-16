import { LocationType } from "@/types";


export const fetchDataId  = async (id: string) => {
    try {
        const response = await fetch(`http://localhost:3000/api/location/${id}`, {
          cache: "no-store",
        });
        const responseJson: LocationType = await response.json();
        // console.log(responseJson, '<<<<<<<<<<,');
        return responseJson;
      } catch (error) {
        console.log(error);
      }
}