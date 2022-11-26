import express from 'express';
import path from 'path';
import hbs from 'hbs'
import {run as mongodb, mongoClient} from '../PopulationCensus/public/mongoDB/connectToDb.js';

const connectionToDb = mongodb();
const collectionOfUsers = connectionToDb.then(usersCollection => usersCollection.find().toArray());
const listOfUsers = [];

const app = express();
const form = express.Router();

const __dirname = path.resolve();
const jsonParser = express.json();
const urlencodedParser = express.urlencoded({extended: false});

app.use(express.static('../PopulationCensus'));
app.use(express.static('../PopulationCensus/public'));
app.use(express.static('../PopulationCensus/public/view'));

hbs.registerPartials(__dirname + '/public/view/partials');
app.set("views", "../PopulationCensus/public/view");
app.set("view engine", "hbs");

app.use(jsonParser);
app.use(urlencodedParser);


app.route("/").get(async (request, response) => {
    // console.log(__dirname);
    response.render('index.hbs', {root: __dirname});

});

form.use('/signin', async (request, response) => {
    response.send('sign in is successful');
});

form.use("/registration", async (request, response) => {
    response.send('hello from form');
    // response.sendFile('form.html', {root:__dirname});
});

app.use("/form", form);

app.route('/about').get(async (req, res) => {
    res.render('about/about.hbs', {root: __dirname});
});

app.route("/formRegistration").post(jsonParser, async (req, res) => {
    console.log('user: ' + res.json(req.body));
});
// .get((request, response) => {
//     response.send(console.log('user: ') + response.json(request.body));
// });

app.route('/get').get(async (req, res) => {
    await collectionOfUsers.then(users => users.forEach(user => listOfUsers.push(user)));
    console.log(listOfUsers);
    await res.send(listOfUsers);
    listOfUsers.length = 0;
});

app.listen(3000, () => console.log('Server started!'));


// (async () => {
//     app.on('', async () => await mongoClient.close());
//     emit.emit('onunload');
// })();
process.on("SIGINT", async () => {

    await mongoClient.close();
    console.log("Приложение завершило работу");
    process.exit();
});

