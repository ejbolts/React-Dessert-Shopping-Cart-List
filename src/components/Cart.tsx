import React from "react";

export default function Cart() {
  return (
    <div className="bg-white border-solid border-2 border-sky-500 rounded-md m-10 p-4  ">
      <h2>Your Cart (7)</h2>
      <ul className="py-4">
        <li className="border-solid border-2 border-sky-300">
          <div className="flex items-center justify-between">
            <div className="">
              <p>classic Tiramisu</p>

              <span>1x</span>
              <span>@ $5.50</span>
              <span>$5.50</span>
            </div>
            <button>X</button>
          </div>
        </li>
        <li className="border-solid border-2 border-sky-300">
          <div className="flex items-center justify-between">
            <div className="">
              <p>classic Tiramisu</p>

              <span>1x</span>
              <span>@ $5.50</span>
              <span>$5.50</span>
            </div>
            <button>X</button>
          </div>
        </li>
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
