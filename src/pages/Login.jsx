import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const {login, handlelogin} = useContext(AuthContext);
    // const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    // const handleLogin = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await axios({
    //             method:"POST",
    //             url : "https://maze-rustic-year.glitch.me/login",
    //             data : {
    //                 username, password
    //             }
    //         })
    //         console.log(response);
    //         if(response.data.success) {
    //             console.log(response.data.token,"Response");
    //             const {token} = response.data;
    //             login(token);
    //         }
    //     } catch (err) {
    //         setError(err);
    //         console.log(err);
    //         setError(err.response.data.message);
    //     }
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(formData);
    //     console.log(login);
    //     {login ? navigate("/quiz") : navigate("/login")}
        
    // }

    return (
        <div className="login-cont">
            <h1>Login</h1>
            <form onSubmit={handlelogin}>
                <input
                    type="text"
                    placeholder="Enter Username"
                    name="username"
                    value={formData.username}
                    onChange={handleInput}
                />
                <input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    value={formData.password}
                    onChange={handleInput}
                />
                <input type="submit" value="Login" />
            </form>
            {/* {error && <p style={{color:"red"}}>{error}</p>} */}
        </div>
    )

}

export default Login;