import mongoose from "mongoose";
import ProductSchema from "../model/product";
import TableSchema from "../model/table";
import OrderSchema from "../model/order";

let mongoString = process.env.MONGO_URI;

if (typeof mongoString === "undefined") {
  throw new Error("mongoString is not defined");
}

if (mongoose.connection.readyState !== 1) {
  mongoose.connect(mongoString);
}

mongoose.Promise = global.Promise;

export const Product = ProductSchema;

export const Table = TableSchema;

export const Order = OrderSchema;
