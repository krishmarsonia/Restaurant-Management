import { Types } from "mongoose";

export interface TableInterface {
  _id: Types.ObjectId;
  tableNumber: number;
  occupied: boolean;
}

export interface tableIdInterface {
  tableId: string
}