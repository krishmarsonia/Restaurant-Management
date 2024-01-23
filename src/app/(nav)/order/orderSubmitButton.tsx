"use client";
import { createOrder } from "@/actions/orderPageActions";
import OrderContext from "@/context/orderContext/orderContext";
import { Button, styled } from "@mui/material";
import React, { useContext } from "react";

const StyledButton = styled(Button)(({ theme }) => ({
  "&:hover": {
    backgroundColor: "#2e7d32",
    color: "#FFFFFF",
  },
}));

const OrderSubmitButton = () => {
  const {
    orderList,
    tables,
    setOrderLottieOpen,
    setOrderModelOpen,
    setOrderList,
  } = useContext(OrderContext);
  const orderClickHandler = async () => {
    const ord = orderList.find((ol) => ol.tableId === tables);
    // const newop = ord?.tableId?.toString();
    // if (ord?.tableId) {
    //   ord.tableId = ord.tableId.toString();
    // }
    setOrderLottieOpen(true);
    await createOrder(JSON.stringify(ord));
    const filteredOrder = orderList.filter((ol) => ol.tableId !== tables);
    setOrderList(filteredOrder);
    setTimeout(() => {
      setOrderLottieOpen(false);
      setOrderModelOpen(true);
    }, 1000);
  };
  return (
    <StyledButton
      variant="outlined"
      color="success"
      style={{ float: "right" }}
      onClick={() => orderClickHandler()}
    >
      Submit
    </StyledButton>
  );
};

export default OrderSubmitButton;
