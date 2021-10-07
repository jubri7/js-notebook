import { Link, NavLink } from "react-router-dom"

interface HeaderProps{

}
const Header : React.FC<HeaderProps> = () =>{
    return <nav>
        <div>
            <div>
            <NavLink to="/">Home</NavLink>
            </div>
            <div>
            <NavLink to="/guide">Documentation</NavLink>
            </div>
        <hr/>
        </div>
    </nav>
}

export default Header