import React from "react";
import Cart from "./components/Cart";
import FoodList from "./components/FoodList";
import Header from "./components/Header";
import "./index.css";

export default function App() {
  return (
    <div className="bg-lightBG min-h-screen ">
      <Header />
      <div className="flex justify-between">
        <FoodList />
        <Cart />
      </div>
    </div>
  );
}
