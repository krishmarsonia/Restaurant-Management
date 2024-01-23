"use client";

import {
  toggleDisableProduct,
  toggleEnableProduct,
} from "@/actions/productPageActions";
import { ProductStatusModifyParsedPropsInterface } from "@/types/productsTypes";
import { Button, TableCell } from "@mui/material";
import { Types } from "mongoose";

const ProductStatusModify = (props: { prod: string }) => {
  const { prod } = props;
  const prods: ProductStatusModifyParsedPropsInterface = JSON.parse(prod);
  return (
    <TableCell>
      {prods.status ? (
        <Button
          color="success"
          variant="contained"
          onClick={() => toggleEnableProduct(prods._id)}
        >
          Enabled
        </Button>
      ) : (
        <Button
          color="error"
          variant="contained"
          onClick={() => toggleDisableProduct(prods._id)}
        >
          Disabled
        </Button>
      )}
    </TableCell>
  );
};

export default ProductStatusModify;
