import { Link, NavLink } from "react-router-dom"

interface HeaderProps{

}
const Header : React.FC<HeaderProps> = () =>{
    return <nav>
        <div>
        <NavLink to="/">Home</NavLink>
        <hr/>
        <NavLink to="/guide">Documentation</NavLink>
        </div>
    </nav>
}

export default Header