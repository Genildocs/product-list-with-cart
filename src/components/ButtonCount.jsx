import React, { useState } from 'react';
import Cart from '../assets/images/icon-add-to-cart.svg';
import Decrement from '../assets/images/icon-decrement-quantity.svg';
import Increment from '../assets/images/icon-increment-quantity.svg';

export default function ButtonCount({ count, setCount, dish, index }) {
  const [addCount, setAddCount] = useState(true);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }

    if (count < 2) {
      setAddCount(true);
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
        <div className="flex items-center bg-red-600 font-semibold px-5 py-2  gap-5 rounded-2xl">
          <button onClick={handleDecrement}>
            <img
              src={Decrement}
              alt="button decrement"
              className="cursor-pointer"
            />
          </button>
          <span className="text-white">{count}</span>
          <button onClick={handleIncrement}>
            <img
              src={Increment}
              alt="button increment"
              className="cursor-pointer"
            />
          </button>
        </div>
      )}
    </div>
  );
}
