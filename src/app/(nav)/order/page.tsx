import { getAllProducts } from "@/actions/productPageActions";
import { Grid } from "@mui/material";
import React, { Suspense } from "react";
import OrderMain from "./orderMain";
import OrderPlacedLottie from "../orderPlacedLottie/orderPlacedLottie";
import { ProductInterface } from "@/types/productsTypes";
import { allTablesData, getAllOrders } from "@/actions/orderPageActions";
import { TableInterface } from "@/types/tableTypes";
import { orderListInterface } from "@/types/ordersTypes";

const OrderPage = async () => {
  const data: ProductInterface[] = await getAllProducts();
  const tableData: string = await allTablesData();
  const allOrders: orderListInterface[] = await getAllOrders();
  const newTableData: TableInterface[] = JSON.parse(tableData);
  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <OrderMain/>
      </Suspense>
    </div>
  );
};

export default OrderPage;
