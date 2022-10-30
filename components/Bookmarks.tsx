import { useDashboardContext } from "contexts/dashboard-provider";
import React from "react";
import { HiUpload } from "react-icons/hi";
export const Bookmarks = () => {
  const { savedQueries, updateEditorValue } = useDashboardContext();

  return (
    <div>
      <div className="bg-slate-400 rounded-tl-md rounded-tr-md py-2 pl-2 mb-4">
        Bookmarks
      </div>
      {savedQueries?.map((item, idx) => (
        <div
          className="history grid grid-cols-6   py-2 flex-1 mb-4 pl-2 bg-gray-400 items-center"
          key={idx}
        >
          <div className="col-start-1 col-end-6">
            <code className="">{item}</code>
          </div>
          <div className="col-start-6 col-end-7 "  onClick={() =>updateEditorValue?.(item)}>
            <HiUpload
             
              aria-label="Upload"
              textAnchor="Upload"
              className="h-6 w-6 text-blue-500 bg-slate-50 rounded-sm cursor-pointer "
            />
          </div>
        </div>
      ))}
    </div>
  );
};
