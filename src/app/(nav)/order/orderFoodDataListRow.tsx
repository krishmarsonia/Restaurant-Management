import { IconButton, TableCell, TableRow } from "@mui/material";
import TextField from "@mui/material/TextField";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import React, { useContext } from "react";
import { Types } from "mongoose";
import OrderContext from "@/context/orderContext/orderContext";
import { ItemInterface } from "@/types/itemsTypes";
import { OrderFoodDataListRowPropsInterface } from "@/types/ordersTypes";

const OrderFoodDataListRow = (props: OrderFoodDataListRowPropsInterface) => {
  const { item } = props;
  const { changeQunatity, tables, orderList } = useContext(OrderContext);
  const quantityData = orderList.find((ol) => ol.tableId === tables);

  return (
    <TableRow
      key={item._id.toString()}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {item.foodName}
      </TableCell>
      <TableCell component="th" scope="row">
        {item.price}
      </TableCell>
      <TableCell>
        <div>
          <IconButton
            aria-label="remove"
            onClick={() => changeQunatity(tables, item, "dec")}
          >
            <RemoveIcon color="error" />
          </IconButton>
          <TextField
            id="outlined-basic"
            // label="Outlined"
            variant="outlined"
            // type='number'
            // // size="small"
            // defaultValue={0}
            value={quantityData?.order
              .filter((or) => or._id === item._id)
              .map((od) => od.quantity) || 0}
          />
          <IconButton
            aria-label="add"
            onClick={() => changeQunatity(tables, item, "inc")}
          >
            <AddIcon color="success" />
          </IconButton>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default OrderFoodDataListRow;
