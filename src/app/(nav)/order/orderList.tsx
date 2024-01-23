// import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Grid } from "@mui/material";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import React from "react";
import OrderListData from "./orderListData";

const OrderList = () => {
  return (
    <div>
      <TableContainer sx={{maxHeight: 400}} component={Paper}>
        <Table aria-label="Order Table">
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

          <OrderListData />
        </Table>
      </TableContainer>
      {/* // </Grid> */}
    </div>
  );
};

export default OrderList;
