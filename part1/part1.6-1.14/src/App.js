import React, { useState } from 'react'


const Display = props => <div>{props.text} {props.value}</div>

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
      <Display text='good' value={good}/>
      <Display text='netural' value={neutral}/>
      <Display text='bad' value={bad}/>
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
