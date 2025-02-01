import { useContext } from "react"
import { AuthContext } from "../context/AuthContextProvider"
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const { login, handlelogin, handlelogout } = useContext(AuthContext);

    return (
        <div className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/quiz">Quiz</NavLink>
            <NavLink to="/result">Result</NavLink>
            {login ?
                <button onClick={handlelogout}>Logout</button>
                :
                <button onClick={handlelogin}>Login</button>
            }
        </div>
    )
}

export default Navbar;