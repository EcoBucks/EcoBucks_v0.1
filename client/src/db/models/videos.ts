import { Db, ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";

const DATABASE_NAME = "Eco_Bucks";
const COLLECTION_NAME = "educations";

export type VideoModel = {
  _id: ObjectId;
  videoUrl: string;
  thumbnail: string;
  title: string;
  author: string;
  description: string;
  slug: string;
  category: string;
  date: string;
};

export const getDb = async () => {
  const client = await getMongoClientInstance();
  const db: Db = client.db(DATABASE_NAME);

  return db;
};
export const getVideos = async () => {
  const db = await getDb();
  const result = (await db
    .collection(COLLECTION_NAME)
    .find()
    .toArray()) as VideoModel[];

  return result;
};
