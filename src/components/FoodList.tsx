import { CartItem, setItems } from "../store/cartSlice";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchFoods } from "../util/http";

import Button from "../UI/Button";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import Search from "./Search";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function FoodList() {
  const cart = useSelector((state: RootState) => state.cart);
  const { data: foods } = useQuery({
    queryKey: ["foods"],
    queryFn: fetchFoods,
  });
  const filteredItems = useSelector(
    (state: RootState) => state.cart.filteredItems
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (foods) {
      dispatch(setItems(foods));
    }
  }, [foods, dispatch]);

  return (
    <div className="flex flex-col mx-14">
      <Search />
      <div className="gap-4 max-md:mx-6  mb-10 h-full max-md:mb-30  w-full grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3   2xl:grid-cols-4   ">
        {filteredItems.length > 0
          ? filteredItems.map((food: CartItem) => {
              const currentStateFood = cart.items.find(
                (item) => item.id === food.id
              ) ?? {
                isActive: false,
              };
              return (
                <div key={food.id} className="">
                  <div className="flex flex-col  items-center">
                    <img
                      srcSet={`${food.image.mobile} 767w, ${food.image.desktop} 770w`}
                      sizes="(max-width: 767px) 100vw, 770px"
                      alt="image of dessert"
                      className={`${
                        currentStateFood.isActive
                          ? "border-2 border-solid border-orange"
                          : ""
                      } rounded-md`}
                    />
                    <Button food={food} />
                    <div className="flex flex-col ml-0 mr-auto text-left items-start">
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
                </div>
              );
            })
          : "no item found"}
      </div>
    </div>
  );
}
