import "./codeCell.css"
import { useEffect } from "react";
import Preview from "./Preview";
import Resizeable from "./resizeableBox";
import CodeEditor from "./CodeEditor";
import { Cell } from "../redux/cells";
import { useAction } from "../hooks/useAction";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { useCumalativeCode } from "../hooks/useCumalativeCode";

interface CodeCellProps {
  cell: Cell;
}

const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {
  const { updateCell, createBundle } = useAction();
  const bundle = useTypeSelector(
    (state) => state.bundles && state.bundles[cell.id]
  );
  const cumalativeCode = useCumalativeCode(cell.id)
  

  useEffect(() => {
    if(!bundle){
      createBundle(cell.id,cumalativeCode)
      return
    }
    const timer = setTimeout(async () => {
      createBundle(cell.id, cumalativeCode);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [cell.id, cumalativeCode, createBundle]);
  

  return (
    <Resizeable direction="vertical">
      <div
        style={{
          height: "calc(100% - 10px)",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Resizeable direction="horizontal">
          <CodeEditor
            onChangeEvent={(value) => updateCell(cell.id, value)}
            initialValue={cell.content}
          />
        </Resizeable>
        {!bundle || bundle.loading ? (
          <div className="progress-cover">
            <progress className="progress is-small is-primary" max="100">
              Loading
            </progress>
          </div>
        ) : (
          <Preview code={bundle.code} err={bundle.err} />
        )}
      </div>
    </Resizeable>
  );
};

export default CodeCell;
