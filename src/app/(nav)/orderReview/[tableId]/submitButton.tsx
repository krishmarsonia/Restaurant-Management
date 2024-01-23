"use client";
import { deleteOrder } from "@/actions/orderPageActions";
import { tableIdInterface } from "@/types/tableTypes";
import { Button } from "@mui/material";
import { Types } from "mongoose";
import { useRouter } from "next/navigation";
import React from "react";

const SubmitButton = (props: tableIdInterface) => {
    const {tableId} = props;
    
  const router = useRouter();
  const buttonHandler = async () => {
    await deleteOrder(tableId);
    router.push("/products");
  };
  return (
    <Button
      variant="contained"
      color="success"
      onClick={buttonHandler}
      style={{ float: "right", marginRight: "50px" }}
    >
      Submit
    </Button>
  );
};

export default SubmitButton;
