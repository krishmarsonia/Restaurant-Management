"use client";

import { ProductInterface } from "@/types/productsTypes";
import "./foodItem.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  ClickAwayListener,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  styled,
} from "@mui/material";
import Table from "@mui/material/Table";
import React, { useEffect, useRef, useState } from "react";
import ItemRow from "./itemRow";
import ItemModal from "./itemModal";
import { ItemInterface, itemHeaderArrayInterface } from "@/types/itemsTypes";
import { Types } from "mongoose";
import DeleteAlertDialog from "../deleteAlertDialog";
import { deleteItem } from "@/actions/itemPageActions";

const ItemAccordian = (props: { prods: string }) => {
  const [productId, setProductId] = useState<Types.ObjectId>(
    new Types.ObjectId()
  );
  const [expanded, setExpanded] = useState<string|boolean>("");
  const [open, setOpen] = useState<boolean>(false);
  const [openedItemDetails, setOpenedItemDetails] = useState<ItemInterface>();
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [itemId, setItemId] = useState<Types.ObjectId>(new Types.ObjectId());
  const clickRef = useRef<HTMLInputElement | null | boolean>(false);

  function assertIsNode(e: EventTarget | null): asserts e is Node {
    if (!e || !("nodeType" in e)) {
      throw new Error("Node Expected");
    }
  }

  const itemHeaderArray: itemHeaderArrayInterface[] = [
    {
      key: 1,
      name: "Item Name",
      align: "left",
    },
    {
      key: 2,
      name: "Price",
      align: "left",
    },
    {
      key: 3,
      name: "Status",
      align: "left",
    },
    {
      key: 4,
      name: "Operations",
      align: "left",
    },
  ];

  const { prods } = props;

  const products: ProductInterface[] = JSON.parse(prods);

  const handleClose = () => setOpen(false);

  const handleOpen = (itemDetails: ItemInterface, productId: Types.ObjectId) => {
    setOpenedItemDetails(itemDetails);
    setProductId(productId);
    setOpen(true);
  };

  const handleChange =
    (id: string) =>
    (event: React.SyntheticEvent<unknown>, expanded: boolean) => {
      if (clickRef.current === false) {
        setExpanded(expanded ? id: false);
      }
      clickRef.current = false;
    };

  const addButtonHandler = (id: Types.ObjectId) => {
    setProductId(id);
    setOpen(true);
  };

  const deleteModalOpenHandler = (prodId: Types.ObjectId) => {
    setProductId(prodId);
    setDeleteModalOpen(true);
  };

  const deleteModalCloseHandler = () => {
    setDeleteModalOpen(false);
  };

  const closeAcc = () => {
    clickRef.current = true;
    setExpanded("");
  };

  const CustomDeleteButton = styled(Button)`
    background: #ffffff;

    :hover {
      background: #d32f2f;
      color: white;
    }
  `;

  const CustomButton = styled(Button)`
    background: #ffffff;

    :hover {
      background: #1976d2;
      color: white;
    }
  `;
  return (
    <>
      {products.map((product) => {
        return (
          <Accordion
            expanded={expanded === product._id.toString()}
            onChange={handleChange(product._id.toString())}
            key={product._id.toString()}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography component={"span"} style={{ width: "100%" }}>
                <div className="parentClass">
                  <div>{product.name}</div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      gap: "50px",
                    }}
                  >
                    {expanded === product._id.toString() ? (
                      <div>
                        <CustomDeleteButton
                          variant="outlined"
                          color="error"
                          // onMouseOver={}
                          onClick={closeAcc}
                        >
                          close
                        </CustomDeleteButton>
                      </div>
                    ) : (
                      <div></div>
                    )}

                    <div>
                      <CustomButton
                        variant="outlined"
                        // onMouseOver={}
                        onClick={() => addButtonHandler(product._id)}
                      >
                        Add
                      </CustomButton>
                    </div>
                  </div>
                </div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul style={{ listStyle: "none" }}>
                <Typography component={"div"}>
                  <Table>
                    {/* <TableHeader headData={itemHeaderArray} /> */}
                    <TableHead>
                      <TableRow>
                        {itemHeaderArray.map((item) => {
                          return (
                            <React.Fragment key={item.key}>
                              <TableCell align={item.align}>
                                {" "}
                                {item.name}{" "}
                              </TableCell>
                            </React.Fragment>
                          );
                        })}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {product.items.map((prodItems) => {
                        return (
                          <ItemRow
                            row={prodItems}
                            expanded={expanded}
                            key={prodItems._id.toString()}
                            handleOpen={handleOpen}
                            prodId={JSON.stringify(product._id)}
                            setItemId={setItemId}
                            deleteModalOpenHandler={deleteModalOpenHandler}
                          />
                        );
                      })}
                    </TableBody>
                  </Table>
                </Typography>
              </ul>
            </AccordionDetails>
          </Accordion>
        );
      })}
      <ItemModal
        open={open}
        handleClose={handleClose}
        prodId={JSON.stringify(productId)}
        openedItemDetails={openedItemDetails}
      />
      <DeleteAlertDialog
        open={deleteModalOpen}
        handleClose={deleteModalCloseHandler}
        deleteClickHandler={deleteItem}
        id={productId}
        itemId={itemId}
      />
    </>
  );
};

export default ItemAccordian;
