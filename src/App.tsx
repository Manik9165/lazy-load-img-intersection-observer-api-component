import LazyImg from "./LazyImg";
import { DummyData } from "./utils/DummyData";

function App() {
  return (
    <div className="flex justify-center bg-zinc-900 w-full h-screen">
      <div className="w-96 h-96 border-2 rounded-md mt-10 border-white overflow-y-auto pl-5">
      <p className="text-center text-white text-lg font-bold">Lazy Loading Image</p>
        <ul>
          {DummyData.map((data, index) => (
            <li key={index} className="text-white">
              {data}
            </li>
          ))}
          <LazyImg
            src="https://hoppingfeet.com/wp-content/uploads/2018/11/IMG_E9565-scaled.jpg"
            alt="Img"
          />
          {DummyData.map((data, index) => (
            <li key={index} className="text-white">
              {data}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
