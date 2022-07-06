import dbMongo from '../dbMongo.js';
import supportmodel from '../models/support.model.js'


export const getsupport = async (req, res) => {
    try{
        dbMongo._connect();
        const resultQuestion=await supportmodel.find();
        res.render("support", {
          question: resultQuestion,
          });
        } catch (error) {}
};

export const takeQuestion = async(req, res)=>{
  const data = new supportmodel(req.body);
  await data.save();
  res.render("support");
};