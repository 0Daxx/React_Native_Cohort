import { useState } from "react";
import "./App.css";
import Counter from "./Counter";

function App() {
  return (
    <div className="flex-1 w-full h-full flex items-center justify-center border-2 ">
      <Counter />
    </div>
  );
}

export default App;
