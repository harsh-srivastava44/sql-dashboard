import { Toast } from "flowbite-react";
import React from "react";
import { HiExclamation } from "react-icons/hi";
export const Notifier = () => {
  return (
    <>
      <Toast duration={150} className="py-0 px-0  pr-2">
        <div className="inline-flex h-8 w-8 shrink-0 items-center  justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
          <HiExclamation className="h-5 w-5 " />
        </div>
        <div className="pl-3 text-sm font-normal">
          Enter valid table name
        </div>
        <Toast.Toggle />
      </Toast>
    </>
  );
};
