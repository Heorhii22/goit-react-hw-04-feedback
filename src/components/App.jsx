import { useState } from "react";
import { Section } from "./Section/Section";
import { Feedback } from "./Feedback/Feedback";
import { Statistics } from "./Statistics/Statistics";
import {Notification} from "./Notification/Notification"


export const App = () => {

 const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good+bad+neutral
  }

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100) || 0;
  };

  return <>
    <Section title="Please leave feedback"><Feedback onBtnGoodClick={() => setGood(prevGood => prevGood + 1)} onBtnNeutralClick={() => setBad(prevBad => prevBad + 1)} onBtnNegativeClick={() => setNeutral(prevNeutral => prevNeutral + 1)} /></Section>
    {good !== 0 || neutral !== 0 || bad !== 0 ? <Section title='Statistics'><Statistics positive={good} neutral={neutral} bad={bad} total={countTotalFeedback()} percentageFeedback={countPositiveFeedbackPercentage()} /></Section> : <Notification message='No feedback given' />}
  </>
};
