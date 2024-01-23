import { ProductPageModalPropsInterface } from "@/types/productsTypes";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const ProductPageModal = (props: ProductPageModalPropsInterface) => {
  const { open, handleClose, saveClickHanlder, productName, id } = props;
  const [name, setName] = useState<string>("");
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
    <Modal
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
          defaultValue={productName}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <br />
        <Button
          variant="contained"
          style={{ marginRight: "20px" }}
          onClick={async () => {
            await saveClickHanlder(name, id);
            handleClose();
          }}
        >
          Save changes
        </Button>
        <Button color="error" variant="outlined" onClick={handleClose}>
          Cancel
        </Button>
      </Box>
    </Modal>
  );
};

export default ProductPageModal;
