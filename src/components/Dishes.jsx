import { data } from '../../data';
import ButtonCount from './ButtonCount';
export default function Dishes() {
  return (
    <section className="md:flex-[3]">
      <h1 className="text-3xl font-bold">Desserts</h1>
      <div className="grid grid-cols-1 md:grid-cols-Desktop md:gap-3 md:mt-5 ">
        {data.map((dish, index) => (
          <div id={`dish-${index}`} key={dish.name}>
            <div>
              <img
                src={dish.image.mobile}
                alt={dish.name}
                className="object-cover rounded-md"
              />
            </div>
            <div>
              <ButtonCount index={index} />
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
  );
}
