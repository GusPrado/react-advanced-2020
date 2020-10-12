import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  // useEffect(() => {
  //   console.log('useEffect called')
  // }, [])
  // console.log('component rendered')
  const [value, setValue] = useState(0)

  useEffect(() => {
    // its the same of using second parameter -> []
    // if (value >= 1) {

    //   document.title = `New messages(${value})`
    // }
    if (value >= 1) {

      document.title = `New messages(${value})`
    }
  }, [value]) // if blank just runs once at initial rendering

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click me!
      </button>
    </>
  )
};

export default UseEffectBasics;
