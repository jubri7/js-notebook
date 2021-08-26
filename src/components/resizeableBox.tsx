import { useEffect, useState } from "react";
import { ResizableBox, ResizableBoxProps } from "react-resizable";
import "./resizeableBox.css";

interface ResizeableProps {
  direction: "horizontal" | "vertical";
}

const Resizeable: React.FC<ResizeableProps> = ({ direction, children }) => {
  const [innerWidth,setInnerWidth] = useState(window.innerWidth)
  const [innerHeight,setInnerHeight] = useState(window.innerHeight)
  const [width,setWidth] = useState(window.innerWidth * .75)
  useEffect(()=>{
    let timer: any
    const listener = () =>{
      if(timer){
        clearTimeout(timer)
      }
      timer = setTimeout(()=>{
        setInnerWidth(window.innerWidth)
        setInnerHeight(window.innerHeight)
        if(window.innerWidth * .75 < width){
          setWidth(window.innerWidth * .75)
        }
      },100)
    }
    window.addEventListener("resize",listener)
    return () =>{
      window.removeEventListener("resize",listener)
    }
  },[width])
  let resizableProps: ResizableBoxProps;

  if (direction === "horizontal") {
    resizableProps = {
      className: "resize-horizontal",
      minConstraints: [innerWidth * .2, Infinity],
      maxConstraints: [innerWidth * .75, Infinity],
      height: Infinity,
      width,
      resizeHandles: ["e"],
      onResizeStop: (event,data) =>{
        setWidth(data.size.width)
      }
    };
  } else {
    resizableProps = {
      minConstraints: [Infinity, 30],
      maxConstraints: [Infinity, innerHeight * 0.9],
      width: Infinity,
      height: 300,
      resizeHandles: ["s"],
    };
  }
  return <ResizableBox {...resizableProps}>{children}</ResizableBox>;
};

export default Resizeable;
