import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { render } from "react-dom";
import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component

import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS
import { Columns, getColumns } from "utils/arrayUtils";

export const Results = () => {
  const gridRef = useRef(); // Optional - for accessing Grid's API
  const [rowData, setRowData] = useState([]); // Set rowData to Array of Objects, one Object per Row
  // Each Column Definition results in one Column.
  const [isLoaded, setIsLoaded] = useState(true);
  const [columnDefs, setColumnDefs] = useState([
    { field: "make", filter: true },
    { field: "model", filter: true },
    { field: "price" },
  ]);

  // DefaultColDef sets props common to all Columns
  const defaultColDef = useMemo(
    () => ({
      sortable: true,
    }),
    []
  );

  // Example of consuming Grid Event
  const cellClickedListener = useCallback((event: any) => {
    console.log("cellClicked", event);
  }, []);

  // Example load data from sever
  useEffect(() => {
    fetch("http://localhost:3000/api/query?pagination=5&table=categories")
      .then((result) => result.json())
      .then((rowData) => {
        setRowData(rowData)
       
      });
  }, []);
  useEffect(() => {
    let columns = getColumns(rowData) as Array<Columns>;
    setColumnDefs(columns);
  },[rowData])
  return isLoaded ? (
    <div className="ag-theme-alpine" style={{ width: "100%", height: "100%" }}>
      <AgGridReact
        rowData={rowData} // Row Data for Rows
        columnDefs={columnDefs} // Column Defs for Columns
        defaultColDef={defaultColDef} // Default Column Properties
        animateRows={true} // Optional - set to 'true' to have rows animate when sorted
        rowSelection="multiple" // Options - allows click selection of rows
        onCellClicked={cellClickedListener} // Optional - registering for Grid Event
      />
    </div>
  ) : (
    <Spinner />
  );
};

const Spinner = (): JSX.Element => {
  return (
    <div className="pt-4 animate-bounce flex items-center align-ce justify-center">
      Processing...
    </div>
  );
};
