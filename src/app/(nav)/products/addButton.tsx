"use client";

import { saveProduct } from "@/actions/productPageActions";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useState } from "react";
import ProductPageModal from "./productPageModal";

const ButtonModal = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
  return (
    <>
      <Button
        color="success"
        variant="contained"
        style={{ float: "right" }}
        onClick={handleOpen}
      >
        {" "}
        Add +{" "}
      </Button>
      <ProductPageModal open={open} handleClose={handleClose} saveClickHanlder={saveProduct}/>
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Title of Food
          </Typography>
          <br />
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            // defaultValue={props.name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />
          <br />
          <Button
            variant="contained"
            style={{ marginRight: "20px" }}
            onClick={async () => {
              await saveProduct(name);
              handleClose();
            }}
          >
            Save changes
          </Button>
          <Button color="error" variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
        </Box>
      </Modal> */}
    </>
  );
};

export default ButtonModal;
