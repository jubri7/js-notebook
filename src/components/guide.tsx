import example1 from "../pictures/react-pic1.jpg"
import example2 from "../pictures/react-pic2.jpg"
import example2a from "../pictures/react-pic3.jpg"

const Guide: React.FC = () =>{
    return <div>
        Using React-The app support npm module downloads.Import React like a normal react-app and then render it using ReactDOM
        <img src={example1} alt="example1"/>
        To display javascript data use built-in function show(). show() also supports HTML elements.
        <img src={example2} alt="example2"/>
        <br/>
        <img src={example2a} alt="example2"/>
    </div>
}

export default Guide