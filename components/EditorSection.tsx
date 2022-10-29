import React, { useRef, useState } from "react";
import { Actions } from "components/Actions";
import { Results } from "components/Results";
import { SQLEditor } from "components/SQLEditor";
import { get } from "utils/apiUtils";

export const EditorSection = () => {
  const tableName = useRef("");
  const querySize = useRef(0);
  const captureEditorValue = (name: string, count: number) => {
    console.log("🏓", name, count);

    tableName.current = name;
    querySize.current = count;
  };
  const [errorInQUery, setErrorInQUery] = useState(false);
  const [data, setData] = useState([]);

  const clearEditor = () => {};
  const saveQuery = () => {};
  const [isDataFetching, setIsDataFetching] = useState(false);
  const executeQuery = async () => {
    if (tableName.current == "") {
      setErrorInQUery(true);
      setTimeout(() => {
        setErrorInQUery(false);
      }, 2000);
    } else {
      try {
        setIsDataFetching((prev) => true);
        const data = await get(`${process.env.NEXT_PUBLIC_BASE_URL}`, {
          pagination: querySize.current,
          table: tableName.current,
        });
        setData(data);
      } catch (error:any) {
        console.log(error); 
      } finally {
        setIsDataFetching((prev) => false);
      }
    }
  };
  return (
    <div className="shadow-lg  grid  gap-2 border-red-300 grid-cols-1 grid-rows-9">
      <div className="  row-start-1 row-end-4 col-start-1 col-end-2 h-max">
        <div className="pl-3 bg-slate-400">Query Input</div>
        <SQLEditor errorInQuery={errorInQUery} onEdited={captureEditorValue} />
      </div>
      <div className=" row-start-4  row-end-5 col-start-1 col-end-2 pt-4 h-4">
        <Actions
          executeQuery={executeQuery}
          clearEditor={clearEditor}
          saveQuery={saveQuery}
        />
      </div>
      <div className=" row-start-5 row-end-10 col-start-1 col-end-2">
        <div className="pl-3 bg-slate-400 ">Query Output</div>
        <Results isLoaded={!isDataFetching} data={data} />
      </div>
    </div>
  );
};
