import { useRef } from "react";
import Editor from "@monaco-editor/react";
// eslint-disable-next-line
import * as Tone from "tone";
import ButtonsRow from "./ButtonsRow";

const CodeEditor = () => {
  const editorRef = useRef(null);

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
      <ButtonsRow runCode={runCode} />
      <Editor
        height="800px"
        defaultLanguage="javascript"
        defaultValue={defaultToneScript}
        theme="vs-dark"
        onMount={handleEditorDidMount}
      />
    </div>
  );
};

export default CodeEditor;
