function FinishScreen({ points, totalPoints, dispatch }) {
  const perc = (points / totalPoints) * 100;
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {totalPoints}
        {"  "}
        <strong>({Math.ceil(perc)})%</strong>
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishScreen;
