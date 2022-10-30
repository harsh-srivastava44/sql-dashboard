import { Bookmarks } from "components/Bookmarks";
import { EditorSection } from "components/EditorSection";
import { HistoryQueries } from "components/HistoryQueries";
import { TablesAccordion } from "components/TablesAccordion";
import { DashboardManager } from "contexts/dashboard-provider";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <DashboardManager>
      <div className="grid gap-4 min-h-screen py-4 grid-lines grid-cols-4 grid-rows-2  z-5 ">
        <div className="box col-start-1 col-end-2 row-start-1 row-end-2 overflow-auto z-4">
          <div className="bg-slate-400 rounded-tl-md rounded-tr-md sticky top-0 pl-2 p-2 ">
            Tables & Schema
          </div>
          <div className="  table-accordion ">
            <TablesAccordion />
          </div>
        </div>
        <div className="box col-start-1 col-end-2 row-start-2 row-end-3 overflow-y-auto">
          <HistoryQueries />
        </div>
        <div className="editor-box col-start-2 col-end-4 row-start-1 row-end-3">
          <EditorSection />
        </div>
        <div className="box col-start-4 col-end-auto row-start-1 row-end-3">
          <Bookmarks />
        </div>
      </div>
    </DashboardManager>
  );
};

export default Home;
