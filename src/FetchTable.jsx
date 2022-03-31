import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

export const FetchTable = () => {
  const [columnData] = useState([
    {
      headerName: "Id",
      field: "id",
      checkboxSelection: true,
      headerCheckboxSelection: true,
    },
    { headerName: "Name", field: "name" },
    { headerName: "UserName", field: "username" },
    { headerName: "Email", field: "email" },
  ]);
  const onGridReady = (params) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => params.api.applyTransaction({ add: res }));
  };

  const onSelectionChanged = (e) => {
    console.log(e.api.getSelectedRows());
  };

  const isRowSelectable = (e) => {
    return e.data.id % 2 == 0;
  };

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
      <AgGridReact
        columnDefs={columnData}
        defaultColDef={{ flex: 1, editable: true }}
        onGridReady={onGridReady}
        rowSelection={"multiple"}
        onSelectionChanged={onSelectionChanged}
        rowMultiSelectWithClick={true}
        isRowSelectable={isRowSelectable}
      />
    </div>
  );
};

export default FetchTable;

// onGridReady, fetch, params.api.applyTransaction({ add: res })

// rowSelection value is ('single' or 'multiple'), onSelectionChanged , e.api.getSelectedRows(),
// rowMultiSelectWithClick -> ctrl siz bosish imkoniyati

// checkbox
/*    
      checkboxSelection: true,
      headerCheckboxSelection: true
*/
