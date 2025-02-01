import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home">
            <h1>🎉 Welcome to the Quiz App!</h1>
            <div>
                Test your knowledge and challenge yourself with our quiz. Please <button onClick={()=>navigate("./login")}>Login</button> to get started.
            </div>
        </div>
    )
}

export default Home;