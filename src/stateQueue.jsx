import { useState } from 'react';
const StateQueue = () => {
   
  const [score, setScore] = useState(0);

  function increment() {
    setScore(score => score + 1);
  }

  return (
    <>
      <button onClick={() => {
      increment()
      increment()
                             
      }}>+1</button>
      <button onClick={() => {
        // 6 TIMES CALLS
        increment();
        increment();
        increment();
        increment();
        increment();
        increment();
      }}>+6</button>
      <h1>Score: {score}</h1>
    </>
  )
}


export default StateQueue;