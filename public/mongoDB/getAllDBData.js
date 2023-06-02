import { run } from "./connectToDb.js";

async function getAllDBData () {
    const collection = await run();
    console.log(collection);
}
getAllDBData();
