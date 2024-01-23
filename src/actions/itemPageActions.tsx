"use server";

import { Product } from "@/helpers/dbHelper";
import { ProductInterface } from "@/types/productsTypes";
import { Types } from "mongoose";
import { revalidatePath } from "next/cache";

export const statusChanger = async (
  productId: Types.ObjectId,
  itemId: Types.ObjectId | undefined,
  currentBoolValue: boolean | undefined
) => {
  const alteredBoolValue = !currentBoolValue;
  await Product.findOneAndUpdate(
    { _id: productId, "items._id": itemId },
    { $set: { "items.$.status": alteredBoolValue } },
    { new: true }
  );
  revalidatePath("/products/items");
};

export const updateItems = async (
  productId: Types.ObjectId,
  itemId: Types.ObjectId | undefined,
  itemName: string | undefined,
  price: number | undefined
) => {
  await Product.findOneAndUpdate(
    { _id: productId, "items._id": itemId },
    { $set: { "items.$.foodName": itemName, "items.$.price": price } }
  );
  revalidatePath("/products/items");
};

export const deleteItem = async (
  productId: Types.ObjectId,
  itemId?: Types.ObjectId
) => {
  await Product.findOneAndUpdate(
    { _id: productId },
    { $pull: { items: { _id: itemId } } }
  );
  revalidatePath("/products/items");
};

export const addItem = async (
  productId: Types.ObjectId,
  name?: string,
  price?: number
) => {
  await Product.findOneAndUpdate(
    { _id: productId },
    { $push: { items: { foodName: name, price: price } } }
  );
  revalidatePath("/products/items");
};
