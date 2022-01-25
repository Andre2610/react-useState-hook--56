import { useState } from 'react';

export default function State() {
  // Getter      /  Setter
  const [counter, setCounter] = useState(0);
  const [like, setLike] = useState(false);
  console.log('The counter', counter);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  const toggleLike = () => {
    setLike(!like);
  };
  return (
    <div>
      <button onClick={toggleLike}>
        {counter > 5 ? 'Liked' : 'Not liked'}
      </button>
      <p>
        <button onClick={decrement}>-</button> {counter}{' '}
        <button onClick={increment}>+</button>
      </p>
    </div>
  );
}
