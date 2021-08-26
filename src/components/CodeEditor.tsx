import "./CodeEditor.css";
import Editor, { OnChange, OnMount } from "@monaco-editor/react";
import prettier from "prettier";
import parser from "prettier/parser-babel";
import { useRef } from "react";

interface CodeEditorProps {
  initialValue: string;
  onChangeEvent(value: string): void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  initialValue,
  onChangeEvent,
}) => {
  const editorRef = useRef<any>(null);
  const handleEditorChange: OnChange = (value, event) => {
    onChangeEvent(value!);
  };
  const handleEditorDidMount: OnMount = (editor, monaco) => {
    editorRef.current = editor;
  };
  const onClickHandler = async () => {
    const unformatted = await editorRef.current.getValue();
    const formatted = prettier
      .format(unformatted, {
        parser: "babel",
        plugins: [parser],
        useTabs: false,
        semi: true,
        singleQuote: true,
      }).replace(/\n$/,"");
    await editorRef.current.setValue(formatted);
  };
  return (
    <div className="editor-wrapper">
      <button
        className="button button-format is-primary is-small"
        onClick={onClickHandler}
      >
        Format
      </button>
      <Editor
        onMount={handleEditorDidMount}
        value={initialValue}
        theme="vs-dark"
        language="javascript"
        height="100%"
        onChange={handleEditorChange}
        options={{
          wordWrap: "on",
          minimap: { enabled: false },
          showUnused: false,
          lineNumbersMinChars: 3,
          fontSize: 16,
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;
