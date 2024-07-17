import { CartItem } from "../store/cartSlice";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchFoods } from "../util/http";

import Button from "../UI/Button";
export default function FoodList() {
  const foods = useQuery({ queryKey: ["foods"], queryFn: fetchFoods });

  return (
    <div className="gap-4 mx-14 mb-10 h-full  w-full grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3   2xl:grid-cols-4   ">
      {foods.data?.map((food: CartItem) => {
        return (
          <div key={food.id}>
            <div className="flex flex-col  items-center">
              <img
                srcSet={`${food.image.mobile} 767w, ${food.image.desktop} 770w`}
                sizes="(max-width: 767px) 100vw, 770px"
                alt="image of dessert"
                className="rounded-md"
              />
              <Button food={food} />
            </div>

            <div className="flex flex-col">
              <span className="text-stone-500 mt-2 max-md:text-xl">
                {food.category}
              </span>
              <span className="font-semibold text-stone-800 max-md:text-2xl">
                {food.name}
              </span>
              <span className="text-orange font-semibold max-md:text-xl">
                ${food.price.toFixed(2)}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
