import { useState } from 'react';

function useCounter(initialValue) {
  const [counter, setCounter] = useState(initialValue);

  const handleUpdate = (evt) => {
    const { name } = evt.currentTarget;
    let newCounter;
    let inputValue;

    switch (name) {
      case 'decrement':
        newCounter = Math.max(counter - 50, 0);
        break;
      case 'increment':
        newCounter = Math.min(counter + 50, 5000);
        break;
      case 'input':
        inputValue = Number(evt.target.value);
        newCounter = Math.min(Math.max(inputValue, 0), 5000);
        break;
      default:
        newCounter = counter;
    }

    setCounter(newCounter);
  };

  return { counter, handleUpdate };
}

export default useCounter;
