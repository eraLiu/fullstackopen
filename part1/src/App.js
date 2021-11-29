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
  console.log(parts[0].exercises);
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
  console.log(props);
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
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  console.log(course.parts[0].name);
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total num={course.parts} />
    </div>
  );
};


export default App
