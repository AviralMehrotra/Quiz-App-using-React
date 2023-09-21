import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import Timer from "./Timer";
import { JSONBIN_ID, JSONBIN_API_KEY } from "../secret/Keys";

const SEC_PER_QUES = 60;

const initialState = {
  questions: [],
  //"loading", "error","ready", "active", "finished"
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  secRemaining: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataRecieved":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
        secRemaining: state.questions.length * SEC_PER_QUES,
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "finish":
      return {
        ...state,
        status: "finished",
      };
    case "restart":
      return {
        ...initialState,
        questions: state.questions,
        status: "ready",
      };
    case "tick":
      return {
        ...state,
        secRemaining: state.secRemaining - 1,
        status: state.secRemaining === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("Action Unknown");
  }
}

export default function App() {
  const [{ questions, status, index, answer, points, secRemaining }, dispatch] =
    useReducer(reducer, initialState);

  const numQues = questions.length;
  const totalPoints = questions.reduce((prev, cur) => prev + cur.points, 0);

  useEffect(function () {
    // const apiUrl = "http://localhost:8000/questions";
    const apiUrl = `https://api.jsonbin.io/v3/b/${JSONBIN_ID}`;
    fetch(apiUrl, {
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": JSONBIN_API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: "dataRecieved", payload: data.record.questions })
      )
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQues={numQues} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              numQues={numQues}
              points={points}
              totalPoints={totalPoints}
              answer={answer}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <Footer>
              <Timer dispatch={dispatch} secRemaining={secRemaining} />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                index={index}
                numQues={numQues}
              />
            </Footer>
          </>
        )}
        {status === "finished" && (
          <FinishScreen
            points={points}
            totalPoints={totalPoints}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}
