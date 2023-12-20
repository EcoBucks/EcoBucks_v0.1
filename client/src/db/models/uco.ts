import { Db, ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";

const DATABASE_NAME = "Eco_Bucks";
const COLLECTION_NAME = "transaction";
const COLLECTION_USER = "user";

export type ucoModels = {
  _id: string;
  userId: string;
  ucoBalance?: number;
  status?: string;
  phoneNumbers: number;
  locationDetails: string;
  pickUpDate: string;
  pickUpTime: string;
};
export type ucoModel = {
  userId: string;
  ucoBalance?: number;
  status?: string;
  phoneNumbers: number;
  locationDetails: string;
  pickUpDate: string;
  pickUpTime: string;
};

import { userModel } from "./user";

export const getDb = async () => {
  const client = await getMongoClientInstance();
  const db: Db = client.db(DATABASE_NAME);

  return db;
};

export const createUBallance = async (uco: ucoModel) => {
  const db = await getDb();

  // const ucoData = uco
  const ucoBalance = Number(uco.ucoBalance);
  let sumUco;
  if (uco.ucoBalance) {
    sumUco = ucoBalance * 3500;
  }

  const data = {
    ...uco,
    ucoBalance: sumUco,
    userId: new ObjectId(uco.userId),
    status: "pending",
  };

  //   console.log(data, "MODel <<<<<<<<<<<");

  await db.collection(COLLECTION_NAME).insertOne(data);

  //! ini update nanti kalo dah
  // const user = await db.collection(COLLECTION_USER).findOne({_id: new ObjectId(uco.userId)})
  // console.log(user, '+++++++++++');

  // const sumUco = ucoBalance * 3500 + walletBallance;

  // const walletBallance = user?.walletBallance;
  //   console.log(sumUco, '+++++++ user update');

  //  const dataUser = await db.collection(COLLECTION_USER).updateOne(
  //     {_id: new ObjectId(uco.userId)},
  //     {$set: {walletBallance: sumUco}}
  //     )

  // console.log(dataUser, '====== data update');
};

export const getTransaction = async (userId: string | null) => {
  // console.log(userId, '=======model');

  const db = await getDb();
  let data;
  if (userId) {
    data = await db
      .collection(COLLECTION_NAME)
      .find({ userId: new ObjectId(userId) })
      .toArray();
  } else {
    console.log("error data from getTransaction");
  }

  // console.log(data);

  return data;
};

export const allTrans = async () => {
  const db = await getDb();
  const data = await db.collection(COLLECTION_NAME).find().toArray();
  return data;
};

export const updateUBallance = async (id: string, driverId: string) => {
  const db = await getDb();


  await db
    .collection(COLLECTION_NAME)
    .updateOne({ _id: new ObjectId(id) }, { $set: { driverId: new ObjectId(driverId) } });

  const result = await db
    .collection(COLLECTION_NAME)
    .updateOne({ _id: new ObjectId(id) }, { $set: { status: "ongoing" } });



  return result;
};

export const updateUBallanceOnGoing = async (id: string) => {
  const db = await getDb();

  const result = await db
    .collection(COLLECTION_NAME)
    .updateOne({ _id: new ObjectId(id) }, { $set: { status: "ongoing" } });

  console.log(result, "========= model");
  return result;
};

export const updateUWallet = async (id: string, driverId: string) => {
  const db = await getDb();

  // Convert id to ObjectId
  const objectId = new ObjectId(id);

  const uco: ucoModels = (await db
    .collection(COLLECTION_NAME)
    .findOne({ _id: objectId, driverId: new ObjectId(driverId)  })) as any;
  const user: userModel = (await db
    .collection(COLLECTION_USER)
    .findOne({ _id: new ObjectId(uco.userId) })) as any;

  console.log(uco.ucoBalance, "+++++ ucoBalance +++++");

  let sumUco = 0
  if (uco.ucoBalance) {
    sumUco = uco.ucoBalance + user.walletBalance;
  }
  
  console.log(user.email, "+++++ sumUco +++++");



  
  await db
    .collection(COLLECTION_NAME)
    .updateOne(
        { _id: new ObjectId(uco._id), driverId: new ObjectId(driverId) },
        { $set: { status: "complete" } }
      );
    await db
      .collection(COLLECTION_USER)
      .updateOne(
        { _id: new ObjectId(user._id) },
        { $set: { walletBalance: sumUco } }
      );
};

export const deleteWallet = async (email: string) => {
  // console.log(email, '========dari uco');
  const db = await getDb();

  const user: userModel = (await db
    .collection(COLLECTION_USER)
    .findOne({ email: email })) as any;

  // console.log(user);

  await db
    .collection(COLLECTION_USER)
    .updateOne({ email: user.email }, { $set: { walletBalance: 0 } });
};
