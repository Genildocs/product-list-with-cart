import Cart from './components/Cart';
import data from '../data';
import { useState } from 'react';
import Cards from './components/Cards';
import ModalCart from './components/ModalCart';
export default function App() {
  const [count, setCount] = useState(Array(data.length).fill(0));
  const [confirmOrder, setConfirmOrder] = useState(true);

  return (
    <main className="flex flex-col  md:flex-row gap-8 p-5 md:p-12">
      <ModalCart confirmOrder={confirmOrder} />
      <Cards count={count} setCount={setCount} />
      <Cart
        count={count}
        setCount={setCount}
        confirmOrder={confirmOrder}
        setConfirmOrder={setConfirmOrder}
      />
    </main>
  );
}
