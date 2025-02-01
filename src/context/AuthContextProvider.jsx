import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    // const [isAuthenticated, setAuthenticated] = useState(()=>{
    //     return localStorage.getItem("token"? true:false);
    // });

    // const [token, setToken] = useState(null);

    const [login, setLogin] = useState(false);
    const navigate = useNavigate();

    const handlelogin = () => {
        setLogin(true);
        navigate("/quiz");
    }

    const handlelogout = () => {
        setLogin(false);
        navigate("/login");
    }
    
    // useEffect(()=> {
    //     console.log(token);
    // },[token]);

    // const login = (authToken) => {
    //     setAuthenticated(true);
    //     setToken(authToken);
    //     localStorage.setItem("token",authToken);
    //     navigate(location.state.from || "/");
    // }

    // const logout = () => {
    //     setToken(null);
    //     setAuthenticated(false);
    //     localStorage.removeItem("token")
    //     navigate("/login");
    // }

    return (
        // <AuthContext.Provider value={{token, isAuthenticated, login, logout}}>
        <AuthContext.Provider value={{login, handlelogin, handlelogout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;