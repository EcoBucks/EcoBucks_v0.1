"use server";
import { searchVideos } from "@/db/models/videos";

export async function Videos(search?: string) {
  const allVideos = await searchVideos(search);
  return allVideos;
}
