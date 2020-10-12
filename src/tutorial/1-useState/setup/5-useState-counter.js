import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0)

  const reset = () => {
    setValue(0)
  }

  const complexIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1) if press more than once it just updates by 1
      // fix below
      setValue((prevState) => {
        return prevState + 1
      })
    }, 2000)
  }
  return (
    <>
    <section style={{margin: '4rem 0'}}>
      <h2>Regular counter</h2>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value - 1)}>decrease</button>
      <button className="btn" onClick={reset}>reset</button>
      <button className="btn" onClick={() => setValue(value + 1)}>increase</button>
    </section>
    <section style={{margin: '4rem 0'}}>
      <h2>More complex counter</h2>
      <h1>{value}</h1>
      <button className="btn" onClick={complexIncrease}>
        increase later
      </button>
      
    </section>
    </>
  )
};

export default UseStateCounter;
