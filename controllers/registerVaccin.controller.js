import tinh from "../models/tinh.models.js";
import huyen from "../models/huyen.model.js";
import dbMongo from '../dbMongo.js';


export const getPage = async (req, res) => {
    try{
        dbMongo._connect();
        const Tinh= await tinh.find();
        const Huyen=await huyen.find();
        res.render("RegisterVaccination", {
            tinh: Tinh,
            huyen: Huyen,
          });
        } catch (error) {}
};


