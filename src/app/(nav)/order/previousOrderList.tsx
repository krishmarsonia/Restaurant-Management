"use client";
import TableBody from "@mui/material/TableBody";
import React, { useContext } from "react";
import OrderListRow from "./orderListRow";
import OrderContext from "@/context/orderContext/orderContext";
import { orderListInterface } from "@/types/ordersTypes";

const PreviousOrderListData = (props: { allOrders: string }) => {
  const { allOrders } = props;
  const { tables } = useContext(OrderContext);
  const orderData: orderListInterface[] = JSON.parse(allOrders);
  const previousOrderData = orderData.find((item) => item.tableId.toString() === tables?.toString());
  return (
    <TableBody>
      {previousOrderData?.order.map((item) => {
        return <OrderListRow item={item} key={item._id.toString()} />;
      })}
    </TableBody>
  );
};

export default PreviousOrderListData;
