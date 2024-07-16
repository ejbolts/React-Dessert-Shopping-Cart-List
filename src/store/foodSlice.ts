import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FoodItem {
  id: number;
  name: string;
  price: number;
  image: {
    thumbnail: string;
    mobile: string;
    table: string;
    desktop: string;
  };
  category: string;
}

export interface FoodState {
  items: FoodItem[];
}

const initialState: FoodState = {
  items: [],
};

const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    setFoodItems(state, action: PayloadAction<FoodItem[]>) {
      state.items = action.payload;
    },
  },
});

export const { setFoodItems } = foodSlice.actions;
export default foodSlice.reducer;
