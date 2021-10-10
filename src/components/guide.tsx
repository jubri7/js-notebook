import example1 from "../pictures/react-pic1.jpg"
import example2 from "../pictures/react-pic2.jpg"
import example2a from "../pictures/react-pic3.jpg"
import example3 from "../pictures/react-pic4.jpg"
import example4 from "../pictures/react-pic5.jpg"

const Guide: React.FC = () =>{
    return <div>
        To display javascript data use built-in function show().
        <img src={example2} alt="example2"/>
        <hr/>
        show() also supports HTML elements using JSX.
        <img src={example2a} alt="example2a"/>
        <hr/>
        The app supports NPM package downloads.
        <img src={example3} alt="example3"/>
        <hr/>
        Using React-Import React like a normal react-app and then render it using ReactDOM.
        <img src={example1} alt="example1"/>
        <hr/>
        Code carry's over from previous code blocks.
        <img src={example4} alt="example4"/>
    </div>
}

export default Guide