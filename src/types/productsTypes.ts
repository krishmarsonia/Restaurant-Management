import { Types } from "mongoose";
import { ItemExecIdInterface, ItemInterface } from "./itemsTypes";

export interface ProductInterface {
  _id: Types.ObjectId;
  name: string;
  status: boolean;
  items: ItemInterface[];
}

export interface ProductModelInterface {
  name?: string;
  status: boolean;
  items: ItemExecIdInterface[];
}

export interface DeleteAlertDialogPropsInterface {
  open: boolean;
  handleClose: () => void;
  deleteClickHandler: (
    id: Types.ObjectId,
    itemId?: Types.ObjectId
  ) => Promise<void>;
  id: Types.ObjectId;
  itemId?: Types.ObjectId;
}

export interface EditDeleteHandlerPropsInterface {
  productName: string;
  prod_id: string;
}

export interface ProductPageModalPropsInterface {
  open: boolean;
  handleClose: () => void;
  saveClickHanlder: (name: string, id?: Types.ObjectId) => Promise<void>;
  productName?: string;
  id?: Types.ObjectId;
}

export interface ProductStatusModifyParsedPropsInterface extends ProductModelInterface {
  _id: Types.ObjectId
}