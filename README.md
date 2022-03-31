# Getting Started Ag Grid with React

### 1. We created rowData in useState

const [rowData] = useState([
{ name: "Fozil", age: 16 },
{ name: "Odil", age: 22 },
{ name: "Umarkhon", age: 19 },
{ name: "Alibek", age: 25 },
]);

### 2. We created columnData in useState -> We use the key headerName and field.headerName -> is column first name.

### field -> is find key in the rowDatas value.

const [columnData] = useState([
{ headerName: "Names", field: "name" },
{ headerName: "Ages", field: "age" },
]);

### 3. We write <AgGridReact rowData={rowData} columnDefs={columnData} /> and wrap up div with class name (ag-theme-alpine) and style style={{ height: 400, width: 600 }}

## <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}> <AgGridReact rowData={rowData} columnDefs={columnData} />

</div>
