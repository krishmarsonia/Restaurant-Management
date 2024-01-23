"use client";

import React, { useState } from "react";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ProductPageModal from "./productPageModal";
import { deleteProduct, editProduct } from "@/actions/productPageActions";
import { Types } from "mongoose";
import DeleteAlertDialog from "./deleteAlertDialog";
import ErrorBoundry from "./errorBoundry";
import { EditDeleteHandlerPropsInterface } from "@/types/productsTypes";

const EditDeleteHandler = (props: EditDeleteHandlerPropsInterface) => {
  const { productName, prod_id } = props;
  const id = JSON.parse(prod_id);
  const [open, setOpen] = useState<boolean>(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState<boolean>(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleDeleteDialogClose = () => {
    setOpenDeleteDialog(false);
  };
  return (
    <div>
      <IconButton aria-label="edit" onClick={() => setOpen(true)}>
        <EditIcon />
      </IconButton>
      <IconButton aria-label="delete" onClick={() => setOpenDeleteDialog(true)}>
        <DeleteIcon />
      </IconButton>
      <ProductPageModal
        open={open}
        handleClose={handleClose}
        saveClickHanlder={editProduct}
        productName={productName}
        id={id}
      />
      {/* <ErrorBoundry> */}
      <DeleteAlertDialog
        open={openDeleteDialog}
        handleClose={handleDeleteDialogClose}
        deleteClickHandler={deleteProduct}
        id={id}
      />
      {/* </ErrorBoundry> */}
    </div>
  );
};

export default EditDeleteHandler;
