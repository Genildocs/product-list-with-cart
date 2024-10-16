import React from 'react';

export default function ModalCart({ confirmOrder }) {
  console.log(confirmOrder);
  return (
    <div className={`${confirmOrder ? 'close-cart' : 'open-cart '}`}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-white w-[30vw] h-[50vh] z-50"></div>
      <div
        className={`${
          confirmOrder ? '' : 'overlay w-full overflow-hidden'
        } bg-slate-600 bg-opacity-100 absolute top-0 left-0 z-10 h-full min-h-screen w-0 `}></div>
    </div>
  );
}
