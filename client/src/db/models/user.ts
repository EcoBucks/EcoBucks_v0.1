import { Db, ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";
import { hashPw } from "../lib";

const DATABASE_NAME = "Eco_Bucks";
const COLLECTION_NAME = "user";

export type userModel = {
  _id: string
  name: string;
    password: string;
    email: string;
    job: string;
    dateOfBirth: string;
    walletBallance: number
    profilePicture?: string | null | undefined;
    role?: string | undefined | null;
    phoneNumber: string
};

export type UserModelCreateInput = Omit<userModel, "_id">;

export const getDb = async () => {
  const client = await getMongoClientInstance();
  const db: Db = client.db(DATABASE_NAME);

  return db;
};

export const createUser = async (user: UserModelCreateInput) => {
  console.log(user, '<<<<<<<<<<<');

  //! buat route sendiri buat google auth

  // let data;
  // if (user.role == "driver") {
  //   data = {
  //     ...user,
  //     password: hashPw(user.password),
  //     walletBalance: 0,
  //     profilePicture: "",
  //     role: "drivers",
  //   };
  // }

  let data = {
    ...user,
    password: hashPw(user.password),
    walletBallance: 0,
    profilePicture: "",
    role: "user",
  };

  const db = await getDb();
  const result = await db.collection(COLLECTION_NAME).insertOne(data);
  // console.log(result, '<<<<<<<<<<<<<< user ni bost');
  return result;
};

export const getUserByEmail = async (
  email: string
): Promise<userModel | null> => {
  const db = await getDb();
  const result = await db.collection(COLLECTION_NAME).findOne({ email });
  return result as userModel | null;
};
