import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useDispatch } from "react-redux";
import { openModal, removeItemFromCart } from "../store/cartSlice";
import Modal from "../UI/Modal";
export default function Cart() {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="bg-white w-1/2 rounded-md mr-10 p-4 place-self-start max-sm:hidden md:block">
      <h2 className="text-orange text-2xl font-extrabold">
        Your Cart ({`${cart.totalItems}`})
      </h2>
      <ul className="py-4">
        {cart.items.map((food) => {
          return (
            <li
              key={food.id}
              className="border-solid border-stone-200 py-2 pb-4 border-b-[1px]"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-stone-800 my-2">
                    {food.name}
                  </p>
                  <span className="text-orange font-semibold ">
                    {food.quantity}x
                  </span>
                  <div className="inline ">
                    <span className="text-stone-500 px-2">
                      @${food.price.toFixed(2)}
                    </span>
                    <span className="text-stone-500 font-semibold">
                      ${(food.price * food.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => dispatch(removeItemFromCart(food.id))}
                  className="text-stone-500 hover:text-stone-800 p-1 ease-linear duration-200"
                >
                  <svg
                    fill="none"
                    viewBox="0 0 15 15"
                    height="1.25em"
                    width="1.25em"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M.877 7.5a6.623 6.623 0 1113.246 0 6.623 6.623 0 01-13.246 0zM7.5 1.827a5.673 5.673 0 100 11.346 5.673 5.673 0 000-11.346zm2.354 3.32a.5.5 0 010 .707L8.207 7.5l1.647 1.646a.5.5 0 01-.708.708L7.5 8.207 5.854 9.854a.5.5 0 01-.708-.708L6.793 7.5 5.146 5.854a.5.5 0 01.708-.708L7.5 6.793l1.646-1.647a.5.5 0 01.708 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="flex justify-between items-center py-6">
        <span className="text-stone-600">Order Total</span>
        <span className="font-extrabold text-stone-800 text-xl">
          ${cart.totalCost.toFixed(2)}
        </span>
      </div>
      <div className="flex justify-center bg-lightBG items-center rounded-md p-3 mb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="20"
          fill="none"
          viewBox="0 0 21 20"
        >
          <path
            fill="#1EA575"
            d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z"
          />
          <path
            fill="#1EA575"
            d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z"
          />
        </svg>
        <p className="text-stone-600 ml-2">
          This is a
          <span className="text-stone-800 font-semibold"> carbon-neutral </span>
          delivery
        </p>
      </div>

      <button
        onClick={() => dispatch(openModal())}
        className={`mt-8 p-3 px-6 w-full font-semibold rounded-full  flex items-center justify-center relative  text-white bg-orange hover:bg-orangeHover  ease-linear duration-200`}
      >
        Confirm Order
      </button>

      <Modal>
        <h2>Modal Content</h2>
        <p>This is the content inside the modal.</p>
      </Modal>
    </div>
  );
}
