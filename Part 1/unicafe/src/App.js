import { useState } from 'react';

const Button = ({ text, addFeedback, feedback }) => {
  return <button onClick={() => addFeedback(feedback + 1)}>{text}</button>;
};

const StatisticLine = ({ text, value, isPercentage = false }) => {
  return (
    <tr>
      <th>{text}</th>
      <td>
        {value} {isPercentage ? '%' : ''}
      </td>
    </tr>
  );
};

const Statistics = ({ data }) => {
  const { good, neutral, bad } = data;

  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = (good / total) * 100;

  return total === 0 ? (
    <p>No feedback given</p>
  ) : (
    <table>
      <tbody>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine text="All" value={total} />
        <StatisticLine text="Average" value={average} />
        <StatisticLine text="Positive" value={positive} isPercentage />
      </tbody>
    </table>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text="Good" addFeedback={setGood} feedback={good} />
      <Button text="Neutral" addFeedback={setNeutral} feedback={neutral} />
      <Button text="Bad" addFeedback={setBad} feedback={bad} />
      <h2>Statistics</h2>
      <Statistics data={{ good, neutral, bad }} />
    </div>
  );
};

export default App;
