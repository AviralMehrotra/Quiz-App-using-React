function Progress({ index, numQues, points, totalPoints, answer }) {
  return (
    <header className="progress">
      <progress max={numQues} value={index + Number(answer !== null)} />
      <p>
        <strong>Question: </strong> {index + 1}/{numQues}
      </p>
      <p>
        <strong>Points: </strong>
        {points}/{totalPoints}
      </p>
    </header>
  );
}

export default Progress;
