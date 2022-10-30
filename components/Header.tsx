import React from "react";
import Image from 'next/image'
import logo from 'public/atlan-blue.svg'
export const Header = () => {
  return (
    <div className="">
      <header>
        <nav className="bg-gray-200    border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <ul className="grid grid-cols-3">
            <li className="col-span-1"><Image src={logo} alt="atlan" width="70" height="70" /></li> 
          </ul>
        </nav>
      </header>
    </div>
  );
};
