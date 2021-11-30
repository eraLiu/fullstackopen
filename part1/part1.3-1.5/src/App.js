import React from 'react'

const Header = (props) => {
  const { name } = props;
  return (
    <>
      <h1>{name}</h1>
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
      <Part part={parts.name} exercises={parts.exercises} />
    </>
  );
};
const Total = (props) => {
  const { num1,num2,num3 } = props
  // console.log(num1)
  // console.log(num2)
  // console.log(num3)
  return (
    <>
      <p>
        Number of exercises {num1.exercises+num2.exercises+num3.exercises}
      </p>
    </>
  );
};

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
        <Header name={course} />
        <Content parts={part1} />
        <Content parts={part2} />
        <Content parts={part3} />
        <Total num1={part1} num2={part2} num3={part3} />
    </div>
  )
}
export default App
