import React, { useState } from 'react';
import Cart from '../assets/images/icon-add-to-cart.svg';
import { data } from 'autoprefixer';
export default function ButtonCount({ dish, index, count, setCount }) {
  const [addCount, setAddCount] = useState(true);

  const handleIncrement = () => {
    setCount(count + 1);
    console.log(index, count);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleClick = () => {
    setAddCount(false);
  };

  return (
    <div className="flex justify-center h-10">
      {addCount ? (
        <button
          onClick={handleClick}
          className="bg-white font-semibold px-5 py-2 flex items-center  gap-2 rounded-2xl">
          <img src={Cart} alt="button cart" />
          Add Cart
        </button>
      ) : (
        <div className="flex items-center bg-white font-semibold px-5 py-2  gap-2 rounded-2xl">
          <button onClick={handleDecrement}>DECREMENTAR</button>
          <p>{count}</p>
          <button onClick={handleIncrement}>INCREMENTAR</button>
        </div>
      )}
    </div>
  );
}
