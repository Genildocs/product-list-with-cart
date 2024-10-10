import Cookie from '../assets/images/illustration-empty-cart.svg';
export default function Cart() {
  return (
    <section className=" bg-white p-5 rounded-xl md:self-start md:flex-1">
      <h1 className="text-2xl font-bold text-red-600">Your Cart(0)</h1>
      <div className="text-center">
        <img src={Cookie} />
        <p>Your added items will appear here</p>
      </div>
    </section>
  );
}
