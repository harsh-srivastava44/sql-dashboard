import { Actions } from "components/Actions";
import { Results } from "components/Results";
import { SQLEditor } from "components/SQLEditor";
import { TablesAccordion } from "components/TablesAccordion";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="grid gap-4 min-h-screen py-4 grid-lines grid-cols-4 grid-rows-2  z-5 ">
      <div className="box col-start-1 col-end-2 row-start-1 row-end-2 overflow-auto z-4">
        <div className="bg-slate-400 rounded-tl-md rounded-tr-md sticky top-0 pl-2 p-2 ">
          Tables & Schema
        </div>
        <div className="  table-accordion ">
          <TablesAccordion />
        </div>
      </div>
      <div className="box col-start-1 col-end-2 row-start-2 row-end-3 ">
        <div className="bg-slate-400 rounded-tl-md rounded-tr-md py-2 pl-2">
          History
        </div>
      </div>

      <div className="editor-box col-start-2 col-end-4 row-start-1 row-end-3">
        <div className="shadow-lg  grid  gap-2 border-red-300 grid-cols-1 grid-rows-9">
          <div className="  row-start-1 row-end-4 col-start-1 col-end-2 h-max">
            <div className="pl-3 bg-slate-400">Query Input</div>
            <SQLEditor />
          </div>
          <div className=" row-start-4  row-end-5 col-start-1 col-end-2 pt-4 h-4">
            <Actions />
          </div>
          <div className=" row-start-5 row-end-10 col-start-1 col-end-2">
            <div className="pl-3 bg-slate-400 ">Query Output</div>
            <Results />
          </div>
        </div>
      </div>
      <div className="box col-start-4 col-end-auto row-start-1 row-end-3">
        <div className="bg-slate-400 rounded-tl-md rounded-tr-md py-2 pl-2">
          Bookmarks
        </div>
      </div>
    </div>
  );
};

export default Home;
