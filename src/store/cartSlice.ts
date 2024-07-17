import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  category: string;
  isActive: boolean;
  image: {
    thumbnail: string;
    mobile: string;
    table: string;
    desktop: string;
  };
}

export interface CartState {
  items: CartItem[];
  totalCost: number;
  totalItems: number;
  isOpen: boolean;
}

const initialState: CartState = {
  items: [],
  totalCost: 0,
  totalItems: 0,
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
        state.totalItems++;
      } else {
        state.items.push({ ...action.payload, isActive: true });
        state.totalCost += action.payload.price;
        state.totalItems++;
      }
    },
    removeItemFromCart(state, action: PayloadAction<number>) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );
      if (existingItem && existingItem.quantity > 1) {
        existingItem!.quantity--;
        state.totalCost -= existingItem.price;
        state.totalItems--;
      } else if (existingItem) {
        state.items = state.items.filter((item) => item.id !== action.payload);
        existingItem.isActive = false;
        state.totalCost -= existingItem.price;
        state.totalItems--;
      }
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
