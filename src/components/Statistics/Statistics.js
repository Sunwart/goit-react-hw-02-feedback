import PropTypes from 'prop-types';

import { BoltText, Stats } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <Stats>
        <li>
          <BoltText>Good:</BoltText> {good}
        </li>
        <li>
          <BoltText>Neutral:</BoltText> {neutral}
        </li>
        <li>
          <BoltText>Bad:</BoltText> {bad}
        </li>
      </Stats>
      <p>
        <BoltText>Total:</BoltText> {total}
      </p>
      <p>
        <BoltText>Positive feedback:</BoltText> {positivePercentage}%
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
