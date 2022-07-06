import express from "express";
import {getsupport,takeQuestion} from '../controllers/support.controller.js';
const supportrouter = express.Router();

supportrouter.get("/support",getsupport);
supportrouter.post("/takeQuestion",takeQuestion);

export default supportrouter;