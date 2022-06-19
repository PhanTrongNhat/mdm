import mongoose from "mongoose";

const tinhSchema = new mongoose.Schema(
  {
    tenTinh: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

const tinh = mongoose.model("tinh", tinhSchema);

export default tinh;
