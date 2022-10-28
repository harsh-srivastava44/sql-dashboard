// @monaco-editor/react is Monaco editor wrapper for easy/one-line integration with React
// applications without need of webpack (or other module bundler)
// configuration files.

import React, { useEffect, useState } from "react";

import Editor from "@monaco-editor/react";

export const SQLEditor = () => { 
  
  const [theme, setTheme] = useState("vs-dark");
 
  const [isEditorReady, setIsEditorReady] = useState(false);

  function handleEditorDidMount() {
    setIsEditorReady(true);
  }
  const [editorValue, setEditorValue] = useState("// insert query here");
  function toggleTheme() {
    setTheme(theme === "light" ? "vs-dark" : "light");
  }
 

  return (
    <div>
      <div className=" py-2 pr-2 flex justify-end">
        <button
          className="rounded h-10 bg-blue-400 w-fit px-2 "
          onClick={toggleTheme}
          disabled={!isEditorReady}
        >
          Toggle theme
        </button>
      </div>

      <Editor
        // By default, it fully fits with its parent
        height="20rem"
        theme={theme}
        language="sql"
        loading="Loading..."
        value={editorValue}
        onMount={handleEditorDidMount}
        
      />
    </div>
  );
};
