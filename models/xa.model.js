import mongoose from "mongoose";

const xaSchema = new mongoose.Schema(
  {
    tenXa: {
      type: String,
      required: true,
    },
    huyenId: {
      type: mongoose.ObjectId,
      required: true,
    },
  }
);

const xa = mongoose.model("xa", xaSchema);

export default xa;
