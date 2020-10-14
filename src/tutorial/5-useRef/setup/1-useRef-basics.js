import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null)

  const handleSubmit = (evt) => {
    evt.preventDefault()
    console.log(refContainer.current.value)
  }
  // console.log(refContainer)

  useEffect(() => {
    console.log(refContainer.current.value)
    refContainer.current.focus()
  }) // No need to use dependency array cause useRef 
  // doesn't trigger a re-render and create an infinite loop

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer}/>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  )
};

export default UseRefBasics;
