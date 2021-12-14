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
    // <>
    //   <Part part={parts[0].name} exercises={parts[0].exercises} />
    //   <Part part={parts[1].name} exercises={parts[1].exercises} />
    //   <Part part={parts[2].name} exercises={parts[2].exercises} />
    // </>
        <>
          {parts.map(part => 
            <Part key={part.id} part={part.name} exercises={part.exercises}/>
          )}
        </>
  );
};
const Total = (props) => {
  const { nums } = props
  // console.log(num)
  let sumArr = nums.map(num => num.exercises)
  // console.log(sumArr)
  return (
    <>
      <p>
        <strong>total of {sumArr.reduce(function(a, b){return a + b})}  exercises</strong>
      </p>
    </>
  );
};
// num[0].exercises+num[1].exercises+num[2].exercises
const Course = (props) =>{
  const { course } = props
    return (
    <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total nums={course.parts} />
    </div>
  )
}

export default Course