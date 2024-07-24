import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "./cartSlice";

export interface UiState {
  modalType: {
    signInForm: boolean;
    cartFormDetail: boolean;
    cartConfirmOrder: boolean;
  };
  queryItems: CartItem[];
  filteredItems: CartItem[];
  nameFilter: string;
  categoryFilter: string;
}
const initialState: UiState = {
  modalType: {
    signInForm: false,
    cartFormDetail: false,
    cartConfirmOrder: false,
  },
  queryItems: [],
  filteredItems: [],
  nameFilter: "",
  categoryFilter: "",
};
const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<CartItem[]>) {
      state.queryItems = action.payload;
      state.filteredItems = action.payload;
    },
    searchItemName(state, action: PayloadAction<string>) {
      state.nameFilter = action.payload;
      state.filteredItems = state.queryItems
        .filter((item) =>
          item.name.toLowerCase().includes(state.nameFilter.toLowerCase())
        )
        .filter((item) =>
          item.category
            .toLowerCase()
            .includes(state.categoryFilter.toLowerCase())
        );
    },
    searchItemCategory(state, action: PayloadAction<string>) {
      state.categoryFilter = action.payload;
      state.filteredItems = state.queryItems
        .filter((item) =>
          item.category
            .toLowerCase()
            .includes(state.categoryFilter.toLowerCase())
        )
        .filter((item) =>
          item.name.toLowerCase().includes(state.nameFilter.toLowerCase())
        );
    },
    openCartFormDetail(state) {
      state.modalType.cartFormDetail = true;
      state.modalType.cartConfirmOrder = false;
      state.modalType.signInForm = false;
    },
    openCartConfirmOrder(state) {
      state.modalType.cartFormDetail = false;
      state.modalType.cartConfirmOrder = true;
      state.modalType.signInForm = false;
    },
    openSignInForm(state) {
      state.modalType.cartFormDetail = false;
      state.modalType.cartConfirmOrder = false;
      state.modalType.signInForm = true;
    },
    closeCartModal(state) {
      state.modalType.cartFormDetail = false;
      state.modalType.cartConfirmOrder = false;
      state.modalType.signInForm = false;
    },
  },
});

export const {
  openCartFormDetail,
  openCartConfirmOrder,
  openSignInForm,
  closeCartModal,
  setItems,
  searchItemName,
  searchItemCategory,
} = uiSlice.actions;
export default uiSlice.reducer;
