import { MongoClient } from "mongodb";

const url = "mongodb://127.0.0.1:27017";
export const mongoClient = new MongoClient(url);

export async function run () {
    try {
    // Подключаемся к серверу
        await mongoClient.connect();
        // обращаемся к базе данных admin
        const db = mongoClient.db("population");
        const collection = db.collection("users");
        console.log("connection to db success");
        return await collection;
    } catch (e) {
        console.log(e);
    } finally {
    // await mongoClient.close();
    // console.log('connection to db is close');
    }
}
