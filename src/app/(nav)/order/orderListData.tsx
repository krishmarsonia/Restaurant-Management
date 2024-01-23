"use client"
import { TableBody } from "@mui/material";
import React, { useContext } from "react";
import OrderListRow from "./orderListRow";
import { Types } from "mongoose";
import OrderContext from "@/context/orderContext/orderContext";

const OrderListData = () => {
  const {orderList, tables} = useContext(OrderContext)
  const orderData = orderList.find((ol) => ol.tableId === tables);
  return (
    <TableBody>
      {orderData?.order.map((item) => {
        return <OrderListRow item={item} key={item._id.toString()} />;
      })}
    </TableBody>
  );
};

export default OrderListData;
