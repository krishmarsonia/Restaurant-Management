import { Types } from "mongoose";
import React from "react";

export interface ItemInterface extends ItemExecIdInterface {
  _id: Types.ObjectId;
}

export interface ItemExecIdInterface {
  foodName: string;
  price: number;
  status: boolean;
}

export interface IStatusChanger {
  productId: Types.ObjectId;
  itemId: Types.ObjectId | undefined;
  currentBoolValue: boolean | undefined;
}

export interface ItemListInterace {
  _id: Types.ObjectId;
  foodName: string;
  quantity: number;
  price: number;
}

export interface itemHeaderArrayInterface {
  key: number;
  name: string;
  align: "left" | "right" | "center" | "inherit" | "justify" | undefined;
}

export interface ItemModalPropsInterface {
  open: boolean;
  handleClose: () => void;
  prodId: string;
  openedItemDetails?: ItemInterface;
}

export interface ItemRowInterface {
  row: ItemInterface;
  expanded: string | boolean;
  handleOpen: (itemRow: ItemInterface, productId: Types.ObjectId) => void;
  prodId: string;
  setItemId: React.Dispatch<React.SetStateAction<Types.ObjectId>>;
  deleteModalOpenHandler: (prodId: Types.ObjectId) => void;
}
