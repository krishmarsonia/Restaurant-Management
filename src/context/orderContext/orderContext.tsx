import { Types } from "mongoose";
import { Dispatch, SetStateAction, createContext } from "react";

const OrderContext = createContext<{
  orderList: {
    tableId: Types.ObjectId | string | undefined;
    order: {
      _id: Types.ObjectId;
      foodName: string;
      price: number;
      quantity: number;
    }[];
  }[];
  setTable: (tabId: Types.ObjectId | undefined) => void;
  setFirstOrder: (
    tableId: Types.ObjectId | undefined,
    foodItems: {
      _id: Types.ObjectId;
      foodName: string;
      price: number;
      quantity?: number | undefined;
    }
  ) => void;
  changeQunatity: (
    tableId: Types.ObjectId | undefined,
    foodItem: {
      _id: Types.ObjectId;
      foodName: string;
      price: number;
      quantity?: number;
    },
    type: "inc" | "dec"
  ) => void;
  setUniTables: (tableId: Types.ObjectId) => void;
  tables: Types.ObjectId | undefined;
  orderModelOpen: boolean
  setOrderModelOpen: Dispatch<SetStateAction<boolean>>
  OrderLottieOpen: boolean
  setOrderLottieOpen: Dispatch<SetStateAction<boolean>>
  setOrderList: Dispatch<SetStateAction<{
    tableId: Types.ObjectId | undefined | string;
    order: {
        _id: Types.ObjectId;
        foodName: string;
        price: number;
        quantity: number;
    }[];
}[]>>
  //   setTable: (tabId: Types.ObjectId | null) => void;
}>({
  orderList: [{ tableId: undefined, order: [] }],
  setTable: () => null,
  setFirstOrder: () => null,
  changeQunatity: () => null,
  setUniTables: () => null,
  tables: undefined,
  orderModelOpen: true,
  setOrderModelOpen: () => null,
  OrderLottieOpen: false,
  setOrderLottieOpen: () => null,
  setOrderList: () => null
});

export default OrderContext;
