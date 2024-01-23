"use client";
import OrderContext from "@/context/orderContext/orderContext";
import { OrderListItemPropsInterface, orderListInterface } from "@/types/ordersTypes";

import { TableBody, TableCell, TableRow } from "@mui/material";
import { Types } from "mongoose";
import { useContext } from "react";

const OrderListItem = (props: OrderListItemPropsInterface) => {
  const { tableId, orders } = props;
  const orderList: orderListInterface[] = JSON.parse(orders);
  return (
    <TableBody>
      {orderList
        .filter((ol) => ol.tableId?.toString() === tableId)[0]
        ?.order.map((item) => {
          return (
            <TableRow key={item._id?.toString()}>
              <TableCell>{item.foodName}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>{item.price * item.quantity}</TableCell>
            </TableRow>
          );
        })}
    </TableBody>
  );
};

export default OrderListItem;
