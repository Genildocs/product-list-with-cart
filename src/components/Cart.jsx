import Cookie from '../assets/images/illustration-empty-cart.svg';
import ItemsCart from './ItemsCart';
export default function Cart({
  count,
  setCount,
  confirmOrder,
  setConfirmOrder,
}) {
  const sumCount = count.reduce((acc, cur) => acc + cur, 0);

  // const handleModalCart = () => {
  //   document.querySelector('.overlay').classList.add('w-full');
  //   document.querySelector('.modal-cart').classList.toggle('hidden');
  // };

  return (
    <section className=" bg-white p-5 rounded-xl md:self-start md:flex-1">
      <h1 className="text-2xl font-bold text-red-600">Your Cart({sumCount})</h1>
      {sumCount > 0 ? (
        <div>
          <ItemsCart count={count} setCount={setCount} />
          <p className="text-center mb-5">
            This is a <span className="font-bold"> carbon-neutral </span>{' '}
            delivery
          </p>
          <button
            className="w-full bg-red-500 rounded-2xl text-white py-2"
            onClick={() => setConfirmOrder(!confirmOrder)}>
            Confirm Order
          </button>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <img src={Cookie} className="w-1/2" />
          <p>Your added items will appear here</p>
        </div>
      )}
    </section>
  );
}
