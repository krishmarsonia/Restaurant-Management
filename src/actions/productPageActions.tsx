"use server";

import { Product } from "@/helpers/dbHelper";
import { ProductInterface } from "@/types/productsTypes";
import { Types } from "mongoose";
import { revalidatePath } from "next/cache";

export const getAllProducts = async (): Promise<ProductInterface[]> => {
  try {
    const products: ProductInterface[] = await Product.find();
    return products;
  } catch (error) {
    console.log(error);
    throw new Error("unable to fetch all products");
  }
};

export const toggleEnableProduct = async (id: Types.ObjectId) => {
  const enabledProduct = await Product.findById(id);
  if (enabledProduct.status) {
    enabledProduct.status = false;
  }
  await enabledProduct.save();
  revalidatePath("/products");
};

export const toggleDisableProduct = async (id: Types.ObjectId) => {
  const disabledProduct = await Product.findById(id);

  disabledProduct.status = true;
  await disabledProduct.save();
  revalidatePath("/products");
};

export const saveProduct = async (name: string) => {
  try {
    await Product.create({ name: name });
    revalidatePath("/products");
  } catch (error) {
    console.log(error);
    throw new Error("unable to save products");
  }
};

export const editProduct = async (name: string, id?: Types.ObjectId) => {
  try {
    const prod = await Product.findById(id);
    prod.name = name;
    await prod.save();
    revalidatePath("/products");
  } catch (error) {
    console.log(error);
    throw new Error("unable to edit the products");
  }
};

export const deleteProduct = async (id: Types.ObjectId) => {
  try {
    await Product.findByIdAndDelete(id);
    revalidatePath("/products");
  } catch (error: any) {
    console.log(error);
    throw new Error("unable to delete products");
  }
};
