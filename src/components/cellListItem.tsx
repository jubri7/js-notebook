import "./cellListItem.css";
import { Cell } from "../redux/cells";
import ActionBar from "./actionBar";
import CodeCell from "./codeCell";
import TextEditor from "./textEditor";

interface CellListItemProps {
  cell: Cell;
}

const CellListItem: React.FC<CellListItemProps> = ({ cell }) => {
  let child: JSX.Element;
  if (cell.type === "code") {
    child = (
      <>
        <div className="action-bar-wrapper">
          <ActionBar id={cell.id} />
        </div>
        <CodeCell cell={cell} />
      </>
    );
  } else {
    child = (
    <>
    <div>
    <TextEditor cell={cell} />
    </div>
    <ActionBar id={cell.id}/>
    </>
    );
  }
  return (
    <div className="cell-list-item">
      {child}
      <ActionBar id={cell.id} />
      <br />
    </div>
  );
};

export default CellListItem;
