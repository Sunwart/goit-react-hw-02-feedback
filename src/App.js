import { Component } from 'react';

import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Notification from './components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleChange = evt => {
    const temp = evt.currentTarget.textContent;
    this.setState(prevState => ({ [temp]: prevState[temp] + 1 }));
  };

  countTotalFeedback() {
    const state = this.state;
    let total = 0;
    Object.values(state).map(value => (total += value));
    return total;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.round((good / total) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title={'Please leave your feedback'}>
          <FeedbackOptions options={this.state} onLeaveFeedback={this.handleChange} />{' '}
        </Section>
        <Section title={'Statistics'}>
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </>
    );
  }
}

export default App;
