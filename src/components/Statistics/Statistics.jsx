export function Statistics({
  positive,
  neutral,
  bad,
  total,
  percentageFeedback,
}) {
  return (
    <>
      <p>Positive: {positive}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Percentage feedback: {percentageFeedback}%</p>
    </>
  );
}
