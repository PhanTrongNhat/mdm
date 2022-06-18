import express from 'express'
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import neo4j from "neo4j-driver";
import router from './routers/router.js';
import { engine } from "express-handlebars";
const app = express();
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

let driver = neo4j.driver(
  "neo4j://localhost:7687",
  neo4j.auth.basic("neo4j", "123456")
);
const session = driver.session();

let port = process.env.PORT || 3000;
app.use(express.json());
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());
app.use("/",router);
//   "mongodb+srv://udptbackend:udpt123456@cluster0.uohe5.mongodb.net/UDPT_backend?retryWrites=true&w=majority",
mongoose.connect(
  "mongodb+srv://nhat:123456nhat@mdm.l7t9g4e.mongodb.net/?retryWrites=true&w=majority",
// "mongodb+srv://udptbackend:udpt123456@cluster0.uohe5.mongodb.net/UDPT_backend?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB!!!");
  }
);

// app.get("/", async function (req,res) {

//   const num_nodes = await session.run("MATCH (n) RETURN n", {});
//   session.close();
//   console.log("RESULT", !num_nodes ? 0 : num_nodes.records.length);
//  res( !num_nodes ? 0 : num_nodes.records.length);
// });
// app.get("/", async (req, res) => {
//   const num_nodes = await session.run("MATCH (n) RETURN n", {});
   
//     console.log("RESULT", !num_nodes ? 0 : num_nodes.records.length);
//   res.status(200).send("hello");
// });
app.listen(port);

console.log("RESTful API server started on: " + port);
  //  session.close();