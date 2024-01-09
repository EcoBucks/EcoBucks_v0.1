"use server";
import { getLocation } from "@/db/models/location";
import { getVideos } from "@/db/models/videos";

export async function Locations(search?: string) {
  const allLocations = await getLocation(search);
  const locations = allLocations.map(el => JSON.parse(JSON.stringify(el)))
  return locations;
}

export async function Videos() {
  const allVideos = await getVideos();
  const randomizedVideos = allVideos
    .sort(() => Math.random() - Math.random())
    .slice(0, 3);
  const random = randomizedVideos.map(el => JSON.parse(JSON.stringify(el)) )
  return random
}
