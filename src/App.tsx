import Card from "./components/Card";
import CompoundCard from "./components/CompoundCard";

function App() {
  return (
    <div className="flex justify-center items-center h-screen border flex-col gap-3 ">
      <Card>
        <img className="w-40" src="/sample.png" alt="" />

        <p className="text-center text-sm p-2 text-slate-700">
          Redux Tutorial
        </p>

        <p className="text-center p-2 text-green-600 text-sm">
          39.00$
        </p>

        <button className="transition duration-75 bg-violet-600 text-white p-2 w-full hover:bg-violet-700 active:translate-y-1">
          Add to Cart
        </button>
      </Card>

      <CompoundCard>
        <CompoundCard.Image src="/sample.png" />
        <CompoundCard.Title>Redux Toolkit</CompoundCard.Title>
        <CompoundCard.Price>39.00$</CompoundCard.Price>
        <CompoundCard.CartButton>Add To Cart</CompoundCard.CartButton>
      </CompoundCard>
    </div>
  );
}

export default App;
