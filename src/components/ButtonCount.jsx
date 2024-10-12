import { useState } from 'react';
import PropTypes from 'prop-types';
import Cart from '../assets/images/icon-add-to-cart.svg';
import Decrement from '../assets/images/icon-decrement-quantity.svg';
import Increment from '../assets/images/icon-increment-quantity.svg';
import ItemsCart from './ItemsCart';

export default function ButtonCount({ count, setCount, dish, index }) {
  const [openButtonCount, setOpenButtonCount] = useState(true);
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }

    if (count < 2) {
      setOpenButtonCount(true);
    }
  };

  const handleClick = () => {
    setOpenButtonCount(false);
  };

  return (
    <div>
      <div>
        <img
          src={dish.image.mobile}
          alt={dish.name}
          className={`${
            !openButtonCount
              ? ' border-[1px] border-red-600 border-solid '
              : ' '
          } object-cover rounded-md cursor-pointer img-card`}
        />
      </div>
      <div className="flex justify-center h-10 -translate-y-3">
        {openButtonCount ? (
          <button
            onClick={handleClick}
            className="bg-white font-semibold px-5 py-2 flex items-center  gap-2 rounded-2xl">
            <img src={Cart} alt="button cart" />
            Add Cart
          </button>
        ) : (
          <div className="flex items-center bg-red-600 font-semibold px-5 py-2  gap-5 rounded-2xl">
            <button
              onClick={handleDecrement}
              className=" h-5 w-5 border-[1px] border-solid rounded-full p-1 opacity-100">
              <img
                src={Decrement}
                alt="button decrement"
                className="cursor-pointer"
              />
            </button>
            <span className="text-white">{count}</span>
            <button
              onClick={handleIncrement}
              className=" h-5 w-5 border-[1px] border-solid rounded-full p-1 opacity-100">
              <img
                src={Increment}
                alt="button increment"
                className="cursor-pointer"
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
