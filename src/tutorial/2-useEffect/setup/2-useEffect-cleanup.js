import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size,SetSize] = useState(window.innerWidth)

  const checkSize = () => {
    SetSize(window.innerWidth)
  }
 
  useEffect(() => {
    console.log('useEffect')
    window.addEventListener('resize', checkSize)
    return () => {
      console.log('cleanup')
      window.removeEventListener('resize', checkSize)
    }
  })
  console.log('render')
  return (
    <>
      <h1>Window</h1>
      <h2>{size} pixels</h2>
    </>
  )
};

export default UseEffectCleanup;
