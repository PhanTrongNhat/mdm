import mongoose from "mongoose";

const baivietSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const baiviet = mongoose.model("baiviet", baivietSchema);

export default  baiviet;
