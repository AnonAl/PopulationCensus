
const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://127.0.0.1:27017/";
const mongoClient = new MongoClient(url);

async function run() {
    try {
        // Подключаемся к серверу
        await mongoClient.connect();
        // обращаемся к базе данных admin
        const db = mongoClient.db("population");
        const collection = db.collection("users");
        module.exports.collection = collection;
        // const user = {name: "alex", age: 24};
        // const addedObj = await collection.insertOne(user);
        // console.log(addedObj);
        await collection.find().toArray().then(res => console.log(res));
        return collection;
        // app.listen(3000, )
        // console.log();
    } catch (e) {
        console.log(e);
    } finally {
        await mongoClient.close();
        console.log('connection is close');
    }
}

run();
