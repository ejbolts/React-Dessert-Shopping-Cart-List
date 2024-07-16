import React from "react";
import WaffleWithBerries from "../assets/images/image-waffle-desktop.jpg";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart } from "../store/cartSlice";
import { RootState } from "../store/store";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchFoods } from "../util/http";
export default function FoodList() {
  const queryClient = useQueryClient();

  const foods = useQuery({ queryKey: ["foods"], queryFn: fetchFoods });

  // const count = useSelector((state: RootState) => state.cart.value);
  const dispatch = useDispatch();
  return (
    <div className="gap-4 border-solid border-2 ml-14 h-full border-emerald-500 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  2xl:grid-cols-4 ">
      {foods.data?.map((food) => {
        return (
          <div key={food.id} className="flex flex-col">
            <img
              src={food.image.desktop}
              alt="image of dessert"
              className="rounded-md"
            />
            <button
              className="p-4"
              onClick={() => dispatch(addItemToCart(food))}
            >
              Add to Cart
            </button>
            <span>{food.category}</span>
            <span>{food.name}</span>
            <span>${food.price}</span>
          </div>
        );
      })}
    </div>
  );
}
