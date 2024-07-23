import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BasketItem } from "../../types";

export type Basket = {
  basket: BasketItem[];
};

const initialState: Basket = {
  basket: [],
};

const BasketSlice = createSlice({
  name: "Basket",
  initialState,
  reducers: {
    addItemToBasket: (state, action: PayloadAction<BasketItem>) => {
      const existingItem = state.basket.findIndex(
        (item: BasketItem) => item.id === action.payload.id
      );
      if (existingItem === -1) {
        // item doesn't exist in basket, so add new item
        state.basket.push(action.payload);
      } else {
        // item does exist in basket, so only increase quantity
        state.basket[existingItem].quantity += action.payload.quantity;
      }
    },
    removeSingleItemFromBasket: (state, action: PayloadAction<BasketItem>) => {
      const itemIndex = state.basket.findIndex(
        (item: BasketItem) => item.id === action.payload.id
      );
      if (state.basket[itemIndex].quantity > 1) {
        // item has more than 1 quantity so reduce quantity by 1
        state.basket[itemIndex].quantity -= 1;
      } else {
        // item has single quantity so remove from basket
        state.basket = state.basket.filter(
          (item: BasketItem) => item.id !== action.payload.id
        );
      }
    },
    removeAllItemFromBasket: (state, action: PayloadAction<BasketItem>) => {
      // remove all quantity of item from basket
      state.basket = state.basket.filter(
        (item: BasketItem) => item.id !== action.payload.id
      );
    },
    EmptyBasket: (state) => {
      // remove everything from the basket
      state.basket = [];
    },
  },
});

const { actions, reducer } = BasketSlice;
export const {
  addItemToBasket,
  removeSingleItemFromBasket,
  removeAllItemFromBasket,
  EmptyBasket,
} = actions;
export const BasketReducer = reducer;
