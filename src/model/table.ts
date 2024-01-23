import mongoose from "mongoose";

const Schema = mongoose.Schema;

const tableSchema = new Schema({
  tableNumber: {
    type: Number,
    unique: true,
    required: true,
  },
  occupied: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.models.table || mongoose.model("table", tableSchema);
