import PropTypes from 'prop-types';

import { Stats } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <Stats>
        <li>
          <b>Good:</b> {good}
        </li>
        <li>
          <b>Neutral:</b> {neutral}
        </li>
        <li>
          <b>Bad:</b> {bad}
        </li>
      </Stats>
      <p>
        <b>Total:</b> {total}
      </p>
      <p>
        <b>Positive feedback:</b> {positivePercentage}%
      </p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
