import React, {useState} from 'react';

const ErrorExample = () => {
  const [text, setText] = useState('Random title')

  const handleClick = () => {
    if (text === 'Random title') {

      setText('New title')
    } else {

      setText('Random title')
    }
  }
  return (
    <>
      <h1>{text}</h1>
      <button 
        type="button" 
        className="btn" 
        onClick={handleClick}
        >Rename
      </button>
    </>
  )
};

export default ErrorExample;
