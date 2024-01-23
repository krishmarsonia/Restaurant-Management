import { OrderListRowPropsInterface } from "@/types/ordersTypes";
import { TableCell, TableRow } from "@mui/material";
import { Types } from "mongoose";
import React from "react";

const OrderListRow = (props:OrderListRowPropsInterface) => {
  const { item } = props;
  return (
    <TableRow key={item._id.toString()}>
      <TableCell>{item.foodName}</TableCell>
      <TableCell>{item.quantity}</TableCell>
      <TableCell>{item.price}</TableCell>
      <TableCell>{item.price * item.quantity}</TableCell>
    </TableRow>
  );
};

export default OrderListRow;
