import React from "react";
import { removeItemFromCart } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

interface CartListProp {
  isModal: boolean;
}
export default function CartList({ isModal }: CartListProp) {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);
  return (
    <>
      <ul
        className={`${
          isModal ? "bg-lightBG rounded-t-md mt-8 px-4 " : "bg-white"
        } py-2 `}
      >
        {cart.items.map((food) => {
          return (
            <li
              key={food.id}
              className="border-solid border-stone-200  py-3 border-b-[1px]"
            >
              <div
                className={`${
                  isModal ? "" : "justify-between"
                } flex items-center `}
              >
                {isModal && (
                  <img
                    src={food.image.thumbnail}
                    alt={food.name}
                    className="rounded-md w-16"
                  />
                )}
                <div className="pl-3">
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
                    {!isModal && (
                      <span className="text-stone-500 font-semibold">
                        ${(food.price * food.quantity).toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
                {isModal && (
                  <span className="text-stone-800 font-semibold flex-grow text-right">
                    ${(food.price * food.quantity).toFixed(2)}
                  </span>
                )}
                {!isModal && (
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
                )}
              </div>
            </li>
          );
        })}
      </ul>
      <div
        className={`${
          isModal ? "bg-lightBG rounded-b-md mb-6" : "bg-white"
        } flex justify-between items-center py-6 px-4`}
      >
        <span className="text-stone-600">Order Total</span>
        <span className="font-extrabold text-stone-800 text-xl">
          ${cart.totalCost.toFixed(2)}
        </span>
      </div>
    </>
  );
}
