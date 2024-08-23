import { describe, it, expect, beforeEach } from "vitest";
import cartReducer, {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  CartState,
  CartItem,
} from "./../store/cartSlice";
let initialState: CartState;
describe("cartSlice", () => {
  beforeEach(() => {
    initialState = {
      items: [],
      totalCost: 0,
      totalItems: 0,
    };
  });

  it("should return the initial state", () => {
    expect(cartReducer(undefined, { type: "" })).toEqual(initialState);
  });
});

describe("addItemToCart", () => {
  it("should add an item to the cart", () => {
    const newItem: CartItem = {
      id: 1,
      name: "Apple",
      price: 1.5,
      quantity: 1,
      category: "Fruit",
      isActive: true,
      image: {
        thumbnail: "apple-thumb.jpg",
        mobile: "apple-mobile.jpg",
        table: "apple-table.jpg",
        desktop: "apple-desktop.jpg",
      },
    };

    const state = cartReducer(initialState, addItemToCart(newItem));

    expect(state.items).toHaveLength(1);
    expect(state.items[0]).toEqual(newItem);
    expect(state.totalCost).toBe(1.5);
    expect(state.totalItems).toBe(1);
  });

  it("should increase the quantity of an existing item in the cart", () => {
    const initialItem: CartItem = {
      id: 1,
      name: "Apple",
      price: 1.5,
      quantity: 1,
      category: "Fruit",
      isActive: true,
      image: {
        thumbnail: "apple-thumb.jpg",
        mobile: "apple-mobile.jpg",
        table: "apple-table.jpg",
        desktop: "apple-desktop.jpg",
      },
    };

    const initialStateWithItem: CartState = {
      items: [initialItem],
      totalCost: 1.5,
      totalItems: 1,
    };

    const state = cartReducer(
      initialStateWithItem,
      addItemToCart({ ...initialItem, quantity: 2 })
    );

    expect(state.items).toHaveLength(1);
    expect(state.items[0].quantity).toBe(3);
    expect(state.totalCost).toBe(3);
    expect(state.totalItems).toBe(2);
  });
});

describe("removeItemFromCart", () => {
  it("should decrease the quantity of an item in the cart", () => {
    const initialItem: CartItem = {
      id: 1,
      name: "Apple",
      price: 1.5,
      quantity: 3,
      category: "Fruit",
      isActive: true,
      image: {
        thumbnail: "apple-thumb.jpg",
        mobile: "apple-mobile.jpg",
        table: "apple-table.jpg",
        desktop: "apple-desktop.jpg",
      },
    };

    const initialStateWithItem: CartState = {
      items: [initialItem],
      totalCost: 4.5,
      totalItems: 3,
    };

    const state = cartReducer(initialStateWithItem, removeItemFromCart(1));

    expect(state.items).toHaveLength(1);
    expect(state.items[0].quantity).toBe(2);
    expect(state.totalCost).toBe(3);
    expect(state.totalItems).toBe(2);
  });

  it("should remove the item from the cart if quantity is 1", () => {
    const initialItem: CartItem = {
      id: 1,
      name: "Apple",
      price: 1.5,
      quantity: 1,
      category: "Fruit",
      isActive: true,
      image: {
        thumbnail: "apple-thumb.jpg",
        mobile: "apple-mobile.jpg",
        table: "apple-table.jpg",
        desktop: "apple-desktop.jpg",
      },
    };

    const initialStateWithItem: CartState = {
      items: [initialItem],
      totalCost: 1.5,
      totalItems: 1,
    };

    const state = cartReducer(initialStateWithItem, removeItemFromCart(1));

    expect(state.items).toHaveLength(0);
    expect(state.totalCost).toBe(0);
    expect(state.totalItems).toBe(0);
  });
});

describe("clearCart", () => {
  it("should clear all items in the cart", () => {
    const initialItem: CartItem = {
      id: 1,
      name: "Apple",
      price: 1.5,
      quantity: 3,
      category: "Fruit",
      isActive: true,
      image: {
        thumbnail: "apple-thumb.jpg",
        mobile: "apple-mobile.jpg",
        table: "apple-table.jpg",
        desktop: "apple-desktop.jpg",
      },
    };

    const initialStateWithItem: CartState = {
      items: [initialItem],
      totalCost: 4.5,
      totalItems: 3,
    };

    const state = cartReducer(initialStateWithItem, clearCart());

    expect(state.items).toHaveLength(0);
    expect(state.totalCost).toBe(0);
    expect(state.totalItems).toBe(0);
  });
});
