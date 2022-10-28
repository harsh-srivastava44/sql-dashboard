import React from "react";

export const Header = () => {
  return (
    <div className="">
      <header>
        <nav className="bg-gray-200    border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <ul className="grid grid-cols-3">
            <li className="col-span-1">one</li>
            <li className="col-span-1">two</li>
            <li className="col-span-1">three</li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
