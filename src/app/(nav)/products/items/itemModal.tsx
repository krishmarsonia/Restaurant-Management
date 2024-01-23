"use client";
import { addItem, updateItems } from "@/actions/itemPageActions";
import { ItemModalPropsInterface } from "@/types/itemsTypes";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { Types } from "mongoose";
import React, { useRef } from "react";

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

const ItemModal = (props:ItemModalPropsInterface) => {
  const { open, handleClose, prodId, openedItemDetails } = props;
  const nameRef = useRef<HTMLInputElement | null>(null);
  const priceRef = useRef<HTMLInputElement | null>(null);

  let productId: Types.ObjectId;

  const itemButtonHandler = async () => {
    productId = JSON.parse(prodId);
    if (openedItemDetails) {
      await updateItems(
        productId,
        openedItemDetails?._id,
        nameRef.current?.value,
        parseInt(priceRef.current?.value as string, 10)
      );
    } else {
      await addItem(
        productId,
        nameRef.current?.value,
        parseInt(priceRef.current?.value as string, 10)
      );
    }

    handleClose();
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Add Items:
          </Typography>
          <br />
          {/* <Typography id="modal-modal-title" variant="body1" component="h2">
            Item Name:
          </Typography> */}
          <TextField
            id="outlined-basic"
            label="Item Name"
            variant="outlined"
            inputRef={nameRef}
            defaultValue={openedItemDetails?.foodName}
          />
          <br />
          <br />
          {/* <Typography id="modal-modal-title" variant="body1" component="h2">
            Price:
          </Typography> */}
          <TextField
            id="outlined-basic"
            label="Item Price"
            variant="outlined"
            inputRef={priceRef}
            defaultValue={openedItemDetails?.price}
          />
          <br />
          <br />
          <Button variant="outlined" onClick={itemButtonHandler}>
            Add Item
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ItemModal;
