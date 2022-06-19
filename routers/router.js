import express from "express";
import {getAll,getUser,registerUser, getAllTinh} from '../controllers/users.controller.js';
const router = express.Router();

router.get("/",getAll );
router.get("/user",getUser);
router.get("/tatCaTinh", getAllTinh);
router.post("/register", registerUser);
export default router;