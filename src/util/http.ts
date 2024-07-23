import { QueryClient } from "@tanstack/react-query";
import { CartItem } from "../store/cartSlice";

export const queryClient = new QueryClient();

export async function fetchFoods({ signal }: { signal: AbortSignal }) {
  const response = await fetch("/React-Dessert-Shopping-Cart-List/data.json", {
    signal: signal,
  });

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the events");
    throw error;
  }
  const foods = await response.json();

  return foods.map((food: CartItem) => ({
    ...food,
    quantity: 1,
    isActive: undefined,
  }));
}
