import Cookie from '../assets/images/illustration-empty-cart.svg';
export default function Cart({ count }) {
  const sumCount = count.reduce((acc, cur) => acc + cur, 0);

  return (
    <section className=" bg-white p-5 rounded-xl md:self-start md:flex-1">
      <h1 className="text-2xl font-bold text-red-600">Your Cart({sumCount})</h1>
      {sumCount > 0 ? (
        <div>
          <p>This is a carbon-neutral delivery</p>
          <button className="w-full bg-red-500 rounded-2xl text-white py-2">
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
