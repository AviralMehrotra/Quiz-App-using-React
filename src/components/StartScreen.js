function StartScreen({ numQues, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to DSA Quiz</h2>
      <h3>
        Test your knowledge of data structures and algorithms with these{" "}
        {numQues} questions
      </h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Start
      </button>
    </div>
  );
}

export default StartScreen;
