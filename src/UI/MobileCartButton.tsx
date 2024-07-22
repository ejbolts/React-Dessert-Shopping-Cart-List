import React, { useEffect } from "react";
import { openCartModal } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function MobileCartButton() {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    const handleScroll = () => {
      const fixedElement = document.getElementById("fixedElement");
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.documentElement.scrollHeight - 300;

      if (scrollPosition >= threshold) {
        fixedElement?.classList.add("opacity-0");
      } else {
        fixedElement?.classList.remove("opacity-0");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      id="fixedElement"
      className="md:hidden flex-col w-full px-10 fixed bottom-0 justify-center pt-4 py-6 items-center bg-white shadow-lg rounded-t-xl transition-opacity duration-300"
    >
      <span className="font-extrabold  text-stone-800 justify-center flex text-xl mb-3">
        Total: ${cart.totalCost.toFixed(2)}
      </span>
      <button
        onClick={() => dispatch(openCartModal())}
        disabled={cart.totalItems < 1}
        className={`mt-4 p-3 w-full font-semibold rounded-full flex items-center justify-center relative text-white bg-orange hover:bg-orangeHover ease-linear duration-200 ${
          cart.totalItems < 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Confirm Order
      </button>
    </div>
  );
}
