import { Db, ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";

const DATABASE_NAME = "Eco_Bucks"
const COLLECTION_NAME = "ucoBallance"
const COLLECTION_USER = "user"

type ucoModel = {
    userId: string
    sumUco?: number
    status?: string 
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
        userId: new ObjectId(uco.userId),
        sumUco: 0,
        status:"unpayed"
    }

    const result = await db.collection(COLLECTION_NAME).insertOne(data)

    return result
}

export const updateUBallance = async (uco: ucoModel) => {
    const db = await getDb()

    const user = await db.collection(COLLECTION_USER).findOne({_id: new ObjectId(uco.userId)})
    console.log(user, '+++++++++++');

    const sumUco = Number(user?.walletBallance) + Number(uco.sumUco)

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