import React, { useState } from 'react';
import './App.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <p>Count: {count}</p>
      <button className='counter' onClick={() => setCount(count + 1)}>Increment</button>
      <button className='counter' onClick={() => setCount(count - 1)}>Decrement</button>
      <button className='counter' onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
}
export default Counter;
