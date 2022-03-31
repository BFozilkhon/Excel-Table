import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const RenderComponentTable = () => {
  const [rowData] = useState([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 },
  ]);

  const actionButton = (value) => {
    alert(`${value.data.make} ${value.data.price}`);
  };

  const [columnDefs] = useState([
    { headerName: "Makes", field: "make" },
    { headerName: "Models", field: "model" },
    { headerName: "Prices", field: "price" },
    {
      headerName: "Actions",
      field: "price",
      cellRendererFramework: (params) => (
        <div>
          <button onClick={() => actionButton(params)}>About user</button>
        </div>
      ),
    },
  ]);

  const defaultColDef = {
    flex: 1,
  };

  return (
    <div className="ag-theme-alpine" style={{ height: "200px", width: "100%" }}>
      <AgGridReact
        defaultColDef={defaultColDef}
        rowData={rowData}
        columnDefs={columnDefs}
      ></AgGridReact>
    </div>
  );
};

export default RenderComponentTable;

// cellRendererFramework
