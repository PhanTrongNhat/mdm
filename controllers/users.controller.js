import neo4j from "neo4j-driver";
let driver = neo4j.driver(
  "neo4j://localhost:7687",
  neo4j.auth.basic("neo4j", "123456")
);
import userModel from "../models/users.models.js";
import tinh from "../models/tinh.models.js";
import huyen from "../models/huyen.model.js";
import user from "../models/users.models.js";
const session = driver.session();
export const getAll = async (req, res) => {
  const num_nodes = await session.run("MATCH (n) RETURN n", {});

  console.log("RESULT", !num_nodes ? 0 : num_nodes.records);
  //  res( !num_nodes ? 0 : num_nodes.records.length);
  res.render("home", {
    showTitle: num_nodes.records.length,

    // Override `foo` helper only for this rendering.
  });
  session.close();
};
export const getUser = async (req, res) => {
  try {
const resultHuyen = await huyen.find();
    const result = await tinh.find();
  console.log(typeof result);
    console.log(result);
    res.render("user", {
      tinh: result,
      huyen: resultHuyen,
    });
  } catch (error) {}

};
export const getBaiViet = async (req, res) => {
  try {
    res.render("baiviet");
  } catch (error) {}

};
export const getAllTinh = async (req, res) => {
  try {
    const result = await tinh.find();
    res.status(200).send(result);
  } catch (error) {}

};
export const registerUser = async(req, res) => {
  console.log(req.body);
  const data = new user(req.body); 
  await data.save()
  res.render("user");
};

