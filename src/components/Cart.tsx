import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function Cart() {
  const foods = useSelector((state: RootState) => state.cart.items);
  return (
    <div className="bg-white border-solid border-2 border-sky-500 rounded-md m-10 p-4  ">
      <h2 className="text-orange font-extrabold">
        Your Cart ({`${foods.length}`})
      </h2>
      <ul className="py-4">
        {foods.map((food) => {
          return (
            <li key={food.id} className="border-solid border-2 border-sky-300">
              <div className="flex items-center justify-between">
                <div>
                  <p>{food.name}</p>
                  <span className="text-orange font-semibold">
                    {food.quantity}x
                  </span>
                  <div className="inline">
                    <span className="px-2">@${food.price}</span>
                    <span className="font-semibold">
                      ${food.price * food.quantity}
                    </span>
                  </div>
                </div>
                <button>X</button>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="flex justify-between py-6">
        <span>Order Total</span>
        <span className="font-extrabold text-xl">$46.50</span>
      </div>
      <div className="flex justify-center bg-lightBG items-center p-3 mb-3">
        <span>this is a carbon-neutral delivery</span>
      </div>
      <button>Confirm Order</button>
    </div>
  );
}
