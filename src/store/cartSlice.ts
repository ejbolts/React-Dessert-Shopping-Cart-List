import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  totalCost: number;
  isOpen: boolean;
}

const initialState: CartState = {
  items: [],
  totalCost: 0,
  isOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<CartItem>) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
        state.totalCost += action.payload.price;
      } else {
        state.items.push(action.payload);
        state.totalCost += action.payload.price * action.payload.quantity;
      }
    },
    removeItemFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter(
        (item) => item.id !== Number(action.payload)
      );
    },
    openModal(state) {
      state.isOpen = true;
    },
    closeModal(state) {
      state.isOpen = false;
    },
  },
});

export const { addItemToCart, removeItemFromCart, openModal, closeModal } =
  cartSlice.actions;
export default cartSlice.reducer;
