import { MongoClient } from "mongodb";

const connectionDb = "mongodb+srv://masakbar2905:mei555@cluster0.ratubnl.mongodb.net/?retryWrites=true&w=majority"

if(!connectionDb) {
    throw new Error("MONGODB_CONNECTION_STRING is not defined")
}

let client: MongoClient

export const getMongoClientInstance = async () => {
    if (!client) {
      client = await MongoClient.connect(connectionDb);
      await client.connect();
    }
  
    return client;
  };