import { describe, it, expect, beforeEach } from "vitest";
import uiReducer, {
  openCartFormDetail,
  openCartConfirmOrder,
  openSignInForm,
  closeCartModal,
  setItems,
  searchItemName,
  searchItemCategory,
  UiState,
} from "./../store/uiSlice";
import { CartItem } from "../store/cartSlice";
let initialState: UiState;
describe("uiSlice", () => {
  beforeEach(() => {
    initialState = {
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
  });

  it("should return the initial state", () => {
    expect(uiReducer(undefined, { type: "" })).toEqual(initialState);
  });
});
describe("Modal Reducers", () => {
  it("should open the cart form detail modal", () => {
    const state = uiReducer(initialState, openCartFormDetail());

    expect(state.modalType.cartFormDetail).toBe(true);
    expect(state.modalType.cartConfirmOrder).toBe(false);
    expect(state.modalType.signInForm).toBe(false);
  });

  it("should open the cart confirm order modal", () => {
    const state = uiReducer(initialState, openCartConfirmOrder());

    expect(state.modalType.cartFormDetail).toBe(false);
    expect(state.modalType.cartConfirmOrder).toBe(true);
    expect(state.modalType.signInForm).toBe(false);
  });

  it("should open the sign-in form modal", () => {
    const state = uiReducer(initialState, openSignInForm());

    expect(state.modalType.cartFormDetail).toBe(false);
    expect(state.modalType.cartConfirmOrder).toBe(false);
    expect(state.modalType.signInForm).toBe(true);
  });

  it("should close all modals", () => {
    const modifiedState: UiState = {
      ...initialState,
      modalType: {
        signInForm: true,
        cartFormDetail: true,
        cartConfirmOrder: true,
      },
    };

    const state = uiReducer(modifiedState, closeCartModal());

    expect(state.modalType.cartFormDetail).toBe(false);
    expect(state.modalType.cartConfirmOrder).toBe(false);
    expect(state.modalType.signInForm).toBe(false);
  });
});
describe("setItems", () => {
  it("should set queryItems and filteredItems", () => {
    const items: CartItem[] = [
      {
        id: 1,
        name: "Apple",
        price: 1.5,
        quantity: 5,
        category: "Fruit",
        isActive: true,
        image: {
          thumbnail: "apple-thumb.jpg",
          mobile: "apple-mobile.jpg",
          table: "apple-table.jpg",
          desktop: "apple-desktop.jpg",
        },
      },
    ];

    const state = uiReducer(initialState, setItems(items));

    expect(state.queryItems).toEqual(items);
    expect(state.filteredItems).toEqual(items);
  });
});
describe("searchItemName", () => {
  it("should filter items by name", () => {
    const items: CartItem[] = [
      {
        id: 1,
        name: "Apple",
        price: 1.5,
        quantity: 5,
        category: "Fruit",
        isActive: true,
        image: {
          thumbnail: "apple-thumb.jpg",
          mobile: "apple-mobile.jpg",
          table: "apple-table.jpg",
          desktop: "apple-desktop.jpg",
        },
      },
      {
        id: 2,
        name: "Banana",
        price: 1.0,
        quantity: 3,
        category: "Fruit",
        isActive: true,
        image: {
          thumbnail: "banana-thumb.jpg",
          mobile: "banana-mobile.jpg",
          table: "banana-table.jpg",
          desktop: "banana-desktop.jpg",
        },
      },
    ];

    const stateWithItems = uiReducer(initialState, setItems(items));
    const state = uiReducer(stateWithItems, searchItemName("Banana"));

    expect(state.filteredItems).toEqual([items[1]]);
  });
});
describe("searchItemCategory", () => {
  it("should filter items by category", () => {
    const items: CartItem[] = [
      {
        id: 1,
        name: "Apple",
        price: 1.5,
        quantity: 5,
        category: "Fruit",
        isActive: true,
        image: {
          thumbnail: "apple-thumb.jpg",
          mobile: "apple-mobile.jpg",
          table: "apple-table.jpg",
          desktop: "apple-desktop.jpg",
        },
      },
      {
        id: 2,
        name: "Banana",
        price: 1.0,
        quantity: 3,
        category: "Fruit",
        isActive: true,
        image: {
          thumbnail: "banana-thumb.jpg",
          mobile: "banana-mobile.jpg",
          table: "banana-table.jpg",
          desktop: "banana-desktop.jpg",
        },
      },
      {
        id: 3,
        name: "Carrot",
        price: 2.0,
        quantity: 4,
        category: "Vegetable",
        isActive: true,
        image: {
          thumbnail: "carrot-thumb.jpg",
          mobile: "carrot-mobile.jpg",
          table: "carrot-table.jpg",
          desktop: "carrot-desktop.jpg",
        },
      },
    ];

    const stateWithItems = uiReducer(initialState, setItems(items));
    const state = uiReducer(stateWithItems, searchItemCategory("Vegetable"));

    expect(state.filteredItems).toEqual([items[2]]);
  });
});
