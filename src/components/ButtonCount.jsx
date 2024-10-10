import React, { useState } from 'react';

export default function ButtonCount({ index }) {
  const handleClick = () => console.log(index + 1);
  return (
    <div>
      <button onClick={handleClick}>Add Cart</button>
    </div>
  );
}
