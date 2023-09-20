import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistics=(props)=>{
  return(
    <div>
      <p>
        <h1>statistics</h1>
        <p>good: {props.good}</p>
        <p>neutral: {props.neutral}</p>
        <p>bad: {props.bad}</p>
        <p>all {props.total}</p>
        <p>average {(props.total)/3}</p>
        <p>positive {props.good/props.total}</p> 
      </p>  
    </div>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  const total=good+bad+neutral

  // {props.good_status}
 // <p>neutral {neutral}</p>
// <p>bad {bad}</p>
// <p>all {total}</p>
// <p>average {(total)/3}</p>
// <p>positive {good/total}</p>


  return (
    <div>
      <h1>give feedback</h1>

      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />

      <Statistics good={good} neutral={neutral} bad={bad} total={total}/>
      

      
      
    </div>
  )
}


ReactDOM.render(<App />, 
  document.getElementById('root')
)