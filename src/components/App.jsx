import {useState} from "react";
import { Statistics } from "./Statics/Statistics";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Section } from "components/Section/Section";
import { Notification } from "./Notification/Notification";


export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const handleIncrementReview = (e) => {
    switch (e.target.name) {
      case 'good':
        setGood(good + 1)
        break;
      case 'neutral':
        setNeutral(neutral + 1)
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;
  
  const countPositiveFeedbackPercentage = () => Math.round(good / (good + neutral + bad) * 100);

  return <div style={{
      paddingTop: '60px',
      paddingBottom: '60px',
        fontSize: 20,
        color: '#010101',
      backgroundColor: "#e7ecf2",}}>

      <Section title='Please leave your feedback'>
        <FeedbackOptions options={options} onLeaveFeedback={handleIncrementReview}></FeedbackOptions>
      </Section>
      
      <Section title='Statistics'>

        {countTotalFeedback() > 0
          ? <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}>
          </Statistics>
          : <Notification message='There is no feedback' />}
      </Section>
    </div>; 
}
