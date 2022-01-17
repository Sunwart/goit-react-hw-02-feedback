import PropTypes from 'prop-types';

import { Container, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Container>
      {Object.keys(options).map(option => (
        <Button type="button" key={option} onClick={onLeaveFeedback}>
          {option}
        </Button>
      ))}
    </Container>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
