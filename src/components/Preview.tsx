import "./preview.css";
import { useEffect, useRef } from "react";
interface PreviewProps {
  code: string;
  err: string;
}

const html = `<html>
<head>
<style>html {background-color: white;}</style>
</head>
<body>
<div id=root></div>
<script>
const handleError = (err) => {
  let root= document.querySelector('#root')
  root.innerHTML = '<div style="color:red"><h4>Runtime error</h4>'+ err + '</div>'
  console.error(err)
}

window.addEventListener('error',(event)=>{
  event.preventDefault()
  handleError(event.error)
})

window.addEventListener('message',(event)=>{
  try{
    eval(event.data)
  }catch(err){
    handleError(err)
  }
},false)</script>
</body>
</html>
`;

const Preview: React.FC<PreviewProps> = ({ code, err }) => {
  useEffect(() => {
    iframe.current.srcDoc = html;
    let timer=setTimeout(() => {
      iframe.current.contentWindow.postMessage(code, "*");
    }, 50);
    return ()=>{
      clearTimeout(timer)
    }
  }, [code,err]);
  const iframe = useRef<any>();
  return (
    <div className="preview-wrapper">
      <iframe
        style={{ backgroundColor: "white" }}
        title="preview"
        ref={iframe}
        sandbox="allow-scripts"
        srcDoc={html}
      />
      {err && <div className="preview-error">{err}</div>}
    </div>
  );
};

export default Preview;
