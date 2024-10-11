import React from 'react';
import data from '../../data';
import ButtonCount from './ButtonCount';

export default function Cards({ count, setCount }) {
  const updateCount = (index, newCount) => {
    setCount((prevCounts) => {
      const updateCounts = [...prevCounts];
      updateCounts[index] = newCount;
      return updateCounts;
    });
  };

  return (
    <>
      <section className="md:flex-[3]">
        <h1 className="text-3xl font-bold mb-10">Desserts</h1>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-Desktop md:gap-3 md:mt-5 ">
          {data.map((dish, index) => (
            <div id={`dish-${index}`} key={dish.name}>
              <div>
                <img
                  src={dish.image.mobile}
                  alt={dish.name}
                  className="object-cover rounded-md cursor-pointer"
                />
              </div>
              <div className=" -translate-y-3">
                <ButtonCount
                  count={count[index]}
                  setCount={(newCount) => updateCount(index, newCount)}
                  dish={dish}
                  index={index}
                />
              </div>
              <div>
                <p>{dish.category}</p>
                <p className="font-semibold">{dish.name}</p>
                <p className="text-red-600 font-medium">${dish.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
