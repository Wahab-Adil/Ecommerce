import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ColorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

const ColorShema = mongoose.model("Color", ColorSchema);
export default ColorShema;
