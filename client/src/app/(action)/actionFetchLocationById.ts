import { getLocationById } from "@/db/models/location";
import { LocationType } from "@/types";
import { cookies } from "next/headers";

export const fetchDataId = async (id: string) => {
  try {
    const data = await getLocationById(id);

    // console.log(data, '<<<<<<<<<<,');
    return data;
  } catch (error) {
    console.log(error);
  }
};
