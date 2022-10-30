import { useDashboardContext } from "contexts/dashboard-provider";
import React from "react";

export const HistoryQueries = () => {
  const { history } = useDashboardContext();
  
  return (
    <div>
      <div className="bg-slate-400 rounded-tl-md rounded-tr-md py-2 pl-2">
        History
      </div> 
      <div className="flex flex-col p-2 ">
        {history?.map((item, idx) => (
          <div className="history  py-2 flex-1 mb-4 bg-gray-400" key={idx}>
            <pre><code>{item}</code></pre>
          </div>
        ))}
      </div>
    </div>
  );
};
