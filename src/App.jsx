
import React from "react";
import ItemCalculator from "./components/ItemCalculator";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="app-title">ShopEasy</h1>

      <p className="app-subtitle">
        Select your size and quantity
      </p>

      <ItemCalculator />
    </div>
  );
}

export default App;
