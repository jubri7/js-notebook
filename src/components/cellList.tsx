import { useTypeSelector } from "../hooks/useTypeSelector"
import AddCell from "./addCell"
import CellListItem from "./cellListItem"
const CellList : React.FC = () =>{
    const cells = useTypeSelector(({cells:{order,data}})=>order.map(id=>data[id]))
    const renderedCells = cells.map(cell => <div key={cell.id}><AddCell forceVisible={false} nextCellId={cell.id}/> <CellListItem cell={cell}/></div>)
    return (
    <div>
        {renderedCells}
        <AddCell forceVisible={true} nextCellId={null}/>
    </div>
    )
}

export default CellList