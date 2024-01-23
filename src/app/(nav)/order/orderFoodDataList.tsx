// import Table from "@/model/table";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import OrderFoodDataListRow from "./orderFoodDataListRow";
import { OrderFoodDataListPropsInterface } from "@/types/ordersTypes";

const OrderFoodDataList = (props: OrderFoodDataListPropsInterface) => {
  const { item, expanded, handleChange, itemHeaderArray } = props;
  return (
    <div>
      <Accordion
        key={item._id.toString()}
        expanded={expanded === item._id.toString()}
        onChange={handleChange(item._id.toString())}
        style={{ border: "1px solid white" }}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography component={"span"} style={{ width: "100%" }}>
            <div className="parentClass">
              <div>{item.name}</div>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul style={{ listStyle: "none" }}>
            <Typography component={"span"}>
              <Table>
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
                  {item.items
                    .filter((pt) => pt.status === true)
                    .map((prodItems) => {
                      return (
                        <OrderFoodDataListRow
                          item={prodItems}
                          key={prodItems._id.toString()}
                        />
                      );
                    })}
                </TableBody>
              </Table>
            </Typography>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default OrderFoodDataList;
