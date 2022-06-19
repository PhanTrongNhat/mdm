import mongoose from "mongoose";

const trungTamSchema = new mongoose.Schema({
  tenTT: {
    type: String,
    required: true,
  }
});

const TT = mongoose.model("trungtams", trungTamSchema);

export default TT;
