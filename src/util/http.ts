import { QueryClient } from "@tanstack/react-query";
import { FoodItem } from "../store/foodSlice";

export const queryClient = new QueryClient();

export interface Food {
  name: string;
  price: number;
  image: {
    thumbnail: string;
    mobile: string;
    table: string;
    desktop: string;
  };
  category: string;
  quantity: number;
  id: number;
}

export async function fetchFoods({ signal }: { signal: AbortSignal }) {
  const response = await fetch("../../data.json", { signal: signal });

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the events");
    throw error;
  }
  const foods = await response.json();

  return foods.map((food: Food) => ({
    ...food,
    quantity: 1,
  }));
}
