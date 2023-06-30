import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ButtomNavigationBarComponent from "./components/ButtomNavigationBar";
import CardSimple from "./components/CardSimple";
import CaraoselImage from "./components/CaraoselImage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <div className="grid grid-rows-4">
        <div className="mb-8">
          <CaraoselImage />
        </div>
        <div className="grid gap-4 mb-6 grid-cols-3 md:grid-cols-5">
          <div className="p-2 border-solid border-2 border-sky-500 ...">
            <CardSimple />
          </div>
          <div className="p-2 border-solid border-2 border-sky-500 ...">
            <CardSimple />
          </div>
          <div className="p-2 border-solid border-2 border-sky-500 ...">
            <CardSimple />
          </div>
          <div className="p-2 border-solid border-2 border-sky-500 ...">
            <CardSimple />
          </div>
        </div>
      </div>
      <ButtomNavigationBarComponent />
    </div>
  );
}

export default App;
