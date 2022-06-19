import mongoose from "mongoose";

const huyenSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    country_id: {
      type: mongoose.ObjectId,
      required: true,
    },
  },
  { timestamps: true }
);

const huyen = mongoose.model("huyens", huyenSchema);

export default huyen;
