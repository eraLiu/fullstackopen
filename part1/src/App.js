import React from 'react'

const Header = (course) =>{
  return(
    <>
    <h1>{course.name}</h1>
    </>)
}
const Content = (content) =>{
  return(
    <>
    <p>
        {content.part} {content.exercises}
    </p>
    </>
  )
}
const Total = (n) =>{
  return(
    <>
    <p>
      Number of exercises {n.num}
    </p>
    </>
  )

}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course} />
      <Content  part = {part1} exercises = {exercises1}/>
      <Content  part = {part2} exercises = {exercises2}/>
      <Content  part = {part3} exercises = {exercises3}/>
      <Total  num = {exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App
