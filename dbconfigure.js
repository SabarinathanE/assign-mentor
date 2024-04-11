import { MongoClient } from "mongodb";
import dotenv from "dotenv";
//using dotenv.config to store the mongodb connection string in .env file
dotenv.config();

async function dbConnection(){
    try {
        const client=new MongoClient(process.env.MONGO_URI);
        await client.connect();
        console.log("database connected");
        return client;
    } catch (error) {
        console.log("error connecting to the database")
    }
}

export const client=await dbConnection();