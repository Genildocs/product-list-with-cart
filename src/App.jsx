import Cart from './components/Cart';
import ButtonCount from './components/ButtonCount';
import data from '../data';
import { useState } from 'react';
export default function App() {
  const [count, setCount] = useState(0);
  return (
    <main className="flex flex-col md:flex-row gap-8 p-5 md:p-12">
      <section className="md:flex-[3]">
        <h1 className="text-3xl font-bold">Desserts</h1>
        <div className="grid grid-cols-1 md:grid-cols-Desktop md:gap-3 md:mt-5 ">
          {data.map((dish, index) => (
            <div id={`dish-${index}`} key={dish.name}>
              <div>
                <img
                  src={dish.image.mobile}
                  alt={dish.name}
                  className="object-cover rounded-md cursor-pointer"
                />
              </div>
              <div>
                <ButtonCount
                  dish={dish}
                  index={index}
                  count={count}
                  setCount={setCount}
                />
              </div>
              <div>
                <p>{dish.category}</p>
                <p>{dish.name}</p>
                <p>${dish.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Cart count={count} />
    </main>
  );
}
