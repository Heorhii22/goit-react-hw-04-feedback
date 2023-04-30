import PropTypes from 'prop-types';

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

Statistics.propTypes = {
  positive: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentageFeedback: PropTypes.func.isRequired,
};
