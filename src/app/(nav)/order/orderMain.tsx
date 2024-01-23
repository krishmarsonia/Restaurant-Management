import { ProductInterface } from "@/types/productsTypes";
import Grid from "@mui/material/Grid";
import React from "react";
import OrderFoodData from "./orderFoodData";
import OrderList from "./orderList";
import { TableInterface } from "@/types/tableTypes";
import PreviousOrder from "./previousOrder";
import { orderListInterface } from "@/types/ordersTypes";
import { getAllProducts } from "@/actions/productPageActions";
import { allTablesData } from "@/actions/orderPageActions";

const OrderMain = async () => {
  const data: ProductInterface[] = await getAllProducts();
  const tableData: string = await allTablesData();
  const newTableData: TableInterface[] = JSON.parse(tableData);

  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <OrderFoodData wholefoodData={JSON.stringify(data)} tableData={JSON.stringify(newTableData)} />
        </Grid>
        <Grid item xs={6} md={4}>
          <div>
            <OrderList />
          </div>
          <div>
            <PreviousOrder />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderMain;
