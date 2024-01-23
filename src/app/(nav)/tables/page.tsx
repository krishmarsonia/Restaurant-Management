import { allTablesData } from "@/actions/orderPageActions";
import React from "react";
import SingleTable from "./table";
import { Types } from "mongoose";
import './table.css';
import { TableInterface } from "@/types/tableTypes";

const TablePage = async () => {
  const tablesData = await allTablesData();
  const tables: TableInterface[] = JSON.parse(tablesData);
  return (
    <div>
      <h1>Tables</h1>
      <div className="seating">
        {tables.map((table) => {
          return (
            <SingleTable
              tableData={JSON.stringify(table)}
              key={table._id.toString()}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TablePage;
