import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { openCartFormDetail } from "../store/uiSlice";

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
      className="fixed bottom-0 flex-col items-center justify-center w-full px-10 py-6 pt-4 transition-opacity duration-300 bg-white shadow-lg md:hidden rounded-t-xl dark:bg-stone-950"
    >
      <span className="flex justify-center mb-3 text-xl font-extrabold text-stone-800 dark:text-white">
        Total: ${cart.totalCost.toFixed(2)}
      </span>
      <button
        onClick={() => dispatch(openCartFormDetail())}
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
