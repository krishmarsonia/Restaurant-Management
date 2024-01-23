import React from "react";
import { Button, TableCell, TableRow } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Types } from "mongoose";
import { ItemInterface, ItemRowInterface } from "@/types/itemsTypes";
import { statusChanger } from "@/actions/itemPageActions";

const ItemRow = (props: ItemRowInterface) => {
  const { row, handleOpen, prodId, setItemId, deleteModalOpenHandler } = props;
  let productId: Types.ObjectId;

  const toggleEDButton = async () => {
    productId = JSON.parse(prodId);
    await statusChanger(productId, row._id, row.status);
  };
  const editClickHandler = (itemRow: ItemInterface) => {
    productId = JSON.parse(prodId);
    handleOpen(itemRow, productId);
  };
  const deleteClickHandler = (id: string) => {
    productId = JSON.parse(prodId);
    setItemId(row._id);
    deleteModalOpenHandler(productId)
  };
  return (
    <TableRow
      key={row._id.toString()}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {row.foodName}
      </TableCell>
      <TableCell component="th" scope="row">
        {row.price}
      </TableCell>
      <TableCell align="left">
        <Button
          onClick={() => toggleEDButton()}
          color={row.status ? "success" : "error"}
          variant="contained"
        >
          {row.status ? "Enabled" : "Disabled"}
        </Button>
      </TableCell>
      <TableCell align="left">
        <div>
          <IconButton aria-label="edit" onClick={() => editClickHandler(row)}>
            <EditIcon />
            {/* <AddIcon /> */}
          </IconButton>
          <IconButton
            aria-label="delete"
            onClick={() => deleteClickHandler(row._id.toString())}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default ItemRow;
