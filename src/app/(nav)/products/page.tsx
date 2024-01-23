import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import ButtonModal from "./addButton";
import ProductStatusModify from "./productStatusModify";
import { ProductInterface } from "@/types/productsTypes";
import EditDeleteHandler from "./editDeleteHandler";
import { getAllProducts } from "@/actions/productPageActions";
import { itemHeaderArrayInterface } from "@/types/itemsTypes";

const ProductPage = async () => {
  const products: ProductInterface[] = await getAllProducts();
  const headerArray: itemHeaderArrayInterface[] = [
    {
      key: 1,
      name: "Product Name",
      align: "left",
    },
    {
      key: 2,
      name: "Status",
      align: "left",
    },
    {
      key: 3,
      name: "Operations",
      align: "left",
    },
  ];

  return (
    <>
      <div style={{ height: "auto", margin: "25px 25px 0px 0px" }}>
        <ButtonModal />
      </div>
      <br />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 100 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {headerArray.map((item) => {
                return (
                  <React.Fragment key={item.key}>
                    <TableCell align={item.align}>{item.name}</TableCell>
                  </React.Fragment>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((prod) => {
              return (
                <TableRow
                  key={prod._id.toJSON()}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component={"th"} scope="row">
                    {prod.name}
                  </TableCell>
                  <ProductStatusModify prod={JSON.stringify(prod)} />
                  <TableCell align="left">
                    <EditDeleteHandler
                      productName={prod.name}
                      prod_id={JSON.stringify(prod._id)}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ProductPage;
