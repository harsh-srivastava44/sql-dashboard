// @monaco-editor/react is Monaco editor wrapper for easy/one-line integration with React
// applications without need of webpack (or other module bundler)
// configuration files.

import React, { useEffect, useRef, useState } from "react";

import Editor from "@monaco-editor/react";
import { Notifier } from "./Notifier";

export const SQLEditor = ({ onEdited, errorInQuery }: any) => {
  const [theme, setTheme] = useState("vs-dark");

  const [isEditorReady, setIsEditorReady] = useState(false);
  const tableName = useRef("");
  const querySize = useRef(0);
  function handleEditorDidMount() {
    setIsEditorReady(true);
  }
  const [editorValue, setEditorValue] = useState("// insert query here");
  function toggleTheme() {
    setTheme(theme === "light" ? "vs-dark" : "light");
  }
  function handleOnChange(value: any) {
    setEditorValue((prev) => value);
    tableName.current =
      (value as string).match(/from ([A-Za-z]*\w)/)?.[1] || "";
    querySize.current =
      parseInt((value as string).match(/top ([0-9]*\d)/)?.[1] as string) ||
      10;
    onEdited(tableName.current, querySize.current);
  }

  return (
    <>
      <div className=" py-2 pr-2 flex justify-between items-center border-b-black mb-2">
       
        <div className="">
          <button
            className="rounded h-10 bg-blue-400 w-fit px-2 "
            onClick={toggleTheme}
            disabled={!isEditorReady}
          >
            Toggle theme
          </button>
        </div>
        <div className={errorInQuery ? "" : "hidden"}>
          <Notifier />
        </div>
      </div>

      <div className="editor">
        <Editor
          // By default, it fully fits with its parent
          height="20rem"
          theme={theme}
          language="sql"
          loading="Loading..."
          value={editorValue}
          onMount={handleEditorDidMount}
          onChange={handleOnChange}
          className="border-red-400"
        />
      </div>
    </>
  );
};
