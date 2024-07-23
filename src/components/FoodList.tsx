import { CartItem, setItems } from "../store/cartSlice";
import { useQuery } from "@tanstack/react-query";
import { fetchFoods } from "../util/http";
import notFound from "../assets/images/sad-cake.jpg";
import notFoundDarkMode from "../assets/images/sad-cake-darkMode.png";
import Button from "../UI/Button";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import Search from "./Search";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SpinnerCircular } from "spinners-react";

export default function FoodList({ darkMode }: { darkMode: boolean }) {
  const cart = useSelector((state: RootState) => state.cart);
  const { data: foods, isLoading } = useQuery({
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
    <div className="flex flex-col items-center ">
      <Search />
      {filteredItems.length > 0 ? (
        <div className="gap-4 max-md:mx-6 mb-10 h-full max-md:mb-30 w-full grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {filteredItems.map((food: CartItem) => {
            const currentStateFood = cart.items.find(
              (item) => item.id === food.id
            ) ?? {
              isActive: false,
            };
            return (
              <div key={food.id} className="justify-center">
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
                    <span className="text-stone-500 mt-2 max-md:text-xl dark:text-stone-400">
                      {food.category}
                    </span>
                    <span className="font-semibold text-stone-800 max-md:text-2xl dark:text-white">
                      {food.name}
                    </span>
                    <span className="text-orange font-semibold max-md:text-xl">
                      ${food.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="items-center gap-4 max-md:mx-16 mb-10 h-full max-md:mb-30 w-full grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {isLoading ? (
            <span>
              Fetching foods please wait...{" "}
              <SpinnerCircular
                size="100"
                color="#C83B0E"
                secondaryColor="#FCF8F5"
              />
            </span>
          ) : (
            <div className="flex flex-col items-center w-full max-w-[500px]  ">
              {darkMode ? (
                <img
                  className="rounded-t-lg w-full object-contain  "
                  src={notFoundDarkMode}
                  alt="item not found"
                />
              ) : (
                <img
                  className="rounded-t-lg w-full object-contain  "
                  src={notFound}
                  alt="item not found"
                />
              )}

              <span className="text-stone-500 max-w-fit rounded-b-lg p-1 text-xl pb-6 text-center font-semibold bg-white min-w-full dark:bg-stone-900">
                Sorry, no foods found
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
