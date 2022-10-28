import React from "react";

export const Actions = () => {
  return (
    <div className=" grid grid-cols-3 gap-5 grid-row-auto text-white">
      <button className="rounded-full h-10 bg-blue-400 hover:bg-blue-600 col-start-1 col-end-2">Clear All </button>
      <button className="rounded-full bg-blue-400 hover:bg-blue-600 col-start-2 col-end-3">Save Query </button>
      <button className="rounded-full bg-blue-400 hover:bg-blue-600 col-start-3 col-end-4">Run Query</button>
    </div>
  );
};
