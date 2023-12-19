"use server";
import { getLocation } from "@/db/models/location";
import { getVideos } from "@/db/models/videos";

export async function Locations(search?: string) {
  const allLocations = await getLocation(search);
  return allLocations;
}

export async function Videos() {
  const allVideos = await getVideos();
  const randomizedVideos = await allVideos
    .sort(() => Math.random() - Math.random())
    .slice(0, 3);
  return randomizedVideos;
}
