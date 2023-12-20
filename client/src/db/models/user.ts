import { Db, ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";
import { hashPw } from "../lib";

const DATABASE_NAME = "Eco_Bucks";
const COLLECTION_NAME = "user";

export type userModel = {
  _id: string;
  name: string;
  password: string;
  email: string;
  job: string;
  dateOfBirth: string;
  walletBalance: number | any;
  profilePicture?: string | null | undefined | any;
  role?: string | undefined;
  phoneNumber: string;
  pickupVoucher?: number | any;
};

export type userType = {
  name: string;
  password: string;
  email: string;
  job: string;
  dateOfBirth: string;
  walletBalance: number;
  profilePicture: string;
  role: string;
  phoneNumber: string;
  pickupVoucher: number;
};
//
export type UserModelCreateInput = Omit<userModel, "_id">;

export const getDb = async () => {
  const client = await getMongoClientInstance();
  const db: Db = client.db(DATABASE_NAME);

  return db;
};

export const createUser = async (user: UserModelCreateInput) => {
  console.log(user, "<<<<<<<<<<<");

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
    walletBalance: 0,
    profilePicture: "",
    role: "user",
  };

  const db = await getDb();
  const result = await db.collection(COLLECTION_NAME).insertOne(data);
  // console.log(result, '<<<<<<<<<<<<<< user ni bost');
  return result;
};

export const getUserByEmail = async (email: string | null) => {
  const db = await getDb();
  const result = await db.collection(COLLECTION_NAME).findOne({ email });
  return result as userModel | null;
};

export const updatePicture = async (
  email: string | undefined,
  picture: string
) => {
  const db = await getDb();
  await db
    .collection(COLLECTION_NAME)
    .updateOne({ email: email }, { $set: { profilePicture: picture } });
};
