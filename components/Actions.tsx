import React from "react";

export const Actions = ({ executeQuery ,clearEditor, saveQuery}: any) => {
  return (
    <div className=" grid grid-cols-3 gap-2 grid-row-auto text-white px-2">
      <button onClick={clearEditor} className="rounded-full h-7 w-auto bg-blue-400 hover:bg-blue-600 col-start-1 col-end-2">
        Clear All 
      </button>
      <button onClick={saveQuery} className="rounded-full bg-blue-400 hover:bg-blue-600 col-start-2 col-end-3">
        Save Query 
      </button>
      <button onClick={executeQuery} className="rounded-full bg-blue-400 hover:bg-blue-600 col-start-3 col-end-4">
        Run Query
      </button>
    </div>
  );
};
