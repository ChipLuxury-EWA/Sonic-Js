import { useRef } from "react";
import Editor from "@monaco-editor/react";
import * as monaco from "monaco-editor";
// eslint-disable-next-line
import * as Tone from "tone";
import ButtonsRow from "./ButtonsRow";

const CodeEditor = () => {
  const editorRef = useRef(null);

  const handleEditorWillMount = (monaco) => {
    monaco.languages.registerCompletionItemProvider("javascript", {
      provideCompletionItems: () => {
        const suggestions = [
          {
            label: "fooooooo",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "console.log()",
            detail: "Log output to console",
          },
          {
            label: "setTimeout",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: "setTimeout(() => {\n  \n}, 1000);",
            detail: "Execute a function after a delay",
          },
        ];
        return { suggestions: suggestions };
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
      <ButtonsRow runCode={runCode} />
      <Editor
        height="800px"
        defaultLanguage="javascript"
        defaultValue={defaultToneScript}
        theme="vs-dark"
        beforeMount={handleEditorWillMount}
        onMount={handleEditorDidMount}
      />
    </div>
  );
};

export default CodeEditor;
