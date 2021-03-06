import React, { useState } from 'react'


const StatisticLine = props => {
        return (
          <tr><td>{props.text}</td><td>{props.value}</td></tr>
        )
  }

const Statistics = (props) =>{
  const{good,bad,neutral} = props
  if (good+neutral+bad === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <>
      <table>
        <tbody>
          <StatisticLine text='good' value={good}/>
        
          <StatisticLine text='netural' value={neutral}/>
          <StatisticLine text='bad' value={bad}/>
          <StatisticLine text='all' value={good+neutral+bad}/>
          <StatisticLine text='average' value={(good-bad)/(good+neutral+bad)}/>
          <StatisticLine text='positive' value={((good / (good + neutral + bad)) * 100 + '%')}/>
        </tbody>
      </table>
    </>
  )
}
const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeturalClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handGoodClick} text='good'/>
      <Button handleClick={handleNeturalClick} text='neutral'/>
      <Button handleClick={handleBadClick} text='bad'/>
      <h1>statistics</h1>

      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

const Button = ({handleClick, text}) => 
  (
    <button onClick={handleClick}>
      {text}
    </button>
  )


export default App
