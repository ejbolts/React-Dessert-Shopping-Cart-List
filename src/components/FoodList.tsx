import React from "react";
import WaffleWithBerries from "../assets/images/image-waffle-desktop.jpg";
export default function FoodList() {
  return (
    <div className="gap-4 border-solid border-2 ml-14 h-full border-emerald-500 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  2xl:grid-cols-4 ">
      <div className="flex flex-col">
        <img
          src={WaffleWithBerries}
          alt="image of dessert"
          className="rounded-md"
        />
        <button className="p-4">Add to Cart</button>
        <span>Waffle</span>
        <span>Waffle with Berries</span>
        <span>$6.50</span>
      </div>
      <div className="flex flex-col">
        <img
          src={WaffleWithBerries}
          alt="image of dessert"
          className="rounded-md"
        />
        <button className="p-4">Add to Cart</button>
        <span>Waffle</span>
        <span>Waffle with Berries</span>
        <span>$6.50</span>
      </div>
      <div className="flex flex-col">
        <img
          src={WaffleWithBerries}
          alt="image of dessert"
          className="rounded-md"
        />
        <button className="p-4">Add to Cart</button>
        <span>Waffle</span>
        <span>Waffle with Berries</span>
        <span>$6.50</span>
      </div>
      <div className="flex flex-col">
        <img
          src={WaffleWithBerries}
          alt="image of dessert"
          className="rounded-md"
        />
        <button className="p-4">Add to Cart</button>
        <span>Waffle</span>
        <span>Waffle with Berries</span>
        <span>$6.50</span>
      </div>
    </div>
  );
}
