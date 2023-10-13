import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";
import { Container } from "./index.styled";
import Notification from "./Notification/Notification";

class App extends Component {
  state = {
    like: 0,
    neutral: 0,
    dislike: 0
  };

  countTotalFeedback = () => {
    const { like, neutral, dislike } = this.state;
    const feedbackValues = Object.values({ like, neutral, dislike });
    return feedbackValues.reduce((total, value) => total + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { like } = this.state;
    const total = this.countTotalFeedback();
    const percentage = total === 0 ? 0 : (like / total) * 100;
    return Math.round(percentage) + "%";
  };

  handleFeedback = (e) => {
    const buttonName = e.target.textContent;
    this.setState((prevState) => ({
      [buttonName.toLowerCase()]: prevState[buttonName.toLowerCase()] + 1
    }));
  };

  render() {
    const { like, neutral, dislike } = this.state;
    const total = this.countTotalFeedback(); 
    return (
      <Container>
        <Section title="SHARE YOUR EXPERIENCES">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="STATISTIC">
          {total > 0 ? (
            <Statistics
              good={like}
              neutral={neutral}
              bad={dislike}
              total={total} 
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="THERE IS NO FEEDBACK" />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;