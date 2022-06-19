import express from "express";
import {
  getAll,
  getUser,
  registerUser,
  getAllTinh,
  insertData,
} from "../controllers/users.controller.js";
const router = express.Router();

router.get("/",getAll );
router.get("/user",getUser);
router.get("/insert",insertData);
router.get("/tatCaTinh", getAllTinh);
router.post("/register", registerUser);
export default router;