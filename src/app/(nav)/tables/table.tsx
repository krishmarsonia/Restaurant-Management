"use client";
import { Types } from "mongoose";
import React from "react";
import UnreservedTable from "@/utils/restaurant.png";
import ReservedTable from "@/utils/restaurant (1).png";
import hoverTable from "@/utils/chair.png";
import "./table.css";
import Link from "next/link";
import { TableInterface } from "@/types/tableTypes";

const SingleTable = (props: { tableData: string }) => {
  const { tableData } = props;
  const tables: TableInterface = JSON.parse(tableData);
  return (
    <div className="tableContainer" key={tables._id.toString()}>
      {tables.occupied ? (
        <Link
          href={`/orderReview/${tables._id.toString()}`}
          style={{ textDecoration: "none" }}
        >
          <img
            src={ReservedTable.src}
            alt={tables._id.toString()}
            className="allTables"
            onMouseOver={(e) => (e.currentTarget.src = hoverTable.src)}
            onMouseOut={(e) => (e.currentTarget.src = ReservedTable.src)}
          />
        </Link>
      ) : (
        <img
          src={UnreservedTable.src}
          alt={tables._id.toString()}
          className="allTables"
          onMouseOver={(e) => (e.currentTarget.src = hoverTable.src)}
          onMouseOut={(e) => (e.currentTarget.src = UnreservedTable.src)}
        />
      )}
      <center>{tables.tableNumber}</center>
    </div>
  );
};

export default SingleTable;
