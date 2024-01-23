"use client";
import React, { useContext } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Types } from "mongoose";
import OrderContext from "@/context/orderContext/orderContext";
import { OrderModelPropsInterface } from "@/types/ordersTypes";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const OrderModal = (props: OrderModelPropsInterface) => {
  const { open, handleClose, tableData } = props;
  const { setUniTables, tables } = useContext(OrderContext);
  const handleChange = (event: any) => {
    setUniTables(event.target.value as Types.ObjectId);
  };
  return (
    <Modal
    hideBackdrop={true}
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography variant="h5" component="h2">
          Select a Table
        </Typography>
        <br />
        <FormControl style={{ width: "40%" }}>
          <InputLabel id="demo-simple-select-label">Table No.</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={tables}
            label="Table No."
            onChange={handleChange}
          >
            {tableData.map((itemsTable) => {
              return (
                <MenuItem
                  key={itemsTable._id.toString()}
                  value={itemsTable._id.toString()}
                >
                  {itemsTable.tableNumber}

                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <br />
        <br />
        <Button color="success" onClick={() => handleClose()}>
          Submit
        </Button>
      </Box>
    </Modal>
  );
};

export default OrderModal;
