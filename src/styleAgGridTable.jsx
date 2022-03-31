import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

export const StyleAgGridTable = () => {
  const [rowData] = useState([
    { name: "Fozil", age: 16 },
    { name: "Odil", age: 22 },
    { name: "Umarkhon", age: 19 },
    { name: "Alibek", age: 25 },
  ]);

  const [columnData] = useState([
    {
      headerName: "Names",
      field: "name",
    },
    {
      headerName: "Ages",
      field: "age",
      //   cellStyle: (params) =>
      //     params.value > 20
      //       ? { borderLeft: "4px solid green" }
      //       : { borderLeft: "4px solid red" },
      cellClass: (params) => (params.value > 20 ? "katta" : "kichik"),
    },
  ]);
  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
      <AgGridReact
        defaultColDef={{ flex: 1 }}
        rowData={rowData}
        columnDefs={columnData}
      />
    </div>
  );
};
export default StyleAgGridTable;

// cellStyle(), cellClass

/*
.katta {
  border-left: 4px solid green !important;
}

.kichik {
  border-left: 4px solid red !important;
}
*/
