import { EditorSection } from "components/EditorSection";
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
        <EditorSection />
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
