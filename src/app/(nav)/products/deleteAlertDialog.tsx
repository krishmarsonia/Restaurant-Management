import { DeleteAlertDialogPropsInterface } from "@/types/productsTypes";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { Types } from "mongoose";
import React, { useEffect, useState } from "react";

const DeleteAlertDialog = (props: DeleteAlertDialogPropsInterface) => {
  const { open, handleClose, deleteClickHandler, id, itemId } = props;
  const [err, setErr] = useState<boolean>(false);
  const deleteProduct = async () => {
    try {
      await deleteClickHandler(id, itemId);
      handleClose();
    } catch (error) {
      setErr(true);
    }
  };
  useEffect(() => {
    if (err) {
      console.log("loged Error", err);
      throw new Error("last chace");
    }
  }, [err]);
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Are you sure you want to delete?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Deleting this will also remove all the items in this product.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="error" onClick={handleClose}>
          Disagree
        </Button>
        <Button onClick={deleteProduct} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteAlertDialog;
