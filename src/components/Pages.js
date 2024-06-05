import { NavLink } from "react-router-dom";

function Pages(){
    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/newuser">Newuser</NavLink>
                    </li>
                    <li>
                        <NavLink to="/search">Search</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Pages;