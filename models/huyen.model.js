import mongoose from "mongoose";

const huyenSchema = new mongoose.Schema(
  {
    tenHuyen: {
      type: String,
      required: true,
    },
    tinhId: {
      type: mongoose.ObjectId,
      required: true,
    },
  },
  { timestamps: true }
);

const huyen = mongoose.model("huyens", huyenSchema);

export default huyen;
