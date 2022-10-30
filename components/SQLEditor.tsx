// @monaco-editor/react is Monaco editor wrapper for easy/one-line integration with React
// applications without need of webpack (or other module bundler)
// configuration files.

import React, { useEffect, useRef, useState } from "react";

import Editor from "@monaco-editor/react";
import { Notifier } from "./Notifier";
import { useDashboardContext } from "contexts/dashboard-provider";
import { HiSun } from "react-icons/hi";

export const SQLEditor = ({ onEdited, errorInQuery }: any) => {
  const { currentEditorValue, updateEditorValue } = useDashboardContext();
  const [theme, setTheme] = useState("vs-dark");
  const [isEditorReady, setIsEditorReady] = useState(false);
  const tableName = useRef("");
  const querySize = useRef(0);
  function handleEditorDidMount() {
    setIsEditorReady(true);
  }
  function toggleTheme() {
    setTheme(theme === "light" ? "vs-dark" : "light");
  }
  function handleOnChange(value: any) {
    updateEditorValue?.(value);
    tableName.current =
      (value as string).match(/from ([A-Za-z]*\w)/)?.[1] || "";
    querySize.current =
      parseInt((value as string).match(/top ([0-9]*\d)/)?.[1] as string) || 10;
    onEdited(tableName.current, querySize.current, value);
  }

  return (
    <>
      <div className=" py-2 pl-2 flex justify-between items-center border-b-black mb-2">
        <HiSun
          className={`${
            theme == "light" ? "text-blue-400" : "text-black"
          }  bg-slate-200  h-6 w-6 rounded-sm cursor-pointer`}
          onClick={toggleTheme}
        />
        <div className={errorInQuery ? "" : "hidden"}>
          <Notifier />
        </div>
        <div className="border-red-100"></div>
      </div>

      <div className="editor">
        <Editor
          // By default, it fully fits with its parent
          height="20rem"
          theme={theme}
          language="sql"
          loading="Loading..."
          value={currentEditorValue}
          onMount={handleEditorDidMount}
          onChange={handleOnChange}
          className="border-red-400"
        />
      </div>
    </>
  );
};
