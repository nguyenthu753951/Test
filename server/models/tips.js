import mongoose from "mongoose";
const TipSchema = new mongoose.Schema(
    {
        title: {
          type: String,
          required: true,
          unique: true,
        },
        desc: {
          type: String,
          required: true,
        },
        photo: {
          type: String,
          required: false,
        },
        nameAdmin: {
          type: String,
          required: true,
        },
      },
      { timestamps: true }
);

export default mongoose.model("Tip", TipSchema);