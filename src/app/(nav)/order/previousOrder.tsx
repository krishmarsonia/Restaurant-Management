import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { getAllOrders } from "@/actions/orderPageActions";
import PreviousOrderListData from "./previousOrderList";
import { orderListInterface } from "@/types/ordersTypes";

const PreviousOrder = async () => {
  const allOrders: orderListInterface[] = await getAllOrders();
  return (
    <Paper sx={{ position: "absolute", bottom: 0, right: 0, width: "28%" }}>
      <b>Previous Order</b>
      <TableContainer sx={{ maxHeight: 200 }}>
        <Table stickyHeader aria-label="Previous Order Table">
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Name</b>
              </TableCell>
              <TableCell>
                <b>Quantity</b>
              </TableCell>
              <TableCell>
                <b>Price</b>
              </TableCell>
              <TableCell>
                <b>Total Sum</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <PreviousOrderListData allOrders={JSON.stringify(allOrders)} />
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default PreviousOrder;
