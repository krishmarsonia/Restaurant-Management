import {
  Grid,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import OrderListItem from "./orderListItem";
import { Types } from "mongoose";
import { getAllOrders } from "@/actions/orderPageActions";
import SubmitButton from "./submitButton";
import { orderListInterface } from "@/types/ordersTypes";
import { tableIdInterface } from "@/types/tableTypes";

const OrderReview = async ({ params }: { params: tableIdInterface }) => {
  const orders: orderListInterface[] = await getAllOrders();
  return (
    <div style={{ margin: "0px 80px 0px 80px" }}>
      <Grid container flexDirection={"column"}>
        <Grid>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <b>Food Name</b>
                  </TableCell>
                  <TableCell>
                    <b>Price</b>
                  </TableCell>
                  <TableCell>
                    <b>Quantity</b>
                  </TableCell>
                  <TableCell>
                    <b>Total</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <OrderListItem
                tableId={params.tableId}
                orders={JSON.stringify(orders)}
              />
            </Table>
          </TableContainer>
          <br />
          <SubmitButton tableId={params.tableId}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderReview;
