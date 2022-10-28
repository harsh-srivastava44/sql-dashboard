import React from "react";

export const Table = ({ schema }: any) => {
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Property
            </th>
            <th scope="col" className="py-3 px-6">
              Type
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(schema).map((property,idx) => (
            <tr key={idx} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
               {property}
              </th>
              <td className="py-4 px-6">{schema[property]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
