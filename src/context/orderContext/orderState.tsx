"use client";
import { Types } from "mongoose";
import { useState } from "react";
import OrderContext from "./orderContext";

const OrderState = ({ children }: { children: React.ReactNode }) => {
  const [orderList, setOrderList] = useState<
    {
      tableId: Types.ObjectId | undefined | string;
      order: {
        _id: Types.ObjectId;
        foodName: string;
        price: number;
        quantity: number;
      }[];
    }[]
  >([]);

  const [tables, setTables] = useState<Types.ObjectId>(
    new Types.ObjectId("64953aa7fab472a3d0832067")
  );

  const [orderModelOpen, setOrderModelOpen] = useState<boolean>(true);
  const [OrderLottieOpen, setOrderLottieOpen] = useState<boolean>(false);

  const setTable = (tabId: Types.ObjectId | undefined) => {
    const orders = orderList;
    const doTableExist = orders?.findIndex((o) => o.tableId === tabId);
    if (doTableExist === -1) {
      //   setOrderList([...orders, { tableId: tabId, order: [] }]);
      const newArr = [...orders, { tableId: tabId, order: [] }];
      setOrderList(newArr);
    }
  };

  const setFirstOrder = (
    tableId: Types.ObjectId | undefined,
    {
      _id,
      foodName,
      price,
      quantity = 1,
    }: {
      _id: Types.ObjectId;
      foodName: string;
      price: number;
      quantity?: number;
    }
  ) => {
    const orders = orderList;
    let doTableExist = orders?.findIndex((ord) => ord.tableId === tableId);
    if (doTableExist === -1) {
      const order = { _id, foodName, price, quantity };
      if (orders) {
        const newOrder = [...orders, { tableId: tableId, order: [order] }];
        setOrderList(newOrder);
      }
    }
  };

  const ifNoTable = (
    tableId: Types.ObjectId,
    {
      _id,
      foodName,
      price,
      quantity = 1,
    }: {
      _id: Types.ObjectId;
      foodName: string;
      price: number;
      quantity?: number;
    }
  ) => {};

  const changeQunatity = (
    tableId: Types.ObjectId | undefined,
    {
      _id,
      foodName,
      price,
      quantity = 1,
    }: {
      _id: Types.ObjectId;
      foodName: string;
      price: number;
      quantity?: number;
    },
    type: "inc" | "dec"
  ) => {
    const orders = orderList;
    const doTableExist = orders.findIndex((ord) => ord.tableId === tableId);

    if (doTableExist !== -1) {
      const finalOrder = orders[doTableExist].order.findIndex(
        (oa) => oa.foodName === foodName
      );
      if (finalOrder !== -1) {
        if (type === "inc") {
          orders[doTableExist].order[finalOrder].quantity =
            orders[doTableExist].order[finalOrder].quantity + 1;
          const newOrders = orders;

          setOrderList([...newOrders]);
        } else {
          if (orders[doTableExist].order[finalOrder].quantity > 1) {
            orders[doTableExist].order[finalOrder].quantity =
              orders[doTableExist].order[finalOrder].quantity - 1;

            const decreasedOrder = orders;
            setOrderList([...decreasedOrder]);
          } else if (orders[doTableExist].order[finalOrder].quantity === 1) {
            const orderId = orders[doTableExist].order[finalOrder]._id;
            const updatedOrder = orders[doTableExist].order.filter(
              (od) => od._id !== orderId
            );
            orders[doTableExist].order = updatedOrder;
            const decreasedOrder = orders;

            setOrderList([...decreasedOrder]);
          }
        }
      } else {
        orders[doTableExist].order = [
          ...orders[doTableExist].order,
          { _id, foodName, price, quantity },
        ];
        setOrderList([...orders]);
      }
    } else {
      setFirstOrder(tableId, {
        _id,
        foodName,
        price,
        quantity,
      });
    }
  };

  const setUniTables = (tableId: Types.ObjectId) => {
    setTables(tableId);
  };
  return (
    <OrderContext.Provider
      value={{
        orderList,
        setTable,
        setFirstOrder,
        changeQunatity,
        setUniTables,
        tables,
        orderModelOpen,
        setOrderModelOpen,
        OrderLottieOpen,
        setOrderLottieOpen,
        setOrderList
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderState;
