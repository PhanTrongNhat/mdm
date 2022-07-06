import express from 'express'
import bodyParser from "body-parser";
import cors from "cors";
import router from './routers/router.js';
import registerVaccinRouter from "./routers/RegisterVaccinationrouter.js";
import supportrouter from "./routers/supportrouter.js";
import dbMongo from './dbMongo.js';
import dbNeo4j from './dbNeo4j.js';
import { engine } from "express-handlebars";
const app = express();
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

//Connect database
dbMongo._connect();
dbNeo4j._connect();

//Init port
let port = process.env.PORT || 3000;

//define router here
app.use(express.json());
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());
app.use("/",router);
app.use("/",registerVaccinRouter);
app.use("/",supportrouter);
app.listen(port);

console.log("RESTful API server started on: " + port);
