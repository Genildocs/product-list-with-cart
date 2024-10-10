import Dishes from './components/Dishes';
import Cart from './components/Cart';
export default function App() {
  return (
    <main className="flex flex-col md:flex-row gap-8 p-5 md:p-12">
      <Dishes />
      <Cart />
    </main>
  );
}
