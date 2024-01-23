"use server";

import { Order, Table } from "@/helpers/dbHelper";
import { ItemListInterace } from "@/types/itemsTypes";
import { orderListInterface } from "@/types/ordersTypes";
import { Types } from "mongoose";

export const allTablesData = async () => {
  const tableResult = await Table.find();
  const newTableResult = JSON.stringify(tableResult);
  return newTableResult;
};

export const createOrder = async (orderObject: string) => {
  const origOrderObject = JSON.parse(orderObject);
  await Table.findOneAndUpdate(
    { _id: origOrderObject.tableId },
    { occupied: true }
  );
  const existingOrder = await Order.findOne({
    tableId: origOrderObject.tableId,
  });
  if (existingOrder) {
    origOrderObject.order.map((ordobj: { _id: string; quantity: any; }) => {
      const existingCount = existingOrder.order.findIndex(
        (items: ItemListInterace) => items._id.toString() === ordobj._id
      );
      if (existingCount !== -1) {
        existingOrder.order[existingCount].quantity =
          existingOrder.order[existingCount].quantity + ordobj.quantity;
      } else {
        existingOrder.order = [...existingOrder.order, ordobj];
      }
    });
    await existingOrder.save();
  } else {
    await Order.create(origOrderObject);
  }
};

export const getAllOrders = async () => {
  try {
    const allOrders = await Order.find();
    return allOrders;
  } catch (error) {
    console.log(error);
    throw new Error("unable to fetch all orders");
  }
};

export const deleteOrder = async (tableId: string) => {
  try {
    await Table.findByIdAndUpdate({ _id: tableId }, { occupied: false });
    await Order.findOneAndDelete({ tableId: tableId });
  } catch (error) {
    console.log(error);
    throw new Error("unable to delete an order");
  }
};
