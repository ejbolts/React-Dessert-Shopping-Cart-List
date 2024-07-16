import React from "react";
import WaffleWithBerries from "../assets/images/image-waffle-desktop.jpg";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart } from "../store/cartSlice";
import { RootState } from "../store/store";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchFoods, Food } from "../util/http";

import Button from "../UI/Button";
export default function FoodList() {
  const queryClient = useQueryClient();

  const foods = useQuery({ queryKey: ["foods"], queryFn: fetchFoods });

  // const count = useSelector((state: RootState) => state.cart.value);
  const dispatch = useDispatch();
  return (
    <div className="gap-4 mx-14 mb-10 h-full  w-full grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3   2xl:grid-cols-4   ">
      {foods.data?.map((food: Food) => {
        return (
          <div key={food.id}>
            <div className="flex flex-col  items-center">
              <img
                srcSet={`${food.image.mobile} 640w, ${food.image.desktop} `}
                sizes="(max-width: 640px) "
                alt="image of dessert"
                className="rounded-md"
              />
              <Button food={food} />
            </div>

            <div className="flex flex-col">
              <span className="text-stone-500 mt-2 max-sm:text-xl">
                {food.category}
              </span>
              <span className="font-semibold text-stone-800 max-sm:text-2xl">
                {food.name}
              </span>
              <span className="text-orange font-semibold max-sm:text-xl">
                ${food.price.toFixed(2)}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
