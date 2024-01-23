/**
* @type {mongoose.SchemaDefinitionProperty}
*/
import mongoose from "mongoose";

import { ProductModelInterface } from "@/types/productsTypes";
const Schema = mongoose.Schema;

const productSchema = new Schema<ProductModelInterface>({
  name: {
    type: String,
    required: false,
  },
  status: {
    type: Boolean,
    default: true,
  },
  items: [
    {
      foodName: {
        type: String,
        required: false,
      },
      price: {
        type: Number,
        required: false,
      },
      status: {
        type: Boolean,
        default: true,
      },
    },
  ],
});

export default mongoose.models.products ??
  mongoose.model("products", productSchema);
