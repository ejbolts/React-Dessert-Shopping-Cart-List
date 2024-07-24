import { useDispatch } from "react-redux";
import {
  addItemToCart,
  CartItem,
  removeItemFromCart,
} from "../store/cartSlice";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
interface ButtonProps {
  food: CartItem;
}

export default function Button({ food }: ButtonProps) {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);
  const currentStateFood = cart.items.find((item) => item.id === food.id) ?? {
    isActive: false,
  };
  return (
    <>
      {currentStateFood.isActive ? (
        <div
          className={`${
            currentStateFood.isActive
              ? "bg-orange border-orange text-white "
              : "bg-white border-gray-300 "
          } p-2  shadow-md border-solid border-2 rounded-full w-[167px] flex items-center justify-center relative -mt-5 text-stone-800  hover:border-orange ease-linear duration-200`}
        >
          <button
            className="duration-200 ease-linear bg-white rounded-full hover:bg-orange "
            onClick={() => dispatch(removeItemFromCart(currentStateFood.id))}
          >
            <svg
              className="fill-orange hover:fill-white "
              viewBox="0 -0.5 24 25"
              height="1.25em"
              width="1.25em"
            >
              <path
                className=""
                d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm5 11H7v-2h10v2z"
              />
            </svg>
          </button>

          <span className="text-white mx-6 w-[50px] text-center">
            {currentStateFood.quantity}
          </span>

          <button
            className="duration-200 ease-linear bg-white rounded-full hover:bg-orange"
            onClick={() => dispatch(addItemToCart(food))}
          >
            <svg
              className="duration-200 ease-linear fill-orange hover:fill-white"
              viewBox="-2 0 20 16"
              height="1.25em"
              width="1.25em"
            >
              <path d="M16 8A8 8 0 110 8a8 8 0 0116 0zM8.5 4.5a.5.5 0 00-1 0v3h-3a.5.5 0 000 1h3v3a.5.5 0 001 0v-3h3a.5.5 0 000-1h-3v-3z" />
            </svg>
          </button>
        </div>
      ) : (
        <button
          className={`${
            currentStateFood.isActive
              ? "bg-orange border-orange text-white"
              : "bg-white  dark:bg-stone-950 border-gray-300 dark:border-stone-700 "
          } p-2  shadow-md px-6 border-solid border-2 rounded-full  flex items-center justify-center relative -mt-5 text-stone-800 dark:text-white dark:hover:text-orange dark:hover:border-orange hover:text-orange hover:border-orange ease-linear duration-200`}
          onClick={() => dispatch(addItemToCart(food))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            fill="none"
            viewBox="0 0 21 20"
          >
            <g fill="#C73B0F">
              <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z" />
              <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z" />
            </g>
            <defs>
              <path fill="#fff" d="M.333 0h20v20h-20z" />
            </defs>
          </svg>
          <span className="pl-2 font-semibold "> Add to Cart</span>
        </button>
      )}
    </>
  );
}
