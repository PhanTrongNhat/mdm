import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    hoTen: {
      type: String,
      required: true,
    },
    gioiTinh: {
      type: String,
      required: true,
    },
    SDT: {
      type: String,
      required: true,
    },
    CCCD: {
      type: String,
    },
    VNVCcode: {
      type: String
    },
    email: {
      type: String,
      required: true,
    },
    diaChi: {
      type: String,
      required: true,
    },
    tinh: {
      type: String,
      required: true,
    },
    huyen: {
      type: String,
      required: true,
    },
    xa: {
      type: String,
      required: true,
    },
    trungTam: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const user = mongoose.model("users", userSchema);

export default  user;
