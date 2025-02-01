import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showAnswer, setShowAnswer] = useState(false);
    const navigate = useNavigate();
    const optionsArr = useState([]);

    useEffect(() => {
        setLoading(true);
        const fetchQuestions = async () => {
            try {
                const response = await axios.get(
                    "https://maze-rustic-year.glitch.me/api/questions"
                );
                console.log(response.data.questions, "Quiz Page");
                setQuestions(response.data.questions);
            }
            catch (err) {
                console.log(err);
                setError(err.response.data.message);
                setLoading(false);
            }
        }
        fetchQuestions();
    }, [])

    const handleShowAnswer = () => {
        setShowAnswer(true);
    }

    return (
        <div className="quiz-cont">
            <h1>📝 Take the Quiz</h1>
            {loading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {questions.length &&
                questions.map((question) => {
                    return (
                        <div key={question.id} className="question-cont">
                            <h2>Q.No {question.id} {question.question} </h2>
                            <div>
                                {question.options.map((ele, index) => {
                                    return (
                                        <div key={index} className="quiz-opt">
                                            <input type="radio" value={ele} />
                                            <label>{ele}</label>
                                        </div>
                                    )
                                })}
                            </div>
                            <button onClick={()=> handleShowAnswer()}>
                                {showAnswer?"Hide Answer":"Show Answer"}
                            </button>
                            {showAnswer?(
                                <p> {question.answer} </p>
                            ): (
                                ""
                            )}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Quiz;