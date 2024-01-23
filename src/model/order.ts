import mongoose from "mongoose";

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  tableId: {
    type: Schema.Types.ObjectId,
    ref: "table",
    unique: true,
  },
  order: [
    {
      foodName: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
});

export default mongoose.models.orders ?? mongoose.model("orders", orderSchema);
