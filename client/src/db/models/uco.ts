import { Db, ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";

const DATABASE_NAME = "Eco_Bucks"
const COLLECTION_NAME = "transaction"
const COLLECTION_USER = "user"

type ucoModel = {
    userId: string
    ucoBallance?: number
    status?: string 
    phoneNumbers: number
    locationDetails: string
    pickUpDate: string
    pickUpTime: string
}


import { userModel } from "./user";

export const getDb = async() => {
    const client = await getMongoClientInstance()
    const db: Db = client.db(DATABASE_NAME)

    return db
}


export const createUBallance = async (uco: ucoModel) => {
    const db = await getDb()

    // const ucoData = uco

    const data = {
        ...uco,
        userId: new ObjectId(uco.userId),
        status:"unpayed"
    }

    console.log(data, 'MODel <<<<<<<<<<<');

    const result = await db.collection(COLLECTION_NAME).insertOne(data)

    const user = await db.collection(COLLECTION_USER).findOne({_id: new ObjectId(uco.userId)})
    console.log(user, '+++++++++++');

    const ucoBalance = Number(uco.ucoBallance);
    const walletBallance = user?.walletBallance;
    

      const sumUco = ucoBalance * 3500 + walletBallance;
      console.log(sumUco, '+++++++ user update');

     const dataUser = await db.collection(COLLECTION_USER).updateOne(
        {_id: new ObjectId(uco.userId)},
        {$set: {walletBallance: sumUco}}
        )

    console.log(dataUser, '====== data update');


}

export const updateUBallance = async (uco: ucoModel) => {
    const db = await getDb()

    const user = await db.collection(COLLECTION_USER).findOne({_id: new ObjectId(uco.userId)})
    console.log(user, '+++++++++++');

    const sumUco = Number(user?.walletBallance) + Number(uco.ucoBallance)

    let result;

    result = await db.collection(COLLECTION_USER).updateOne(
        {_id: new ObjectId(uco.userId)},
        {$set: {walletBallance: sumUco}}
        )

    result = await db.collection(COLLECTION_NAME).updateOne(
        {userId: new ObjectId(uco.userId)},
        {$set: {sumUco: sumUco}}
    )

        
    return result 

}