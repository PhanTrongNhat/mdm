import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    birthday: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    customerId: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    village: {
      type: String,
      required: true,
    },
    address: {
        type: String,
        required: true,
      },
    nameofRelation: {
      type: String,
      required: true,
    },
    relation:{
        type:String,
        required: true,
    },
    phonenumberOfRelation:{
        type:String,
        required: true,
    },
    centerRegister:{
        type:String,
        required: true,
    },
    dateUserService:{
        type:String,
        required: true,
    }
  },
  { timestamps: true }
);

const registerVaccinModel = mongoose.model("registerVaccin", OrderSchema);

export default registerVaccinModel;
