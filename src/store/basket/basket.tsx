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
    removeItemFromBasket: (state, action: PayloadAction<BasketItem>) => {
      state.basket = state.basket.filter(
        (item: BasketItem) => item.id !== action.payload.id
      );
    },
  },
});

const { actions, reducer } = BasketSlice;
export const { addItemToBasket, removeItemFromBasket } = actions;
export const BasketReducer = reducer;
