import express from "express";
import {getPage} from '../controllers/registerVaccin.controller.js';
const registerVaccinationrouter = express.Router();

registerVaccinationrouter.get("/RegisterVaccination",getPage);

// router.post("/registerVaccin",registerVaccin);

export default registerVaccinationrouter;