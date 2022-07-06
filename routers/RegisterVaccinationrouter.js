import express from "express";
import {getPage,getHuyenByIdTinh,getXaByIdHuyen,registerVaccin} from '../controllers/registerVaccin.controller.js';
const registerVaccinationrouter = express.Router();

registerVaccinationrouter.get("/RegisterVaccination",getPage);
registerVaccinationrouter.get("/getHuyenByIdTinh", getHuyenByIdTinh);
registerVaccinationrouter.get("/getXaByIdHuyen", getXaByIdHuyen);
registerVaccinationrouter.post("/registerVaccin",registerVaccin);

export default registerVaccinationrouter;