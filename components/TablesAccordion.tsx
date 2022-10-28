import React, { useEffect, useState } from "react";
import { Accordion } from "flowbite-react";
import { Table } from "components/Table";
import databaseTables from "mocks/tables";
interface Table {
  name: string;
  schema: object;
}
export const TablesAccordion = ({
  dbTables = databaseTables,
}: {
  dbTables?: Table[];
}) => {
  return (
    <>
      <Accordion>
        {dbTables.map((table,idx) => (
          <Accordion.Panel key={idx} className="  bg-slate-100 ">
            <Accordion.Title className=" odd:bg-slate-200 border-b-2 border-spacing-1 hover:bg-gray-300 focus:bg-gray-400">
              {table.name}
            </Accordion.Title>
            <Accordion.Content>
              <Table schema={table.schema} />
            </Accordion.Content>
          </Accordion.Panel>
        ))}
      </Accordion>
    </>
  );
};
