"use server"
import { LocationType } from "@/types";
export const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/location", {
        cache: "no-store",
      });
      const responseJson: LocationType[] = await response.json();
      // console.log(responseJson, '<<<<<<<<<<,');
      return responseJson;
    } catch (error) {
      console.log(error);
    }
  };