import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className=" w-screen h-screen duration-200 overflow-hidden"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("red")}
              className=" bg-red-600 outline-none rounded-full  px-4 shadow-lg py-1 text-white"
            >
              Red
            </button>
            <button
              onClick={() => setColor("yellow")}
              className=" bg-yellow-400 outline-none rounded-full  px-4 shadow-lg py-1 text-white"
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("blue")}
              className=" bg-blue-600 outline-none rounded-full  px-4 shadow-lg py-1 text-white"
            >
              Blue
            </button>
            <button
              onClick={() => setColor("black")}
              className=" bg-black-600 outline-none rounded-full  px-4 shadow-lg py-1 text-white"
            >
              Black
            </button>
            <button
              onClick={() => setColor("cyan")}
              className=" bg-cyan-400 outline-none rounded-full  px-4 shadow-lg py-1 text-white"
            >
              Cyan
            </button>
            <button
              onClick={() => setColor("green")}
              className=" bg-green-600 outline-none rounded-full  px-4 shadow-lg py-1 text-white"
            >
              Green
            </button>
            <button
              onClick={() => setColor("pink")}
              className=" bg-pink-400 outline-none rounded-full  px-4 shadow-lg py-1 text-white"
            >
              Pink
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
