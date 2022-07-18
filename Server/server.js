const express = require("express");
const collection = require("../Controller/MongoDB/connectToDb.js")
const app = express();
const jsonParser = express.json();

console.log(app.locals);
console.log(collection);

app.listen(3000, () => console.log('Server started!'));
