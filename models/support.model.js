import mongoose from "mongoose";

const supportSchema = new mongoose.Schema(
  {
    hoTen: {
      type: String,
      required: true,
    },
    soDienThoai:{
        type:String,
        required:true,
    },
    chuDe:{
        type:String,
        required:true,
    },
    noiDung:{
        type:String,
        required:true,
    }
  },
  { timestamps: true }
);

const supportmodel = mongoose.model("support", supportSchema);

export default supportmodel;