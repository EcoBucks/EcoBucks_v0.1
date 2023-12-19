"use server";
import { getLocation } from "@/db/models/location";

export async function Locations(search?: string) {
  const allLocations = await getLocation(search);
  return allLocations;
}
