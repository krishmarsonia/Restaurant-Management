import { Types } from "mongoose";
import { ItemInterface, ItemListInterace, itemHeaderArrayInterface } from "./itemsTypes";
import { ProductInterface } from "./productsTypes";
import { TableInterface } from "./tableTypes";



export interface OrderFoodDataPropsInterface {
  wholefoodData: string;
  tableData: string;
}

export interface OrderFoodDataListPropsInterface {
  item: ProductInterface;
  expanded: string | boolean;
  handleChange: (
    id: string
  ) => (event: React.SyntheticEvent, newExpanded: boolean) => void;
  itemHeaderArray: itemHeaderArrayInterface[];
}

export interface OrderFoodDataListRowPropsInterface {
  item: ItemInterface;
}

export interface OrderListRowPropsInterface {
  item: ItemListInterace;
}

export interface OrderModelPropsInterface {
  open: boolean;
  handleClose: () => void;
  tableData: TableInterface[];
}

export interface OrderListItemPropsInterface {
  tableId: string; orders: string
}

export interface orderListInterface {
  tableId: Types.ObjectId | string;
  order: ItemListInterace[];
}