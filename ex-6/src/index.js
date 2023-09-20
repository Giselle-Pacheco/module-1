import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const History = (props) => {
  if (props.comments.length === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <Statistics good={props.good} neutral={props.neutral} bad={props.bad} total={props.total}/>
    </div>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistics=(props)=>{
  return(
    <div>      
      <p>good: {props.good}</p>
      <p>neutral: {props.neutral}</p>
      <p>bad: {props.bad}</p>
      <p>all {props.total}</p>
      <p>average {(props.total)/3}</p>
      <p>positive {props.good/props.total}</p> 
    </div>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [comments, AllComments]=useState([])
  

  const handleGoodClick = () => {
    AllComments(comments+1)
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    AllComments(comments+1)
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    AllComments(comments+1)
    setBad(bad + 1)
  }

  const total=good+bad+neutral


  return (
    <div>
      <h1>give feedback</h1>

      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />

      <h1>statistics</h1>
      
      <History  comments={comments} good={good} neutral={neutral} bad={bad} total={total}/>

      
      
    </div>
  )
}


ReactDOM.render(<App />, 
  document.getElementById('root')
)