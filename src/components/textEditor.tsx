import { useEffect, useState,useRef } from 'react';
import MDEditor from '@uiw/react-md-editor';
import "./textEditor.css"
import { Cell } from '../redux/cells';
import { useAction } from '../hooks/useAction';

interface TextEditorProps{
    cell: Cell
}

const TextEditor: React.FC<TextEditorProps> = ({cell}) => {
    const editor = useRef<any>()
    const markDown = useRef<any>()
    const [editing,setEditing] = useState(true)
    const {updateCell} = useAction()
    useEffect(()=>{
        let listener:any
        listener = (event:MouseEvent) => {
            if(editor.current && event.target && editor.current.contains(event.target)){
                return
            }else if(markDown.current && event.target && markDown.current.contains(event.target)){
                setEditing(true)
            }
            else{
                setEditing(false)
            }
        }
        window.addEventListener("click",listener,)

        return () => {
            window.removeEventListener("click",listener)
        }
    },[cell.content])
    const changeHandler = (text:string | undefined) =>{
        if(!text){
            updateCell(cell.id,"")
        }
        else{
            updateCell(cell.id,text)
        }
    }
    if(editing){ return (
        <div ref={editor} className="text-editor" >
          <MDEditor
            value={cell.content}
            onChange={changeHandler}
          />
        </div>
    )}else{
        return (
            <div className="markdown-box" ref={markDown}>
              <MDEditor.Markdown source={cell.content} />
              <div className="edit-notice">Click here to edit</div>
            </div>
        )
    }
}

export default TextEditor