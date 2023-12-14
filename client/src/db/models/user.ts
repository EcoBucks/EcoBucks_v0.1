import { Db, ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";
import { hashPw } from "../lib";

const DATABASE_NAME = "Eco_Bucks"
const COLLECTION_NAME = "user"

export type userModel = {
    name:string,
    password: string,
    email:string,
    job: string,
    dateOfBirth: string,
    walletBallance?: number,
    profilePicture?: string,
    role?: string,
}

export const getDb = async() => {
    const client = await getMongoClientInstance()
    const db: Db = client.db(DATABASE_NAME)

    return db
}

export const createUser = async(user: userModel) => {
    // console.log(user, '<<<<<<<<<<<');

    //! buat route sendiri buat google auth

    let data ;
    if(user.role == "driver") {
        data = {
            ...user,
        password: hashPw(user.password),
        walletBallance: 0,
        profilePicture: "",
        role: "drivers"
        }
    }

     data = {
        ...user,
        password: hashPw(user.password),
        walletBallance: 0,
        profilePicture: "",
        role: "user"
    }

    const db = await getDb()
    const result = await db.collection(COLLECTION_NAME).insertOne(data)

    return result

} 