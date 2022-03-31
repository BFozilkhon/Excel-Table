import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

export const Table = () => {
  const [rowData] = useState([
    { name: "Fozil", age: 16 },
    { name: "Odil", age: 22 },
    { name: "Umarkhon", age: 19 },
    { name: "Alibek", age: 25 },
  ]);

  const [columnData] = useState([
    { headerName: "Hello", field: "name" },
    { field: "age" },
  ]);

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact rowData={rowData} columnDefs={columnData} />
    </div>
  );
};

export default Table;
