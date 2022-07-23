const express = require('express');
const collection = require('../Controller/MongoDB/connectToDb.js');
const app = express();

const jsonParser = express.json();
const urlencodedParser = express.urlencoded({extended: false});

// app.set("view engine", "hbs");

app.use(express.static('../PopulationCensus'));

app.get("/", (_, response) => {
    response.sendFile('index.html');
});

console.log(collection);

app.listen(3000, () => console.log('Server started!'));
