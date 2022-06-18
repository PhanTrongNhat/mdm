import express from "express";
import {getAll,getUser} from '../controllers/users.controller.js';
const router = express.Router();

router.get("/",getAll );
router.get("/user",getUser);
export default router;