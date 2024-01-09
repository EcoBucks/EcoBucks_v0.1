"use server";
import { searchVideos } from "@/db/models/videos";

export async function Videos(search?: string) {
  const allVideos = await searchVideos(search);
  const plainVideos = allVideos.map(video => JSON.parse(JSON.stringify(video)));
  // console.log(plainVideos, '<<<<<<after parsing<<<<<<<');
  return plainVideos;
}
