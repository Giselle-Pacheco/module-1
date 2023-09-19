import React from 'react'
import ReactDOM from 'react-dom'

const Header=(props)=>{
  return(
    <div>
      <p>
        <h1>{props.header}</h1>
      </p>  
    </div>
  )
}

const Content=(props)=>{
  return(
    <div>
      <p>
        Content: 
          <Part parts={props.parts[0]} />
          <Part parts={props.parts[1]}/>
          <Part parts={props.parts[2]}/>
      </p>
    </div>
  )
}

const Part=(props)=>{
  return(
    <div> 
      <p>
      {props.parts.name }, number of exercises {props.parts.exercises}     
      </p>
    </div>
  )

}



const Total=(props)=>{

  const result=props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises
  return(
    <div>
      <p>
        Total: {result}
      </p>
    </div>

  )
}
const App = () => {
  const course = {
    title: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    // console.log(parts[0])
    <div>
      <Header header={course.title}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))