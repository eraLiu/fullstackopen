import React from 'react'

const Header = (props) => {
  const { course } = props;
  // console.log(course)
  return (
    <>
      <h1>{course}</h1>
    </>
  );
};
const Part = (props) => {
  const { part, exercises } = props;
  return (
    <>
      <p>
        {part} {exercises}
      </p>
    </>
  );
};
const Content = (props) => {
  const { parts } = props;
  return (
    <>
      <Part part={parts[0].name} exercises={parts[0].exercises} />
      <Part part={parts[1].name} exercises={parts[1].exercises} />
      <Part part={parts[2].name} exercises={parts[2].exercises} />
    </>
  );
};
const Total = (props) => {
  const { num } = props
  // console.log(num)
  return (
    <>
      <p>
        Number of exercises {num[0].exercises+num[1].exercises+num[2].exercises}
      </p>
    </>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
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
    <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total num={course.parts} />
    </div>
  )
}
export default App
