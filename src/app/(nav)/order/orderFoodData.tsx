"use client";
import { ProductInterface } from "@/types/productsTypes";
import { Button, Grid, styled } from "@mui/material";
import React, { useContext, useState } from "react";
import OrderFoodDataList from "./orderFoodDataList";
import OrderSubmitButton from "./orderSubmitButton";
import OrderModal from "./orderModal";
import { TableInterface } from "@/types/tableTypes";
import { OrderFoodDataPropsInterface } from "@/types/ordersTypes";
import { itemHeaderArrayInterface } from "@/types/itemsTypes";
import OrderContext from "@/context/orderContext/orderContext";
import OrderPlacedLottie from "../orderPlacedLottie/orderPlacedLottie";

const itemHeaderArray: itemHeaderArrayInterface[] = [
  {
    key: 1,
    name: "Item Name",
    align: "left",
  },
  {
    key: 2,
    name: "Price",
    align: "left",
  },
  {
    key: 3,
    name: "Actions",
    align: "left",
  },
];

const OrderFoodData = (props: OrderFoodDataPropsInterface) => {
  const { wholefoodData, tableData } = props;
  const [open, setOpen] = useState(true);
  const [expanded, setExpanded] = useState<string | boolean>("");
  const { OrderLottieOpen } = useContext(OrderContext);

  const handleClose = () => {
    setOpen(false);
  };

  const data: ProductInterface[] = JSON.parse(wholefoodData);

  const tData = JSON.parse(tableData);

  const handleChange =
    (id: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? id : false);
    };

  if (OrderLottieOpen) {
    return <OrderPlacedLottie />;
  }
  return (
    <div>
      {data
        .filter((items) => items.status === true && items.items.length !== 0)
        .map((item) => {
          return (
            <OrderFoodDataList
              key={item._id.toString()}
              item={item}
              itemHeaderArray={itemHeaderArray}
              expanded={expanded}
              handleChange={handleChange}
            />
          );
        })}

      <br />
      <OrderSubmitButton />
      <OrderModal open={open} handleClose={handleClose} tableData={tData} />
    </div>
  );
};

export default OrderFoodData;
