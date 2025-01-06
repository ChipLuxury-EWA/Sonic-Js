import { useRef, useState } from "react";
import Editor from "@monaco-editor/react";
// eslint-disable-next-line
import * as Tone from "tone"; 

import { suggestions } from "../autoComplete/toneJsSuggestions";
import ButtonsRow from "./ButtonsRow";

const CodeEditor = () => {
  const editorRef = useRef(null);
  const [fontSize, setFontSize] = useState(16);

  const changeFontSize = (operator) => {
    if ((operator === "+" && fontSize < 48) || (operator === "-" && fontSize > 12)) {
      setFontSize(fontSize + (operator === "+" ? 2 : -2));
    }
  };

  const handleEditorWillMount = (monaco) => {
    monaco?.languages.registerCompletionItemProvider("javascript", {
      triggerCharacters: ["to"],
      provideCompletionItems: () => {
        return { suggestions };
      },
    });
  };

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
  };

  const runCode = () => {
    if (editorRef.current) {
      const code = editorRef.current.getValue();
      try {
        // Run the code written in the editor
        eval(code);
      } catch (error) {
        console.error("Error in your code:", error);
      }
    }
  };

  const defaultToneScript = `// Write your Tone.js code here\nconst synth = new Tone.Synth().toDestination();\nsynth.triggerAttackRelease("C4", "8n")`;

  return (
    <div>
      <ButtonsRow runCode={runCode} changeFontSize={changeFontSize} />
      <Editor
        height="800px"
        defaultLanguage="javascript"
        defaultValue={defaultToneScript}
        theme="vs-dark"
        beforeMount={handleEditorWillMount}
        onMount={handleEditorDidMount}
        options={{ fontSize }} // Dynamically set the font size
      />
    </div>
  );
};

export default CodeEditor;
