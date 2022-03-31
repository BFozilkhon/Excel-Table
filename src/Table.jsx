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
    {
      headerName: "Names",
      field: "name",
      checkboxSelection: true,
    },
    { headerName: "Ages", field: "age", tooltipField: "name" },
  ]);

  const defaultColDef = {
    sortable: true,
    editable: true,
    filter: true,
    floatingFilter: true,
    flex: 1,
  };

  let gridApi;
  const onGridReady = (params) => {
    gridApi = params.api;
  };

  const onExportClick = () => {
    gridApi.exportDataAsCsv();
  };

  return (
    <>
      <button onClick={() => onExportClick()}>export</button>
      <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
        <AgGridReact
          defaultColDef={defaultColDef}
          rowData={rowData}
          columnDefs={columnData}
          onGridReady={onGridReady}
          enableBrowserTooltips={true}
          tooltipShowDelay={{ tooltipShowDelay: 10 }}
        />
      </div>
    </>
  );
};

export default Table;

// headerName, field, sortable, editable, filter, checkboxSelection, floatingFilter, flex

/* faylni yuklab oldish -> onGridReady,let gridApi, params.api, exportDataAsCsv */
