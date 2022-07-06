import tinh from "../models/tinh.models.js";
import huyen from "../models/huyen.model.js";
import trungtam from "../models/trungtam.model.js"
import registerVaccinModel from "../models/registerVaccination.js";
import dbMongo from '../dbMongo.js';


export const getPage = async (req, res) => {
    try{
        dbMongo._connect();
        const Tinh= await tinh.find();
        const Huyen=await huyen.find();
        const Trungtam=await trungtam.find();
        res.render("RegisterVaccination", {
            tinh: Tinh,
            huyen: Huyen,
            trungtam:Trungtam,
          });
        } catch (error) {}
};

export const getHuyenByIdTinh = async (req, res) => {
  try {
    const result = await huyen.find({'tinhId':req.query.id});
    res.status(200).send(result);
  } catch (error) {}
};
export const getXaByIdHuyen = async (req, res) => {
  try {
    const result = await xa.find({ huyenId: req.query.id });
    res.status(200).send(result);
  } catch (error) {}
};

export const registerVaccin = async(req, res)=>{
  const data = new registerVaccinModel(req.body);
  await data.save();
  res.render("success");
};


